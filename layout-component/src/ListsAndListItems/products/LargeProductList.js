export const LargeProductList = ({ product }) => {
  const { name, price, description, rating } = product;

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h5>Description:</h5>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  )
};
