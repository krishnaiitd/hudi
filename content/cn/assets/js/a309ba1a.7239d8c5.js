"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[15607],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>p});var a=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(i),h=r,p=m["".concat(s,".").concat(h)]||m[h]||u[h]||l;return i?a.createElement(p,n(n({ref:t},d),{},{components:i})):a.createElement(p,n({ref:t},d))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,n=new Array(l);n[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,n[1]=o;for(var c=2;c<l;c++)n[c]=i[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},24041:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=i(58168),r=(i(96540),i(15680));const l={title:"Rollback Mechanism",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},n=void 0,o={unversionedId:"rollbacks",id:"version-0.14.1/rollbacks",title:"Rollback Mechanism",description:"Your pipelines could fail due to numerous reasons like crashes, valid bugs in the code, unavailability of any external",source:"@site/versioned_docs/version-0.14.1/rollbacks.md",sourceDirName:".",slug:"/rollbacks",permalink:"/cn/docs/0.14.1/rollbacks",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/rollbacks.md",tags:[],version:"0.14.1",frontMatter:{title:"Rollback Mechanism",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Transformers",permalink:"/cn/docs/0.14.1/transforms"},next:{title:"Marker Mechanism",permalink:"/cn/docs/0.14.1/markers"}},s=[{value:"Handling partially failed commits",id:"handling-partially-failed-commits",children:[],level:3},{value:"Rolling back partially failed commits for a single writer",id:"rolling-back-partially-failed-commits-for-a-single-writer",children:[],level:3},{value:"Rolling back of partially failed commits w/ multi-writers",id:"rolling-back-of-partially-failed-commits-w-multi-writers",children:[{value:"Heartbeats",id:"heartbeats",children:[],level:4}],level:3},{value:"Related Resources",id:"related-resources",children:[],level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.yg)(d,(0,a.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Your pipelines could fail due to numerous reasons like crashes, valid bugs in the code, unavailability of any external\nthird-party system (like a lock provider), or user could kill the job midway to change some properties. A well-designed\nsystem should detect such partially failed commits, ensure dirty data is not exposed to the queries, and clean them up.\nHudi's rollback mechanism takes care of cleaning up such failed writes. "),(0,r.yg)("p",null,'Hudi\u2019s timeline forms the core for reader and writer isolation. If a commit has not transitioned to complete as per the\nhudi timeline, the readers will ignore the data from the respective write. And so partially failed writes are never read\nby any readers (for all query types). But the curious question is, how is the partially written data eventually deleted?\nDoes it require manual command to be executed from time to time or should it be automatically handled by the system? This\npage presents insights on how "rollback" in Hudi can automatically clean up handling partially failed writes without\nmanual input from users.'),(0,r.yg)("h3",{id:"handling-partially-failed-commits"},"Handling partially failed commits"),(0,r.yg)("p",null,'Hudi has a lot of platformization built in so as to ease the operationalization of lakehouse tables. One such feature\nis the automatic cleanup of partially failed commits. Users don\u2019t need to run any additional commands to clean up dirty\ndata or the data produced by failed commits. If you continue to write to hudi tables, one of your future commits will\ntake care of cleaning up older data that failed midway during a write/commit. We call this cleanup of a failed commit a\n"rollback". A rollback will revert everything about a commit, including deleting data and removal from the timeline.\nAdditionally, the restore operation utilizes a series rollbacks to undo completed commits.'),(0,r.yg)("p",null,"Let\u2019s zoom in a bit and understand how such cleanups happen and the challenges involved in such cleaning when\nmulti-writers are involved."),(0,r.yg)("h3",{id:"rolling-back-partially-failed-commits-for-a-single-writer"},"Rolling back partially failed commits for a single writer"),(0,r.yg)("p",null,"In case of single writer model, the rollback logic is fairly straightforward. Every action in Hudi's timeline goes\nthrough 3 states, namely requested, inflight and completed. Whenever a new commit starts, hudi checks the timeline\nfor any actions/commits that is not yet committed and that refers to partially failed commit. So, immediately rollback\nis triggered and all dirty data is cleaned up followed by cleaning up the commit instants from the timeline."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"An example illustration of single writer rollbacks",src:i(7713).A}),"\n",(0,r.yg)("em",{parentName:"p"},"Figure 1: single writer with eager rollbacks")),(0,r.yg)("h3",{id:"rolling-back-of-partially-failed-commits-w-multi-writers"},"Rolling back of partially failed commits w/ multi-writers"),(0,r.yg)("p",null,"The challenging part is when multi-writers are invoked. Just because a commit is still non-completed as per the\ntimeline, it does not mean current writer (new) can assume that it's a partially failed commit. Because, there could be\na concurrent writer that\u2019s currently making progress. Hudi has been designed to not have any centralized server\nrunning always and in such a case Hudi has an ingenious way to deduce such partially failed writes."),(0,r.yg)("h4",{id:"heartbeats"},"Heartbeats"),(0,r.yg)("p",null,"We are leveraging heartbeats to our rescue here. Each commit will keep emitting heartbeats from the start of the\nwrite until its completion. During rollback deduction, Hudi checks for heartbeat timeouts for all ongoing or incomplete\ncommits and detects partially failed commits on such timeouts. For any ongoing commits, the heartbeat should not\nhave elapsed the timeout. For example, if a commit\u2019s heartbeat is not updated for 10+ mins, we can safely assume the\noriginal writer has failed/crashed and is the incomplete commit is safe to clean up. So, the rollbacks in case of\nmulti-writers are lazy and is not eager as we saw with single writer model. But it is still automatic and users don\u2019t\nneed to execute any explicit command to trigger such cleanup of failed writes. When such lazy rollback kicks in, both\ndata files and timeline files for the failed writes are deleted."),(0,r.yg)("p",null,"Hudi employs a simple yet effective heartbeat mechanism to notify that a commit is still making progress. A heartbeat\nfile is created for every commit under \u201c.hoodie/.heartbeat/\u201d (for eg, \u201c.hoodie/.heartbeat/20230819183853177\u201d).\nThe writer will start a background thread which will keep updating this heartbeat file at a regular cadence to refresh\nthe last modification time of the file. So, checking for last modification time of the heartbeat file gives us\ninformation whether the writer that started the commit of interest is still making progress or not. On completion of\nthe commit, the heartbeat file is deleted. Or if the write failed midway, the last modification time of the heartbeat\nfile is no longer updated, so other writers can deduce the failed write after a period of time elapses."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"An example illustration of multi writer rollbacks",src:i(8780).A}),"\n",(0,r.yg)("em",{parentName:"p"},"Figure 2: multi-writer with lazy cleaning of failed commits")),(0,r.yg)("h2",{id:"related-resources"},"Related Resources"),(0,r.yg)("h3",null,"Videos"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Vi25q4vzogs"},"How to Rollback to Previous Checkpoint during Disaster in Apache Hudi using Glue 4.0 Demo"))))}m.isMDXComponent=!0},8780:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/multi_writer_rollback-d2e5309dc72fa06652d700e95a595e87.png"},7713:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/single_write_rollback-a53cee0fc3a346571f3869534ae1d1ac.png"}}]);