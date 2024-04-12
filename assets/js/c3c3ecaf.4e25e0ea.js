"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),p=a(67392),c=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const n=null!=(t=r.find((e=>e.default)))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=h({queryString:a,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=null!=s?s:u;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),p(e),g(e)}),[p,g,l]),tabValues:l}}var b=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=p[a].value;r!==i&&(u(t),s(r))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;a=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var n;const t=c.indexOf(e.currentTarget)-1;a=null!=(n=c[t])?n:c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function f(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(f,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},90171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={},s="Using with MapLibre",p={unversionedId:"developer-guide/base-maps/using-with-maplibre",id:"developer-guide/base-maps/using-with-maplibre",title:"Using with MapLibre",description:"| Pure JS | React | Overlaid | Interleaved |",source:"@site/../docs/developer-guide/base-maps/using-with-maplibre.md",sourceDirName:"developer-guide/base-maps",slug:"/developer-guide/base-maps/using-with-maplibre",permalink:"/docs/developer-guide/base-maps/using-with-maplibre",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/base-maps/using-with-maplibre.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using with Mapbox",permalink:"/docs/developer-guide/base-maps/using-with-mapbox"},next:{title:"Writing Your Own Layer",permalink:"/docs/developer-guide/custom-layers/"}},c={},u=[{value:"Integration Modes",id:"integration-modes",level:2},{value:"Interleaved",id:"interleaved",level:3},{value:"Overlaid",id:"overlaid",level:3},{value:"Reverse Controlled",id:"reverse-controlled",level:3},{value:"Examples",id:"examples",level:2},{value:"Example: interleaved or overlaid",id:"example-interleaved-or-overlaid",level:3},{value:"Example: reverse controlled",id:"example-reverse-controlled",level:3},{value:"Additional Information",id:"additional-information",level:2},{value:"react-map-gl",id:"react-map-gl",level:3},{value:"Choosing a map tile service",id:"choosing-a-map-tile-service",level:3}],m={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-with-maplibre"},"Using with MapLibre"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pure JS"),(0,n.kt)("th",{parentName:"tr",align:null},"React"),(0,n.kt)("th",{parentName:"tr",align:null},"Overlaid"),(0,n.kt)("th",{parentName:"tr",align:null},"Interleaved"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/visgl/deck.gl/tree/9.0-release/examples/get-started/pure-js/maplibre"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://deck.gl/gallery/maplibre-overlay"},"example"))))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js/docs/"},"MapLibre GL JS")," is a powerful open-source library that uses WebGL to render interactive maps from vector tiles in a browser. deck.gl's ",(0,n.kt)("inlineCode",{parentName:"p"},"MapView")," can sync perfectly with the camera of MapLibre, at every zoom level and rotation angle."),(0,n.kt)("h2",{id:"integration-modes"},"Integration Modes"),(0,n.kt)("p",null,"When using deck.gl and MapLibre, there are three options you can choose from: interleaved, overlaid, and reverse-controlled."),(0,n.kt)("h3",{id:"interleaved"},"Interleaved"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/get-started/using-with-map#interleaved"},"interleaved")," mode renders deck.gl layers into the WebGL2 context created by MapLibre. If you need to mix deck.gl layers with MapLibre layers, e.g. having deck.gl surfaces below text labels, or objects occluding each other correctly in 3D, then you have to use this option."),(0,n.kt)("p",null,"Interleaving is supported by using ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/mapbox/mapbox-overlay"},"MapboxOverlay")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"interleaved: true"),". It requires WebGL2 and therefore only works with ",(0,n.kt)("inlineCode",{parentName:"p"},"maplibre-gl@>3"),". See ",(0,n.kt)("a",{parentName:"p",href:"../../api-reference/mapbox/overview#interleaved-renderer-compatibility"},"compatibility")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/mapbox/overview#limitations"},"limitations"),"."),(0,n.kt)("h3",{id:"overlaid"},"Overlaid"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/get-started/using-with-map#overlaid"},"overlaid")," mode renders deck.gl in a separate canvas inside the MapLibre's controls container. If your use case does not require interleaving, but you still want to use certain features of maplibre-gl, such as maplibre-gl controls (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"NavigationControl"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Popup"),") or plugins (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mapbox/mapbox-gl-directions"},"navigation directions"),", ",(0,n.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js/docs/examples/mapbox-gl-draw/"},"mapbox-gl-draw"),"), then you should use this option."),(0,n.kt)("p",null,"This is supported by using ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/mapbox/mapbox-overlay"},"MapboxOverlay")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"interleaved: false"),"."),(0,n.kt)("h3",{id:"reverse-controlled"},"Reverse Controlled"),(0,n.kt)("p",null,"The reverse-controlled mode renders deck.gl above the MapLibre container and blocks any interaction to the base map. If your use case does not require interleaving, but you need to implement your own ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/controller"},"pointer input handling"),", have multiple maps or a map that does not fill the whole canvas (with Deck's ",(0,n.kt)("a",{parentName:"p",href:"/docs/developer-guide/views#using-multiple-views"},"multi-view feature"),"), you need this to allow deck.gl manage the map's size and camera."),(0,n.kt)("p",null,"You cannot use maplibre-gl controls and plugins with this option. Instead, use the components from ",(0,n.kt)("inlineCode",{parentName:"p"},"@deck.gl/widgets"),"."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"example-interleaved-or-overlaid"},"Example: interleaved or overlaid"),(0,n.kt)("p",null,"Both the interleaved and the overlaid options are supported by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/mapbox/overview"},"@deck.gl/mapbox")," module. This is recommended approach for developers coming from the MapLibre ecosystem, as it can easily switch between interleaved and overlaid rendering, as well as being compatible with other MapLibre controls and plugins."),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import {MapboxOverlay} from '@deck.gl/mapbox';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport {Map} from 'maplibre-gl';\nimport 'maplibre-gl/dist/maplibre-gl.css';\n\nconst map = new Map({\n  container: 'map',\n  style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',\n  center: [0.45, 51.47],\n  zoom: 11\n});\n\nawait map.once('load');\n\nconst deckOverlay = new MapboxOverlay({\n  interleaved: true,\n  layers: [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000,\n      beforeId: 'watername_ocean' // In interleaved mode render the layer under map labels\n    })\n  ]\n});\n\nmap.addControl(deckOverlay);\n"))),(0,n.kt)(o.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {Map, useControl} from 'react-map-gl/maplibre';\nimport {MapboxOverlay} from '@deck.gl/mapbox';\nimport {DeckProps} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport 'maplibre-gl/dist/maplibre-gl.css';\n\nfunction DeckGLOverlay(props: DeckProps) {\n  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));\n  overlay.setProps(props);\n  return null;\n}\n\nfunction App() {\n  const layers: [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000,\n      beforeId: 'watername_ocean' // In interleaved mode render the layer under map labels\n    })\n  ];\n\n  return (\n    <Map\n      initialViewState={{\n        longitude: 0.45,\n        latitude: 51.47,\n        zoom: 11\n      }}\n      mapStyle=\"https://basemaps.cartocdn.com/gl/positron-gl-style/style.json\"\n    >\n      <DeckGLOverlay layers={layers} interleaved />\n    </Map>\n  );\n}\n")))),(0,n.kt)("p",null,"You can find full project setups in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/9.0-release/examples/get-started/react/maplibre/"},"react get-started example")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/9.0-release/examples/get-started/pure-js/maplibre/"},"pure js get-started example"),"."),(0,n.kt)("h3",{id:"example-reverse-controlled"},"Example: reverse controlled"),(0,n.kt)("p",null,"The reverse-controlled option is supported by the pre-built scripting bundle, and in React when used with the ",(0,n.kt)("inlineCode",{parentName:"p"},"react-map-gl")," library. There is currently no easy way to do it under Vanilla JS."),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"scripting",label:"Scripting",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/maplibre-gl@^4.0.0/dist/maplibre-gl.js"><\/script>\n<link href="https://unpkg.com/maplibre-gl@^4.0.0/dist/maplibre-gl.css" rel="stylesheet" />\n<script type="text/javascript">\n  const {DeckGL, ScatterplotLayer} = deck;\n\n  new DeckGL({\n    mapStyle: \'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json\',\n    initialViewState: {\n      longitude: 0.45,\n      latitude: 51.47,\n      zoom: 11\n    },\n    controller: true,\n    layers: [\n      new ScatterplotLayer({\n        id: \'deckgl-circle\',\n        data: [\n          {position: [0.45, 51.47]}\n        ],\n        getPosition: d => d.position,\n        getFillColor: [255, 0, 0, 100],\n        getRadius: 1000\n      })\n    ]\n  });\n<\/script>\n'))),(0,n.kt)(o.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {Map} from 'react-map-gl/maplibre';\nimport DeckGL from '@deck.gl/react';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport 'maplibre-gl/dist/maplibre-gl.css';\n\nfunction App() {\n  const layers: [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000,\n    })\n  ];\n\n  return (\n    <DeckGL\n      initialViewState={{\n        longitude: 0.45,\n        latitude: 51.47,\n        zoom: 11\n      }}\n      controller\n      layers={layers}\n    >\n      <Map mapStyle=\"https://basemaps.cartocdn.com/gl/positron-gl-style/style.json\" />\n    </DeckGL>\n  );\n}\n")))),(0,n.kt)("h2",{id:"additional-information"},"Additional Information"),(0,n.kt)("h3",{id:"react-map-gl"},"react-map-gl"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/react-map-gl"},"react-map-gl")," is a React wrapper around maplibre-gl maintained by the vis.gl community. If you'd like to use deck.gl together with maplibre-gl and React, this library is the recommended companion."),(0,n.kt)("p",null,"All the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/9.0-release/examples/website"},"examples on this website")," are implemented using the React integration."),(0,n.kt)("p",null,"When you choose the interleaved or overlaid option, the react-map-gl ",(0,n.kt)("a",{parentName:"p",href:"https://visgl.github.io/react-map-gl/docs/api-reference/map"},"Map")," React component acts as the root component, and ",(0,n.kt)("a",{parentName:"p",href:"../../api-reference/mapbox/mapbox-overlay#using-with-react-map-gl"},"MapboxOverlay")," is used with react-map-gl's ",(0,n.kt)("inlineCode",{parentName:"p"},"useControl")," hook. "),(0,n.kt)("p",null,"When you choose the reverse-controlled option, the ",(0,n.kt)("inlineCode",{parentName:"p"},"DeckGL")," React component acts as the root component, and the react-map-gl ",(0,n.kt)("a",{parentName:"p",href:"https://visgl.github.io/react-map-gl/docs/api-reference/map"},"Map")," is a child. In this case, ",(0,n.kt)("inlineCode",{parentName:"p"},"Map")," will automatically interpret the deck.gl view state (i.e. latitude, longitude, zoom etc), so that deck.gl layers will render as a synchronized geospatial overlay over the underlying map."),(0,n.kt)("h3",{id:"choosing-a-map-tile-service"},"Choosing a map tile service"),(0,n.kt)("p",null,"There are paid map tile servers such as ",(0,n.kt)("a",{parentName:"p",href:"https://www.maptiler.com/"},"MapTiler"),", ",(0,n.kt)("a",{parentName:"p",href:"https://stadiamaps.com/"},"Stadia Maps"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/location/latest/developerguide/map-concepts.html"},"AWS Location Service"),"."),(0,n.kt)("p",null,"deck.gl public demos use ",(0,n.kt)("a",{parentName:"p",href:"https://carto.com/basemaps"},"CARTO free basemaps")," as a non-commercial application. Checkout ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/carto/basemap"},"this guide")," to start using it."),(0,n.kt)("p",null,"If you host your own map tiles, you will need a custom map style JSON that points to your own ",(0,n.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-style-spec/"},"vector tile source"),", this custom style must match the schema of your tile source."),(0,n.kt)("p",null,"Open source tile schemas include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tilezen.readthedocs.io/en/latest/layers/"},"TileZen schema")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://openmaptiles.org/schema/"},"OpenMapTiles schema ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mapbox.com/developers/vector-tiles/"},"Mapbox Vector Tile Spec"))),(0,n.kt)("p",null,"Some useful resources for hosting your own map tiles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/maplibre/martin"},"Martin"),", a tile server from the MapLibre organization"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mapbox/awesome-vector-tiles"},"Open source tools")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://maplibre.org/maputnik/"},"Maputnik Style editor"))))}h.isMDXComponent=!0}}]);