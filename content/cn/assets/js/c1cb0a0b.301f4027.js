"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[55167],{15680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>g});var i=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=d(a),p=o,g=c["".concat(s,".").concat(p)]||c[p]||u[p]||n;return a?i.createElement(g,r(r({ref:t},h),{},{components:a})):i.createElement(g,r({ref:t},h))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<n;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},66718:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=a(58168),o=(a(96540),a(15680));const n={title:"Storage",keywords:["hudi","writing","reading"]},r="Storage FAQ",l={unversionedId:"faq_storage",id:"version-0.15.0/faq_storage",title:"Storage",description:"Does Hudi support cloud storage/object stores?",source:"@site/versioned_docs/version-0.15.0/faq_storage.md",sourceDirName:".",slug:"/faq_storage",permalink:"/cn/docs/faq_storage",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/faq_storage.md",tags:[],version:"0.15.0",frontMatter:{title:"Storage",keywords:["hudi","writing","reading"]},sidebar:"docs",previous:{title:"Table Services",permalink:"/cn/docs/faq_table_services"},next:{title:"Integrations",permalink:"/cn/docs/faq_integrations"}},s=[{value:"Does Hudi support cloud storage/object stores?",id:"does-hudi-support-cloud-storageobject-stores",children:[],level:3},{value:"What is the difference between copy-on-write (COW) vs merge-on-read (MOR) table types?",id:"what-is-the-difference-between-copy-on-write-cow-vs-merge-on-read-mor-table-types",children:[],level:3},{value:"How do I migrate my data to Hudi?",id:"how-do-i-migrate-my-data-to-hudi",children:[],level:3},{value:"How to convert an existing COW table to MOR?",id:"how-to-convert-an-existing-cow-table-to-mor",children:[],level:3},{value:"How can I find the average record size in a commit?",id:"how-can-i-find-the-average-record-size-in-a-commit",children:[],level:3},{value:"How does the Hudi indexing work &amp; what are its benefits?",id:"how-does-the-hudi-indexing-work--what-are-its-benefits",children:[],level:3},{value:"Can I switch from one index type to another without having to rewrite the entire table?",id:"can-i-switch-from-one-index-type-to-another-without-having-to-rewrite-the-entire-table",children:[],level:3},{value:"I have an existing dataset and want to evaluate Hudi using portion of that data ?",id:"i-have-an-existing-dataset-and-want-to-evaluate-hudi-using-portion-of-that-data-",children:[],level:3},{value:"Why does maintain record level commit metadata? Isn&#39;t tracking table version at file level good enough?\xa0",id:"why-does-maintain-record-level-commit-metadata-isnt-tracking-table-version-at-file-level-good-enough",children:[],level:3},{value:"Why partition fields are also stored in parquet files in addition to the partition path ?",id:"why-partition-fields-are-also-stored-in-parquet-files-in-addition-to-the-partition-path-",children:[],level:3},{value:"How do I configure Bloom filter (when Bloom/Global_Bloom index is used)?",id:"how-do-i-configure-bloom-filter-when-bloomglobal_bloom-index-is-used",children:[],level:3},{value:"How do I verify datasource schema reconciliation in Hudi?",id:"how-do-i-verify-datasource-schema-reconciliation-in-hudi",children:[],level:3},{value:"Can I change keygenerator for an existing table?",id:"can-i-change-keygenerator-for-an-existing-table",children:[],level:3},{value:"Is Hudi JVM dependent? Does Hudi leverage Java specific serialization?",id:"is-hudi-jvm-dependent-does-hudi-leverage-java-specific-serialization",children:[],level:3}],d={toc:s},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,i.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"storage-faq"},"Storage FAQ"),(0,o.yg)("h3",{id:"does-hudi-support-cloud-storageobject-stores"},"Does Hudi support cloud storage/object stores?"),(0,o.yg)("p",null,"Yes. Generally speaking, Hudi is able to provide its functionality on any Hadoop FileSystem implementation and thus can read and write tables on ",(0,o.yg)("a",{parentName:"p",href:"/docs/cloud"},"Cloud stores")," (Amazon S3 or Microsoft Azure or Google Cloud Storage). Over time, Hudi has also incorporated specific design aspects that make building Hudi tables on the cloud easy, such as ",(0,o.yg)("a",{parentName:"p",href:"/docs/configurations#hoodieconsistencycheckenabled"},"consistency checks for s3"),", Zero moves/renames involved for data files."),(0,o.yg)("h3",{id:"what-is-the-difference-between-copy-on-write-cow-vs-merge-on-read-mor-table-types"},"What is the difference between copy-on-write (COW) vs merge-on-read (MOR) table types?"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Copy On Write")," - This storage type enables clients to ingest data on columnar file formats, currently parquet. Any new data that is written to the Hudi table using COW storage type, will write new parquet files. Updating an existing set of rows will result in a rewrite of the entire parquet files that collectively contain the affected rows being updated. Hence, all writes to such tables are limited by parquet writing performance, the larger the parquet file, the higher is the time taken to ingest the data."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Merge On Read")," - This storage type enables clients to ingest data quickly onto row based data format such as avro. Any new data that is written to the Hudi table using MOR table type, will write new log/delta files that internally store the data as avro encoded bytes. A compaction process (configured as inline or asynchronous) will convert log file format to columnar file format (parquet). Two different InputFormats expose 2 different views of this data, Read Optimized view exposes columnar parquet reading performance while Realtime View exposes columnar and/or log reading performance respectively. Updating an existing set of rows will result in either a) a companion log/delta file for an existing base parquet file generated from a previous compaction or b) an update written to a log/delta file in case no compaction ever happened for it. Hence, all writes to such tables are limited by avro/log file writing performance, much faster than parquet. Although, there is a higher cost to pay to read log/delta files vs columnar (parquet) files."),(0,o.yg)("p",null,"More details can be found ",(0,o.yg)("a",{parentName:"p",href:"/docs/concepts/"},"here")," and also ",(0,o.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/Design+And+Architecture"},"Design And Architecture"),"."),(0,o.yg)("h3",{id:"how-do-i-migrate-my-data-to-hudi"},"How do I migrate my data to Hudi?"),(0,o.yg)("p",null,"Hudi provides built in support for rewriting your entire table into Hudi one-time using the HDFSParquetImporter tool available from the hudi-cli . You could also do this via a simple read and write of the dataset using the Spark datasource APIs. Once migrated, writes can be performed using normal means discussed ",(0,o.yg)("a",{parentName:"p",href:"faq_writing_tables#what-are-some-ways-to-write-a-hudi-table"},"here"),". This topic is discussed in detail ",(0,o.yg)("a",{parentName:"p",href:"/docs/migration_guide/"},"here"),", including ways to doing partial migrations."),(0,o.yg)("h3",{id:"how-to-convert-an-existing-cow-table-to-mor"},"How to convert an existing COW table to MOR?"),(0,o.yg)("p",null,"All you need to do is to edit the table type property in hoodie.properties(located at hudi_table_path/.hoodie/hoodie.properties)."),(0,o.yg)("p",null,"But manually changing it will result in checksum errors. So, we have to go via hudi-cli."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Copy existing hoodie.properties to a new location."),(0,o.yg)("li",{parentName:"ol"},"Edit table type to MERGE","_","ON","_","READ"),(0,o.yg)("li",{parentName:"ol"},"launch hudi-cli"),(0,o.yg)("li",{parentName:"ol"},"connect --path hudi","_","table","_","path"),(0,o.yg)("li",{parentName:"ol"},"repair overwrite-hoodie-props --new-props-file new","_","hoodie.properties")),(0,o.yg)("h3",{id:"how-can-i-find-the-average-record-size-in-a-commit"},"How can I find the average record size in a commit?"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"commit showpartitons")," command in ",(0,o.yg)("a",{parentName:"p",href:"/docs/cli"},"HUDI CLI"),' will show both "bytes written" and'),(0,o.yg)("p",null,'"records inserted." Divide the bytes written by records inserted to find the average size. Note that this answer assumes'),(0,o.yg)("p",null,"metadata overhead is negligible. For a small table (such as 5 columns, 100 records) this will not be the case."),(0,o.yg)("h3",{id:"how-does-the-hudi-indexing-work--what-are-its-benefits"},"How does the Hudi indexing work & what are its benefits?"),(0,o.yg)("p",null,"The indexing component is a key part of the Hudi writing and it maps a given recordKey to a fileGroup inside Hudi consistently. This enables faster identification of the file groups that are affected/dirtied by a given write operation."),(0,o.yg)("p",null,"Hudi supports a few options for indexing as below"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"HoodieBloomIndex")," : Uses a bloom filter and ranges information placed in the footer of parquet/base files (and soon log files as well)"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"HoodieGlobalBloomIndex")," : The non global indexing only enforces uniqueness of a key inside a single partition i.e the user is expected to know the partition under which a given record key is stored. This helps the indexing scale very well for even ",(0,o.yg)("a",{parentName:"li",href:"https://eng.uber.com/uber-big-data-platform/"},"very large datasets"),". However, in some cases, it might be necessary instead to do the de-duping/enforce uniqueness across all partitions and the global bloom index does exactly that. If this is used, incoming records are compared to files across the entire table and ensure a recordKey is only present in one partition."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"HBaseIndex")," : Apache HBase is a key value store, typically found in close proximity to HDFS. You can also store the index inside HBase, which could be handy if you are already operating HBase."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"HoodieSimpleIndex (default)")," : A simple index which reads interested fields (record key and partition path) from base files and joins with incoming records to find the tagged location."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"HoodieGlobalSimpleIndex")," : Global version of Simple Index, where in uniqueness is on record key across entire table."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"HoodieBucketIndex")," : Each partition has statically defined buckets to which records are tagged with. Since locations are tagged via hashing mechanism, this index lookup will be very efficient."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"HoodieSparkConsistentBucketIndex")," : This is also similar to Bucket Index. Only difference is that, data skews can be tackled by dynamically changing the bucket number.")),(0,o.yg)("p",null,"You can implement your own index if you'd like, by subclassing the ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieIndex")," class and configuring the index class name in configs."),(0,o.yg)("h3",{id:"can-i-switch-from-one-index-type-to-another-without-having-to-rewrite-the-entire-table"},"Can I switch from one index type to another without having to rewrite the entire table?"),(0,o.yg)("p",null,"It should be okay to switch between Bloom index and Simple index as long as they are not global."),(0,o.yg)("p",null,"Moving from global to non-global and vice versa may not work. Also switching between Hbase (gloabl index) and regular bloom might not work."),(0,o.yg)("h3",{id:"i-have-an-existing-dataset-and-want-to-evaluate-hudi-using-portion-of-that-data-"},"I have an existing dataset and want to evaluate Hudi using portion of that data ?"),(0,o.yg)("p",null,"You can bulk import portion of that data to a new hudi table. For example, if you want to try on a month of data -"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'spark.read.parquet("your_data_set/path/to/month")\n     .write.format("org.apache.hudi")\n     .option("hoodie.datasource.write.operation", "bulk_insert")\n     .option("hoodie.datasource.write.storage.type", "storage_type") // COPY_ON_WRITE or MERGE_ON_READ\n     .option("hoodie.datasource.write.recordkey.field", "<your key>").\n     .option("hoodie.datasource.write.partitionpath.field", "<your_partition>")\n     ...\n     .mode(SaveMode.Append)\n     .save(basePath);\n')),(0,o.yg)("p",null,"Once you have the initial copy, you can simply run upsert operations on this by selecting some sample of data every round"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'spark.read.parquet("your_data_set/path/to/month").limit(n) // Limit n records\n     .write.format("org.apache.hudi")\n     .option("hoodie.datasource.write.operation", "upsert")\n     .option("hoodie.datasource.write.recordkey.field", "<your key>").\n     .option("hoodie.datasource.write.partitionpath.field", "<your_partition>")\n     ...\n     .mode(SaveMode.Append)\n     .save(basePath);\n')),(0,o.yg)("p",null,"For merge on read table, you may want to also try scheduling and running compaction jobs. You can run compaction directly using spark submit on org.apache.hudi.utilities.HoodieCompactor or by using ",(0,o.yg)("a",{parentName:"p",href:"/docs/cli"},"HUDI CLI"),"."),(0,o.yg)("h3",{id:"why-does-maintain-record-level-commit-metadata-isnt-tracking-table-version-at-file-level-good-enough"},"Why does maintain record level commit metadata? Isn't tracking table version at file level good enough?\xa0"),(0,o.yg)("p",null,"By generating a commit time ahead of time, Hudi is able to stamp each record with effectively a transaction id that it's part of that commit enabling record level change tracking. This means, that even if that file is compacted/clustered (",(0,o.yg)("a",{parentName:"p",href:"/docs/clustering#how-is-compaction-different-from-clustering"},"they mean different things in Hudi"),") many times, in between incremental queries, we are able to ",(0,o.yg)("a",{parentName:"p",href:"/blog/2023/05/19/hudi-metafields-demystified"},"preserve history of the records"),'. Further more, Hudi is able to leverage compaction to amortize the cost of "catching up" for incremental readers by handing latest state of a record after a point in time - which is orders of magnitude efficient than processing each record. Other similar systems lack such decoupling of change streams from physical files the records were part of and core table management services being aware of the history of records.\xa0Such similar approaches of record level metadata fields for efficient incremental processing has been also applied in other leading industry ',(0,o.yg)("a",{parentName:"p",href:"https://twitter.com/apachehudi/status/1676021143697002496?s=20"},"data warehouses"),"."),(0,o.yg)("h3",{id:"why-partition-fields-are-also-stored-in-parquet-files-in-addition-to-the-partition-path-"},"Why partition fields are also stored in parquet files in addition to the partition path ?"),(0,o.yg)("p",null,"Hudi supports customizable partition values which could be a derived value of another field. Also, storing the partition value only as part of the field results in losing type information when queried by various query engines."),(0,o.yg)("h3",{id:"how-do-i-configure-bloom-filter-when-bloomglobal_bloom-index-is-used"},"How do I configure Bloom filter (when Bloom/Global","_","Bloom index is used)?"),(0,o.yg)("p",null,"Bloom filters are used in bloom indexes to look up the location of record keys in write path. Bloom filters are used only when the index type is chosen as \u201cBLOOM\u201d or \u201cGLOBAL","_","BLOOM\u201d. Hudi has few config knobs that users can use to tune their bloom filters."),(0,o.yg)("p",null,"On a high level, hudi has two types of blooms: Simple and Dynamic."),(0,o.yg)("p",null,"Simple, as the name suggests, is simple. Size is statically allocated based on few configs."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.bloom.index.filter.type"),": SIMPLE"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.index.bloom.num_entries")," refers to the total number of entries per bloom filter, which refers to one file slice. Default value is 60000."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.index.bloom.fpp")," refers to the false positive probability with the bloom filter. Default value: 1","*","10^-9."),(0,o.yg)("p",null,"Size of the bloom filter depends on these two values. This is statically allocated and here is the formula that determines the size of bloom. Until the total number of entries added to the bloom is within the configured ",(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.index.bloom.num_entries")," value, the fpp will be honored. i.e. with default values of 60k and 1","*","10^-9, bloom filter serialized size = 430kb. But if more entries are added, then the false positive probability will not be honored. Chances that more false positives could be returned if you add more number of entries than the configured value. So, users are expected to set the right values for both num","_","entries and fpp."),(0,o.yg)("p",null,"Hudi suggests to have roughly 100 to 120 mb sized files for better query performance. So, based on the record size, one could determine how many records could fit into one data file."),(0,o.yg)("p",null,"Lets say your data file max size is 128Mb and default avg record size is 1024 bytes. Hence, roughly this translates to 130k entries per data file. For this config, you should set num","_","entries to ~130k."),(0,o.yg)("p",null,"Dynamic bloom filter:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.bloom.index.filter.type")," : DYNAMIC"),(0,o.yg)("p",null,"This is an advanced version of the bloom filter which grows dynamically as the number of entries grows. So, users are expected to set two values wrt num","_","entries. ",(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.index.bloom.num_entries")," will determine the starting size of the bloom. ",(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.bloom.index.filter.dynamic.max.entries")," will determine the max size to which the bloom can grow upto. And fpp needs to be set similar to \u201cSimple\u201d bloom filter. Bloom size will be allotted based on the first config ",(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.index.bloom.num_entries"),". Once the number of entries reaches this value, bloom will dynamically grow its size to 2X. This will go on until the size reaches a max of ",(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.bloom.index.filter.dynamic.max.entries")," value. Until the size reaches this max value, fpp will be honored. If the entries added exceeds the max value, then the fpp may not be honored."),(0,o.yg)("h3",{id:"how-do-i-verify-datasource-schema-reconciliation-in-hudi"},"How do I verify datasource schema reconciliation in Hudi?"),(0,o.yg)("p",null,"With Hudi you can reconcile schema, meaning you can apply target table schema on your incoming data, so if there's a missing field in your batch it'll be injected null value. You can enable schema reconciliation using ",(0,o.yg)("a",{parentName:"p",href:"/docs/configurations/#hoodiedatasourcewritereconcileschema"},"hoodie.datasource.write.reconcile.schema")," config."),(0,o.yg)("p",null,"Example how schema reconciliation works with Spark:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'hudi_options = {\n    \'hoodie.table.name\': "test_recon1",\n    \'hoodie.datasource.write.recordkey.field\': \'uuid\',\n    \'hoodie.datasource.write.table.name\': "test_recon1",\n    \'hoodie.datasource.write.precombine.field\': \'ts\',\n    \'hoodie.upsert.shuffle.parallelism\': 2,\n    \'hoodie.insert.shuffle.parallelism\': 2,\n    "hoodie.datasource.write.hive_style_partitioning":"true",\n    "hoodie.datasource.write.reconcile.schema": "true",\n    "hoodie.datasource.hive_sync.jdbcurl":"thrift://localhost:9083",\n    "hoodie.datasource.hive_sync.database":"hudi",\n    "hoodie.datasource.hive_sync.table":"test_recon1",\n    "hoodie.datasource.hive_sync.enable":"true",\n    "hoodie.datasource.hive_sync.mode": "hms"\n}\n\nsome_json = \'{"uuid":1,"ts":1,"Url":"hudi.apache.com"}\'\ndf = spark.read.json(sc.parallelize([some_json]))\n\ndf.write.format("hudi").mode("append").options(**hudi_options).save(base_path)\n\nspark.sql("select * from hudi.test_recon1;").show()\n\nmissing_field_json = \'{"uuid":2,"ts":1}\'\ndf = spark.read.json(sc.parallelize([missing_field_json]))\n\ndf.write.format("hudi").mode("append").options(**hudi_options).save(base_path)\n\nspark.sql("select * from hudi.test_recon1;").show()\n')),(0,o.yg)("p",null,"After first write:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","commit","_","time"),(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","commit","_","seqno"),(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","record","_","key"),(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","partition","_","path"),(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","file","_","name"),(0,o.yg)("th",{parentName:"tr",align:null},"Url"),(0,o.yg)("th",{parentName:"tr",align:null},"ts"),(0,o.yg)("th",{parentName:"tr",align:null},"uuid"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"20220622204044318"),(0,o.yg)("td",{parentName:"tr",align:null},"20220622204044318..."),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"890aafc0-d897-44d..."),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"http://hudi.apache.com"},"hudi.apache.com")),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},"1")))),(0,o.yg)("p",null,"After the second write:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","commit","_","time"),(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","commit","_","seqno"),(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","record","_","key"),(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","partition","_","path"),(0,o.yg)("th",{parentName:"tr",align:null},"_","hoodie","_","file","_","name"),(0,o.yg)("th",{parentName:"tr",align:null},"Url"),(0,o.yg)("th",{parentName:"tr",align:null},"ts"),(0,o.yg)("th",{parentName:"tr",align:null},"uuid"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"20220622204044318"),(0,o.yg)("td",{parentName:"tr",align:null},"20220622204044318..."),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"890aafc0-d897-44d..."),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"http://hudi.apache.com"},"hudi.apache.com")),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},"1")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"20220622204208997"),(0,o.yg)("td",{parentName:"tr",align:null},"20220622204208997..."),(0,o.yg)("td",{parentName:"tr",align:null},"2"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"890aafc0-d897-44d..."),(0,o.yg)("td",{parentName:"tr",align:null},"null"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},"2")))),(0,o.yg)("h3",{id:"can-i-change-keygenerator-for-an-existing-table"},"Can I change keygenerator for an existing table?"),(0,o.yg)("p",null,"No. There are small set of properties that cannot change once chosen. KeyGenerator is one among them. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/3f37d4fb08169c95930f9cc32389abf4e5cd5551/hudi-spark-datasource/hudi-spark-common/src/main/scala/org/apache/hudi/HoodieWriterUtils.scala#L128"},"Here")," is a code referecne where we"),(0,o.yg)("p",null,"validate the properties."),(0,o.yg)("h3",{id:"is-hudi-jvm-dependent-does-hudi-leverage-java-specific-serialization"},"Is Hudi JVM dependent? Does Hudi leverage Java specific serialization?"),(0,o.yg)("p",null,"Hudi was not originally designed as a database layer that would fit under the various big data query engines, that were painfully hard to integrate with (Spark did not have DataSet/DataSource APIs, Trino was still Presto, Presto SPI was still budding, Hive storage handlers were just out). Popular engines including Spark, Flink, Presto, Trino, and Athena do not have issues integrating with Hudi as they are all based on JVM, and access access to Timeline, Metadata table are well-abstracted by Hudi APIs. Even non-jvm engines like Redshift have successfully integrated with Hudi."),(0,o.yg)("p",null,'Since it was not thought of as a "format", the focus on the APIs for such lower level integrations and documenting the serialized bytes has been historically inadequate. However, with some understanding of the serialization, looking beyond the APIs used and focus on what the serialized bytes are, its possible to integrate Hudi from outside the JVM. For e.g Bloom filters are serialized as hex strings, from byte arrays/primitive types, and should be ',(0,o.yg)("strong",{parentName:"p"},"readable cross language"),". The Hudi Log Format bytes and layout are clearly defined as well, the header/footers are also binary serialized only with primitive types/byte arrays. So with the right endianity information and documentation of these bytes, ",(0,o.yg)("strong",{parentName:"p"},"cross jvm clients can read this"),". The Hudi metadata table uses ",(0,o.yg)("a",{parentName:"p",href:"https://hbase.apache.org/book.html#_hfile_format_2"},"HFile format")," as the base file format, which while being a well-documented open file format with clear protobuf specifications, does not have native readers. Community has taken efforts towards improving the docs on ",(0,o.yg)("a",{parentName:"p",href:"/tech-specs"},"tech specs"),". Going forward, Hudi community plans on improving the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/7080"},"table APIs")," to facilitate faster engine integrations, including native language support, as a big part of the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-69/rfc-69.md"},"Hudi 1.0")," format changes to generalize Hudi more."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"Note")),": ",(0,o.yg)("em",{parentName:"p"},"In a recent release the delete block keys were unintentionally serialized as kryo, and is being fixed in the 0.14 release. Thankfully, since Hudi\u2019s log blocks and format are versioned, when the file slice is compacted things return to normal.")))}c.isMDXComponent=!0}}]);