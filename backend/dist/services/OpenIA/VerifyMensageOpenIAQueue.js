'use strict';const s=b,t=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x1df;let h=e[f];return h;},b(c,d);}(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=-parseInt(q(0x1e9))/0x1*(parseInt(r(0x1e0))/0x2)+parseInt(q(0x202))/0x3+-parseInt(r(0x200))/0x4+-parseInt(q(0x1e8))/0x5+-parseInt(q(0x1fd))/0x6+-parseInt(r(0x1f1))/0x7*(-parseInt(q(0x1f0))/0x8)+-parseInt(q(0x205))/0x9*(-parseInt(q(0x1ef))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2757b));var __importDefault=this&&this[s(0x1ec)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object[t(0x1eb)](exports,s(0x203),{'value':!![]});const Contact_1=__importDefault(require(t(0x1f4))),openIARestClient_1=require(t(0x1df)),CreateMessageSystemService_1=__importDefault(require(s(0x1e4))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),UpdateQueueIATicket_1=__importDefault(require(t(0x207))),ContactWallet_1=__importDefault(require(s(0x206))),VerifyContactBaileys_1=require(t(0x1f6)),VerifyMensageOpenIAQueue=async(c,d,e=![],f=![],g,h)=>{const u=t,v=t;if(c[u(0x1fc)]===v(0x1fa)&&!c['isGroup']&&!c[u(0x1e1)]&&c['is_chat_ia']&&d[v(0x1e5)]){if(h&&h[u(0x1ed)])return;const i=await ContactWallet_1['default'][u(0x1f5)]({'where':{'contactId':c[v(0x1f8)]}});if(!!i){await(0x0,UpdateQueueIATicket_1['default'])(null,c,i[v(0x1e7)]);return;}try{const j=await Contact_1['default'][v(0x1ea)](c['contactId']),k=await Whatsapp_1[v(0x1f7)][u(0x1ea)](c['whatsappId']);let l;if(e)l=await(0x0,openIARestClient_1[u(0x1f2)])({'message':{'id':u(0x1f3),'contact_name':j[v(0x1fe)],'ticket_id':c['id'],'body':'Olá','sender_number':k['number'],'receiver_number':j['number']}});else{const n=await(0x0,VerifyContactBaileys_1[u(0x1fb)])(h);l=await(0x0,openIARestClient_1[u(0x1f2)])({'message':{'id':g['id'],'contact_name':j[u(0x1fe)],'ticket_id':c['id'],'body':n,'sender_number':k['number'],'receiver_number':j['number']}});}l=JSON['parse'](l);const m={'body':l[v(0x1e6)][u(0x1e2)],'fromMe':!![],'read':!![],'sendType':u(0x1f9)};await(0x0,CreateMessageSystemService_1[v(0x1f7)])({'msg':m,'tenantId':c[v(0x201)],'ticket':c,'sendType':m[u(0x1e3)],'status':v(0x1fa)});if(l['message']['typeMessage']=='Transfer'){const o=f?c[u(0x1ff)]:k[u(0x1ee)];await(0x0,UpdateQueueIATicket_1[u(0x1f7)])(o,c);}}catch(p){console[v(0x204)](p);}}};exports[s(0x1f7)]=VerifyMensageOpenIAQueue;function a(){const w=['671418ZUCdgw','name','queueId','938180UljeoD','tenantId','831684gySFxl','__esModule','log','18siVVpK','../../models/ContactWallet','../TicketServices/UpdateQueueIATicket','../../restClients/openIARestClient','2Qlwqlu','answered','answer','sendType','../MessageServices/CreateMessageSystemService','from_ia','message','walletId','720360pWdLYO','137121WnfWtx','findByPk','defineProperty','__importDefault','fromMe','queue_transf','2514730LAfmEQ','34456WrfJTc','14SovwYx','sendMessageToIA','primeira\x20mensagem','../../models/Contact','findOne','../WbotServices/helpers/VerifyContactBaileys','default','contactId','bot','pending','getBodyMessage','status'];a=function(){return w;};return a();}