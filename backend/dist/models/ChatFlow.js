'use strict';const a4=b,a8=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x1ab;let h=e[f];return h;},b(c,d);}(function(c,d){const a0=b,a1=b,e=c();while(!![]){try{const f=-parseInt(a0(0x1c8))/0x1+-parseInt(a1(0x1ba))/0x2*(-parseInt(a1(0x1be))/0x3)+-parseInt(a1(0x1c0))/0x4*(-parseInt(a1(0x1e5))/0x5)+-parseInt(a1(0x1e0))/0x6+parseInt(a1(0x1de))/0x7+-parseInt(a0(0x1b4))/0x8*(-parseInt(a0(0x1c5))/0x9)+-parseInt(a1(0x1e2))/0xa*(parseInt(a1(0x1d1))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3e97b));var __decorate=this&&this['__decorate']||function(e,f,g,h){const a2=b,a3=b;var j=arguments['length'],k=j<0x3?f:h===null?h=Object[a2(0x1bb)](f,g):h,l;if(typeof Reflect===a2(0x1e1)&&typeof Reflect[a2(0x1ad)]===a3(0x1d2))k=Reflect['decorate'](e,f,g,h);else{for(var m=e[a3(0x1b2)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[a2(0x1c3)](f,g,k),k;},__metadata=this&&this[a4(0x1b1)]||function(c,d){const a5=a4,a6=a4;if(typeof Reflect===a5(0x1e1)&&typeof Reflect['metadata']==='function')return Reflect[a6(0x1d9)](c,d);},__importDefault=this&&this['__importDefault']||function(c){const a7=a4;return c&&c[a7(0x1e3)]?c:{'default':c};};Object[a8(0x1c3)](exports,a4(0x1e3),{'value':!![]});const sequelize_typescript_1=require(a8(0x1b5)),User_1=__importDefault(require(a8(0x1ab))),Tenant_1=__importDefault(require(a8(0x1b8)));let ChatFlow=class ChatFlow extends sequelize_typescript_1['Model']{get['flow'](){const a9=a8,aa=a8,c=this[a9(0x1c6)](a9(0x1d8));if(c){for(const d of c[a9(0x1d0)]){if(aa(0x1cd)!=='ggXPe'){if(d['type']===aa(0x1c9))for(const e of d[a9(0x1b3)]){if(a9(0x1d4)!==aa(0x1d4)){if(f[aa(0x1bc)]===aa(0x1c9))for(const g of k[aa(0x1b3)]){if(g[a9(0x1bc)]===aa(0x1b6)&&g[aa(0x1ce)][aa(0x1ac)]){const {BACKEND_URL:h,PROXY_PORT:i}=n['env'],j=g[a9(0x1ce)][a9(0x1ac)];g[aa(0x1ce)][aa(0x1df)]=j,g[a9(0x1ce)]['mediaUrl']=h+':'+i+aa(0x1db)+j;}}}else{if(e[a9(0x1bc)]===aa(0x1b6)&&e[aa(0x1ce)]['mediaUrl']){const {BACKEND_URL:g,PROXY_PORT:h}=process[a9(0x1c1)],i=e[aa(0x1ce)][a9(0x1ac)];e[aa(0x1ce)][a9(0x1df)]=i,e[aa(0x1ce)]['mediaUrl']=g+':'+h+a9(0x1db)+i;}}}}else{const {BACKEND_URL:l,PROXY_PORT:m}=g[a9(0x1c1)],n=h[a9(0x1ce)][aa(0x1ac)];i[a9(0x1ce)]['fileName']=n,j[aa(0x1ce)]['mediaUrl']=l+':'+m+aa(0x1db)+n;}}return c;}return{};}};__decorate([sequelize_typescript_1[a8(0x1b0)],sequelize_typescript_1[a8(0x1cb)],sequelize_typescript_1[a4(0x1d6)],__metadata(a8(0x1d3),String)],ChatFlow[a8(0x1c2)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x1d6)])(sequelize_typescript_1[a4(0x1c4)][a8(0x1d7)]),__metadata(a4(0x1d3),String)],ChatFlow[a4(0x1c2)],a8(0x1ae),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x1d5)])({}),sequelize_typescript_1[a8(0x1bf)],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a4(0x1c4)]['JSON']),__metadata(a4(0x1d3),Object),__metadata(a8(0x1af),[])],ChatFlow[a4(0x1c2)],'flow',null),__decorate([(0x0,sequelize_typescript_1[a8(0x1d5)])(!![]),sequelize_typescript_1[a4(0x1d6)],__metadata('design:type',Boolean)],ChatFlow[a8(0x1c2)],a4(0x1c7),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1[a4(0x1d6)],__metadata(a8(0x1d3),Boolean)],ChatFlow[a4(0x1c2)],'isDeleted',void 0x0),__decorate([(0x0,sequelize_typescript_1[a8(0x1d5)])(null),(0x0,sequelize_typescript_1[a8(0x1d6)])(sequelize_typescript_1[a8(0x1c4)]['TEXT']),__metadata('design:type',String)],ChatFlow['prototype'],'celularTeste',void 0x0),__decorate([(0x0,sequelize_typescript_1[a8(0x1b9)])(()=>User_1[a8(0x1dc)]),sequelize_typescript_1[a8(0x1d6)],__metadata(a8(0x1d3),Number)],ChatFlow['prototype'],'userId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x1e6)])(()=>User_1['default']),__metadata(a4(0x1d3),User_1[a8(0x1dc)])],ChatFlow['prototype'],a8(0x1da),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x1b9)])(()=>Tenant_1[a4(0x1dc)]),sequelize_typescript_1[a8(0x1d6)],__metadata(a8(0x1d3),Number)],ChatFlow[a8(0x1c2)],a8(0x1cc),void 0x0),__decorate([(0x0,sequelize_typescript_1[a8(0x1e6)])(()=>Tenant_1[a4(0x1dc)]),__metadata(a8(0x1d3),Tenant_1[a8(0x1dc)])],ChatFlow[a8(0x1c2)],a4(0x1bd),void 0x0),__decorate([sequelize_typescript_1[a4(0x1b7)],(0x0,sequelize_typescript_1[a8(0x1d6)])(sequelize_typescript_1[a4(0x1c4)][a4(0x1dd)](0x6)),__metadata(a8(0x1d3),Date)],ChatFlow[a8(0x1c2)],a4(0x1ca),void 0x0),__decorate([sequelize_typescript_1[a4(0x1e4)],(0x0,sequelize_typescript_1[a8(0x1d6)])(sequelize_typescript_1[a8(0x1c4)][a4(0x1dd)](0x6)),__metadata(a8(0x1d3),Date)],ChatFlow['prototype'],'updatedAt',void 0x0),ChatFlow=__decorate([(0x0,sequelize_typescript_1[a8(0x1cf)])({'freezeTableName':!![]})],ChatFlow),exports[a8(0x1dc)]=ChatFlow;function a(){const ab=['./Tenant','ForeignKey','38314fzxBOj','getOwnPropertyDescriptor','type','tenant','15WBMDjV','AllowNull','468MOUuui','env','prototype','defineProperty','DataType','801HQMYDw','getDataValue','isActive','53367NWiSvn','node','createdAt','AutoIncrement','tenantId','HCRGm','data','Table','nodeList','135806QIDPYl','function','design:type','rbEux','Default','Column','TEXT','flow','metadata','user','/public/','default','DATE','2552221JzenRr','fileName','905982zDtzSg','object','380RNmtoU','__esModule','UpdatedAt','18695aDdcBb','BelongsTo','./User','mediaUrl','decorate','name','design:paramtypes','PrimaryKey','__metadata','length','interactions','2880RhvIqX','sequelize-typescript','MediaField','CreatedAt'];a=function(){return ab;};return a();}