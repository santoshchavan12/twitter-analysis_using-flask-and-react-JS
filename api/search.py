import tweepy
import config
from flask import Flask,request
import main

app = Flask(__name__)
class Tweet(Flask):
    def __init__(params):
        pass
    @app.route("/data",methods=["POST","GET"])
    def data():
        print("post rqst")
        data = request.get_json()  
        query = data["data"]
        cnt = data["count"]
        client = tweepy.Client(bearer_token=config.bearer_token)
        query1 = f"-is:retweet {query} has:images  "
        response = client.search_recent_tweets(
            query = query1,
            max_results=10, 
            tweet_fields=['attachments','entities'],
            media_fields = ['preview_image_url','url','media_key'],
            expansions = ['author_id','attachments.media_keys',"geo.place_id"],
            user_fields=['url','entities','profile_image_url']
            )
        tweets = []
        urls =[]
        classified_tweets = {}
        classified_tweets["url"] = []
        for tweet in response.data:
            tweets.append(str(tweet))
        # print(response)
        for tweet in response.includes['media']:
            if tweet.url=="":
                urls.append("")
            else:
                classified_tweets["url"].append(tweet.url)
        cleaned_tweets = main.clean_tweets(tweets)
        tweets_dict  = main.classify_tweets(cleaned_tweets)
        classified_tweets.update(tweets_dict)
        print(classified_tweets)
        return {"tweets":classified_tweets}
    
if __name__ == '__main__':
    app.run(debug=True,port=5000)


# future idea
# filters like specific duration,location,specific user tweets etc
