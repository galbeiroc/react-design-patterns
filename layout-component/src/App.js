import { SplitScreen } from './Split-Screen/SplitScreen';

const LeftComponent = () => {
  return <h2 style={{ backgroundColor: 'red' }}>Left</h2>
};

const RightComponent = () => {
  return <h3 style={{ backgroundColor: 'green' }}>Right</h3>
}


function App() {
  return (
    <SplitScreen
      left={LeftComponent}
      right={RightComponent}
    />
  );
}

export default App;
