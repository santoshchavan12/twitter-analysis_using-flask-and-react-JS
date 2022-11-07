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
        query1 = f"-is:retweet {query}"
        response = client.search_recent_tweets(query=query1,max_results=cnt)
        tweets = []
        for tweet in response.data:
            tweets.append(str(tweet))
        cleaned_tweets = main.clean_tweets(tweets)
        classified_tweets  = main.classify_tweets(cleaned_tweets)
        return {"tweets":classified_tweets}
    
if __name__ == '__main__':
    app.run(debug=True,port=5000)


# future project
# filters like images, specific duration