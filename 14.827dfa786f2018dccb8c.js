(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{D2Nl:function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var l=r(t("JHWP")),o=t("Iwry"),u=/url\((['"]?)([^'"]+?)\1\)/g;function i(n){var e=[];return n.replace(u,function(n,t,r){return e.push(r),n}),e.filter(function(n){return!o.isDataUrl(n)})}function a(n){return-1!==n.search(u)}e.shouldEmbed=a,e.default=function(n,e,t){return a(n)?Promise.resolve(n).then(i).then(function(r){return r.reduce(function(n,r){return n.then(function(n){return function(n,t,r,u){var i=e?function(n,e){if(n.match(/^[a-z]+:\/\//i))return n;if(n.match(/^\/\//))return window.location.protocol+n;if(n.match(/^[a-z]+:/i))return n;var t=document.implementation.createHTMLDocument(),r=t.createElement("base"),l=t.createElement("a");return t.head.appendChild(r),t.body.appendChild(l),e&&(r.href=e),l.href=n,l.href}(t,e):t;return Promise.resolve(i).then(function(n){return l.default(n,u)}).then(function(n){return o.toDataURL(n,o.getMimeType(t))}).then(function(e){return n.replace(new RegExp("(url\\(['\"]?)("+t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")+")(['\"]?\\))","g"),"$1"+e+"$3")}).then(function(n){return n},function(){return i})}(n,r,0,t)})},Promise.resolve(n))}):Promise.resolve(n)}},Iwry:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l="application/font-woff",o={woff:l,woff2:l,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function u(n){var e=/\.([^.\/]*?)$/g.exec(n);return e?e[1]:""}function i(n){var e=u(n).toLowerCase();return o[e]||""}function a(n){return new Promise(function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=t,r.crossOrigin="anonymous",r.src=n})}function c(n){return n.split(/,/)[1]}function s(n,e){var t=window.getComputedStyle(n).getPropertyValue(e);return parseFloat(t.replace("px",""))}function f(){return window.devicePixelRatio||1}e.uuid=(r=0,function(){return r+=1,"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+r}),e.parseExtension=u,e.getMimeType=i,e.delay=function(n){return function(e){return new Promise(function(t){setTimeout(function(){t(e)},n)})}},e.createImage=a,e.isDataUrl=function(n){return-1!==n.search(/^(data:)/)},e.toDataURL=function(n,e){return"data:"+e+";base64,"+n},e.getDataURLContent=c,e.canvasToBlob=function(n){return n.toBlob?new Promise(function(e){n.toBlob(e)}):function(n){return new Promise(function(e){for(var t=window.atob(n.toDataURL().split(",")[1]),r=t.length,l=new Uint8Array(r),o=0;o<r;o+=1)l[o]=t.charCodeAt(o);e(new Blob([l],{type:"image/png"}))})}(n)},e.toArray=function(n){for(var e=[],t=0,r=n.length;t<r;t+=1)e.push(n[t]);return e},e.getNodeWidth=function(n){var e=s(n,"border-left-width"),t=s(n,"border-right-width");return n.scrollWidth+e+t},e.getNodeHeight=function(n){var e=s(n,"border-top-width"),t=s(n,"border-bottom-width");return n.scrollHeight+e+t},e.getPixelRatio=f,e.svgToDataURL=function(n){return Promise.resolve().then(function(){return(new XMLSerializer).serializeToString(n)}).then(encodeURIComponent).then(function(n){return"data:image/svg+xml;charset=utf-8,"+n})},e.getBlobFromImageURL=function(n){return a(n).then(function(e){var t=e.width,r=e.height,l=document.createElement("canvas"),o=l.getContext("2d"),u=f();return l.width=t*u,l.height=r*u,l.style.width=""+t,l.style.height=""+r,o.scale(u,u),o.drawImage(e,0,0),c(l.toDataURL(i(n)))})}},JHWP:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("Iwry");e.default=function(n,e){return e.cacheBust&&(n+=(/\?/.test(n)?"&":"?")+(new Date).getTime()),(window.fetch?window.fetch(n).then(function(n){return n.blob()}).then(function(n){return new Promise(function(e,t){var r=new FileReader;r.onloadend=function(){return e(r.result)},r.onerror=t,r.readAsDataURL(n)})}).then(r.getDataURLContent).catch(function(){return new Promise(function(n,e){e()})}):new Promise(function(e,t){var l=new XMLHttpRequest;l.onreadystatechange=function(){if(4===l.readyState)if(200===l.status){var o=new FileReader;o.onloadend=function(){e(r.getDataURLContent(o.result))},o.readAsDataURL(l.response)}else t(new Error("Failed to fetch resource: "+n+", status: "+l.status))},l.ontimeout=function(){t(new Error("Timeout of 30000ms occured while fetching resource: "+n))},l.responseType="blob",l.timeout=3e4,l.open("GET",n,!0),l.send()})).catch(function(t){var r="";if(e.imagePlaceholder){var l=e.imagePlaceholder.split(/,/);l&&l[1]&&(r=l[1])}var o="Failed to fetch resource: "+n;return t&&(o="string"==typeof t?t:t.message),o&&console.error(o),r})}},VuTa:function(n,e,t){"use strict";t.r(e);var r=t("CcnG"),l=t("mrSG"),o=t("mYgU"),u=t("ZYCi"),i=t("ZZ/e"),a=t("2/4T"),c=t("m6fB"),s=t("uAZ1"),f=function(){function n(n,e,t,r,l){var o=this;this.modalController=n,this.documentService=e,this.socialSharingService=t,this.translate=r,this.router=l,this.imageheight=900,this.preloadFonts=ssw.paragraph("M547x518S2ff00482x483S11911518x488S26600531x451"),this.router.events.subscribe(function(n){if(n instanceof u.e){var e=o.documentService.getFSW();o.document=ssw.paragraph(e)}})}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this.documentService.getFSW();this.document=ssw.paragraph(n)},n.prototype.share=function(){var n=this,e=this.documentService.getFSW();this.document=ssw.paragraph(e,"png"),requestAnimationFrame(function(){return n.sharecontinuation(e)})},n.prototype.copy=function(){var n=this,e=this.documentService.getFSW();this.document=ssw.paragraph(e,"png"),requestAnimationFrame(function(){return n.copycontinuation(e)})},n.prototype.heightChange=function(n){this.signtextHeight=n.detail.value},n.prototype.edit=function(){return this.router.navigateByUrl("/edit")},n.prototype.sharecontinuation=function(n){return l.b(this,void 0,void 0,function(){var e,t;return l.e(this,function(r){switch(r.label){case 0:return e=document.getElementsByClassName("signtext")[0],t=new Image,console.log("sharecontinuation"),[4,o.toPng(e).then(function(e){t.src=e,t.crossOrigin="anonymous",this.socialSharingService.share(t),this.document=ssw.paragraph(n)})];case 1:return r.sent(),[2]}})})},n.prototype.copycontinuation=function(n){return l.b(this,void 0,void 0,function(){var e,t,r,u,i;return l.e(this,function(a){return e=document.getElementsByClassName("signtext")[0],t=window.getComputedStyle(e),r=e.scrollWidth>0?e.scrollWidth:parseInt(t.getPropertyValue("width"),10),u=e.scrollHeight>0?e.scrollHeight:parseInt(t.getPropertyValue("height"),10),i=this,o.toPng(e,{width:r,height:u}).then(function(e){return l.b(this,void 0,void 0,function(){var t;return l.e(this,function(r){switch(r.label){case 0:return console.log(e),[4,i.modalController.create({component:s.a,componentProps:{imagebase64:e}})];case 1:return[4,(t=r.sent()).present()];case 2:return r.sent(),[4,t.onDidDismiss()];case 3:return r.sent(),i.document=ssw.paragraph(n),[2]}})})}).catch(function(n){console.error("oops, something went wrong!",n)}),[2]})})},n.prototype.isCordova=function(){return!!window.cordova},n}(),h=function(){return function(){}}(),d=t("pMnS"),g=t("oBZk"),p=t("A7o+"),m=t("ZJwn"),b=t("ZYjt"),v=t("gIcY"),w=t("Ip0R"),y=r.nb({encapsulation:0,styles:[[".document[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto}.document[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100%}.preloadFonts[_ngcontent-%COMP%]{width:0;height:0;display:inline-block;overflow:hidden}ion-range[_ngcontent-%COMP%]{padding-top:0}"]],data:{}});function P(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,5,"ion-button",[["color","primary"],["fill","solid"]],null,[[null,"click"]],function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.share()&&r),r},g.E,g.c)),r.ob(1,49152,null,0,i.i,[r.h,r.k,r.z],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),r.Gb(2,0,[" ",""])),r.Bb(131072,p.i,[p.j,r.h]),(n()(),r.pb(4,0,null,0,1,"ion-icon",[["name","share"]],null,null,null,g.N,g.l)),r.ob(5,49152,null,0,i.A,[r.h,r.k,r.z],{name:[0,"name"]},null)],function(n,e){n(e,1,0,"primary","solid"),n(e,5,0,"share")},function(n,e){n(e,2,0,r.Hb(e,2,0,r.zb(e,3).transform("Share")))})}function C(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,3,"ion-button",[["color","primary"],["fill","solid"]],null,[[null,"click"]],function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.copy()&&r),r},g.E,g.c)),r.ob(1,49152,null,0,i.i,[r.h,r.k,r.z],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),r.pb(2,0,null,0,1,"ion-icon",[["name","copy"]],null,null,null,g.N,g.l)),r.ob(3,49152,null,0,i.A,[r.h,r.k,r.z],{name:[0,"name"]},null)],function(n,e){n(e,1,0,"primary","solid"),n(e,3,0,"copy")},null)}function x(n){return r.Ib(0,[r.Bb(0,m.a,[b.b]),(n()(),r.pb(1,0,null,null,40,"ion-header",[],null,null,null,g.M,g.k)),r.ob(2,49152,null,0,i.z,[r.h,r.k,r.z],null,null),(n()(),r.pb(3,0,null,0,38,"ion-toolbar",[],null,null,null,g.db,g.B)),r.ob(4,49152,null,0,i.zb,[r.h,r.k,r.z],null,null),(n()(),r.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,g.F,g.d)),r.ob(6,49152,null,0,i.j,[r.h,r.k,r.z],null,null),(n()(),r.pb(7,0,null,0,1,"ion-menu-button",[],null,null,null,g.R,g.q)),r.ob(8,49152,null,0,i.P,[r.h,r.k,r.z],null,null),(n()(),r.pb(9,0,null,0,3,"ion-title",[],null,null,null,g.cb,g.A)),r.ob(10,49152,null,0,i.xb,[r.h,r.k,r.z],null,null),(n()(),r.Gb(11,0,[" "," "])),r.Bb(131072,p.i,[p.j,r.h]),(n()(),r.pb(13,0,null,0,22,"ion-item",[],null,null,null,g.O,g.m)),r.ob(14,49152,null,0,i.F,[r.h,r.k,r.z],null,null),(n()(),r.pb(15,0,null,0,20,"ion-grid",[],null,null,null,g.L,g.j)),r.ob(16,49152,null,0,i.y,[r.h,r.k,r.z],null,null),(n()(),r.pb(17,0,null,0,5,"ion-row",[["justify-content-center",""]],null,null,null,g.X,g.v)),r.ob(18,49152,null,0,i.gb,[r.h,r.k,r.z],null,null),(n()(),r.pb(19,0,null,0,3,"ion-label",[],null,null,null,g.P,g.n)),r.ob(20,49152,null,0,i.L,[r.h,r.k,r.z],null,null),(n()(),r.Gb(21,0,["",""])),r.Bb(131072,p.i,[p.j,r.h]),(n()(),r.pb(23,0,null,0,12,"ion-row",[],null,null,null,g.X,g.v)),r.ob(24,49152,null,0,i.gb,[r.h,r.k,r.z],null,null),(n()(),r.pb(25,0,null,0,10,"ion-range",[["max","900"],["min","50"],["pin","true"],["step","10"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,e,t){var l=!0,o=n.component;return"ionBlur"===e&&(l=!1!==r.zb(n,26)._handleBlurEvent()&&l),"ionChange"===e&&(l=!1!==r.zb(n,26)._handleChangeEvent(t.target.value)&&l),"ngModelChange"===e&&(l=!1!==(o.imageheight=t)&&l),"ionChange"===e&&(l=!1!==o.heightChange(t)&&l),l},g.W,g.u)),r.ob(26,16384,null,0,i.Jb,[r.k],null,null),r.Db(1024,null,v.b,function(n){return[n]},[i.Jb]),r.ob(28,671744,null,0,v.e,[[8,null],[8,null],[8,null],[6,v.b]],{model:[0,"model"]},{update:"ngModelChange"}),r.Db(2048,null,v.c,null,[v.e]),r.ob(30,16384,null,0,v.d,[[4,v.c]],null,null),r.ob(31,49152,null,0,i.Z,[r.h,r.k,r.z],{max:[0,"max"],min:[1,"min"],pin:[2,"pin"],step:[3,"step"]},null),(n()(),r.pb(32,0,null,0,1,"ion-icon",[["name","resize"],["size","small"],["slot","start"]],null,null,null,g.N,g.l)),r.ob(33,49152,null,0,i.A,[r.h,r.k,r.z],{name:[0,"name"],size:[1,"size"]},null),(n()(),r.pb(34,0,null,0,1,"ion-icon",[["name","resize"],["slot","end"]],null,null,null,g.N,g.l)),r.ob(35,49152,null,0,i.A,[r.h,r.k,r.z],{name:[0,"name"]},null),(n()(),r.pb(36,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,g.F,g.d)),r.ob(37,49152,null,0,i.j,[r.h,r.k,r.z],null,null),(n()(),r.gb(16777216,null,0,1,null,P)),r.ob(39,16384,null,0,w.i,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(n()(),r.gb(16777216,null,0,1,null,C)),r.ob(41,16384,null,0,w.i,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(n()(),r.pb(42,0,null,null,14,"ion-content",[["padding",""]],null,null,null,g.H,g.f)),r.ob(43,49152,null,0,i.s,[r.h,r.k,r.z],null,null),(n()(),r.pb(44,0,null,0,3,"div",[["class","document"],["id","document"]],null,null,null,null,null)),(n()(),r.pb(45,0,null,null,2,"div",[["class","signtext"]],[[4,"height","px"]],null,null,null,null)),(n()(),r.pb(46,0,null,null,1,"span",[],[[8,"innerHTML",1]],null,null,null,null)),r.Cb(47,1),(n()(),r.pb(48,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,g.J,g.g)),r.ob(49,49152,null,0,i.u,[r.h,r.k,r.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),r.pb(50,0,null,0,3,"ion-fab-button",[],null,null,null,g.I,g.h)),r.ob(51,49152,null,0,i.v,[r.h,r.k,r.z],null,null),(n()(),r.pb(52,0,null,0,1,"ion-icon",[["name","create"]],null,[[null,"click"]],function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.edit()&&r),r},g.N,g.l)),r.ob(53,49152,null,0,i.A,[r.h,r.k,r.z],{name:[0,"name"]},null),(n()(),r.pb(54,0,null,0,0,"canvas",[["id","canvas"]],null,null,null,null,null)),(n()(),r.pb(55,0,null,0,1,"span",[["class","preloadFonts"]],[[8,"innerHTML",1]],null,null,null,null)),r.Cb(56,1)],function(n,e){var t=e.component;n(e,28,0,t.imageheight),n(e,31,0,"900","50","true","10"),n(e,33,0,"resize","small"),n(e,35,0,"resize"),n(e,39,0,t.isCordova()),n(e,41,0,!t.isCordova()),n(e,49,0,"end","bottom"),n(e,53,0,"create")},function(n,e){var t=e.component;n(e,11,0,r.Hb(e,11,0,r.zb(e,12).transform("Document"))),n(e,21,0,r.Hb(e,21,0,r.zb(e,22).transform("Image height"))),n(e,25,0,r.zb(e,30).ngClassUntouched,r.zb(e,30).ngClassTouched,r.zb(e,30).ngClassPristine,r.zb(e,30).ngClassDirty,r.zb(e,30).ngClassValid,r.zb(e,30).ngClassInvalid,r.zb(e,30).ngClassPending),n(e,45,0,t.signtextHeight);var l=r.Hb(e,46,0,n(e,47,0,r.zb(e,0),t.document));n(e,46,0,l);var o=r.Hb(e,55,0,n(e,56,0,r.zb(e,0),t.preloadFonts));n(e,55,0,o)})}function S(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,1,"app-view",[],null,null,null,x,y)),r.ob(1,114688,null,0,f,[i.Db,a.a,c.a,p.j,u.n],null,null)],function(n,e){n(e,1,0)},null)}var R=r.lb("app-view",f,S,{},{},[]),z=t("iTUp"),E=t("PCNd");t.d(e,"ViewPageModuleNgFactory",function(){return _});var _=r.mb(h,[],function(n){return r.wb([r.xb(512,r.j,r.bb,[[8,[d.a,R]],[3,r.j],r.x]),r.xb(4608,w.k,w.j,[r.u,[2,w.r]]),r.xb(4608,v.g,v.g,[]),r.xb(4608,i.b,i.b,[r.z,r.g]),r.xb(4608,i.Db,i.Db,[i.b,r.j,r.q]),r.xb(4608,i.Gb,i.Gb,[i.b,r.j,r.q]),r.xb(1073742336,w.b,w.b,[]),r.xb(1073742336,v.f,v.f,[]),r.xb(1073742336,v.a,v.a,[]),r.xb(1073742336,i.Bb,i.Bb,[]),r.xb(1073742336,u.p,u.p,[[2,u.v],[2,u.n]]),r.xb(1073742336,z.a,z.a,[]),r.xb(1073742336,p.g,p.g,[]),r.xb(1073742336,E.a,E.a,[]),r.xb(1073742336,h,h,[]),r.xb(1024,u.l,function(){return[[{path:"",component:f}]]},[])])})},WfVW:function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var l=t("Iwry"),o=r(t("JHWP")),u=r(t("D2Nl"));e.default=function n(e,t){return e instanceof Element?Promise.resolve(e).then(function(n){return function(n,e){var t=n.style.getPropertyValue("background");return t?Promise.resolve(t).then(function(n){return u.default(n,null,e)}).then(function(e){return n.style.setProperty("background",e,n.style.getPropertyPriority("background")),n}):Promise.resolve(n)}(n,t)}).then(function(n){return function(n,e){return n instanceof HTMLImageElement&&!l.isDataUrl(n.src)?Promise.resolve(n.src).then(function(n){return o.default(n,e)}).then(function(e){return l.toDataURL(e,l.getMimeType(n.src))}).then(function(e){return new Promise(function(t,r){n.onload=t,n.onerror=r,n.src=e})}).then(function(){return n},function(){return n}):Promise.resolve(n)}(n,t)}).then(function(e){return function(e,t){var r=l.toArray(e.childNodes).map(function(e){return n(e,t)});return Promise.all(r).then(function(){return e})}(e,t)}):Promise.resolve(e)}},Ya8i:function(n,e,t){"use strict";var r=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var l=t("Iwry"),o=r(t("D2Nl"));function u(n){if(void 0===n)return[];var e=n,t=[],r=new RegExp("(\\/\\*[\\s\\S]*?\\*\\/)","gi");e=e.replace(r,"");for(var l,o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");null!==(l=o.exec(e));)t.push(l[0]);e=e.replace(o,"");for(var u=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");null!==(l=u.exec(e));)t.push(l[0]);return t}function i(n,e){return fetch(n).then(function(e){return{url:n,cssText:e.text()}},function(n){console.log("ERROR FETCHING CSS: ",n.toString())})}function a(n){return n.cssText.then(function(e){var t=e,r=(t.match(/url\([^)]+\)/g)||[]).map(function(e){var r=e.replace(/url\(([^]+)\)/g,"$1");return r.startsWith("https://")||(r=new URL(r,n.url).href),new Promise(function(n,l){fetch(r).then(function(n){return n.blob()}).then(function(r){var l=new FileReader;l.addEventListener("load",function(r){t=t.replace(e,"url("+l.result+")"),n([e,l.result])}),l.readAsDataURL(r)}).catch(l)})});return Promise.all(r).then(function(){return t})})}function c(n){var e=[],t=[];return n.forEach(function(e){if("cssRules"in e)try{l.toArray(e.cssRules).forEach(function(n){n.type===CSSRule.IMPORT_RULE&&t.push(i(n.href).then(a).then(function(n){u(n).forEach(function(n){e.insertRule(n,e.cssRules.length)})}).catch(function(n){console.log("Error loading remote css",n.toString())}))})}catch(o){var r=n.find(function(n){return null===n.href})||document.styleSheets[0];null!=e.href&&t.push(i(e.href).then(a).then(function(n){u(n).forEach(function(n){r.insertRule(n,e.cssRules.length)})}).catch(function(n){console.log("Error loading remote stylesheet",n.toString())})),console.log("Error inlining remote css file",o.toString())}}),Promise.all(t).then(function(){return n.forEach(function(n){if("cssRules"in n)try{l.toArray(n.cssRules).forEach(function(n){e.push(n)})}catch(t){console.log("Error while reading CSS rules from "+n.href,t.toString())}}),e})}function s(n){return n.filter(function(n){return n.type===CSSRule.FONT_FACE_RULE}).filter(function(n){return o.shouldEmbed(n.style.getPropertyValue("src"))})}function f(n){return new Promise(function(e,t){n.ownerDocument||t(new Error("Provided element is not within a Document")),e(l.toArray(n.ownerDocument.styleSheets))}).then(c).then(s)}e.parseWebFontRules=f,e.default=function(n,e){return f(n).then(function(n){return Promise.all(n.map(function(n){return o.default(n.cssText,n.parentStyleSheet?n.parentStyleSheet.href:null,e)}))}).then(function(n){return n.join("\n")}).then(function(e){var t=document.createElement("style"),r=document.createTextNode(e);return t.appendChild(r),n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),n})}},mYgU:function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var l=r(t("yOtm")),o=r(t("Ya8i")),u=r(t("WfVW")),i=r(t("xkiS")),a=r(t("t0N9")),c=t("Iwry");function s(n,e){return void 0===e&&(e={}),{width:e.width||c.getNodeWidth(n),height:e.height||c.getNodeHeight(n)}}function f(n,e){void 0===e&&(e={});var t=s(n,e),r=t.width,c=t.height;return l.default(n,e.filter,!0).then(function(n){return o.default(n,e)}).then(function(n){return u.default(n,e)}).then(function(n){return a.default(n,e)}).then(function(n){return i.default(n,r,c)})}function h(n,e){return void 0===e&&(e={}),f(n,e).then(c.createImage).then(c.delay(100)).then(function(t){var r=document.createElement("canvas"),l=r.getContext("2d"),o=c.getPixelRatio(),u=s(n,e),i=u.width,a=u.height;return r.width=i*o,r.height=a*o,r.style.width=""+i,r.style.height=""+a,l.scale(o,o),e.backgroundColor&&(l.fillStyle=e.backgroundColor,l.fillRect(0,0,r.width,r.height)),l.drawImage(t,0,0),r})}function d(n,e){void 0===e&&(e={});var t=s(n,e),r=t.width,l=t.height;return h(n,e).then(function(n){return n.getContext("2d").getImageData(0,0,r,l).data})}function g(n,e){return void 0===e&&(e={}),h(n,e).then(function(n){return n.toDataURL()})}function p(n,e){return void 0===e&&(e={}),h(n,e).then(function(n){return n.toDataURL("image/jpeg",e.quality||1)})}function m(n,e){return void 0===e&&(e={}),h(n,e).then(c.canvasToBlob)}e.toSvgDataURL=f,e.toCanvas=h,e.toPixelData=d,e.toPng=g,e.toJpeg=p,e.toBlob=m,e.default={toSvgDataURL:f,toCanvas:h,toPixelData:d,toPng:g,toJpeg:p,toBlob:m}},t0N9:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e){var t=n.style;return e.backgroundColor&&(t.backgroundColor=e.backgroundColor),e.width&&(t.width=e.width+"px"),e.height&&(t.height=e.height+"px"),e.style&&Object.assign(t,e.style),n}},vTYg:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("Iwry");e.default=function(n,e){[":before",":after"].forEach(function(t){return function(n,e,t){var l=window.getComputedStyle(n,t),o=l.getPropertyValue("content");if(""!==o&&"none"!==o){var u=r.uuid(),i=document.createElement("style");i.appendChild(function(n,e,t){var l="."+n+":"+e,o=t.cssText?function(n){var e=n.getPropertyValue("content");return n.cssText+" content: "+e+";"}(t):function(n){return r.toArray(n).map(function(e){return e+": "+n.getPropertyValue(e)+(n.getPropertyPriority(e)?" !important":"")+";"}).join(" ")}(t);return document.createTextNode(l+"{"+o+"}")}(u,t,l)),e.className=e.className+" "+u,e.appendChild(i)}}(n,e,t)})}},xkiS:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("Iwry");e.default=function(n,e,t){var l="http://www.w3.org/2000/svg",o=document.createElementNS(l,"svg"),u=document.createElementNS(l,"foreignObject");return o.setAttributeNS("","width",""+e),o.setAttributeNS("","height",""+t),u.setAttributeNS("","width","100%"),u.setAttributeNS("","height","100%"),u.setAttributeNS("","x","0"),u.setAttributeNS("","y","0"),u.setAttributeNS("","externalResourcesRequired","true"),o.appendChild(u),u.appendChild(n),r.svgToDataURL(o)}},yOtm:function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var l=t("Iwry"),o=r(t("vTYg"));function u(n){return n instanceof HTMLCanvasElement?l.createImage(n.toDataURL()):n.tagName&&"svg"===n.tagName.toLowerCase()?Promise.resolve(n).then(function(n){return l.svgToDataURL(n)}).then(l.createImage):Promise.resolve(n.cloneNode(!1))}e.default=function n(e,t,r){return r||!t||t(e)?Promise.resolve(e).then(u).then(function(r){return function(t,r,o){var u=l.toArray(e.childNodes);return 0===u.length?Promise.resolve(r):u.reduce(function(e,t){return e.then(function(){return n(t,o)}).then(function(n){n&&r.appendChild(n)})},Promise.resolve()).then(function(){return r})}(0,r,t)}).then(function(n){return function(n,e){return e instanceof Element?Promise.resolve().then(function(){return function(n,e){var t=window.getComputedStyle(n),r=e.style;t.cssText?r.cssText=t.cssText:l.toArray(t).forEach(function(n){r.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(n,e)}).then(function(){return o.default(n,e)}).then(function(){return function(n,e){n instanceof HTMLTextAreaElement&&(e.innerHTML=n.value),n instanceof HTMLInputElement&&e.setAttribute("value",n.value)}(n,e)}).then(function(){return e}):e}(e,n)}):Promise.resolve(null)}}}]);