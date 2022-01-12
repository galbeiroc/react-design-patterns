import { useResource } from "../hooks/useResource";

export const ProductInfo = ({ productId }) => {
  const product = useResource(`/products/${productId}`);
  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h5>Description:</h5>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : <p>Loading...</p>;
};
