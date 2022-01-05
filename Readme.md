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
`React.cloneElement` Clona y retorna un elemento React usando element como punto de partida. `config` debe contener todas las nuevas `props`, `key`, o `ref`.
```js
React.cloneElement(
  element,
  [config],
  [...children]
)
```
