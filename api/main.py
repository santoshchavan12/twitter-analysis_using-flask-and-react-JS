import string
import nltk
from nltk.corpus import stopwords
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import re

# nltk.download('stopwords')
# nltk.download('vader_lexicon')

stemmer = nltk.SnowballStemmer("english")
stopword = set(stopwords.words('english'))
sentiments = SentimentIntensityAnalyzer()



def clean(text):
    text = str(text).lower()
    text = re.sub('\[.*?\]', '', text)
    text = re.sub('https?://\S+|www\.\S+', '', text)
    text = re.sub('<.*?>+', '', text)
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\n', '', text)
    text = re.sub('\w*\d\w*', '', text)
    text = [word for word in text.split(' ') if word not in stopword]
    text = " ".join(text)
    text = [stemmer.stem(word) for word in text.split(' ')]
    text = " ".join(text)
    return text

def clean_tweets(tweets):
    cleaned_tweets = []
    for tweet in tweets:
        cleaned_tweet = clean(tweet)
        cleaned_tweets.append(cleaned_tweet)
    return cleaned_tweets 
def classify_tweets(cleaned_tweets):
    classified_tweets = {}
    classified_tweets["Tweets"] = [i for i in cleaned_tweets]
    classified_tweets["Positive"] = [sentiments.polarity_scores(i)["pos"] for i in cleaned_tweets]
    classified_tweets["Negative"] = [sentiments.polarity_scores(i)["neg"] for i in cleaned_tweets]
    classified_tweets["Neutral"] = [sentiments.polarity_scores(i)["neu"] for i in cleaned_tweets]
    return classified_tweets
