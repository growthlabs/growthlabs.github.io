(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"97c4":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("q-input",{attrs:{filled:"","bottom-slots":"",label:"Search Product"},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchTerm,callback:function(a){t.searchTerm=a},expression:"searchTerm"}}),e("div",{staticClass:"row  text-center"},[e("div",{staticClass:"q-pa-sm "},[e("q-badge",{attrs:{outline:"",color:"primary",label:"Repsan"}})],1),e("div",{staticClass:"q-pa-sm"},[e("q-badge",{attrs:{outline:"",color:"orange",label:"Mondelez"}})],1),e("div",{staticClass:"q-pa-sm "},[e("q-badge",{attrs:{outline:"",color:"secondary",label:"Jomi"}})],1)]),e("div",{staticClass:"q-pa-md"},[t._v("\n      Search Results: "+t._s(t.filteredList.length)+"\n\n      "),t.forSale?e("div",{staticClass:"row q-col-gutter-xs"},t._l(t.filteredList,(function(a,o){return e("div",{key:o,staticClass:"col-6 col-sm-3 q-gutter-y-lg",staticStyle:{"list-style":"none"}},[e("q-card",{staticClass:"my-card"},[e("q-img",{staticStyle:{padding:"15px"},attrs:{src:t.randomImage(o)}}),e("q-card-section",[e("div",{staticClass:"row no-wrap items-center"},[e("div",{staticClass:"col text-h6 "},[t._v("\n                  "+t._s(a.Descripción)+"\n                  "),e("q-badge",{attrs:{outline:"",color:"orange",label:"Mondelez"}})],1)])]),e("q-card-section",{staticClass:"q-pt-none"},[e("div",{staticClass:"text-subtitle1"},[t._v("\n                "+t._s(a.Precio)+"\n              ")]),e("div",{staticClass:"text-caption "},[t._v("Unidad: "+t._s(a["Unids."]))]),e("div",{staticClass:"text-caption "},[t._v("Code: "+t._s(a.Código))]),t.products.length>0?e("div",{staticClass:"quantity-toggle"},[e("button",{on:{click:function(e){return t.decrement(a.Código)}}},[t._v("—")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a.Código].orderQuantity,expression:"form[product.Código].orderQuantity"}],attrs:{type:"number"},domProps:{value:t.form[a.Código].orderQuantity},on:{input:function(e){e.target.composing||t.$set(t.form[a.Código],"orderQuantity",e.target.value)}}}),e("button",{on:{click:function(e){return t.increment(a.Código)}}},[t._v("＋")])]):t._e(),e("q-btn",{attrs:{unelevated:"",rounded:"",color:"secondary",label:"+ Add to cart"},on:{click:function(e){return t.addToCart(a.Código)}}})],1)],1)],1)})),0):t._e()]),e("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[t.inCart?e("q-btn",{attrs:{fab:"",icon:"shopping_cart",color:"black"},on:{click:function(a){t.medium=!0}}},[e("q-badge",{key:t.componentKey,attrs:{color:"red",floating:""}},[t._v(t._s(Object.keys(t.inCart).length))])],1):t._e()],1),e("q-dialog",{model:{value:t.medium,callback:function(a){t.medium=a},expression:"medium"}},[e("q-card",{staticStyle:{width:"700px","max-width":"80vw"},attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("Shopping Cart")])]),e("q-separator"),t.inCart?e("div",{staticClass:"q-pa-md"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Description")]),e("th",{attrs:{scope:"col"}},[t._v("Price")]),e("th",{attrs:{scope:"col"}},[t._v("Qty")])])]),e("tbody",t._l(Object.values(t.inCart),(function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(a.product.Descripción))]),e("td",[t._v(t._s(a.product.Precio))]),e("th",{attrs:{scope:"row"}},[t._v(t._s(a.orderQuantity))])])})),0)]),t.inCartList?e("span",[e("p",{staticClass:"text-right bold text-h6"},[t._v("total: S/ "+t._s(t.totalCart))])]):t._e()]):t._e(),e("q-card-section",{staticClass:"q-pt-none"}),e("q-separator"),e("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[e("div",{staticClass:"q-pa-md q-gutter-none"},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"white","text-color":"black",label:"Keep Shopping"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"blue",icon:"shopping_cart",label:"Checkout"},on:{click:t.checkoutCart}})],1)])],1)],1),e("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(a){t.confirm=a},expression:"confirm"}},[e("q-card",[e("q-card-section",{staticClass:"row items-center"},[e("q-avatar",{attrs:{icon:"local_shipping",color:"primary","text-color":"white"}}),e("span",{staticClass:"q-ml-sm"},[t._v("Your order has been confirmed!")])],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Close",color:"primary"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Okay",color:"primary"}})],1)],1)],1)],1)},r=[],i=(e("a481"),e("ac6a"),e("cadf"),e("06db"),e("8615"),{components:["QFab","QFabAction","QBadge","QDialog","QTable","QTh","QTr","QTd"],directives:["ClosePopup"],data:function(){return{searchTerm:"",medium:!1,quantity:0,products:[],form:{},images:[],componentKey:0,totalCart:0,confirm:!1}},mounted:function(){var t=this;this.form={},this.products=this.forSale,this.products.forEach((function(a){t.$set(t.form,a.Código,{orderQuantity:0,product:a})})),this.products.forEach((function(a){t.images.push(Math.floor(10*Math.random())+1)})),this.totalCart=this.calculateTotalPrice(this.inCart)},beforeDestroy:function(){clearTimeout(this.timer)},methods:{addToCart:function(t){var a=this.form[t];a&&(this.form[t].quantity=0),this.$store.dispatch("ShoppingCart/addToCart",a),this.$q.notify("Product ".concat(a.product.Descripción," was added to the cart")),this.componentKey+=1,this.totalCart=this.calculateTotalPrice(this.inCart)},finalize:function(t){this.timer=setTimeout((function(){t()}),500)},increment:function(t){this.form[t].orderQuantity++},decrement:function(t){this.form[t].orderQuantity>0&&this.form[t].orderQuantity--},randomImage:function(t){return"statics/sample".concat(this.images[t],".png")},calculateTotalPrice:function(t){console.log("calculate total is being called");var a=0,e=Object.values(t);return e.forEach((function(t){var e=parseInt(t.product.Precio.replace(/[^\d.-]/g,"")),o=t.orderQuantity;a+=e*o})),console.log("SUM IS",a),a},checkoutCart:function(){this.confirm=!0}},computed:{filteredList:function(){var t=this;return t.forSale.filter((function(a){return-1!==a.Descripción.indexOf(t.searchTerm.toUpperCase())}))},forSale:function(){return this.$store.state.ShoppingCart.forSale},inCart:function(){return this.$store.state.ShoppingCart.inCart},inCartList:function(){var t=Object.values(this.inCart);return t}}}),s=i,c=(e("c03a"),e("2877")),n=e("eebe"),l=e.n(n),d=e("27f9"),u=e("0016"),p=e("58a8"),m=e("f09f"),f=e("068f"),h=e("a370"),v=e("9c40"),C=e("de5e"),g=e("24e8"),b=e("eb85"),q=e("4b7e"),y=e("cb32"),_=e("7f67"),Q=Object(c["a"])(s,o,r,!1,null,"90925f28",null);a["default"]=Q.exports;l()(Q,"components",{QInput:d["a"],QIcon:u["a"],QBadge:p["a"],QCard:m["a"],QImg:f["a"],QCardSection:h["a"],QBtn:v["a"],QPageSticky:C["a"],QDialog:g["a"],QSeparator:b["a"],QCardActions:q["a"],QAvatar:y["a"]}),l()(Q,"directives",{ClosePopup:_["a"]})},c03a:function(t,a,e){"use strict";var o=e("e5ac"),r=e.n(o);r.a},e5ac:function(t,a,e){}}]);