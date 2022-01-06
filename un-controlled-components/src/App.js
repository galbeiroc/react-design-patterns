import { useState } from 'react';

import { ControlledForm } from './ControlledForm';
import { UncontrolledForm } from './UncontrolledForm';
import { UncontrolledModal } from './UncontrolledModal';
import { ControlledModal } from './ControlledModal';

import './App.css';


function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <h2>Controlled and Uncontrolled Components</h2>
      <ControlledModal showModal={showModal} onClose={() => setShowModal(false)}>
        <h1>Hello!!</h1>
      </ControlledModal>
      <button onClick={() => setShowModal(true)}>
        {showModal ? 'Hide Modal' : 'Show Modal'}
      </button>
    </div>
  );
}

export default App;
