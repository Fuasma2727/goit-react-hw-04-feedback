import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 39,
        color: '#010101',
      }}
    >
      <div className='App'>
        <div>
          Please leave Feedback
          <FeedbackOptions feedback={feedback} setFeedback={setFeedback} />
        </div>
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={feedback.good + feedback.neutral + feedback.bad}
          positivePercentage={
            feedback.good > 0
              ? ((feedback.good * 100) / (feedback.good + feedback.neutral + feedback.bad)).toFixed(0)
              : 0
          }
        />
      </div>
    </div>
  );
}

export default App;