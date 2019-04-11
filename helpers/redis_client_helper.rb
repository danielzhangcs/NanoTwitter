require 'redis'
require 'json'

class RedisClient

  def initialize(redis_url)
    @redis_client = Redis.new(url: redis_url)
  end

  def cached?(key)
    @redis_client.exists(key)
  end

  def length(key)
    @redis_client.llen(key)
  end

  def get_list(key, lrange, rrange)
    @redis_client.lrange(key, lrange, rrange)
  end

  def get_json_list(key, lrange, rrange)
    cached = @redis_client.lrange(key, lrange, rrange)
    json_array = []
    cached.each do |c|
      json_array << JSON.parse(c)
    end
    json_array
  end

  def push_results(key, db_results)
    db_results.each do |r|
      @redis_client.rpush(key, r.to_json)
    end
  end

  def push_single(key, result)
    @redis_client.lpush(key, result.to_json)
  end

  def pop_single(key)
    @redis_client.rpop(key)
  end

  def clear
    @redis_client.flushall
  end
end