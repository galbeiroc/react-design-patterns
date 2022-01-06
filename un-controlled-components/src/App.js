import React, { useState } from 'react';

import { ControlledForm } from './ControlledForm';
import { UncontrolledForm } from './UncontrolledForm';
import { UncontrolledModal } from './UncontrolledModal';
import { ControlledModal } from './ControlledModal';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

import './App.css';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 59 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: 'Brown' })}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({
      ...onboardingData,
      ...stepData,
    });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
    <ControlledOnboardingFlow
      currentIndex={currentIndex}
      onFinish={() => {
        console.log('Complete');
        alert('Onboarding complete!');
      }}
      onNext={onNext}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </ControlledOnboardingFlow>
    </>
  );
}

export default App;
