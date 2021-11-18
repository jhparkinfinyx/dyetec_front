import { productStore } from './ProductStore';
import { basketStore } from './BasketStore';
import { fabricStore } from './FabricStore';
import { oldDataStore } from './OldDataStore';

const useStore = () => {
  return { productStore, basketStore, fabricStore, oldDataStore };
}

export default useStore;