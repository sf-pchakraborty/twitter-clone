import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [image, setImage] = useState('')

  const sendTweet = (e) => {
    e.preventDefault()
    db.collection('posts').add({})
  }

  return (
    <div className="tweetBox">
      TweetBox
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvJgqWIm37tqZcv2yhHk59hxQ8DP4Or9UQgCc-asHlGejZ_SYNtnU1aE3OMASJkbJ-mc&usqp=CAU" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's Happening"
            type="text"
          />
        </div>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
