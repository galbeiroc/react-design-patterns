import { UserInfo } from './components/UserInfo';
import { printPropsHoc } from './HOC/printPropsHoc';
import { withUser } from './HOC/withUser';

import './App.css';

const UserInfoWrapper = printPropsHoc(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '102');

function App() {
  return (
    <div>
      <h3>Higher Order Components</h3>
      <UserInfoWithLoader />
    </div>
  );
}

export default App;
