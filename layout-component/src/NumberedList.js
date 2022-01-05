export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {
        items.map((item, i) => (
          <span key={i}>
            <h3>{i + 1}</h3>
            <ItemComponent {...{ [resourceName]: item }} />
          </span>
        ))
      }
    </>
  );
};