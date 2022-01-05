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
