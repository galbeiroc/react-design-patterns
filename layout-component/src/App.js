import { RegularList } from './RegularList';
import { SplitScreen } from './Split-Screen/SplitScreen';

import { people } from './data/data';

import { SmallPersonList } from './ListsAndListItems/people/SmallPersonList';
import { LargePersonList } from './ListsAndListItems/people/LargePersonList';

const LeftComponent = ({ name }) => {
  return <h2 style={{ backgroundColor: 'red' }}>{name}!</h2>
};

const RightComponent = ({ message }) => {
  return <h3 style={{ backgroundColor: 'green' }}>{message}</h3>
}


function App() {
  return (
    <>
      <RegularList items={people} resourceName="item" itemComponent={SmallPersonList}/>
      <RegularList items={people} resourceName="item" itemComponent={LargePersonList}/>
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