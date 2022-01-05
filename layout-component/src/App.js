import { SplitScreen } from './Split-Screen/SplitScreen';

const LeftComponent = ({ name }) => {
  return <h2 style={{ backgroundColor: 'red' }}>{name}!</h2>
};

const RightComponent = ({ message }) => {
  return <h3 style={{ backgroundColor: 'green' }}>{message}</h3>
}


function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftComponent name="Left Component" />
      <RightComponent message="This is a message from right component" />
    </SplitScreen>
  );
}

export default App;
