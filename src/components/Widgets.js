import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1517231709590237184'} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="pranay01"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://facebook.com/cleverprogrammer'}
          options={{ text: '#reactjs is awesome', via: 'cleverqazi' }}
        />
      </div>
    </div>
  )
}

export default Widgets
