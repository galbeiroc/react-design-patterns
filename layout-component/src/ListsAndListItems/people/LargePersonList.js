export const LargePersonList = ({ item }) => {
  const { name, age, hairColor, hobbies } = item;

  return (
    <> 
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Hair color: {hairColor}</p>
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobbie) => <li key={hobbie}>{hobbie}</li>)}
      </ul>
    </>
  )
};
