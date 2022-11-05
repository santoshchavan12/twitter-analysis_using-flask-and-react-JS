import tweepy
import config
from flask import Flask,request

app = Flask(__name__)

@app.route("/data",methods=["POST","GET"])
def data():
    print("post rqst")
    data = request.get_json()
    qry = data["data"]
    cnt = data["count"]
    print(qry)
    client = tweepy.Client(bearer_token=config.bearer_token)
    query1 = f"-is:retweet {qry}"
    response = client.search_recent_tweets(query=query1,max_results=cnt)
    tweets_list = []
    for tweet in response.data:
        tweets_list.append(tweet)
    tweets=[]
    for i in tweets_list:
        tweets.append(str(i))   
    return {"tweets":tweets}

if __name__ == '__main__':
    app.run(debug=True)


# future project
# filters like images, specific duration
