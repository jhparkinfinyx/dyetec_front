import {makeObservable, action, observable, computed, toJS} from 'mobx';

import OldDataService from 'services/OldDataService';

// export interface Product{
//   id: number;
//   name: string;
//   price: number;
//   choice: number;
// }

const oldDataStore = observable({
  baseData:[],
  currentData: [],
  geoData: [],
  lineData: [],
  tableData: [],
  markerFlag: false,

  filterList: ["구・군별","노후정도별", "고령인구 연령별"],

  init() {
    

    OldDataService.getHeatmap().then(response => {
      this.baseData = response;
      this.currentData = response;
      // console.log('this.baseData:', JSON.stringify(this.baseData));
    }).catch(e => {
      console.log(e);
    });

    // OldDataService.getHeatmap().then(response => {
    //   this.currentData = response;
    //   // console.log('this.currentData:', JSON.stringify(this.baseData));
    // }).catch(e => {
    //   console.log(e);
    // });


    OldDataService.getGeoData("구군별").then(response => {
      this.geoData = response;
      console.log('this.geoData:', JSON.stringify(this.geoData));
    }).catch(e => {
      console.log(e);
    });

    this.filterList = OldDataService.getFilterList();
    // this.currentData = OldDataService.getHeatmap();
  },

  add(newData) {
    this.dataList = [...this.dataList, newData]
  },

  remove(id: number) {
    this.dataList.splice(id, 1)
  },

  setFilterList(idx, i) {
    this.filterList[idx].selected = i;
    let data = this.baseData;

    // alert(JSON.stringify(this.filterList[0].selected + ", " + this.filterList[1].selected));

    /* 
      baseData 필터 적용된 데이터로 다시 가져오기
    */
    this.filterList.map((v, j) => {
      if (j === this.filterList.length-1) {
        return;
      }
      if(v.selected > 0) {
        const filter = v.list[v.selected];
        data = OldDataService.getFilteredData(data, filter, v.eng);
      }
    });

    this.currentData = data;
  },

  setMarkerFlag(f) {
    this.markerFlag = f;
    // alert(this.markerFlag);
  },

  get getCurrentData() {
    return toJS(this.currentData);
  },

  get getBaseDtaa() {
    return toJS(this.baseData);
  },

  get getBaseDataCount() {
    return toJS(this.baseData.length)
  },

  get getFilterList() {
    return this.filterList;
  },
  
  get getGeoData() {
    return this.geoData;
  },

  get getMarkerFlag() {
    return this.markerFlag;
  }
});

oldDataStore.init();

export { oldDataStore }