### React Design Patterns
Desing Pattern are effective solution to common applications development challenges.

#### A Caveat
The patterns I cover here are effective solutions to some extremely common challenges in react.

#### Common Challenges
* Creating reausable layouts
* Reusing complex logic between multiples components
* Working with forms
* Incorporating functional concpts into our code

#### Layout Component
React components that ideal primarily with arranging other components on the page.
* Split screens
```js
export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  )
}
```
* Lists and Items
```js
export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {
        items.map((item) => <ItemComponent key={item.name} {...{ [resourceName]: item }} />)
      }
    </>
  );
};
```
* Modals
```js
export const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <ModalContainer onClick={() => setShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button  onClick={() => setShow(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalContainer>
      )}
    </>
  );
};
```

##### The Ideal of Layout Components
Our components shoudn't know where they are being displayed on the page.

#### Container Component
Components that take care of loading and managing data for their child components.

##### The Ideal of Container Components
Our components shoudn't know where their data is comming from.

###### Load data
```js
export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async() => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })()
  }, [userId])

  return (
    <>
      {
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { user });
          }
          return child;
        })
      }
    </>
  )
};
```

###### Rsource Load data
```js
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const ResourceLoader = ({
  resourceUrl,
  resourceName,
  children,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async() => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    })()
  }, [resourceUrl])

  return (
    <>
      {
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName]: state });
          }
          return child;
        })
      }
    </>
  )
};
```
`React.Children` Provides utilities to deal with the opaque data structure of this.props.children [Docs](https://es.reactjs.org/docs/react-api.html).
```js
React.Children.map(children, function[(thisArg)])
```
`React.isValidElement` Verifies that the object is a React element. Returns true or false.
```js
React.isValidElement(object)
```
`React.cloneElement` Clones and returns a React element using element as a starting point. `config` must contain all new `props`, `key`, or `ref`.
```js
React.cloneElement(
  element,
  [config],
  [...children]
)
```


#### Controlled vs Uncontrolled Component

* `Uncontrolled Components` Components that keep track of their own states and release data only when some events occurrs (that is, the submit event for HTML forms).

```js
export const UncontrolledForm = () => {
  const nameIput = React.createRef();
  const ageInput = React.createRef();
  const hairInput = React.createRef();

  const handleSubmit = e => {
    console.log(nameIput.current.value, ageInput.current.value, hairInput.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='Name' ref={nameIput} />
      <input type="number" name='age' placeholder='Age' ref={ageInput} />
      <input type="text" name='hairColor' placeholder='Hair Color' ref={hairInput} />
      <input type="submit" value='Submit' />
    </form>
  )
}
```

* `Controlled Components` Component that do not keep track of their own state -- all state is passed in as props (that is, when we use useState Hook with text inputs).

```js
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
        <input type="text" name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
        <input type="number" name='age' placeholder='Age' value={age} onChange={e => setAge(Number(e.target.value))} />
        <input type="text" name='hairColor' placeholder='Hair Color' value={hairColor} onChange={e => setHairColor(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  )
}
```

##### How Do We Choose?
We Generally prefer controlled components, and there are several reason for this, the main reason is that it just makes our components more reusable and it also makes a lot easier to test.