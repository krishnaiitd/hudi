"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66415],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>c});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),g=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=g(n),y=i,c=p["".concat(d,".").concat(y)]||p[y]||m[y]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var g=2;g<r;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},68395:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(58168),i=(n(96540),n(15680));const r={title:"Using Flink",keywords:["hudi","flink","streamer","ingestion"]},l=void 0,o={unversionedId:"ingestion_flink",id:"version-0.15.0/ingestion_flink",title:"Using Flink",description:"CDC Ingestion",source:"@site/versioned_docs/version-0.15.0/ingestion_flink.md",sourceDirName:".",slug:"/ingestion_flink",permalink:"/cn/docs/ingestion_flink",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/ingestion_flink.md",tags:[],version:"0.15.0",frontMatter:{title:"Using Flink",keywords:["hudi","flink","streamer","ingestion"]},sidebar:"docs",previous:{title:"Using Spark",permalink:"/cn/docs/hoodie_streaming_ingestion"},next:{title:"Using Kafka Connect",permalink:"/cn/docs/ingestion_kafka_connect"}},d=[{value:"CDC Ingestion",id:"cdc-ingestion",children:[],level:3},{value:"Bulk Insert",id:"bulk-insert",children:[{value:"Options",id:"options",children:[],level:4}],level:3},{value:"Index Bootstrap",id:"index-bootstrap",children:[{value:"Options",id:"options-1",children:[],level:4},{value:"How To Use",id:"how-to-use",children:[],level:4}],level:3},{value:"Changelog Mode",id:"changelog-mode",children:[{value:"Options",id:"options-2",children:[],level:4}],level:3},{value:"Append Mode",id:"append-mode",children:[{value:"Inline Clustering",id:"inline-clustering",children:[],level:4},{value:"Async Clustering",id:"async-clustering",children:[],level:4},{value:"Clustering Plan Strategy",id:"clustering-plan-strategy",children:[],level:4}],level:3},{value:"Bucket Index",id:"bucket-index",children:[{value:"Options",id:"options-3",children:[],level:4}],level:3},{value:"Rate Limit",id:"rate-limit",children:[{value:"Options",id:"options-4",children:[],level:4}],level:3}],g={toc:d},s="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(s,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"cdc-ingestion"},"CDC Ingestion"),(0,i.yg)("p",null,"CDC(change data capture) keep track of the data changes evolving in a source system so a downstream process or system can action that change.\nWe recommend two ways for syncing CDC data into Hudi:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"slide1 title",src:n(45859).A})),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Using the Ververica ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/ververica/flink-cdc-connectors"},"flink-cdc-connectors")," directly connect to DB Server to sync the binlog data into Hudi.\nThe advantage is that it does not rely on message queues, but the disadvantage is that it puts pressure on the db server;"),(0,i.yg)("li",{parentName:"ol"},"Consume data from a message queue (for e.g, the Kafka) using the flink cdc format, the advantage is that it is highly scalable,\nbut the disadvantage is that it relies on message queues.")),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("ul",{parentName:"div"},(0,i.yg)("li",{parentName:"ul"},"If the upstream data cannot guarantee the order, you need to specify option ",(0,i.yg)("inlineCode",{parentName:"li"},"write.precombine.field")," explicitly;")))),(0,i.yg)("h3",{id:"bulk-insert"},"Bulk Insert"),(0,i.yg)("p",null,"For the demand of snapshot data import. If the snapshot data comes from other data sources, use the ",(0,i.yg)("inlineCode",{parentName:"p"},"bulk_insert")," mode to quickly\nimport the snapshot data into Hudi."),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},(0,i.yg)("inlineCode",{parentName:"p"},"bulk_insert")," eliminates the serialization and data merging. The data deduplication is skipped, so the user need to guarantee the uniqueness of the data."))),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},(0,i.yg)("inlineCode",{parentName:"p"},"bulk_insert")," is more efficient in the ",(0,i.yg)("inlineCode",{parentName:"p"},"batch execution mode"),". By default, the ",(0,i.yg)("inlineCode",{parentName:"p"},"batch execution mode")," sorts the input records\nby the partition path and writes these records to Hudi, which can avoid write performance degradation caused by\nfrequent ",(0,i.yg)("inlineCode",{parentName:"p"},"file handle")," switching.  "))),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"The parallelism of ",(0,i.yg)("inlineCode",{parentName:"p"},"bulk_insert")," is specified by ",(0,i.yg)("inlineCode",{parentName:"p"},"write.tasks"),". The parallelism will affect the number of small files.\nIn theory, the parallelism of ",(0,i.yg)("inlineCode",{parentName:"p"},"bulk_insert")," is the number of ",(0,i.yg)("inlineCode",{parentName:"p"},"bucket"),"s (In particular, when each bucket writes to maximum file size, it\nwill rollover to the new file handle. Finally, ",(0,i.yg)("inlineCode",{parentName:"p"},"the number of files")," >= ",(0,i.yg)("a",{parentName:"p",href:"/docs/configurations#writebucket_assigntasks"},(0,i.yg)("inlineCode",{parentName:"a"},"write.bucket_assign.tasks")),"."))),(0,i.yg)("h4",{id:"options"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"write.operation")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"true")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"upsert")),(0,i.yg)("td",{parentName:"tr",align:null},"Setting as ",(0,i.yg)("inlineCode",{parentName:"td"},"bulk_insert")," to open this function")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"write.tasks")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"4")),(0,i.yg)("td",{parentName:"tr",align:null},"The parallelism of ",(0,i.yg)("inlineCode",{parentName:"td"},"bulk_insert"),", ",(0,i.yg)("inlineCode",{parentName:"td"},"the number of files")," >= ",(0,i.yg)("a",{parentName:"td",href:"/docs/configurations#writebucket_assigntasks"},(0,i.yg)("inlineCode",{parentName:"a"},"write.bucket_assign.tasks")))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"write.bulk_insert.shuffle_input")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"true")),(0,i.yg)("td",{parentName:"tr",align:null},"Whether to shuffle data according to the input field before writing. Enabling this option will reduce the number of small files, but there may be a risk of data skew")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"write.bulk_insert.sort_input")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"true")),(0,i.yg)("td",{parentName:"tr",align:null},"Whether to sort data according to the input field before writing. Enabling this option will reduce the number of small files when a write task writes multiple partitions")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"write.sort.memory")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"128")),(0,i.yg)("td",{parentName:"tr",align:null},"Available managed memory of sort operator. default  ",(0,i.yg)("inlineCode",{parentName:"td"},"128")," MB")))),(0,i.yg)("h3",{id:"index-bootstrap"},"Index Bootstrap"),(0,i.yg)("p",null,"For the demand of ",(0,i.yg)("inlineCode",{parentName:"p"},"snapshot data")," + ",(0,i.yg)("inlineCode",{parentName:"p"},"incremental data")," import. If the ",(0,i.yg)("inlineCode",{parentName:"p"},"snapshot data")," already insert into Hudi by  ",(0,i.yg)("a",{parentName:"p",href:"#bulk-insert"},"bulk insert"),".\nUser can insert ",(0,i.yg)("inlineCode",{parentName:"p"},"incremental data")," in real time and ensure the data is not repeated by using the index bootstrap function."),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"If you think this process is very time-consuming, you can add resources to write in streaming mode while writing ",(0,i.yg)("inlineCode",{parentName:"p"},"snapshot data"),",\nand then reduce the resources to write ",(0,i.yg)("inlineCode",{parentName:"p"},"incremental data")," (or open the rate limit function)."))),(0,i.yg)("h4",{id:"options-1"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"index.bootstrap.enabled")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"true")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},"When index bootstrap is enabled, the remain records in Hudi table will be loaded into the Flink state at one time")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"index.partition.regex")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"*")),(0,i.yg)("td",{parentName:"tr",align:null},"Optimize option. Setting regular expressions to filter partitions. By default, all partitions are loaded into flink state")))),(0,i.yg)("h4",{id:"how-to-use"},"How To Use"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE TABLE")," creates a statement corresponding to the Hudi table. Note that the ",(0,i.yg)("inlineCode",{parentName:"li"},"table.type")," must be correct."),(0,i.yg)("li",{parentName:"ol"},"Setting ",(0,i.yg)("inlineCode",{parentName:"li"},"index.bootstrap.enabled")," = ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," to enable the index bootstrap function."),(0,i.yg)("li",{parentName:"ol"},"Setting Flink checkpoint failure tolerance in ",(0,i.yg)("inlineCode",{parentName:"li"},"flink-conf.yaml")," : ",(0,i.yg)("inlineCode",{parentName:"li"},"execution.checkpointing.tolerable-failed-checkpoints = n")," (depending on Flink checkpoint scheduling times)."),(0,i.yg)("li",{parentName:"ol"},"Waiting until the first checkpoint succeeds, indicating that the index bootstrap completed."),(0,i.yg)("li",{parentName:"ol"},"After the index bootstrap completed, user can exit and save the savepoint (or directly use the externalized checkpoint)."),(0,i.yg)("li",{parentName:"ol"},"Restart the job, setting ",(0,i.yg)("inlineCode",{parentName:"li"},"index.bootstrap.enable")," as ",(0,i.yg)("inlineCode",{parentName:"li"},"false"),".")),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("ol",{parentName:"div"},(0,i.yg)("li",{parentName:"ol"},"Index bootstrap is blocking, so checkpoint cannot be completed during index bootstrap."),(0,i.yg)("li",{parentName:"ol"},"Index bootstrap triggers by the input data. User need to ensure that there is at least one record in each partition."),(0,i.yg)("li",{parentName:"ol"},"Index bootstrap executes concurrently. User can search in log by ",(0,i.yg)("inlineCode",{parentName:"li"},"finish loading the index under partition")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Load record form file")," to observe the progress of index bootstrap."),(0,i.yg)("li",{parentName:"ol"},"The first successful checkpoint indicates that the index bootstrap completed. There is no need to load the index again when recovering from the checkpoint.")))),(0,i.yg)("h3",{id:"changelog-mode"},"Changelog Mode"),(0,i.yg)("p",null,"Hudi can keep all the intermediate changes (I / -U / U / D) of messages, then consumes through stateful computing of flink to have a near-real-time\ndata warehouse ETL pipeline (Incremental computing). Hudi MOR table stores messages in the forms of rows, which supports the retention of all change logs (Integration at the format level).\nAll changelog records can be consumed with Flink streaming reader."),(0,i.yg)("h4",{id:"options-2"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"changelog.enabled")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},"It is turned off by default, to have the ",(0,i.yg)("inlineCode",{parentName:"td"},"upsert")," semantics, only the merged messages are ensured to be kept, intermediate changes may be merged. Setting to true to support consumption of all changes")))),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Batch (Snapshot) read still merge all the intermediate changes, regardless of whether the format has stored the intermediate changelog messages."))),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"After setting ",(0,i.yg)("inlineCode",{parentName:"p"},"changelog.enable")," as ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", the retention of changelog records are only best effort: the asynchronous compaction task will merge the changelog records into one record, so if the\nstream source does not consume timely, only the merged record for each key can be read after compaction. The solution is to reserve some buffer time for the reader by adjusting the compaction strategy, such as\nthe compaction options: ",(0,i.yg)("a",{parentName:"p",href:"#compaction"},(0,i.yg)("inlineCode",{parentName:"a"},"compaction.delta_commits"))," and ",(0,i.yg)("a",{parentName:"p",href:"#compaction"},(0,i.yg)("inlineCode",{parentName:"a"},"compaction.delta_seconds")),"."))),(0,i.yg)("h3",{id:"append-mode"},"Append Mode"),(0,i.yg)("p",null,"For ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT")," mode write operation, the current work flow is:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For Merge_On_Read table, the small file strategies are by default applied: tries to append to the small avro log files first"),(0,i.yg)("li",{parentName:"ul"},"For Copy_On_Write table, write new parquet files directly, no small file strategies are applied")),(0,i.yg)("p",null,"Hudi supports rich clustering strategies to optimize the files layout for ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT")," mode:"),(0,i.yg)("h4",{id:"inline-clustering"},"Inline Clustering"),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Only Copy_On_Write table is supported."))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"write.insert.cluster")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},"Whether to merge small files while ingesting, for COW table, open the option to enable the small file merging strategy(no deduplication for keys but the throughput will be affected)")))),(0,i.yg)("h4",{id:"async-clustering"},"Async Clustering"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.schedule.enabled")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},"Whether to schedule clustering plan during write process, by default false")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.delta_commits")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"4")),(0,i.yg)("td",{parentName:"tr",align:null},"Delta commits to schedule the clustering plan, only valid when ",(0,i.yg)("inlineCode",{parentName:"td"},"clustering.schedule.enabled")," is true")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.async.enabled")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},"Whether to execute clustering plan asynchronously, by default false")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.tasks")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"4")),(0,i.yg)("td",{parentName:"tr",align:null},"Parallelism of the clustering tasks")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.strategy.target.file.max.bytes")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"1024*1024*1024")),(0,i.yg)("td",{parentName:"tr",align:null},"The target file size for clustering group, by default 1GB")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.strategy.small.file.limit")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"600")),(0,i.yg)("td",{parentName:"tr",align:null},"The file that has less size than the threshold (unit MB) are candidates for clustering")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.strategy.sort.columns")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"N/A")),(0,i.yg)("td",{parentName:"tr",align:null},"The columns to sort by when clustering")))),(0,i.yg)("h4",{id:"clustering-plan-strategy"},"Clustering Plan Strategy"),(0,i.yg)("p",null,"Custom clustering strategy is supported."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.partition.filter.mode")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"NONE")),(0,i.yg)("td",{parentName:"tr",align:null},"Valid options 1) ",(0,i.yg)("inlineCode",{parentName:"td"},"NONE"),": no limit; 2) ",(0,i.yg)("inlineCode",{parentName:"td"},"RECENT_DAYS"),": choose partitions that represent recent days; 3) ",(0,i.yg)("inlineCode",{parentName:"td"},"SELECTED_PARTITIONS"),": specific partitions")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.strategy.daybased.lookback.partitions")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"2")),(0,i.yg)("td",{parentName:"tr",align:null},"Valid for ",(0,i.yg)("inlineCode",{parentName:"td"},"RECENT_DAYS")," mode")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.strategy.cluster.begin.partition")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"N/A")),(0,i.yg)("td",{parentName:"tr",align:null},"Valid for ",(0,i.yg)("inlineCode",{parentName:"td"},"SELECTED_PARTITIONS")," mode, specify the partition to begin with(inclusive)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.strategy.cluster.end.partition")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"N/A")),(0,i.yg)("td",{parentName:"tr",align:null},"Valid for ",(0,i.yg)("inlineCode",{parentName:"td"},"SELECTED_PARTITIONS")," mode, specify the partition to end with(inclusive)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.strategy.partition.regex.pattern")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"N/A")),(0,i.yg)("td",{parentName:"tr",align:null},"The regex to filter the partitions")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"clustering.plan.strategy.partition.selected")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"N/A")),(0,i.yg)("td",{parentName:"tr",align:null},"Specific partitions separated by comma ",(0,i.yg)("inlineCode",{parentName:"td"},","))))),(0,i.yg)("h3",{id:"bucket-index"},"Bucket Index"),(0,i.yg)("p",null,"By default, flink uses the state-backend to keep the file index: the mapping from primary key to fileId. When the input data set is large,\nthere is possibility the cost of the state be a bottleneck, the bucket index use deterministic hash algorithm for shuffling the records into\nbuckets, thus can avoid the storage and query overhead of indexes."),(0,i.yg)("h4",{id:"options-3"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"index.type")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"FLINK_STATE")),(0,i.yg)("td",{parentName:"tr",align:null},"Set up as ",(0,i.yg)("inlineCode",{parentName:"td"},"BUCKET")," to use bucket index")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"hoodie.bucket.index.hash.field")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},"Primary key"),(0,i.yg)("td",{parentName:"tr",align:null},"Can be a subset of the primary key")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"hoodie.bucket.index.num.buckets")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"4")),(0,i.yg)("td",{parentName:"tr",align:null},"The number of buckets per-partition, it is immutable once set up")))),(0,i.yg)("p",null,"Comparing to state index:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Bucket index has no computing and storage cost of state-backend index, thus has better performance"),(0,i.yg)("li",{parentName:"ul"},"Bucket index can not expand the buckets dynamically, the state-backend index can expand the buckets dynamically based on current file layout"),(0,i.yg)("li",{parentName:"ul"},"Bucket index can not handle changes among partitions(no limit if the input itself is CDC stream), state-backend index has no limit")),(0,i.yg)("h3",{id:"rate-limit"},"Rate Limit"),(0,i.yg)("p",null,"There are many use cases that user put the full history data set onto the message queue together with the realtime incremental data. Then they consume the data from the queue into the hudi from the earliest offset using flink. Consuming history data set has these characteristics:\n1). The instant throughput is huge 2). It has serious disorder (with random writing partitions). It will lead to degradation of writing performance and throughput glitches. For this case, the speed limit parameter can be turned on to ensure smooth writing of the flow."),(0,i.yg)("h4",{id:"options-4"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"write.rate.limit")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"0")),(0,i.yg)("td",{parentName:"tr",align:null},"Default disable the rate limit")))))}p.isMDXComponent=!0},45859:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cdc-2-hudi-d151389758f4ce3fd873c1258b0a8ce5.png"}}]);