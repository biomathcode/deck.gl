"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,h=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={},a="PointLight",l={unversionedId:"api-reference/core/point-light",id:"api-reference/core/point-light",title:"PointLight",description:"Create a point light source which emits from a point in all directions.Point lights attenuation is not available. At most 5 directional lights can be supported.",source:"@site/../docs/api-reference/core/point-light.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/point-light",permalink:"/docs/api-reference/core/point-light",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/point-light.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AmbientLight",permalink:"/docs/api-reference/core/ambient-light"},next:{title:"DirectionalLight",permalink:"/docs/api-reference/core/directional-light"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor",id:"constructor",level:3},{value:"Source",id:"source",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pointlight"},"PointLight"),(0,r.kt)("p",null,"Create a point light source which emits from a point in all directions.Point lights attenuation is not available. At most 5 directional lights can be supported."),(0,r.kt)("div",{align:"center"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"https://raw.github.com/visgl/deck.gl-data/master/images/whats-new/point-light.gif"}),(0,r.kt)("p",null,(0,r.kt)("i",null,"Two spheres with point light")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Create a point light source with color, intensity and position."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const pointLight= new PointLight({\n  color: [128, 128, 0],\n  intensity: 2.0,\n  position: [0, 0, 200]\n});\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"The constructor for the ",(0,r.kt)("inlineCode",{parentName:"p"},"PointLight")," class. Use this to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"PointLight"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const pointLight = new PointLight({color, intensity, position});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color")," - (number","[3]",",)  RGB color of point light source, default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"[255, 255, 255]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"intensity")," - (number) Strength of point light source, default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"position")," - (number","[3]",")  Location of point light source, default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 0, 1]"),".The coordinate system of the position depends on the current ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/deck#views"},"view"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"[longitude, latitude, altitude]")," in geospatial views and world position in non-geospatial views.")),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/9.0-release/modules/core/src/effects/lighting/point-light.ts"},"/modules/core/src/effects/lighting/point-light.ts")))}d.isMDXComponent=!0}}]);