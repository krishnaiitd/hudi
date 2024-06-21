"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[79150],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>f});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26982:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(96540);const n=function(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},3593:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(58168),n=a(96540),o=a(92303),i=a(48555);const s=function(){const e=(0,n.useContext)(i.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(91211),d=a(20053);const u={tabItem:"tabItem_vU9c"};function c(e){const{lazy:t,block:a,defaultValue:o,values:i,groupId:c,className:p}=e,m=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=i??m.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,l.XI)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??m.find((e=>e.props.default))?.props.value??m[0]?.props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=s(),[y,w]=(0,n.useState)(g),k=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.a_)();if(null!=c){const e=b[c];null!=e&&e!==y&&f.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,a=k.indexOf(t),r=f[a].value;r!==y&&(N(t),w(r),null!=c&&v(c,r))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=k.indexOf(e.currentTarget)+1;t=k[a]||k[0];break}case"ArrowLeft":{const a=k.indexOf(e.currentTarget)-1;t=k[a]||k[k.length-1];break}}t?.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("tabs",{"tabs--block":a},p)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>k.push(e),onKeyDown:E,onFocus:_,onClick:_},o,{className:(0,d.A)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,n.cloneElement)(m.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,o.A)();return n.createElement(c,(0,r.A)({key:String(t)},e))}},25503:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=a(58168),n=(a(96540),a(15680)),o=a(3593),i=a(26982);const s={title:"Streaming Reads",keywords:["hudi","spark","flink","streaming","processing"]},l=void 0,d={unversionedId:"reading_tables_streaming_reads",id:"version-0.15.0/reading_tables_streaming_reads",title:"Streaming Reads",description:"Spark Streaming",source:"@site/versioned_docs/version-0.15.0/reading_tables_streaming_reads.md",sourceDirName:".",slug:"/reading_tables_streaming_reads",permalink:"/docs/reading_tables_streaming_reads",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/reading_tables_streaming_reads.md",tags:[],version:"0.15.0",frontMatter:{title:"Streaming Reads",keywords:["hudi","spark","flink","streaming","processing"]},sidebar:"docs",previous:{title:"Batch Reads",permalink:"/docs/reading_tables_batch_reads"},next:{title:"Bootstrapping",permalink:"/docs/migration_guide"}},u=[{value:"Spark Streaming",id:"spark-streaming",children:[],level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"spark-streaming"},"Spark Streaming"),(0,n.yg)("p",null,"Structured Streaming reads are based on Hudi's Incremental Query feature, therefore streaming read can return data for which\ncommits and base files were not yet removed by the cleaner. You can control commits retention time."),(0,n.yg)(o.A,{groupId:"programming-language",defaultValue:"python",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,n.yg)(i.A,{value:"scala",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\n// reload data\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.precombine.field", "ts").\n  option("hoodie.datasource.write.recordkey.field", "uuid").\n  option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n  option("hoodie.table.name", tableName).\n  mode(Overwrite).\n  save(basePath)\n\n// read stream and output results to console\nspark.readStream.\n  format("hudi").\n  load(basePath).\n  writeStream.\n  format("console").\n  start()\n\n// read stream to streaming df\nval df = spark.readStream.\n        format("hudi").\n        load(basePath)\n\n'))),(0,n.yg)(i.A,{value:"python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"# pyspark\n# reload data\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(\n    dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n    'hoodie.table.name': tableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': tableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\"). \\\n    options(**hudi_options). \\\n    mode(\"overwrite\"). \\\n    save(basePath)\n\n# read stream to streaming df\ndf = spark.readStream \\\n    .format(\"hudi\") \\\n    .load(basePath)\n\n# ead stream and output results to console\nspark.readStream \\\n    .format(\"hudi\") \\\n    .load(basePath) \\\n    .writeStream \\\n    .format(\"console\") \\\n    .start()\n\n")))),(0,n.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,n.yg)("div",{parentName:"div",className:"admonition-heading"},(0,n.yg)("h5",{parentName:"div"},(0,n.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.yg)("div",{parentName:"div",className:"admonition-content"},(0,n.yg)("p",{parentName:"div"},"Spark SQL can be used within ForeachBatch sink to do INSERT, UPDATE, DELETE and MERGE INTO.\nTarget table must exist before write."))))}m.isMDXComponent=!0}}]);