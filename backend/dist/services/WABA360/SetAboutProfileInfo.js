'use strict';function a(){const r=['__importDefault','patch','51780VOIPsW','5197056EFKoJH','defineProperty','546320CVKWIL','error','axios','../../errors/AppError','logger','5520IQmLjk','/v1/settings/profile/about','53517yivBOC','default','360_NOT_SET_ABOUT:\x20','__esModule','258213ZYsIqI','2211468iCObdO','88WtgIVd'];a=function(){return r;};return a();}const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x76))/0x1+parseInt(k(0x6f))/0x2+parseInt(l(0x7a))/0x3+parseInt(k(0x69))/0x4*(parseInt(l(0x6c))/0x5)+parseInt(l(0x74))/0x6+parseInt(l(0x7b))/0x7+-parseInt(l(0x6d))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x31036));var __importDefault=this&&this[m(0x6a)]||function(c){const n=m;return c&&c[n(0x79)]?c:{'default':c};};Object[o(0x6e)](exports,o(0x79),{'value':!![]});const axios_1=__importDefault(require(m(0x71))),AppError_1=__importDefault(require(m(0x72))),logger_1=require('../../utils/logger'),SetAboutProfileInfo=async({text:c,apiKey:d})=>{const p=m,q=m,e=process['env']['API_URL_360']+p(0x75);try{return await(0x0,axios_1['default'])({'method':q(0x6b),'url':e,'data':{'text':c},'headers':{'D360-API-KEY':d,'Content-Type':'application/json'}}),!![];}catch(f){logger_1[q(0x73)][q(0x70)](f);throw new AppError_1[(q(0x77))](p(0x78)+f);}};function b(c,d){const e=a();return b=function(f,g){f=f-0x69;let h=e[f];return h;},b(c,d);}exports[o(0x77)]=SetAboutProfileInfo;