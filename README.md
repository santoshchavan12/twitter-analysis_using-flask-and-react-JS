# Introduction

This is realtime tweet analysis project.
Based on the hashtag or any key words entered program will be able to fetch the tweets from twitter.
[Tweepy](https://www.tweepy.org/) python library is used to fetch the data from twitter.
you need a [developer account](https://developer.twitter.com/en) to use this library.
React JS is used for the frontend and flask is used for backend.

click [here](https://developer.twitter.com/en/support/twitter-api/developer-account) to know how create one.
# Building and Running

Before running project make sure you have developer account and added all the required keys in the twitter-analysis/api/config.py file

This  project requires only the bearer token.
### Steps 
clone this project 
```
$ git clone https://github.com/santoshchavan12/twitter-analysis_using-flask-and-react-JS.git
```
navigate into repo
```
$ cd twitter-analysis
```
run the commmand
```
pip3 install -r requirements.txt
```
run command 
```
$ npm install node-modules
```

run command 
```
npm install concurrently --save
```

Start the servers by running below command
```
npm start
```

### Important Note
some browsers block the XMLHttpRequest between local servers.
So, before start they server make sure your browser doesn;t block XMLHttpRequest
To work with project you need to disable your browser [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 
To disable your chrome-browser cor run the below command
```
$ google-chrome --disable-site-isolation-trials --disable-web-security --user-data-dir="path to directory"
```
you will recieve a warning ignore it.



