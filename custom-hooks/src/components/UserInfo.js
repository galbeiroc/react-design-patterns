import axios from 'axios';

import { useCurrentUser } from '../hooks/useCurrentUser';
import { useUser } from '../hooks/useUser';
import { useResource } from '../hooks/useResource';
import { useDataResource } from '../hooks/useDataSource';

const serverResource = url => async () => {
  const response = await axios.get(url);
  return response.data
}

const localStorageResource = key => () => {
  return localStorage.getItem(key);
}

export const UserInfo = ({ userId }) => {
  // const user = useResource(`/users/${userId}`);
  const user = useDataResource(serverResource(`/users/${userId}`));
  const  message = useCurrentUser(localStorageResource('message'));

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
      <>
        <h3>Name: {name}</h3>
        <p>Age: {age} years</p>
        <p>Hair color: {hairColor}</p>
        <h4>Hobbies:</h4>
        <ul>
          {hobbies.map((hobbie) => <li key={hobbie}>{hobbie}</li>)}
        </ul>
      </>
    ) : <p>Loading</p>;
};
