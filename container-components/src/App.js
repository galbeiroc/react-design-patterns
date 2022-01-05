import { CurrentUserLoader } from './components/CurrentUserLoader';
import { UserLoader } from './components/UserLoader';
import { ResourceLoader } from './components/ResourceLoader';

import { UserInfo } from './components/UserInfo';
import { ProductInfo } from './components/ProductInfo';

function App() {
  return (
    <div>
        <h3>Container component</h3>
        <ResourceLoader resourceUrl="/users/102" resourceName="user">
          <UserInfo />
        </ResourceLoader>
        <ResourceLoader resourceUrl="/products/202" resourceName="product">
          <ProductInfo />
        </ResourceLoader>
    </div>
  );
}

export default App;
