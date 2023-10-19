import React from 'react';

function FeedbackOptions({ feedback, setFeedback }) {
  const handleIncrement = (option) => {
    // Copia el objeto feedback en uno nuevo para no mutar el estado directamente
    const updatedFeedback = { ...feedback };
    updatedFeedback[option] = updatedFeedback[option] + 1;
    setFeedback(updatedFeedback);
  };

  const optionLabels = ['good', 'neutral', 'bad'];

  return (
    <div className='buttons' style={{ display: 'flex', columnGap: 20 }}>
      {optionLabels.map((option) => (
        <button key={option} onClick={() => handleIncrement(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;