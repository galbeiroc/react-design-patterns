export const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user;

  return (
    <> 
      <h3>Name: {name}</h3>
      <p>Age: {age} years</p>
      <p>Hair color: {hairColor}</p>
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobbie) => <li key={hobbie}>{hobbie}</li>)}
      </ul>
    </>
  );
};
