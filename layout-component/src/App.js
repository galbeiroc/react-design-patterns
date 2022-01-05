import { RegularList } from './RegularList';
import { SplitScreen } from './Split-Screen/SplitScreen';

import { people, products } from './data/data';

import { SmallPersonList } from './ListsAndListItems/people/SmallPersonList';
import { LargePersonList } from './ListsAndListItems/people/LargePersonList';
import { SmallProductList } from './ListsAndListItems/products/SmallProductList';
import { LargeProductList } from './ListsAndListItems/products/LargeProductList';
import { NumberedList } from './NumberedList';

const LeftComponent = ({ name }) => {
  return <h2 style={{ backgroundColor: 'red' }}>{name}!</h2>
};

const RightComponent = ({ message }) => {
  return <h3 style={{ backgroundColor: 'green' }}>{message}</h3>
}


function App() {
  return (
    <>
      <h2>People</h2>
      <RegularList items={people} resourceName="person" itemComponent={SmallPersonList} />
      <RegularList items={people} resourceName="person" itemComponent={LargePersonList} />
      <NumberedList items={people} resourceName="person" itemComponent={LargePersonList} />
      <h2>Products</h2>
      <RegularList items={products} resourceName="product" itemComponent={SmallProductList} />
      <RegularList items={products} resourceName="product" itemComponent={LargeProductList} />
    </>
  );
}

export default App;


/**
 * return (
 *   <SplitScreen leftWeight={1} rightWeight={3}>
 *      <LeftComponent name="Left Component" />
 *      <RightComponent message="This is a message from right component" />
 *  </SplitScreen>
 * )
 */