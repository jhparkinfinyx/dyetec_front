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

  drapeProperty:[
    
  ],

  uploadedImg: [],
  selectedImg: undefined,

  images: [],

  drapeValues: [
    0, 0.47, 3.51, 
    15.0, 29.0, 17.5, 31.0, 
    1.501, 5.0, 8.0, 12.0, 15.499, 
    0.01, 0.032, 0.058, 0.089, 0.122, 
    1.0, 3.0, 4.667, 6.167, 7.999, 
    0.011, 0.032, 0.062, 0.097, 0.138, 
    3.5, 13.333, 24.0, 34.001, 44.0, 
    0.01, 0.031, 0.059, 0.094, 0.135
  ],

  init() {
    FabricService.getImages().then(response => {
      this.images = response['data'];
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

  setFabricList(data) {
    this.fabricList = data; // 2중 배열 형태 : [[],[],[]]
  },

  setUploadedImg(data) {
    this.uploadedImg = data;
  },

  setImages() {
    FabricService.getImages().then(response => {
      this.images = response['data'];
    }).catch(e => {
      console.log(e);
    });
  },

  addImage(data) {
    // console.log(this.images[0][2]); // first item
    // console.log('data:'+JSON.stringify(data))
    this.images.unshift(data);
    // console.log(this.images.slice(-1)[0][2]); // last item
    // console.log(this.images.length);
  },

  setDrapeValue(v, i) {
    this.drapeValues[i] = v;
  },

  setSelectedImg(data) {
    this.selectedImg = data;
  },

  get getList() {
    return toJS(this.fabricList);
  },

  get getCount() {
    return toJS(this.fabricList.length)
  },

  get getUploadedImg() {
    return toJS(this.uploadedImg);
  },

  get getUploadedImgCount() {
    return toJS(this.uploadedImg.length);
  },

  get getImages() {
    return toJS(this.images);
  },

  get getImagesCount() {
    return toJS(this.images.length);
  },

  get getDrapeValues() {
    return this.drapeValues;
  },

  get getSelectedImg() {
    return this.selectedImg;
  }

});

fabricStore.init();

export { fabricStore }