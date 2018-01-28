import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.state.tweets = this.props.newTweets;
  }
  
  componentWillReceiveProps(nextProps) {
    let tweets = this.state.tweets
    nextProps.newTweets.map(tweet => tweets.unshift(tweet))
    this.setState({
      tweets: tweets
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.newTweets.length > 0)
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
