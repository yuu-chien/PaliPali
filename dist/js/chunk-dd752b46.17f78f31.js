(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd752b46"],{7815:function(t,a,c){"use strict";c.r(a);var i=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",[c("loading",{attrs:{active:t.isLoading,color:"#2D7487","background-color":"#000"},on:{"update:active":function(a){t.isLoading=a}}}),c("div",{staticClass:"mb-m"},[t._m(0),t._m(1),c("p",[t._v(" Or click "),c("span",{staticClass:"font-primary color-primary",on:{click:t.addProduct}},[t._v("HERE")]),t._v(" to add a new product.")])]),c("div",{staticClass:"row d-flex flex-wrap-w"},t._l(t.productsData,(function(a){return c("div",{key:a.id,staticClass:"col-4 card backend-card d-flex mb-1"},[c("div",{staticClass:"card-head prod-pic"},[c("img",{attrs:{src:a.imageUrl}})]),c("div",{staticClass:"card-content"},[c("span",{staticClass:"material-icons mb-tiny fz-xs ta-right",on:{click:function(c){return t.deleteProduct(a)}}},[t._v("clear")]),c("div",{staticClass:"d-flex jc-space-between mb-tiny"},[c("div",{staticClass:"card-tit"},[t._v(t._s(a.title))])]),c("div",{staticClass:"d-flex mb-tiny"},[c("del",{staticClass:"mr-2 fz-ets color-secondary"},[t._v(t._s(t._f("thousands")(a.origin_price)))]),c("p",{staticClass:"fz-xs"},[t._v(t._s(t._f("thousands")(a.price)))])]),c("div",{staticClass:"d-flex",on:{click:function(c){return t.editProduct(a)}}},[c("span",{staticClass:"material-icons fz-xs"},[t._v("info")])])])])})),0)],1)},e=[function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("p",{staticClass:"d-flex ai-center"},[t._v("Click the"),c("span",{staticClass:"material-icons fz-xs mr-tiny ml-tiny color-primary"},[t._v("info")]),t._v("to edit.")])},function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("p",{staticClass:"d-flex ai-center"},[t._v("Click the"),c("span",{staticClass:"material-icons fz-xs mr-tiny ml-tiny color-primary"},[t._v("clear")]),t._v("to delete.")])}],s=(c("99af"),c("ac1f"),c("5319"),{data:function(){return{isLoading:!1,fullPage:!0,productsData:{},filteredData:{}}},methods:{getAllProducts:function(){var t=this;this.isLoading=!0,this.productsData={},this.filteredData={},this.$http.get("".concat("https://course-ec-api.hexschool.io/api","/").concat("0c404360-cb55-4d2b-8c0a-cd42d85893cb","/admin/ec/products")).then((function(a){t.productsData=a.data.data,t.isLoading=!1}))},addProduct:function(){this.$router.push("/palipali/admin/product-add")},editProduct:function(t){this.$router.push("/palipali/admin/product/".concat(t.id))},deleteProduct:function(t){var a=this;this.isLoading=!0,this.$http.delete("".concat("https://course-ec-api.hexschool.io/api","/").concat("0c404360-cb55-4d2b-8c0a-cd42d85893cb","/admin/ec/product/").concat(t.id)).then((function(){console.log("delete success"),a.getAllProducts()}))}},created:function(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.getAllProducts()}}),n=s,r=c("2877"),o=Object(r["a"])(n,i,e,!1,null,null,null);a["default"]=o.exports},8418:function(t,a,c){"use strict";var i=c("c04e"),e=c("9bf2"),s=c("5c6c");t.exports=function(t,a,c){var n=i(a);n in t?e.f(t,n,s(0,c)):t[n]=c}},"99af":function(t,a,c){"use strict";var i=c("23e7"),e=c("d039"),s=c("e8b5"),n=c("861d"),r=c("7b0b"),o=c("50c4"),d=c("8418"),l=c("65f0"),u=c("1dde"),f=c("b622"),p=c("2d00"),h=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",_=p>=51||!e((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=u("concat"),g=function(t){if(!n(t))return!1;var a=t[h];return void 0!==a?!!a:s(t)},x=!_||!b;i({target:"Array",proto:!0,forced:x},{concat:function(t){var a,c,i,e,s,n=r(this),u=l(n,0),f=0;for(a=-1,i=arguments.length;a<i;a++)if(s=-1===a?n:arguments[a],g(s)){if(e=o(s.length),f+e>v)throw TypeError(m);for(c=0;c<e;c++,f++)c in s&&d(u,f,s[c])}else{if(f>=v)throw TypeError(m);d(u,f++,s)}return u.length=f,u}})}}]);
//# sourceMappingURL=chunk-dd752b46.17f78f31.js.map