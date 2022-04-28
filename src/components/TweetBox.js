import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

function TweetBox() {
  return (
    <div className="tweetBox">
      TweetBox
      <form>
        <div className="tweetBox--input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvJgqWIm37tqZcv2yhHk59hxQ8DP4Or9UQgCc-asHlGejZ_SYNtnU1aE3OMASJkbJ-mc&usqp=CAU" />
          <input placeholder="What's Happening" type="text" />
        </div>
        <input
          className="tweetBox--imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox--tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
