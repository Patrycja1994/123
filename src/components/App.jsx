import React, { Component } from 'react';
import { FeedBackOptions } from './FeedBackOptions/FeedBackOptions';
import { Notification } from './Notification/Notifications';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
  };
  }

handleLeaveFeedback = event => {
  const {currentValue} = event.target.value;
  this.setState(prevState => ({
    [currentValue]: prevState[currentValue] + 1,
  }))
}

countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
 return Math.round((this.state.good / this.countTotalFeedback()) *100 );
}

render() {
  const total = this.countTotalFeedback();
  const positiveFeedback = this.countPositiveFeedbackPercentage();
  const {good, neutral, bad} = this.state;

  return (
    <>
     <Section title = "Please leave feedback">
      <FeedBackOptions 
      options={this.state} onLeaveFeedback={this.handleLeaveFeedback}
      />
      { total === 0 ? (
        <Notification message="There is no feedback"></Notification>) : (
          <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={positiveFeedback}
          />
        )}
     </Section>
    </>
  );
}
}