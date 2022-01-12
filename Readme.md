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
`React.Children.map` Invoke a function on each immediate child within `children` with `this` set to `thisArg`. If `children` is an array, it will be traversed and the function will be called for each child in the array. If children is `null` or `undefined`, this method will return `null` or `undefined` instead of an array.
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

`React.Children.toArray` Returns the opaque data structure of `children` as a flat array with keys assigned to each child. Useful if you want to manipulate collections of children in rendering methods, particularly if you want to reorder or segment `this.props.children` before passing it.
```js
React.Children.toArray(children)
```

### Higher Order Components
A component that returns another component instead of JSX
Higher-Order-Components are just functions

##### HOCs are used for
Sharing complex behavior between multiple components (much like container components).
Adding extra funcionality to existing components.

```js
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async() => {
        const response = await axios.get(resourePath);
        setOriginalData(response.data);
        setData(response.data);
      })()
    }, []);

    const onChange = changes => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resourePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    }

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />
  }
}
```

### Custom Hooks
Special hooks that we define ourselves, and that usually combine the functionality of one omre existing React hooks like `useState` or `useEffect`


##### Custom hooks are used  for
Sharing complex behavior between multiples components (much like with HOCs and Container components).


```js
// useDataSource.js
import { useEffect, useState } from "react";

export const useDataResource = getResourceFunc => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async() => {
      const result = await getResourceFunc();
      setResource(result);
    })();
  }, [getResourceFunc])

  return resource;
};
// UserInfo.js
const serverResource = url => async () => {
  const response = await axios.get(url);
  return response.data
}

export const UserInfo = ({ userId }) => {
  // const user = useResource(`/users/${userId}`);
  const user = useDataResource(serverResource(`/users/${userId}`));
  ...
}
```

### Functional Programming
Functional programming is very broad topic.
* A method of organizing code in a way that:

1. Minimizes mutation and state change.
2. Keeps functions independent of external data (call pure functions).
3. Treats functions as first-class citizens.

##### Applications of FP in React
* Controlled control
* Function components
* Higher-order components
* Recursive components
* Composition components
* Partially applied components

`Recursive components`
Basic idea of what recursion is, let’s apply it to some React code.

```js
const isObject = x => typeof x === 'object' && x !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return (
      <li>{data}</li>
    )
  }

  const pairs = Object.entries(data);

  return (
    <>
      {
        pairs.map(([key, value]) => (
          <li>
            {key}:
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        ))
      }
    </>
  )
}
```

`Composition components`
The way React components are designed makes it very easy to compose them. A React component can control how another component is rendered by providing props to it, and even control whether it is rendered at all.

```js
export const Button = ({ size, color, text, ...props }) => {
  return (
    <button 
      style={{
        padding: size === 'large' ? '32px' : '8px',
        fontSize: size === 'large' ? '32px' : '16px',
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  )
};

export const DangerButton = props => {
  return (
    <Button {...props} color='red' />
  )
}

export const BigSuccessButton = props => {
  return (
    <Button {...props} size='large' color='green' />
  )
}
```

`Partially applied components`
refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.

```js
export const PartiallyApply = (Component, partialProps) => {
  return props => (
    <Component {...partialProps} {...props} />
  )
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button 
      style={{
        padding: size === 'large' ? '32px' : '8px',
        fontSize: size === 'large' ? '32px' : '16px',
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  )
};


export const DangerButtonp = PartiallyApply(Button, { color: 'red' });
export const BigSuccessButtonp = PartiallyApply(Button, { color: 'green', size: 'large' });
```
