import { ProductInfo } from './components/ProductInfo';
import { UserInfo } from './components/UserInfo';

function App() {
  return (
    <div>
      <h3>Custom Hooks</h3>
      <UserInfo userId='102' />
      <ProductInfo productId='202' />
    </div>
  );
}

export default App;
