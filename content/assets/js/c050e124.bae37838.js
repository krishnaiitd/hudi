"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[59275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73737:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"OneTable",keywords:["onetable","hudi","delta-lake","iceberg","sync"]},i=void 0,l={unversionedId:"syncing_onetable",id:"version-0.14.0/syncing_onetable",title:"OneTable",description:"Hudi (tables created from 0.14.0 onwards) supports syncing to OneTable, providing users with the option to interoperate with other table formats like Delta Lake and Apache Iceberg.",source:"@site/versioned_docs/version-0.14.0/syncing_onetable.md",sourceDirName:".",slug:"/syncing_onetable",permalink:"/docs/0.14.0/syncing_onetable",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/syncing_onetable.md",tags:[],version:"0.14.0",frontMatter:{title:"OneTable",keywords:["onetable","hudi","delta-lake","iceberg","sync"]},sidebar:"docs",previous:{title:"Google BigQuery",permalink:"/docs/0.14.0/gcp_bigquery"},next:{title:"Bootstrapping",permalink:"/docs/0.14.0/migration_guide"}},s=[{value:"Interoperating with OneTable",id:"interoperating-with-onetable",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Syncing to OneTable",id:"syncing-to-onetable",children:[],level:3},{value:"Hudi Streamer Extensions",id:"hudi-streamer-extensions",children:[],level:3}],level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hudi (tables created from 0.14.0 onwards) supports syncing to ",(0,r.kt)("a",{parentName:"p",href:"https://onetable.dev/"},"OneTable"),", providing users with the option to interoperate with other table formats like Delta Lake and Apache Iceberg."),(0,r.kt)("h2",{id:"interoperating-with-onetable"},"Interoperating with OneTable"),(0,r.kt)("p",null,"If you have tables in one of the supported formats (Delta/Iceberg), you can use OneTable to translate the existing metadata to read as a Hudi table and vice versa."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can work with OneTable by either building the jar from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable"},"source")," or by downloading from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable/packages/1986830"},"GitHub packages"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you're using one of the JVM languages to work with Hudi/Delta/Iceberg, you can directly use OneTable as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable/packages/1986830"},"dependency")," in your project.\nThis is highlighted in this ",(0,r.kt)("a",{parentName:"p",href:"https://onetable.dev/docs/demo/docker"},"demo"),"."))),(0,r.kt)("h3",{id:"syncing-to-onetable"},"Syncing to OneTable"),(0,r.kt)("p",null,"Once you have the jar, you can simply run it against a Hudi/Delta/Iceberg table to add target table format metadata to the table.\nBelow is an example configuration to translate a Hudi table to Delta & Iceberg table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="my_config.yaml"',md:!0,title:'"my_config.yaml"'},"sourceFormat: HUDI\ntargetFormats:\n  - DELTA\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: path/to/hudi/table\n    tableName: tableName\n    partitionSpec: partition_field_name:VALUE\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},"java -jar path/to/bundled-onetable.jar --datasetConfig path/to/my_config.yaml\n")),(0,r.kt)("h3",{id:"hudi-streamer-extensions"},"Hudi Streamer Extensions"),(0,r.kt)("p",null,"If you want to use OneTable with Hudi Streamer to sync each commit into other table formats, you have to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable/tree/main/hudi-support/extensions"},"extensions jar")," ",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-extensions-0.1.0-SNAPSHOT-bundled.jar")," to your class path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"io.onetable.hudi.sync.OneTableSyncTool")," to your list of sync classes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the following configurations based on your preferences:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'hoodie.onetable.formats: "ICEBERG,DELTA" \nhoodie.onetable.target.metadata.retention.hr: 168\n')))),(0,r.kt)("p",null,"For more examples, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://onetable.dev/docs/how-to"},"OneTable docs"),"."))}d.isMDXComponent=!0}}]);