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


