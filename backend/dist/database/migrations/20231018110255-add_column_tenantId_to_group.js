'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0x14d;let h=e[f];return h;},b(c,d);}function a(){const p=['Tenants','998xoTTuT','5591460KnUzaP','5737998KqYBiu','restrict','isActive','BOOLEAN','6698727djkmul','tenantId','describeTable','__esModule','DataTypes','Groups','4091391aZlyBg','33191150GsHVix','1894XRAkQo','7QAmzXW','defineProperty','5AwBGKS','3496216jNaBuM','INTEGER','CASCADE','removeColumn'];a=function(){return p;};return a();}const j=b,k=b;(function(c,d){const h=b,i=b,e=c();while(!![]){try{const f=parseInt(h(0x14d))/0x1*(parseInt(h(0x156))/0x2)+-parseInt(i(0x162))/0x3+-parseInt(i(0x157))/0x4*(parseInt(i(0x150))/0x5)+parseInt(h(0x158))/0x6*(-parseInt(i(0x14e))/0x7)+-parseInt(h(0x151))/0x8+parseInt(h(0x15c))/0x9+parseInt(i(0x163))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd05fe));Object[j(0x14f)](exports,k(0x15f),{'value':!![]});const sequelize_1=require('sequelize');module['exports']={'up':async c=>{const l=k,m=j,d=await c[l(0x15e)]('Groups');(!d||!d['tenantId'])&&await c['addColumn'](m(0x161),'tenantId',{'type':sequelize_1[l(0x160)][m(0x152)],'references':{'model':m(0x155),'key':'id'},'onUpdate':l(0x153),'onDelete':m(0x159),'allowNull':![],'defaultValue':0x1}),(!d||!d[l(0x15a)])&&await c['addColumn'](l(0x161),m(0x15a),{'type':sequelize_1['DataTypes'][m(0x15b)],'allowNull':![],'defaultValue':!![]});},'down':async c=>{const n=j,o=k;await c['removeColumn'](n(0x161),n(0x15d)),await c[n(0x154)](o(0x161),'isActive');}};