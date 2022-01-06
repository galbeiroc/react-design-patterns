import { ControlledForm } from './ControlledForm';
import { UncontrolledForm } from './UncontrolledForm';
import { UncontrolledModal } from './UncontrolledModal';
import { ControlledModal } from './ControlledModal';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

import './App.css';

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
  return (
    <>
    <UncontrolledOnboardingFlow onFinish={data => {
        console.log(data);
        alert('Onboarding complete!')
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
    </>
  );
}

export default App;
