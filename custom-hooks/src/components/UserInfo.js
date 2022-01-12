import { useCurrentUser } from '../hooks/useCurrentUser';
import { useUser } from '../hooks/useUser';
import { useResource } from '../hooks/useResource';

export const UserInfo = ({ userId }) => {
  const user = useResource(`/users/${userId}`);
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
