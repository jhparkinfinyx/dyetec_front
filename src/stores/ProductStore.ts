import {makeObservable, action, observable, computed, toJS} from 'mobx';

import TutorialService from 'services/TutorialService';

export interface Product{
  id: number;
  name: string;
  price: number;
  choice: number;
}

const productStore = observable({
  productList:[
  ],

  initProduct() {
    TutorialService.getAll().then(response => {
      this.productList = response;
    }).catch(e => {
      console.log(e);
    });
  },

  addProduct(newProduct: Product) {
    this.productList = [...this.productList, newProduct]
  },

  removeProduct(id: number) {
    this.productList.splice(id, 1)
  },

  get getProducts() {
    return toJS(this.productList);
  },

  get getProductsNum() {
    return toJS(this.productList.length)
  },

});

productStore.initProduct();

export { productStore }