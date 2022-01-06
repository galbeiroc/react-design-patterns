import React from 'react';

export const UncontrolledForm = () => {
  const nameIput = React.createRef();
  const ageInput = React.createRef();
  const hairInput = React.createRef();

  const handleSubmit = e => {
    console.log(nameIput.current.value);
    console.log(ageInput.current.value);
    console.log(hairInput.current.value);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name='name'
        placeholder='Name'
        ref={nameIput}
      /><br />
      <input
        type="number"
        name='age'
        placeholder='Age'
        ref={ageInput}
      /><br />
      <input
        type="text"
        name='hairColor'
        placeholder='Hair Color'
        ref={hairInput}
      /><br />
      <input type="submit" value='Submit' />
    </form>
  )
}
