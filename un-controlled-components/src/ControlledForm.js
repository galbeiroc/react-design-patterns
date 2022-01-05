import { useState, useEffect } from 'react';

export const ControlledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    if (name.length < 2) {
      setInputError('Name must have 2 or 3 characters')
    } else {
      setInputError('');
    }
  }, [name])

  return (
    <>
      {inputError && <p>{inputError}</p>}
      <form>
        <input
          type="text"
          name='name'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        /><br />
        <input
          type="number"
          name='age'
          placeholder='Age'
          value={age}
          onChange={e => setAge(Number(e.target.value))}
        /><br />
        <input
          type="text"
          name='hairColor'
          placeholder='Hair Color'
          value={hairColor}
          onChange={e => setHairColor(e.target.value)}
        /><br />
        <button>Submit</button>
      </form>
    </>
  )
}