get '/api/timeline/?' do
  user = current_user
  limit = params['limit'] || 50

  if params['service']=='yes'
    res = tweet_client.call(
      method: 'get_timeline',
      args: {
        user_id: user.id,
        limit: limit
      }
    )
    return json_response res['status'], res['data'], res['errors']
  elsif $timeline_redis&.cached?(user.id)
    begin
      @timeline = $timeline_redis.get_json_list(user.id, 0, -1)
    rescue StandardError => e
      json_response 400, e.message
    end
  else
    @timeline = Tweet.where(user_id: user.followings.map{|u| u.id})
                     .order(created_at: :desc)
                     .includes(:retweet_from, :likes, :retweets)
                     .limit(limit)
                     .as_json(
                       include: :retweet_from,
                       methods: [:like_num, :retweet_num]
                     )
    # change from SQL to get_timeline methods in timeline_helper.rb
    # has been prepared for separating services
    # @timeline = get_timeline(user.id, limit)
    $timeline_redis&.push_results(user.id, @timeline)
    $timeline_redis&.expire(user.id, 1)
  end
  if @timeline
    json_response 200, @timeline
  else
    json_response 404, nil, 'not found'
  end
end

# OLD SQL for timeline when services are not separated
    # @timeline = Tweet.find_by_sql(["
    #   SELECT DISTINCT tweets.*
    #   FROM tweets, follows
    #   WHERE
    #     follows.from_user_id = ? AND
    #     (tweets.user_id = follows.to_user_id OR
    #     tweets.user_id = ?)
    #   ORDER BY tweets.updated_at DESC
    #   LIMIT ?
    # ", user.id, user.id, limit])
