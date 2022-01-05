import { CurrentUser } from './components/CurrentUser';
import { UserInfo } from './components/UserInfo';

function App() {
  return (
    <div>
        <h3>Container component</h3>
        <CurrentUser>
          <UserInfo />
        </CurrentUser>
    </div>
  );
}

export default App;
