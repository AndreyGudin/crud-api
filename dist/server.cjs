(()=>{var e={738:(e,t,n)=>{const s=n(147),o=n(17),i=n(37),r=n(968).version,a=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function d(e){console.log(`[dotenv@${r}][DEBUG] ${e}`)}const c={config:function(e){let t=o.resolve(process.cwd(),".env"),n="utf8";const r=Boolean(e&&e.debug),a=Boolean(e&&e.override);var l;e&&(null!=e.path&&(t="~"===(l=e.path)[0]?o.join(i.homedir(),l.slice(1)):l),null!=e.encoding&&(n=e.encoding));try{const e=c.parse(s.readFileSync(t,{encoding:n}));return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?(!0===a&&(process.env[t]=e[t]),r&&d(!0===a?`"${t}" is already defined in \`process.env\` and WAS overwritten`:`"${t}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[t]=e[t]})),{parsed:e}}catch(e){return r&&d(`Failed to load ${t} ${e.message}`),{error:e}}},parse:function(e){const t={};let n,s=e.toString();for(s=s.replace(/\r\n?/gm,"\n");null!=(n=a.exec(s));){const e=n[1];let s=n[2]||"";s=s.trim();const o=s[0];s=s.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===o&&(s=s.replace(/\\n/g,"\n"),s=s.replace(/\\r/g,"\r")),t[e]=s}return t}};e.exports.config=c.config,e.exports.parse=c.parse,e.exports=c},147:e=>{"use strict";e.exports=require("fs")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")},968:e=>{"use strict";e.exports=JSON.parse('{"name":"dotenv","version":"16.0.3","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"require":"./lib/main.js","types":"./lib/main.d.ts","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^17.0.9","decache":"^4.6.1","dtslint":"^3.7.0","sinon":"^12.0.1","standard":"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2","tap":"^15.1.6","tar":"^6.1.11","typescript":"^4.5.4"},"engines":{"node":">=12"}}')}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=require("node:http"),t=require("node:cluster");var s=n.n(t);const o=require("node:os");var i=n(738);const r=require("crypto");var a=n.n(r);const d={randomUUID:a().randomUUID},c=new Uint8Array(256);let l=c.length;function p(){return l>c.length-16&&(a().randomFillSync(c),l=0),c.slice(l,l+=16)}const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));const f=function(e,t,n){if(d.randomUUID&&!t&&!e)return d.randomUUID();const s=(e=e||{}).random||(e.rng||p)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=s[e];return t}return function(e,t=0){return(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase()}(s)},v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,g=function(e){return"string"==typeof e&&v.test(e)};function y(e,t,n){var s,o,i,r,a,d;return i=this,r=void 0,d=function*(){const i=null===(s=e.url)||void 0===s?void 0:s.substring(0,e.url.lastIndexOf("/")+1),r=null===(o=e.url)||void 0===o?void 0:o.split("/")[3];if(r&&!g(r)&&"/api/users/"===i)t.writeHead(400,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Validation failed",message:"UUID is not valid"}));else if(r&&g(r)&&"/api/users/"===i){t.setHeader("Content-Type","application/json");const e=n.findIndex((e=>e.id===r));e>=0?(n.splice(e,1),t.statusCode=204,t.write(JSON.stringify({title:"Deleted",message:"User has been deleted"})),t.end()):(t.statusCode=404,t.write(JSON.stringify({title:"Not Found",message:"User does not exist"})),t.end())}else t.writeHead(404,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Not Found",message:"Route does not exist"}))},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{o(d.next(e))}catch(e){t(e)}}function s(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(n,s)}o((d=d.apply(i,r||[])).next())}))}const{pid:m}=process;function h(e,t,n){var s,o;const i=null===(s=e.url)||void 0===s?void 0:s.substring(0,e.url.lastIndexOf("/")+1),r=null===(o=e.url)||void 0===o?void 0:o.split("/")[3];if("/api/users/"===e.url)t.statusCode=200,t.setHeader("Content-Type","application/json"),t.write(JSON.stringify(n)),t.end();else if(r&&!g(r)&&"/api/users/"===i)t.writeHead(400,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Validation failed",message:"UUID is not valid"}));else if(r&&g(r)&&"/api/users/"===i){t.setHeader("Content-Type","application/json");const e=n.filter((e=>e.id===r));e.length>0?(t.statusCode=200,t.write(JSON.stringify(e)),t.end()):(t.statusCode=404,t.write(JSON.stringify({title:"Not Found",message:"User does not exist"})),t.end())}else t.writeHead(404,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Not Found",message:"Route does not exist"}))}function w(e){return new Promise(((t,n)=>{try{let n="";e.on("data",(e=>{n+=e})),e.on("end",(()=>{t(n?JSON.parse(n):{username:"Temp",age:23,hobbies:["temp","temp"]})}))}catch(e){console.log(e),n(e)}}))}const{pid:j}=process;function b(e,t,n){return s=this,o=void 0,r=function*(){if("/api/users/"===e.url)try{const s=yield w(e),o=f();"username"in s&&"age"in s&&"hobbies"in s?(n.push(Object.assign(Object.assign({},s),{id:o})),t.statusCode=201,t.setHeader("Content-Type","application/json"),t.write(JSON.stringify(Object.assign(Object.assign({},s),{id:o}))),t.end()):(t.writeHead(400,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Validation is failed",message:"Request body is not valid"})))}catch(e){t.writeHead(400,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Validation is failed",message:"Request body is not valid"}))}else t.writeHead(404,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Not Found",message:"Route does not exist"}))},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{d(r.next(e))}catch(e){t(e)}}function a(e){try{d(r.throw(e))}catch(e){t(e)}}function d(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(n,a)}d((r=r.apply(s,o||[])).next())}));var s,o,i,r}function O(e,t,n){var s,o,i,r,a,d;return i=this,r=void 0,d=function*(){const i=null===(s=e.url)||void 0===s?void 0:s.substring(0,e.url.lastIndexOf("/")+1),r=null===(o=e.url)||void 0===o?void 0:o.split("/")[3];if(r&&!g(r)&&"/api/users/"===i)t.writeHead(400,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Validation failed",message:"UUID is not valid"}));else if(r&&g(r)&&"/api/users/"===i){t.setHeader("Content-Type","application/json");const s=n.findIndex((e=>e.id===r)),o=yield w(e);s>=0?(t.statusCode=200,n[s]=Object.assign(Object.assign({},o),{id:r}),t.write(JSON.stringify(n[s])),t.end()):(t.statusCode=404,t.write(JSON.stringify({title:"Not Found",message:"User does not exist"})),t.end())}else t.writeHead(404,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Not Found",message:"Route does not exist"}))},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{o(d.next(e))}catch(e){t(e)}}function s(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(n,s)}o((d=d.apply(i,r||[])).next())}))}var S=function(e,t,n,s){return new(n||(n=Promise))((function(o,i){function r(e){try{d(s.next(e))}catch(e){i(e)}}function a(e){try{d(s.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}d((s=s.apply(e,t||[])).next())}))};i.config({path:"./src/.env"}),f();let C=[];const{PORT:N}=process.env,{MODE_ENV:x}=process.env,{pid:T}=process;if("single"===x){const t=function(t){return(0,e.createServer)(((e,n)=>{try{switch(n.statusCode=200,e.method){case"GET":h(e,n,t);break;case"POST":b(e,n,t);break;case"PUT":O(e,n,t);break;case"DELETE":y(e,n,t);break;default:n.statusCode=404,n.setHeader("Content-Type","application/json"),n.write(JSON.stringify({title:"Not Found",message:"Route does not exist"})),n.end()}}catch(e){n.writeHead(500,{"Content-Type":"application/json"}),n.end(JSON.stringify({title:"Server Error",message:"Error on server side"}))}}))}(C);t.listen(N,(()=>{console.log(`Server started om port : ${N}`)}))}else if("multi"===x){const t=(0,o.cpus)().length;if(s().isPrimary){let n=[];for(let e=0;e<t;e+=1)s().fork({portChild:e}).on("message",(e=>{const t=e.users;n=[...t]}));const o=(0,e.createServer)(((e,t)=>{}));let i=1;o.on("request",((o,r)=>S(void 0,void 0,void 0,(function*(){try{const a={hostname:"localhost",port:+N+i,path:o.url,method:o.method,headers:{"Content-Type":"application/json"}},d=(0,e.request)(a,(e=>S(void 0,void 0,void 0,(function*(){r.statusCode=e.statusCode,r.setHeader("Content-Type",e.headers["content-type"]);const t=yield w(e);r.write(JSON.stringify(t)),r.end()}))));if("POST"===o.method||"PUT"===o.method){const e=yield w(o);d.write(JSON.stringify(e))}d.end(),i+=1,i>t&&(i=1),Object.keys(s().workers).forEach((e=>{var t;return null===(t=s().workers[e])||void 0===t?void 0:t.send({users:n})}))}catch(e){r.writeHead(500,{"Content-Type":"application/json"}),r.end(JSON.stringify({title:"Server Error",message:"Error on server side"}))}})))),o.listen(N,(()=>{console.log(`Balancer started om port : ${o.address().port}, pid: ${T}`)}))}else{const{portChild:t}=process.env,n=(0,e.createServer)(((e,t)=>{try{switch(e.method){case"GET":h(e,t,C);break;case"POST":b(e,t,C);break;case"PUT":O(e,t,C);break;case"DELETE":y(e,t,C);break;default:t.statusCode=404,t.setHeader("Content-Type","application/json"),t.write(JSON.stringify({title:"Not Found",message:"Route does not exist"})),t.end()}t.on("finish",(()=>{null===process||void 0===process||process.send({users:C})}))}catch(e){t.writeHead(500,{"Content-Type":"application/json"}),t.end(JSON.stringify({title:"Server Error",message:"Error on server side"}))}}));null===process||void 0===process||process.on("message",(e=>{const t=e.users;C=[...t]}));const s=+N+ +t+1;n.listen(s,(()=>{console.log(`Server started om port : ${n.address().port}, pid: ${T}`)}))}}})()})();