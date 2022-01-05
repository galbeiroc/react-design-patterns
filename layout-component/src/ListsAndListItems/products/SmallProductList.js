export const SmallProductList = ({ product }) => {
  const { name, price } = product;

  return (
    <h3>{name} - {price}</h3>
  )
};
