import { UserInfo } from './components/UserInfo';
import { printPropsHoc } from './components/printPropsHoc';

import './App.css';

const UserInfoWrapper = printPropsHoc(UserInfo);

function App() {
  return (
    <div className="App">
      <h3>Higher Order Components</h3>
      <UserInfoWrapper a="hello" b={2} c='black' />
    </div>
  );
}

export default App;
