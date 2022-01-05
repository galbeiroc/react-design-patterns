import { CurrentUserLoader } from './components/CurrentUserLoader';
import { UserInfo } from './components/UserInfo';
import { UserLoader } from './components/UserLoader';

function App() {
  return (
    <div>
        <h3>Container component</h3>
        <UserLoader userId="102">
          <UserInfo />
        </UserLoader>
        <UserLoader userId="103">
          <UserInfo />
        </UserLoader>
    </div>
  );
}

export default App;
