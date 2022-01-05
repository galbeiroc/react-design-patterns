import axios from 'axios';
import { CurrentUserLoader } from './components/CurrentUserLoader';
import { UserLoader } from './components/UserLoader';
import { ResourceLoader } from './components/ResourceLoader';
import { DataSource } from './components/DataSource';

import { UserInfo } from './components/UserInfo';
import { ProductInfo } from './components/ProductInfo';

const getDataServer = (url) => async() => {
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorage = key => () => {
  return localStorage.getItem(key)
}

const Text = ({ message }) => <h3>{message}</h3>;

function App() {
  return (
    <div>
        <h3>Container component</h3>
        <DataSource getDataFunc={getDataServer('/users/102')} resourceName="user">
          <UserInfo />
        </DataSource>
        <DataSource getDataFunc={getLocalStorage('message')} resourceName="message">
          <Text />
        </DataSource>
    </div>
  );
}

export default App;
