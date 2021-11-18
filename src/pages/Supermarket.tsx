import React from 'react';
import Product from '../components/Product';
import ShopItemList from '../components/ShopItemList';
import BasketItemList from '../components/BasketItemList';
import TotalPrice from '../components/TotalPrice';

const Supermarket = () => {
  
  return <Product 
    items={<ShopItemList />} 
    basket={<BasketItemList />}
    total={<TotalPrice />} 
    />;
};

export default Supermarket;