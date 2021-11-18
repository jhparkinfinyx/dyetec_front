import {makeObservable, action, observable, computed, toJS} from 'mobx';

import FabricService from 'services/FabricService';

// export interface Product{
//   id: number;
//   name: string;
//   price: number;
//   choice: number;
// }

const fabricStore = observable({
  fabricList:[
  ],

  init() {
    FabricService.getAll().then(response => {
      this.fabricList = response;
    }).catch(e => {
      console.log(e);
    });
  },

  add(newFabric) {
    this.fabricList = [...this.fabricList, newFabric]
  },

  remove(id: number) {
    this.fabricList.splice(id, 1)
  },

  get getList() {
    return toJS(this.fabricList);
  },

  get getCount() {
    return toJS(this.fabricList.length)
  },

});

fabricStore.init();

export { fabricStore }