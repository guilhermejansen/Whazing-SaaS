'use strict';const u=b,v=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x84;let h=e[f];return h;},b(c,d);}(function(c,d){const s=b,t=b,e=c();while(!![]){try{const f=-parseInt(s(0x97))/0x1*(-parseInt(t(0x89))/0x2)+parseInt(s(0x93))/0x3+-parseInt(s(0x86))/0x4*(parseInt(s(0x87))/0x5)+parseInt(t(0x8b))/0x6*(parseInt(s(0x91))/0x7)+parseInt(t(0x94))/0x8*(parseInt(t(0x8a))/0x9)+parseInt(s(0x84))/0xa+-parseInt(t(0x96))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x245d7));Object['defineProperty'](exports,u(0x98),{'value':!![]});const sequelize_1=require(u(0x85));function a(){const z=['AutoReply','311024DWMzjj','DataTypes','840711eaRCHI','16GqfNcg','createTable','7476546XBgBQY','2qnpaEu','__esModule','dropTable','1835820WJpwOW','sequelize','4zXuaxr','394290NFfRkP','DATE','49574jzUGOb','973683tsdeTz','24UleMqj','INTEGER','SET\x20NULL','STRING','exports'];a=function(){return z;};return a();}module[v(0x8f)]={'up':c=>{const w=u,x=v;return c[w(0x95)](x(0x90),{'id':{'type':sequelize_1['DataTypes'][x(0x8c)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'reply':{'type':sequelize_1[x(0x92)][x(0x8e)],'allowNull':![]},'words':{'type':sequelize_1[x(0x92)][x(0x8e)],'allowNull':![]},'action':{'type':sequelize_1[w(0x92)]['INTEGER'],'allowNull':![],'defaultValue':0x0},'userId':{'type':sequelize_1['DataTypes']['INTEGER'],'references':{'model':'Users','key':'id'},'onUpdate':'CASCADE','onDelete':x(0x8d)},'createdAt':{'type':sequelize_1[x(0x92)][x(0x88)],'allowNull':![]},'updatedAt':{'type':sequelize_1[w(0x92)][x(0x88)],'allowNull':![]}});},'down':c=>{const y=v;return c[y(0x99)]('AutoReply');}};