'use strict';const r=b,t=b;(function(c,d){const p=b,q=b,e=c();while(!![]){try{const f=parseInt(p(0x129))/0x1+-parseInt(p(0x13e))/0x2*(-parseInt(p(0x14b))/0x3)+parseInt(p(0x128))/0x4*(-parseInt(q(0x127))/0x5)+-parseInt(p(0x123))/0x6*(-parseInt(p(0x12c))/0x7)+-parseInt(p(0x125))/0x8*(-parseInt(p(0x14a))/0x9)+parseInt(p(0x135))/0xa*(parseInt(p(0x146))/0xb)+-parseInt(q(0x124))/0xc*(parseInt(q(0x131))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc0a39));function b(c,d){const e=a();return b=function(f,g){f=f-0x123;let h=e[f];return h;},b(c,d);}function a(){const w=['MediaField','3510BdRVtW','5572cThgAL','457116pettsQ','media','flow','98MGuwfv','reload','mediaUrl','userId','util','3313297lnzSEb','default','interactions','update','29590TmmGdV','promisify','__importDefault','split','length','data','nodeList','join','celularTeste','2UODvIj','../../errors/AppError','node','base64','name','findOne','writeFile','ERR_NO_CHAT_FLOW_FOUND','3245yaMUcg','type','__esModule','isActive','1007739kbtnGf','611439ryeJQJ','public','454098pqNAQb','60dqPRiP','32wsSfQs'];a=function(){return w;};return a();}var __importDefault=this&&this[r(0x137)]||function(c){const s=r;return c&&c[s(0x148)]?c:{'default':c};};Object['defineProperty'](exports,t(0x148),{'value':!![]});const util_1=require(t(0x130)),path_1=require('path'),fs_1=require('fs'),ChatFlow_1=__importDefault(require('../../models/ChatFlow')),AppError_1=__importDefault(require(r(0x13f))),writeFileAsync=(0x0,util_1[r(0x136)])(fs_1[r(0x144)]),UpdateChatFlowService=async({chatFlowData:c,chatFlowId:d,tenantId:e})=>{const u=t,v=r,{name:f,flow:g,userId:h,isActive:i,celularTeste:j}=c,k=await ChatFlow_1[u(0x132)][v(0x143)]({'where':{'id':d,'tenantId':e},'attributes':['id',u(0x142),'flow','userId','isActive',v(0x13d)]});if(!k)throw new AppError_1[(u(0x132))](v(0x145),0x194);for await(const l of g[v(0x12b)][v(0x13b)]){if(l['type']===v(0x140))for await(const m of l[u(0x133)]){if(m[v(0x147)]===v(0x126)&&m[v(0x13a)][v(0x12a)]){const n=new Date()['getTime']()+'-'+m[v(0x13a)][v(0x142)];await writeFileAsync((0x0,path_1[u(0x13c)])(__dirname,'..','..','..',u(0x14c),n),m[v(0x13a)][v(0x12a)][u(0x138)](u(0x141))[0x1],u(0x141)),delete m['data'][u(0x12a)],m[u(0x13a)][u(0x12e)]=n;}if(m[v(0x147)]==='MediaField'&&m[v(0x13a)]['mediaUrl']){const o=m['data'][v(0x12e)][v(0x138)]('/');m[u(0x13a)][v(0x12e)]=o[o[v(0x139)]-0x1];}}}return await k[v(0x134)]({'name':f,'flow':g[v(0x12b)],'userId':h,'isActive':g['isActive'],'celularTeste':g[v(0x13d)]}),await k[u(0x12d)]({'attributes':['id',u(0x142),u(0x12b),u(0x12f),v(0x149),v(0x13d)]}),k;};exports['default']=UpdateChatFlowService;