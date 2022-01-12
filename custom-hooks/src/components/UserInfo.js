import { useCurrentUser } from '../hooks/useCurrentUser';
export const UserInfo = () => {
  const user = useCurrentUser();
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
