(function(t){function e(e){for(var a,r,c=e[0],A=e[1],n=e[2],u=0,m=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in A)Object.prototype.hasOwnProperty.call(A,a)&&(t[a]=A[a]);o&&o(e);while(m.length)m.shift()();return l.push.apply(l,n||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],a=!0,c=1;c<s.length;c++){var A=s[c];0!==i[A]&&(a=!1)}a&&(l.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},l=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],A=c.push.bind(c);c.push=e,c=c.slice();for(var n=0;n<c.length;n++)e(c[n]);var o=A;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"08dc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAB5klEQVQ4y52Uz4uNYRTHPw9TGo3Gj9swNd0sRhaKUv4CUTRDU2RzuRsllrKRWAwJKwtkpzSKHWayGE1WaopkSITQWEhmJgwNxtyPxZyr1zvvpZzV83zf7/meH+85T6LA1GZgF7AV6ASWAhPAS+AWcC2lNMW/TN2tvnXWxtXD6j71qHpd/aKOqpW/iST1vDqjnlNPh+DOHG+xekr9GfxUJNarfld74j5fHVbH1LYcd546GMF680JrI6NqDl+nTqtXMtgi9Wq04Hj4bcg69atDDco/o9bUjeoe9ZX6VF0T3++oA3VyKerfVtDD1eqBiF5TP6sn1IUZ3vbwL6F2R+2X1T71pjqiTgY+qT6I846CzFsiWFcT0AF8A9qBaWAMeAI8Bx4DD8PvBXAoZrA5sPfAG2AcKDcF+CmltKlBzzYDB4EysDKCjgILgLbAE2C9zBm1JSdSih+jek/dr/5Qj+V45ehnF2prkHoyhFXqa/VdDh9QR3Ji3eHfWgduqLfjvDzWaVhdkXOsRqYdGWxI7S8a2r3qXfXR70h/irVHSdW4V+YMbWadauqU2kkDU5+pF9Ut6tc565QZ0gsR6axaaiB2Sf1YtOipgFwBTgLLgEHgPvABWAKsZ/aNmwCOpJT6sr6pQfT/ehx/ATuITszPyQxOAAAAAElFTkSuQmCC"},"14a0":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABiElEQVQ4y53Uz4vNURjH8c+ZdGNs5FdDURaYxs3GQoqFEiuTnQVZTllZoaz4AzQrOxYjapK9DaUmNatJNEwSGymTX6GUbl4Wc6a+XXfm3uap0/me5/mc9/fznFMnaQTW4xKe4AO+do1rDe0oHqRXYAQvcBMt7MRjS7GAcZSG/ig0Gesa31NJNiW5WkrpJPmI8STzSfYn2VVKgXaSkSTtCj1R9y8s/2VPdfCoh+MrtTZT1/f1jovLGw7XxPMesOO1Nt+V/6/NoTq/SdJJchBjXbxWnZ9m0MCt6mAO2xv5u3iNzT0ubGIlWAuT+I3vmMZshW8d2FUXdBhj+Fydjq8J1AX9WWGz2LIWwEacwgRmGtf+DgcGhRRcrq3dxmkcwlm8qsBv2DsIbBIdnOxR24B7FTjVD9TGXzxcRdPCJ8ytxhpKciRJSfJjJVEp5U+SxSS/+jk7Vlv4gh0raPbVYzg/yJndqOK3OIPhmt+Gc3iP6/04zfdpNMmF2vbuLD1Pi0meJblTSnnZD/YP0ojGot0MPgMAAAAASUVORK5CYII="},"324b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABFklEQVQ4y53Sv2qTYRiG8fsNJoNQStChU6FQkSIdpMWhx+ABCF1Tz0IoSCehU2c3cddJcPMMxLE04FIbS5eWDKXk52AiHyHfl35e4/vnet77eZ+kBVjDLh7VHdhdIljBR0z85Q4n2MERtoPHuMV+g+iDxUymwr3gaWXxPfoL4kzUc45nQQ+/KxsjHGJrKtrRzPNZxR4GNVUv8X2JaHUmeoIhrrTnZtaCTpLTJNdJ+mnPt3+iUook+0l+/Yfo06IvPsBZi1gjPKxGm/EgyUaL17wtpYzrBm8wnYtlfEansQxe4qJB8rUaqXrxBV7jHX40CMZ4g27dCzp4hS/Tw/MMcYz1piRlTtpNsplkNcltkp+llMv7dP4PI908H5jiKzEAAAAASUVORK5CYII="},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("Nav"),s("TopBar"),s("ShopBar"),s("Popular"),s("NewCollection"),s("Sole"),s("SubscribeBar"),s("FromOurCollection"),s("StoryBehind"),s("Footer")],1)},l=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"w-full bg-black-CI"},[a("div",{staticClass:"w-full max-w-mid mx-auto header-height"},[a("div",{staticClass:"h-full float-left text-white flex items-center"},[a("p",{staticClass:"cursor-pointer text-xs mr-12"},[t._v("gabooo@mail.com")]),a("p",{staticClass:"cursor-pointer text-xs"},[t._v("+12 345-678-90")])]),a("div",{staticClass:"h-full float-right text-white flex items-center"},[a("div",{staticClass:"h-full flex items-center"},[a("a",{staticClass:"cursor-pointer"},[a("img",{staticClass:"transform scale-75",attrs:{src:s("6661"),alt:""}})]),a("a",{staticClass:"cursor-pointer ml-10"},[a("img",{staticClass:"transform scale-75",attrs:{src:s("14a0"),alt:""}})]),a("a",{staticClass:"cursor-pointer ml-10"},[a("img",{staticClass:"transform scale-75",attrs:{src:s("324b"),alt:""}})])]),a("div",{staticClass:"h-full"},[a("a",{staticClass:"cursor-pointer text-xs ml-10"},[t._v("Login")]),a("a",{staticClass:"cursor-pointer text-xs ml-10"},[t._v("Register")])])])])])}],A={data:function(){return{}}},n=A,o=s("2877"),u=Object(o["a"])(n,r,c,!1,null,"7fd48a51",null),m=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"w-full max-w-mid mx-auto nav-height flex justify-center items-center"},[a("ul",{staticClass:"flex"},t._l(t.NavLeft,(function(e,s){return a("li",{key:e,class:{"ml-8":"Woman"!==e}},[a("a",{class:["nav-btn",{"text-yellow-CI":s===t.navIdx}],on:{click:function(e){return t.activeNav(s,"l")}}},[t._v(t._s(e))])])})),0),a("img",{staticClass:"mx-12",attrs:{src:s("bca0"),alt:""}}),a("ul",{staticClass:"flex"},t._l(t.NavRight,(function(e,s){return a("li",{key:e,class:{"mr-8":"Winter"!==e}},[a("a",{class:["nav-btn",{"text-yellow-CI":s+4===t.navIdx}],on:{click:function(e){return t.activeNav(s,"r")}}},[t._v(t._s(e))])])})),0)])},f=[],C={data:function(){return{navIdx:0,NavLeft:["Woman","Men","Children","Collection"],NavRight:["Spring","Summer","Fall","Winter"]}},methods:{activeNav:function(t,e){this.navIdx="r"===e?t+4:t}}},x=C,b=Object(o["a"])(x,p,f,!1,null,"57d3f584",null),d=b.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("figure",{staticClass:"bg-gray-CI w-full top-bar-height"},[s("div",{staticClass:"w-full max-w-mid mx-auto h-full px-24 flex"},[s("main",[s("h1",{staticClass:"text-5xl text-yellow-CI mt-16_5 pr-20 leading-tight font-bold"},[t._v("FASHION THAT LIKES TO SAY YES")]),s("p",{staticClass:"text-xs leading-6 mt-7 pr-32"},[t._v("Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.")]),s("a",{staticClass:"duration-150 transition-colors show-btn"},[t._v("SHOP NOW")])]),s("img",{attrs:{src:"https://source.unsplash.com/user/erondu/345x450",alt:""}})])])}],g={data:function(){return{}}},w=g,S=Object(o["a"])(w,h,v,!1,null,"5e73c852",null),E=S.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"shop-bar-height bg-black-CI w-full"},[s("div",{staticClass:"w-full max-w-mid mx-auto h-full flex justify-between"},[s("div",{staticClass:"flex items-center h-full"},[s("SelectUi",{attrs:{option:t.countryArr}}),s("SelectUi",{attrs:{option:t.coinArr}})],1),t._m(0)])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-row-reverse justify-start items-center"},[s("div",{staticClass:"flex justify-between items-center amount-box box-height bg-white ml-4"},[s("a",{staticClass:"cursor-pointer flex bg-yellow-CI w-1/3 box-height Cart-Icon bg-no-repeat bg-center"}),s("p",{staticClass:"flex justify-center items-center w-2/3 h-full text-sm font-bold text-black-CI"},[t._v("$ 90.00")])]),s("div",{staticClass:"flex search-box"},[s("input",{staticClass:"pl-4 search-width h-full outline-none",attrs:{type:"text",name:"",id:"",placeholder:"search"}}),s("a",{staticClass:"cursor-pointer flex bg-yellow-CI box-width box-height Search-Icon bg-no-repeat bg-center"})]),s("div",{staticClass:"text-white"},[s("a",{staticClass:"shop-bar-btn"},[t._v("Shopping Cart")]),s("a",{staticClass:"shop-bar-btn"},[t._v("WishList (7)")]),s("a",{staticClass:"shop-bar-btn"},[t._v("Checkout")]),s("a",{staticClass:"shop-bar-btn mr-10"},[t._v("My Account")])])])}],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("select",{staticClass:"bg-black-CI text-white text-xs pr-1 mr-2 outline-none"},t._l(t.option,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)},I=[],T={props:{option:{type:Array,default:[]}}},y=T,P=Object(o["a"])(y,k,I,!1,null,"289b75fe",null),_=P.exports,J={components:{SelectUi:_},data:function(){return{countryArr:["TW","EN","JP"],coinArr:["TWD","USD","JPY","PHP"]}}},O=J,Q=Object(o["a"])(O,B,j,!1,null,"53f0e904",null),N=Q.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"w-full h-auto mb-12"},[s("div",{staticClass:"max-w-mid w-full mx-auto"},[s("h1",{staticClass:"text-3xl text-yellow-CI mt-13 text-center mb-8"},[t._v("Popular Now")]),s("nav",{staticClass:"flex items-center justify-center mb-20"},t._l(t.menuArr,(function(e,a){return s("a",{key:e,class:["popular-btn",{"text-yellow-CI":a===t.popularIdx}],on:{click:function(e){return t.activeMenu(a)}}},[t._v(" "+t._s(e)+" ")])})),0),s("TicketCard",{attrs:{tickets:t.ticketArr}})],1)])},U=[],K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"flex justify-between items-center flex-wrap"},t._l(t.tickets,(function(e){return s("li",{key:e.img,staticClass:"block ticket-card cursor-pointer mb-2"},[s("img",{attrs:{src:e.img,alt:""}}),s("div",{staticClass:"w-full pt-5 pb-7"},[s("h2",{staticClass:"text-black-CI text-ms text-center font-bold"},[t._v(t._s(e.title))]),s("p",{staticClass:"text-yellow-CI text-ms text-center font-bold"},[t._v(t._s(e.price))])])])})),0)},L=[],W={props:{tickets:{type:Array,default:[]}}},G=W,F=Object(o["a"])(G,K,L,!1,null,"310ca38a",null),V=F.exports,M={components:{TicketCard:V},data:function(){return{menuArr:["Trending","Bestsellers","New","On Sale"],popularIdx:0,ticketArr:[{img:"https://source.unsplash.com/user/erondu/270x320?1",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?2",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?3",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?4",title:"PARIS JACKET",price:"$89,99"}]}},methods:{activeMenu:function(t){this.popularIdx=t}}},D=M,H=Object(o["a"])(D,R,U,!1,null,"0f54182e",null),z=H.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full h-auto bg-gray-CI pt-13 pb-12"},[s("div",{staticClass:"max-w-mid h-auto mx-auto"},[s("h1",{staticClass:"text-3xl text-yellow-CI text-center mb-8"},[t._v("New Winter Collection")]),s("p",{staticClass:"block w-2/5 mx-auto text-center text-xs"},[t._v("Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.")]),s("a",{staticClass:"article-btn mx-auto"},[t._v("All collection")]),s("div",{staticClass:"w-full mt-16"},[s("TicketCard2",{attrs:{tickets:t.ticketArr}})],1)])])},Y=[],Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"flex justify-between items-center"},t._l(t.tickets,(function(e){return s("li",{key:e.img,staticClass:"block ticket-card cursor-pointer"},[s("img",{attrs:{src:e.img,alt:""}}),s("div",{staticClass:"w-full pt-5 pb-7 flex justify-between"},[s("h2",{staticClass:"text-black-CI text-ms font-bold"},[t._v(t._s(e.title))]),s("p",{staticClass:"text-yellow-CI text-ms font-bold"},[t._v(t._s(e.price))])])])})),0)},q=[],$={props:{tickets:{type:Array,default:[]}}},tt=$,et=Object(o["a"])(tt,Z,q,!1,null,"cc3828f8",null),st=et.exports,at={components:{TicketCard2:st},data:function(){return{ticketArr:[{img:"https://source.unsplash.com/user/erondu/270x200?5",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x200?6",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x200?7",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x200?8",title:"PARIS JACKET",price:"$89,99"}]}}},it=at,lt=Object(o["a"])(it,X,Y,!1,null,"1b9b906c",null),rt=lt.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"w-full sole-height bg-black-CI flex justify-center items-center flex-col"},[s("h1",{staticClass:"text-yellow-CI text-3xl text-center"},[t._v("SEASON SALE")]),s("h2",{staticClass:"text-5xl-half text-white text-center"},[t._v("UP TO 70% OFF")])])}],nt={data:function(){return{}}},ot=nt,ut=Object(o["a"])(ot,ct,At,!1,null,"5f17790c",null),mt=ut.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"bg-gray-CI w-full h-auto"},[s("div",{staticClass:"max-w-mid w-full mx-auto h-auto py-8 overflow-hidden px-25"},[s("h3",{staticClass:"flex items-center justify-center text-xl subscribe-input-h text-black-CI float-left"},[t._v("Subscribe to Newsletter:")]),s("div",{staticClass:"float-right flex"},[s("input",{staticClass:"block pl-6 subscribe-input-w subscribe-input-h outline-none border border-yellow-CI border-solid",attrs:{type:"text",placeholder:"Your Mail"}}),s("a",{staticClass:"cursor-pointer ml-7_5 flex justify-center items-center bg-yellow-CI text-white subscribe-btn-w"},[t._v("Subscribe")])])])])}],Ct={data:function(){return{}}},xt=Ct,bt=Object(o["a"])(xt,pt,ft,!1,null,"0715c66d",null),dt=bt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"w-full pt-16 pb-16"},[s("div",{staticClass:"max-w-mid w-full mx-auto"},[t._m(0),s("TicketCard",{attrs:{tickets:t.ticketArr}}),s("a",{staticClass:"show-me-more-btn mx-auto"},[t._v("Show Me More")])],1)])},vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full flex justify-between items-end mb-16"},[s("div",{staticClass:"w-5/12"},[s("h1",{staticClass:"text-3xl text-yellow-CI font-bold mb-8"},[t._v("From Our Collection")]),s("p",{staticClass:"text-sm"},[t._v("Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.")])]),s("div",{staticClass:"flex"},[s("a",{staticClass:"season-btn"},[t._v("Winter")]),s("a",{staticClass:"season-btn"},[t._v("Spring")]),s("a",{staticClass:"season-btn"},[t._v("Summer")]),s("a",{staticClass:"season-btn"},[t._v("Fall")])])])}],gt={components:{TicketCard:V},data:function(){return{ticketArr:[{img:"https://source.unsplash.com/user/erondu/270x320?9",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?10",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?11",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?12",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?13",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?14",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?15",title:"PARIS JACKET",price:"$89,99"},{img:"https://source.unsplash.com/user/erondu/270x320?16",title:"PARIS JACKET",price:"$89,99"}]}}},wt=gt,St=Object(o["a"])(wt,ht,vt,!1,null,"738da480",null),Et=St.exports,Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"w-full bg-gray-CI flex"},[a("div",{staticClass:"story-behind-bg w-1/2"}),a("div",{staticClass:"w-1/2 pt-16 pl-32 pb-16"},[a("h1",{staticClass:"text-2xl font-bold text-black-CI mb-9"},[t._v("Story Behind")]),a("img",{staticClass:"mb-10",attrs:{src:s("d128"),alt:""}}),a("p",{staticClass:"text-gray-deep-CI text-sm font-bold w-7/12 leading-7"},[t._v("Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehisuscipit tortor eget felis.")]),a("a",{staticClass:"article-btn"},[t._v("Contact Us")])])])}],kt={data:function(){return{}}},It=kt,Tt=Object(o["a"])(It,Bt,jt,!1,null,"07ffe453",null),yt=Tt.exports,Pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"w-full bg-black-CI py-13 text-white leading-7"},[a("div",{staticClass:"max-w-mid mx-auto flex justify-between"},[a("div",{staticClass:"w-4/12"},[a("img",{staticClass:"mb-8",attrs:{src:s("d128"),alt:""}}),a("p",{staticClass:"text-sm mb-10"},[t._v("Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.")]),a("h5",{staticClass:"text-xs"},[t._v("Created by Graphberry,Belgrade,Serbia")]),a("h6",{staticClass:"text-xs"},[t._v("© 2017 - "),a("span",{staticClass:"text-yellow-CI"},[t._v("Gabooo")]),t._v(".Inc")])]),a("div",{staticClass:"w-2/12"},[a("h1",{staticClass:"text-sm"},[t._v("Links")]),a("a",{staticClass:"btn-links"},[t._v("Home")]),a("a",{staticClass:"btn-links"},[t._v("Sign in")]),a("a",{staticClass:"btn-links"},[t._v("Register")]),a("a",{staticClass:"btn-links"},[t._v("FAQ")]),a("a",{staticClass:"btn-links"},[t._v("Support")]),a("a",{staticClass:"btn-links"},[t._v("Terms and Conditions")])]),a("div",{staticClass:"w-2/12"},[a("h1",{staticClass:"text-sm"},[t._v("Shopping")]),a("a",{staticClass:"btn-links"},[t._v("Shopping Card")]),a("a",{staticClass:"btn-links"},[t._v("Winter")]),a("a",{staticClass:"btn-links"},[t._v("Spring")]),a("a",{staticClass:"btn-links"},[t._v("Summer")]),a("a",{staticClass:"btn-links"},[t._v("Fall")]),a("a",{staticClass:"btn-links"},[t._v("Collection")])]),a("div",{staticClass:"w-4/12"},[a("h1",{staticClass:"text-sm"},[t._v("Contact Us")]),a("p",{staticClass:"text-xs"},[t._v("Get in touch with us via mail phone.We are waiting for your call or message")]),a("a",{staticClass:"footer-mail text-sm my-10"},[t._v("graphberry@gmail.com")]),a("div",{staticClass:"flex"},[a("a",{staticClass:"flex-center icon-btn"},[a("img",{staticClass:"h-full w-auto",attrs:{src:s("6661"),alt:""}})]),a("a",{staticClass:"flex-center icon-btn"},[a("img",{staticClass:"h-auto w-full",attrs:{src:s("14a0"),alt:""}})]),a("a",{staticClass:"flex-center icon-btn"},[a("img",{staticClass:"h-auto w-full",attrs:{src:s("324b"),alt:""}})]),a("a",{staticClass:"flex-center icon-btn"},[a("img",{staticClass:"h-auto w-full",attrs:{src:s("08dc"),alt:""}})])])])])])}],Jt={data:function(){return{}}},Ot=Jt,Qt=Object(o["a"])(Ot,Pt,_t,!1,null,"7b058b0e",null),Nt=Qt.exports,Rt={components:{Header:m,Nav:d,TopBar:E,ShopBar:N,Popular:z,NewCollection:rt,Sole:mt,SubscribeBar:dt,FromOurCollection:Et,StoryBehind:yt,Footer:Nt}},Ut=Rt,Kt=Object(o["a"])(Ut,i,l,!1,null,null,null),Lt=Kt.exports,Wt=s("2f62");a["a"].use(Wt["a"]);var Gt=new Wt["a"].Store({state:{},mutations:{},actions:{},modules:{}});s("b4a8");a["a"].config.productionTip=!1,new a["a"]({store:Gt,render:function(t){return t(Lt)}}).$mount("#app")},6661:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAlElEQVQoz+WSvwnCcBBG34UgtkJQBEmhdiEjuISlG7iAi7iIY7iElaBgY2OjFp9NhM8fStL7qvvzuIPjAkNSH9gAS2DclG/AgkTc6TulS5V+U2Y2sOaTLTAHZsApt8YgEfcRcXgnuaQeMAGKRBxKmjbxEUm12hlltPMELl3Ec0TIz7NO1q3c7jLxj0V/ijtwtfzh4gt+o4iIC2nRfwAAAABJRU5ErkJggg=="},b4a8:function(t,e,s){},bca0:function(t,e){t.exports="data:image/png;base64,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"},d128:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.a37cac97.js.map