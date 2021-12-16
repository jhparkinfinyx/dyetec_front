(this.webpackJsonpImageSearcher=this.webpackJsonpImageSearcher||[]).push([[0],{72:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a,s,i,c,r=n(1),l=n.n(r),d=n(21),o=n.n(d),p=n(30),h=n(10),x=n(57),j=n(98),b=n(99),m=n(0),g=function(e){var t=e.Routes;return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(j.a,{xs:12,sm:12,md:12,style:{padding:"0.5rem"},children:Object(m.jsx)(b.a,{children:Object(m.jsx)(t,{})})})})},u=n(8),f=n(9),O=n(14),_=n(16),v=f.a.div(a||(a=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 35px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid #e7e7e7;\n  box-sizing: border-box;\n  width: 100%\n  @media (min-width: 700px) {\n    width: 100%;\n    height: 100%;\n  }\n"]))),w=f.a.div(s||(s=Object(u.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  color: #8d9091;\n"]))),y=(f.a.div(i||(i=Object(u.a)(["\n  a { font-size: 14px; font-weight: 400; color: #8d9091; }\n  a.active { color: #1c2a4e; }\n  a:after { content: '\u318d'; font-size: 14px; font-weight: 400; color: #8d9091; }\n  a:last-child:after { display: none; }\n  a span { font-size: 10px; }\n  a { text-decoration: none; }\n"]))),Object(_.a)((function(e){var t=e.count;return Object(m.jsx)(v,{children:Object(m.jsxs)(w,{className:"board-count",children:["\uc804\uccb4 : ",Object(m.jsx)("span",{id:"totalCnt",children:t})]})})}))),N=n(53),C=n.n(N),z=(n(72),f.a.div(c||(c=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap; \n  justify-content: center; \n  align-items: center; \n  margin-top: 50px;\n\n  a {\n    display: flex; \n    align-items: center; \n    min-width: 32px; \n    min-height: 32px; \n    margin: 2px; \n    padding: 8px; \n    border-radius: 8px; \n    box-sizing: border-box; \n    font-size: 14px; \n    font-weight: 400; \n    color: #999ca0; \n    text-align: center;\n    text-decoration: none;\n  }\n\n  a.active { \n    background: #1c2a4e; \n    font-size: 12px; \n    font-weight: 900; \n    color: #fff; \n  }\n\n  span { \n    font-size: 14px; \n    font-weight: 400; \n    color: #999ca0; \n  }\n\n  .btn-next { \n    margin: 0 10px; \n    padding: 8px 12px; \n    box-sizing: border-box; \n    font-size: 12px; \n    font-weight: 900; \n    color: #1c2a4e; \n  }\n\n  .btn-paging { \n    margin: 0; \n    padding: 0; \n    background: url('../img/ico_arrow_paging1.png') center center no-repeat; \n  }\n\n  .btn-paging:last-child { \n    transform: rotate(180deg); \n  }\n\n  @media (min-width: 700px) {\n    width: 100%;\n    height: 100%;\n  }\n"]))),Object(_.a)((function(e){var t=e.page,n=e.count,a=e.setPage;return Object(m.jsx)(C.a,{activePage:t,itemsCountPerPage:30,totalItemsCount:n,pageRangeDisplayed:5,prevPageText:"\u2039",nextPageText:"\u203a",onChange:a})}))),S=n(12),I=n(3),k=n(35),L=n.n(k),D="http://172.30.50.106:9999";L.a.defaults.withCredentials=!0;var B=L.a.create({baseURL:D,headers:{"Content-type":"application/json; charset=UTF-8"},withCredentials:!0}),R=function(e){return B.post("/api/similarity",e,{withCredentials:!0})},F=function(e){return B.post("/api/drape",e,{withCredentials:!0})},H=function(){return B.get("/api/images")},V=function(e){return B.post("/api/image",e,{withCredentials:!0})},K=Object(I.m)({fabricList:[],drapeProperty:[],uploadedImg:[],selectedImg:void 0,images:[],drapeValues:[0,.47,3.51,15,29,17.5,31,1.501,5,8,12,15.499,.01,.032,.058,.089,.122,1,3,4.667,6.167,7.999,.011,.032,.062,.097,.138,3.5,13.333,24,34.001,44,.01,.031,.059,.094,.135],init:function(){var e=this;H().then((function(t){e.images=t.data})).catch((function(e){console.log(e)}))},add:function(e){this.fabricList=[].concat(Object(S.a)(this.fabricList),[e])},remove:function(e){this.fabricList.splice(e,1)},setFabricList:function(e){this.fabricList=e},setUploadedImg:function(e){this.uploadedImg=e},setImages:function(){var e=this;H().then((function(t){e.images=t.data})).catch((function(e){console.log(e)}))},addImage:function(e){this.images.unshift(e)},setDrapeValue:function(e,t){this.drapeValues[t]=e},setSelectedImg:function(e){this.selectedImg=e},get getList(){return Object(I.o)(this.fabricList)},get getCount(){return Object(I.o)(this.fabricList.length)},get getUploadedImg(){return Object(I.o)(this.uploadedImg)},get getUploadedImgCount(){return Object(I.o)(this.uploadedImg.length)},get getImages(){return Object(I.o)(this.images)},get getImagesCount(){return Object(I.o)(this.images.length)},get getDrapeValues(){return this.drapeValues},get getSelectedImg(){return this.selectedImg}});K.init();var P,A,U,J,T,$,E,W,X,q=function(){return{fabricStore:K}},G=Object(_.a)((function(e){var t=e.item,n=e.page,a=q().fabricStore,s=D+"/"+t[3].replace(/[!@#$%^&\uff0a*()+=\-[\]\\';,./{}|":<>?~_]/g,"\\$&").replaceAll(" ","%20");return Object(m.jsxs)("li",{onClick:function(){},children:[Object(m.jsx)("div",{className:"fabric_list_thumb",style:{backgroundImage:"url(".concat(s,")")}}),"upload"===n?Object(m.jsx)("button",{style:{float:"right",textDecoration:"none",border:"none",width:"20px",height:"20px",fontSize:"15px"},id:t[1],onClick:function(e){!function(e){var t=new FormData;t.append("id",e.target.id),V(t).then((function(e){alert(e.data.message),1===e.data.isSuccess&&a.setImages()})).catch((function(e){console.log(e),alert("\ud30c\uc77c \uc0ad\uc81c \uc2e4\ud328\uff01")}))}(e)},children:"X"}):Object(m.jsx)("div",{}),Object(m.jsx)("div",{className:"tit",children:t[2]}),Object(m.jsxs)("div",{className:"percent",style:{paddingLeft:"10px"},children:["\uc720\uc0ac\ub3c4 : ",t[4].toFixed(2),"%"]})]},t[1])})),M=f.a.div(P||(P=Object(u.a)(["\ndisplay: flex; \n  flex-wrap: wrap;\n  padding-top: 40px;\n  justify-content: center;\n  text-align: -webkit-center;\n  // outline: thick double #1c2a4e;\n  \n  img {\n    width: 177.5px;\n    height: 350px;\n  }\n\n  // @media (min-width: 300px) {\n  //   border-right: 0px dashed #333;\n  //   border-bottom: 1px dashed #333;\n  // }\n\n  // @media (min-width: 500px) {\n  //   border-right: 0px dashed #333;\n  //   border-bottom: 1px dashed #333;\n  // }\n  \n  // @media (min-width: 600px) {\n  //   border-right: 0px dashed #333;\n  //   border-bottom: 1px dashed #333;\n  // }\n\n  // @media (min-width: 1000px) {\n  //   border-right: 1px dashed #333;\n  //   border-bottom: 0px dashed #333;\n  // }\n\n  // @media (min-width: 1200px) {\n  //   border-right: 1px dashed #333;\n  //   border-bottom: 0px dashed #333;\n  // }\n\n"]))),Q=f.a.ol(A||(A=Object(u.a)(["\n  display: flex; \n  flex-wrap: wrap;\n  padding-top: 40px;\n  justify-content: center;\n\n  // max-width: 1000px;\n  // margin-left: auto;\n  // margin-right: auto;\n  // outline: thick double #1c2a4e;\n  \n\n  min-height: 456px;\n  li { \n    width: 15.75%; \n    margin-right: 1.1%; \n    margin-bottom: 40px; \n    cursor: pointer; \n    list-style-type: none;\n  }\n  li:nth-child(6n) { \n    margin-right: 0; \n  }\n  .thumb { \n    height: 356px; \n    margin-bottom: 10px; \n  }\n  .tit { \n    margin-bottom: 6px; \n    padding: 0 10px; \n    box-sizing: border-box; \n    font-size: 14px; \n    font-weight: 700; \n    color: #000; }\n\n  .txt { \n    padding: 0 10px; \n    box-sizing: border-box; \n    font-size: 12px; \n    font-weight: 400; \n    color: #000; \n  }\n\n  .fabric_list_thumb{\n    width: 100%;\n    height: 350px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n\n  @media (min-width: 300px) {\n    // border-left: 0px dashed #333;\n    // border-top: 1px dashed #333;\n    li { \n      width: 90.75%; \n      margin-right: 1.1%; \n      margin-bottom: 40px; \n      cursor: pointer; \n    }\n  }\n\n  @media (min-width: 500px) {\n    // border-left: 0px dashed #333;\n    // border-top: 1px dashed #333;\n    li { \n      width: 40.75%; \n      margin-right: 1.1%; \n      margin-bottom: 40px; \n      cursor: pointer; \n    }\n  }\n\n  \n  // @media (min-width: 900px) {\n  //   // border-left: 0px dashed #333;\n  //   border-top: 0px dashed #333;\n  //   li { \n  //     width: 30.75%;\n  //     margin-right: 1.1%; \n  //     margin-bottom: 40px; \n  //     cursor: pointer; \n  //   }\n  // }\n\n\n\n  @media (min-width: 992px) {\n    // border-left: 1px dashed #333;\n    // border-top: 0px dashed #333;\n    width: 1000px; \n    height: 456px;\n    margin-left: auto;\n    margin-right: auto;\n    li { \n      width: 17.75%; \n      margin-right: 1.1%; \n      margin-bottom: 40px; \n      cursor: pointer; \n    }\n  }\n\n  @media (min-width: 1200px) {\n    // border-left: 1px dashed #333;\n    // border-top: 0px dashed #333;\n    li { \n      width: 17.75%; \n      margin-right: 1.1%; \n      margin-bottom: 40px; \n      cursor: pointer; \n    }\n  }\n\n"]))),Y=Object(_.a)((function(e){var t=e.page,n=e.list,a=q().fabricStore,s=n.map((function(e){return Object(m.jsx)(G,{page:t,item:e},e.id)}));return Object(m.jsxs)(j.a,{xs:12,sm:12,md:12,lg:12,xl:12,children:[void 0!=a.getSelectedImg?Object(m.jsxs)(b.a,{xs:12,sm:12,md:12,lg:3,xl:3,style:{marginLeft:"auto",marginRight:"auto",borderRight:"1px dashed #333",marginBottom:"40px"},children:[Object(m.jsx)("h1",{style:{paddingLeft:"5px",fontSize:"20px"},children:"\uac80\uc0c9 \uc774\ubbf8\uc9c0"}),Object(m.jsx)(M,{id:"list",style:{},children:Object(m.jsx)("div",{onClick:function(){},children:Object(m.jsxs)("div",{className:"fabric_list_thumb",style:{},children:[Object(m.jsx)("img",{src:"".concat(a.getSelectedImg),style:{}}),Object(m.jsx)("div",{className:"tit"}),Object(m.jsx)("div",{className:"percent",style:{paddingLeft:"10px"}})]})},0)})]}):Object(m.jsxs)(b.a,{xs:12,sm:12,md:12,lg:3,xl:3,style:{marginLeft:"auto",marginRight:"auto",alignSelf:"center",marginBottom:"40px",borderRight:"1px dashed #333"},children:[Object(m.jsx)("h1",{style:{paddingLeft:"5px",fontSize:"20px"},children:"\uac80\uc0c9 \uc774\ubbf8\uc9c0"}),Object(m.jsx)(M,{id:"list",style:{alignItems:"center",height:"456px"},children:"\uc120\ud0dd\ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),Object(m.jsxs)(b.a,{className:"second-col",xs:12,sm:12,md:12,lg:9,xl:9,style:{marginBottom:"40px"},children:[Object(m.jsx)("h1",{style:{paddingLeft:"5px",fontSize:"20px"},children:"\uc720\uc0ac \uc774\ubbf8\uc9c0"}),s.length>0?Object(m.jsx)(Q,{id:"list",children:s}):Object(m.jsx)(Q,{id:"list",style:{alignItems:"center"},children:"\uac80\uc0c9\ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]})]})})),Z=f.a.div(U||(U=Object(u.a)(["\n  display: flex;\n\tflex-direction: column;\n\twidth: 100%;\n  margin-top: 20px;\n  @media (min-width: 700px) {\n    width: 100%;\n    height: 100%;\n  }\n"]))),ee=Object(_.a)((function(e){var t=e.page,n=q().fabricStore,a=Object(r.useState)(1),s=Object(O.a)(a,2),i=s[0],c=s[1];return Object(m.jsxs)(Z,{children:["upload"===t?Object(m.jsx)(y,{count:n.getImagesCount}):Object(m.jsx)(y,{count:n.getCount}),"upload"===t?Object(m.jsx)(Y,{page:t,list:n.getImages.slice(30*(i-1),30*(i-1)+30)}):Object(m.jsx)(Y,{page:t,list:n.getList}),"upload"===t?Object(m.jsx)(z,{page:i,count:n.getImagesCount,setPage:function(e){c(e)}}):Object(m.jsx)("div",{})]})})),te=(n(90),n(100)),ne=(n(49),f.a.button(J||(J=Object(u.a)(["\n\tdisplay: block; \n\tmin-width: 170px; \n\theight: 36px; \n\tmargin: 0px auto 0; \n\tpadding: 0 44px; \n\tborder: none; \n\tborder-radius: 4px; \n\tbox-sizing: border-box; \n\tbackground: url('../img/ico_arrow_right4.png') calc(100% - 14px) center no-repeat #1c2a4e; \n\tfont-size: 16px; \n\tfont-weight: 400; \n\tcolor: #fff; \n"])))),ae=Object(_.a)((function(e){var t=e.click,n=e.disabled,a=e.name,s=function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)(ne,{disabled:!0,children:[Object(m.jsx)(te.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(m.jsx)("span",{})]})," "]})},i=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(ne,{onClick:t,children:Object(m.jsx)("span",{children:a})})," "]})};return Object(m.jsx)("div",{children:n?Object(m.jsx)(s,{}):Object(m.jsx)(i,{})})})),se=f.a.div(T||(T=Object(u.a)(["\n  display: flex;\n  margin-top: 20px;\n\t\n  @media (min-width: 700px) {\n    width: 100%;\n    height: 100%;\n  }\n"]))),ie=(f.a.input($||($=Object(u.a)(["\n"]))),function(){var e=q().fabricStore,t=Object(r.useState)(null),n=Object(O.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(!1),c=Object(O.a)(i,2),l=c[0],d=c[1];return Object(m.jsx)(se,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",style:{textAlignLast:"center",padding:"20px"},children:[Object(m.jsx)("h1",{style:{fontSize:"25px",padding:"10px"},children:"\ub514\uc790\uc778 \uc720\uc0ac\ub3c4 \uac80\uc0ac"}),Object(m.jsx)("p",{style:{fontSize:"15px"},children:"\uc790\uc2e0\uc774 \ubcf4\uc720\ud55c \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud574 Fabric Dive\uc5d0\uc11c \ubcf4\uc720\ud55c \uc774\ubbf8\uc9c0\uc640 \uc720\uc0ac\uc131\uc744 \ud310\ub2e8\ud558\ub294 \uc11c\ube44\uc2a4 \uc785\ub2c8\ub2e4."}),Object(m.jsx)("p",{style:{fontSize:"15px"},children:"\uc774 \uc11c\ube44\uc2a4\ub97c \ud1b5\ud574, \uc774\ubbf8\uc9c0 \uc720\uc0ac\uc131\uc744 \ud310\ub2e8\ud574 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-12",children:Object(m.jsxs)("div",{className:"form-group files color",children:[Object(m.jsx)("label",{children:"\uc774\ubbf8\uc9c0 \ud30c\uc77c \uc120\ud0dd"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm-8",children:Object(m.jsx)("input",{type:"file",className:"form-control",name:"file",accept:"image/*",onChange:function(t){s(t.target.files[0]),function(t){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){e.setSelectedImg(n.result)},n.onerror=function(e){console.log("Error: ",e)}}(t.target.files[0])}.bind(undefined)})}),Object(m.jsx)("div",{className:"col-sm-4",children:Object(m.jsx)(ae,{click:function(){var t=new FormData;if(null===a)return alert("\uc0ac\uc9c4 \ud30c\uc77c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");t.append("file",a,a.name),d(!0),R(t).then((function(t){console.log(t),e.setFabricList(t.data[0])})).catch((function(e){console.log(e)})).finally((function(){d(!1)}))},disabled:l,name:"\uac80\uc0c9"})})]})]})})})]})})}),ce=f.a.div(E||(E=Object(u.a)(["\n  margin-top: 20px;\n"]))),re=function(){return Object(m.jsxs)(ce,{children:[Object(m.jsx)(ie,{}),Object(m.jsx)(ee,{page:"similarity"})]})},le=n(58),de=n(101),oe=(n(92),f.a.form(W||(W=Object(u.a)(["\n\ttop: -88px; left: 0; right: 0; max-width: 100%; height: 100%; padding: 20px; border-radius: 5%; box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15); box-sizing: border-box; background: #fff; \n\t.filter { width: 100%;}\n\t.filter li { display: flex; flex-direction: column; justify-content: center; padding: 15px 15px 15px;}\n\t.filter li:first-child { box-sizing: border-box; }\n\t.filter .sort { margin-bottom: 4px; font-size: 12px; font-weight: 400; color: #918665; }\n\n\t.filter-in li { display: flex; flex-direction: column; justify-content: center; padding: 15px 10px 15px; border-bottom: 1px solid #dde1e2;}\n\t.filter-in li:first-child { box-sizing: border-box; }\n\t.filter-in .sort { margin-bottom: 4px; font-size: 12px; font-weight: 400; color: #918665; }\n\n\t.filter select { border: none; background-size: 24px; font-size: 16px; font-weight: 400; color: #000; }\n\t.inp-search {padding: 0 10px 0 0; border: none; background: none; font-size: 16px; font-weight: 400; color: #000;  } \n\t\n\t.filter { display: flex;}\n\t.filter-in { display: flex;}\n\n\n\t.col-item {\n\t\ttext-align: center;\n\t\tmin-height: 587px;\n\t\tdisplay: inline-grid;\n\t}\n\n\t@media (min-width: 300px) {\n\t\t.f-row {\n\t\t\theight: 1250px;\n\t\t}\n\t\t.dashed-col {\n\t\t\ttext-align: center;\n\t\t\tmin-height: 587px;\n\t\t\tborder-left: 0px dashed rgb(51, 51, 51);\n\t\t\tborder-top: 1px dashed rgb(51, 51, 51);\n\t\t\tmargin: 5px;\n\t\t}\n\t}\n\n\t@media (min-width: 500px) {\n\t\t.f-row {\n\t\t\theight: 1250px;\n\t\t}\n\t\t.dashed-col {\n\t\t\ttext-align: center;\n\t\t\tmin-height: 587px;\n\t\t\tborder-left: 0px dashed rgb(51, 51, 51);\n\t\t\tborder-top: 1px dashed rgb(51, 51, 51);\n\t\t\tmargin: 5px;\n\t\t}\n\t}\n\t\n\t@media (min-width: 600px) {\n\t\t.f-row {\n\t\t\theight: 1250px;\n\t\t}\n\n\t\t.dashed-col {\n\t\t\ttext-align: center;\n\t\t\tmin-height: 587px;\n\t\t\tborder-left: 0px dashed rgb(51, 51, 51);\n\t\t\tborder-top: 1px dashed rgb(51, 51, 51);\n\t\t\tmargin: 5px;\n\t\t}\n\t}\n\n\t@media (min-width: 916px) {\n\t\t.f-row {\n\t\t\theight: 597px;\n\t\t}\n\t\t.dashed-col {\n\t\t\ttext-align: center;\n\t\t\tmin-height: 587px;\n\t\t\tborder-left: 1px dashed rgb(51, 51, 51);\n\t\t\tborder-top: 0px dashed rgb(51, 51, 51);\n\t\t\tmargin: 5px;\n\t\t}\n\t}\n\n\t@media (min-width: 1000px) {\n\t\t.f-row {\n\t\t\theight: 597px;\n\t\t}\n\t\t.dashed-col {\n\t\t\ttext-align: center;\n\t\t\tmin-height: 587px;\n\t\t\tborder-left: 1px dashed rgb(51, 51, 51);\n\t\t\tborder-top: 0px dashed rgb(51, 51, 51);\n\t\t\tmargin: 5px;\n\t\t}\n\t}\n\n\t@media (min-width: 1200px) {\n\t\t.f-row {\n\t\t\theight: 597px;\n\t\t}\n\t\t.dashed-col {\n\t\t\ttext-align: center;\n\t\t\tmin-height: 587px;\n\t\t\tborder-left: 1px dashed rgb(51, 51, 51);\n\t\t\tborder-top: 0px dashed rgb(51, 51, 51);\n\t\t\tmargin: 5px;\n\t\t}\n\t}\n"])))),pe=Object(_.a)((function(e){Object(p.a)(e);var t=q().fabricStore,n=Object(le.a)(),a=(n.register,n.handleSubmit,Object(r.useState)([])),s=Object(O.a)(a,2),i=s[0],c=s[1],l=Object(r.useState)(!1),d=Object(O.a)(l,2),o=d[0],h=d[1],x=t.getDrapeValues,g=function(e,n){e.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"),t.setDrapeValue(parseFloat(e),n)};return Object(m.jsxs)("section",{className:"item",children:[Object(m.jsxs)(j.a,{style:{textAlignLast:"center",padding:"20px"},children:[Object(m.jsx)("h1",{style:{fontSize:"25px",padding:"10px"},children:"\ub4dc\ub808\uc774\ud504 \uc774\ubbf8\uc9c0 \uc0dd\uc131"}),Object(m.jsx)("p",{style:{fontSize:"15px"},children:"\ub4dc\ub808\uc774\ud504\ub294 \uc790\uccb4 \uc911\ub825\uc73c\ub85c \uc778\ud574 \uc9c1\ubb3c\uc774 \ub298\uc5b4\uc838 \ub0b4\ub9ac\ub294 \ud2b9\uc131\uc744 \ub9d0\ud558\uba70, \uc9c1\ubb3c\uc758 \uc2dc\uac01\uc801 \uc544\ub984\ub2e4\uc6c0\uc744 \uacb0\uc815\ud558\ub294 \uc694\uc18c\uc785\ub2c8\ub2e4."}),Object(m.jsx)("p",{style:{fontSize:"15px"},children:"\uc637\ub4e4\uc774 \uae38\uac8c \ub298\uc5b4\uc9c0\ub294 \uacbd\uc6b0, \ub4dc\ub808\uc774\ud504\uc131\uc774 \uc88b\ub2e4\ub77c\uace0 \ub9d0\ud558\uba70, \ubc18\ub300\ub85c \uc637\ub4e4\uc774 \ub298\uc5b4\uc9c0\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \ub4dc\ub808\uc774\ud504\uc131\uc774 \uc88b\uc9c0 \uc54a\ub2e4\ub77c\uace0 \ud310\ub2e8\ud569\ub2c8\ub2e4."}),Object(m.jsx)("p",{style:{fontSize:"15px"},children:"\ubcf4\uc720\ud55c \ub514\uc9c0\ud138 \ubb3c\uc131\uac12\uc758 \uc18c\uc7ac\uc5d0 \ub300\ud55c \ub4dc\ub808\uc774\ud504 \ubc11\uba74, \uc815\uba74 \uc774\ubbf8\uc9c0\ub97c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),Object(m.jsxs)(j.a,{xs:12,sm:12,md:12,style:{padding:"0.5rem",maxWidth:"1500px",marginLeft:"auto",marginRight:"auto"},children:[Object(m.jsx)(b.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:4,style:{margin:"20px"},children:Object(m.jsxs)("form",{action:"",name:"frm",className:"search-tool search-tool-v1",method:"get",style:{width:"100%",height:"637px"},children:[Object(m.jsxs)("ol",{className:"filter",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("div",{className:"sort",children:"\uc6d0\ub2e8 \uc885\ub958"}),Object(m.jsxs)("select",{name:"cate1",id:"cate1",onChange:function(e){g(e.target.value,0)},children:[Object(m.jsx)("option",{value:"0",children:"woven"}),Object(m.jsx)("option",{value:"1",children:"knit"})]})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("div",{className:"sort",children:"\ub450\uaed8"}),Object(m.jsx)("input",{type:"number",id:"clo_thickness",name:"clo_thickness",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",onChange:function(e){g(e.target.value,1)},value:x[1],pattern:"[0-9]*",step:"0.01",style:{width:"100%"}})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("div",{className:"sort",children:"\uc911\ub7c9"}),Object(m.jsx)("input",{type:"number",id:"clo_weight",name:"clo_weight",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[2],pattern:"[0-9]*",step:"0.01",style:{width:"100%"},onChange:function(e){g(e.target.value,2)}})]}),Object(m.jsx)("div",{children:o?Object(m.jsx)(te.a,{className:"btn-search",animation:"border",size:"sm"}):Object(m.jsx)("button",{type:"submit",className:"btn-search",onClick:function(){console.log(JSON.stringify(t.getDrapeValues)),h(!0),F(t.getDrapeValues).then((function(e){h(!1),c(e.data),console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e.message),alert("\uc785\ub825\uac12\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694."),h(!1)}))}})})]}),Object(m.jsxs)(de.a,{defaultActiveKey:"0",children:[Object(m.jsxs)(de.a.Item,{eventKey:"0",children:[Object(m.jsx)(de.a.Header,{className:"title",children:Object(m.jsx)("span",{children:"\uc704 \u2022 \uacbd\uc0ac \uad7d\ud798"})}),Object(m.jsx)(de.a.Body,{children:Object(m.jsxs)("div",{className:"search_content",children:[Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:6,children:[Object(m.jsx)("div",{className:"sort",children:"(\uc704\uc0ac \uad7d\ud798)\uc2dc\ud3b8\uae38\uc774"}),Object(m.jsx)("input",{type:"number",id:"clo_bend_weft_cond",name:"clo_bend_weft_cond",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[3],pattern:"[0-9]*",step:"0.01",style:{width:"120px"},onChange:function(e){g(e.target.value,3)}})]}),Object(m.jsxs)(b.a,{xs:6,children:[Object(m.jsx)("div",{className:"sort",children:"(\uc704\uc0ac \uad7d\ud798)\uac70\ub9ac"}),Object(m.jsx)("input",{type:"number",id:"clo_bend_weft_movd",name:"clo_bend_weft_movd",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[4],pattern:"[0-9]*",step:"0.01",style:{width:"120px"},onChange:function(e){g(e.target.value,4)}})]})]}),Object(m.jsx)("hr",{style:{margin:"2px"}}),Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:6,children:[Object(m.jsx)("div",{className:"sort",children:"(\uacbd\uc0ac \uad7d\ud798)\uc2dc\ud3b8\uae38\uc774"}),Object(m.jsx)("input",{type:"number",id:"clo_bend_warp_cond",name:"clo_bend_warp_cond",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[5],pattern:"[0-9]*",step:"0.01",style:{width:"120px"},onChange:function(e){g(e.target.value,5)}})]}),Object(m.jsxs)(b.a,{xs:6,children:[Object(m.jsx)("div",{className:"sort",children:"(\uacbd\uc0ac \uad7d\ud798)\uac70\ub9ac"}),Object(m.jsx)("input",{type:"number",id:"clo_bend_warp_movd",name:"clo_bend_warp_movd",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[6],pattern:"[0-9]*",step:"0.01",style:{width:"120px"},onChange:function(e){g(e.target.value,6)}})]})]})]})})]}),Object(m.jsxs)(de.a.Item,{eventKey:"1",children:[Object(m.jsx)(de.a.Header,{className:"title",children:Object(m.jsx)("span",{children:"(\uc704\uc0ac \uc778\uc7a5) \ub298\uc5b4\ub09c \uae38\uc774"})}),Object(m.jsx)(de.a.Body,{children:Object(m.jsxs)("div",{className:"search_content",children:[Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 1"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_len_1",name:"clo_str_weft_len_1",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[7],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,7)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 2"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_len_2",name:"clo_str_weft_len_2",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[8],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,8)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 3"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_len_3",name:"clo_str_weft_len_3",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[9],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,9)}})]})]}),Object(m.jsx)("hr",{style:{margin:"2px"}}),Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 4"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_len_4",name:"clo_str_weft_len_4",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[10],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,10)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 5"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_len_5",name:"clo_str_weft_len_5",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[11],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,11)}})]})]})]})})]}),Object(m.jsxs)(de.a.Item,{eventKey:"2",children:[Object(m.jsx)(de.a.Header,{className:"title",children:Object(m.jsx)("span",{children:"(\uc704\uc0ac \uad7d\ud798) \ud798"})}),Object(m.jsx)(de.a.Body,{children:Object(m.jsxs)("div",{className:"search_content",children:[Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 1"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_for_1",name:"clo_str_weft_for_1",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[12],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,12)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 2"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_for_2",name:"clo_str_weft_for_2",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[13],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,13)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 3"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_for_3",name:"clo_str_weft_for_3",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[14],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,14)}})]})]}),Object(m.jsx)("hr",{style:{margin:"2px"}}),Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 4"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_for_4",name:"clo_str_weft_for_4",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[15],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,15)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 5"}),Object(m.jsx)("input",{type:"number",id:"clo_str_weft_for_5",name:"clo_str_weft_for_5",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[16],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,16)}})]})]})]})})]}),Object(m.jsxs)(de.a.Item,{eventKey:"3",children:[Object(m.jsx)(de.a.Header,{className:"title",children:Object(m.jsx)("span",{children:"(\uacbd\uc0ac \uc778\uc7a5) \ub298\uc5b4\ub09c \uae38\uc774"})}),Object(m.jsx)(de.a.Body,{children:Object(m.jsxs)("div",{className:"search_content",children:[Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 1"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_len_1",name:"clo_str_warp_len_1",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[17],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,17)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 2"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_len_2",name:"clo_str_warp_len_2",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[18],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,18)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 3"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_len_3",name:"clo_str_warp_len_3",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[19],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,19)}})]})]}),Object(m.jsx)("hr",{style:{margin:"2px"}}),Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 4"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_len_4",name:"clo_str_warp_len_4",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[20],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,20)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 5"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_len_5",name:"clo_str_warp_len_5",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[21],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,21)}})]})]})]})})]}),Object(m.jsxs)(de.a.Item,{eventKey:"4",children:[Object(m.jsx)(de.a.Header,{className:"title",children:Object(m.jsx)("span",{children:"(\uacbd\uc0ac \uc778\uc7a5) \ud798"})}),Object(m.jsx)(de.a.Body,{children:Object(m.jsxs)("div",{className:"search_content",children:[Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 1"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_for_1",name:"clo_str_warp_for_1",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[22],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,22)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 2"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_for_2",name:"clo_str_warp_for_2",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[23],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,23)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 3"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_for_3",name:"clo_str_warp_for_3",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[24],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,24)}})]})]}),Object(m.jsx)("hr",{style:{margin:"2px"}}),Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 4"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_for_4",name:"clo_str_warp_for_4",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[25],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,25)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 5"}),Object(m.jsx)("input",{type:"number",id:"clo_str_warp_for_5",name:"clo_str_warp_for_5",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[26],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,26)}})]})]})]})})]}),Object(m.jsxs)(de.a.Item,{eventKey:"5",children:[Object(m.jsx)(de.a.Header,{className:"title",children:Object(m.jsx)("span",{children:"(\ubc14\uc774\uc5b4\uc2a4 \uc778\uc7a5) \ub298\uc5b4\ub09c \uae38\uc774"})}),Object(m.jsx)(de.a.Body,{children:Object(m.jsxs)("div",{className:"search_content",children:[Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 1"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_len_1",name:"clo_str_bias_len_1",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[27],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,27)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 2"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_len_2",name:"clo_str_bias_len_2",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[28],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,28)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 3"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_len_3",name:"clo_str_bias_len_3",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[29],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,29)}})]})]}),Object(m.jsx)("hr",{style:{margin:"2px"}}),Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 4"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_len_4",name:"clo_str_bias_len_4",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[30],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,30)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ub298\uc5b4\ub09c \uae38\uc774 5"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_len_5",name:"clo_str_bias_len_5",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[31],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,31)}})]})]})]})})]}),Object(m.jsxs)(de.a.Item,{eventKey:"6",children:[Object(m.jsx)(de.a.Header,{className:"title",children:Object(m.jsx)("span",{children:"(\ubc14\uc774\uc5b4\uc2a4 \uc778\uc7a5) \ud798"})}),Object(m.jsx)(de.a.Body,{children:Object(m.jsxs)("div",{className:"search_content",children:[Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 1"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_for_1",name:"clo_str_bias_for_1",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[32],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,32)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 2"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_for_2",name:"clo_str_bias_for_2",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[33],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,33)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 3"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_for_3",name:"clo_str_bias_for_3",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[34],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,34)}})]})]}),Object(m.jsx)("hr",{style:{margin:"2px"}}),Object(m.jsxs)(j.a,{className:"filter-in",children:[Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 4"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_for_4",name:"clo_str_bias_for_4",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[35],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,35)}})]}),Object(m.jsxs)(b.a,{xs:4,children:[Object(m.jsx)("div",{className:"sort",children:"\ud798 5"}),Object(m.jsx)("input",{type:"number",id:"clo_str_bias_for_5",name:"clo_str_bias_for_5",placeholder:"\uc22b\uc790 \uc785\ub825...",className:"inp-search",value:x[36],pattern:"[0-9]*",step:"0.01",style:{width:"100px"},onChange:function(e){g(e.target.value,36)}})]})]})]})})]})]})]})}),Object(m.jsx)(b.a,{style:{alignSelf:"center",margin:"20px"},children:Object(m.jsx)(oe,{action:"",name:"frm",method:"get",style:{width:"100%",minHeight:"637px",maxHeight:"2000px"},children:Object(m.jsxs)(j.a,{className:"f-row",children:[Object(m.jsx)(b.a,{style:{textAlign:"center",minHeight:"587px",margin:"5px"},children:i.length>0?Object(m.jsxs)("div",{className:"col-item",children:[Object(m.jsx)("h5",{style:{padding:"10px",fontSize:"15px"},children:"\ub4dc\ub808\uc774\ud504 \ubc11\uba74 \uc774\ubbf8\uc9c0"}),Object(m.jsx)("img",{src:"data:image/jpeg;base64,".concat(i[0]),style:{padding:"20px"}})]}):Object(m.jsxs)("div",{className:"col-item",children:[Object(m.jsx)("h5",{style:{padding:"10px",fontSize:"15px"},children:"\ub4dc\ub808\uc774\ud504 \ubc11\uba74 \uc774\ubbf8\uc9c0"}),Object(m.jsx)("div",{style:{width:"360px",height:"360px"}})]})}),Object(m.jsx)(b.a,{className:"dashed-col",children:i.length>0?Object(m.jsxs)("div",{className:"col-item",children:[Object(m.jsx)("h5",{style:{padding:"10px",fontSize:"15px"},children:"\ub4dc\ub808\uc774\ud504 \uc815\uba74 \uc774\ubbf8\uc9c0"}),Object(m.jsx)("img",{src:"data:image/jpeg;base64,".concat(i[1]),style:{padding:"20px"}})]}):Object(m.jsxs)("div",{className:"col-item",children:[Object(m.jsx)("h5",{style:{padding:"10px",fontSize:"15px"},children:"\ub4dc\ub808\uc774\ud504 \uc815\uba74 \uc774\ubbf8\uc9c0"}),Object(m.jsx)("div",{style:{width:"360px",height:"360px"}})]})})]})})})]})]})})),he=f.a.div(X||(X=Object(u.a)(["\n  margin-top: 20px;\n"]))),xe=function(){return Object(m.jsx)(he,{children:Object(m.jsx)(pe,{})})},je=function(){return Object(m.jsx)(x.a,{children:Object(m.jsx)(g,{Routes:function(e){return Object(p.a)(e),Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{exact:!0,path:"/",component:re}),Object(m.jsx)(h.a,{exact:!0,path:"/similarity",component:re}),Object(m.jsx)(h.a,{exact:!0,path:"/drape",component:xe})]})}})})};var be=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(je,{})})};o.a.render(Object(m.jsx)(be,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.99d9e367.chunk.js.map