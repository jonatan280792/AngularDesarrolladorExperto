(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/Rdr":function(e,t,s){"use strict";s.d(t,"a",function(){return a});var n=s("nsOn"),i=s("fXoL");let a=(()=>{class e{constructor(){const e=n.b.get("userData");e&&this.saveSessionData(e),this.patchSessionData=this.patchSessionData.bind(this)}getToken(){return this.token||""}setToken(e){this.token=e}removeToken(){this.token=null}isAuthenticated(){return this.token=sessionStorage.getItem("token"),this.token&&""!==this.token}getSessionData(){return this.sessionData}patchSessionData(e){return Object.assign(this.sessionData,e),this.saveSessionData(this.sessionData),this.sessionData}setSessionToken(){return n.b.get("token")}saveSessionToken(e){this.setToken(e),n.b.setRawString("token",e)}removeSessionToken(){return sessionStorage.removeItem("token"),n.b.delete("token")}saveSessionData(e){this.setToken(e.token),n.b.set("userData",e),this.sessionData=e}logoutUser(){n.b.deleteAll(),n.a.deleteAll()}removeSessionData(){n.b.delete("userData"),n.b.delete("token"),n.b.deleteAll(),this.sessionData=null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})()},0:function(e,t,s){e.exports=s("zUnb")},AytR:function(e,t,s){"use strict";s.d(t,"a",function(){return n});const n={production:!0,serviceUrl:"http://localhost:52395"}},LOCc:function(e,t,s){"use strict";s.d(t,"a",function(){return a});var n=s("AytR");const i={headers:new(s("tk/3").d)};i.headers=i.headers.set("Content-Type","application/json").set("Accept","application/json; text/plain");const a={api:{baseUrlMotor:n.a.serviceUrl,options:i,timeout:3e3},appParams:{currencyMask:{align:"right",allowNegative:!0,decimal:",",precision:2,prefix:"$ ",suffix:"",thousands:"."},session:{timeoutLogoutMinutes:5,timeoutWarningMinutes:4},translatesPathlibrary:"./assets/library/i18n/"}}},YMfE:function(e,t,s){"use strict";s.d(t,"a",function(){return n}),s.d(t,"c",function(){return a}),s.d(t,"b",function(){return i.b});const n=e=>(t,s)=>{const{value:n}=t.target,i=n.replace(/[^0-9]+/g,"");e.controls[s].setValue(i)};var i=s("nsOn");const a=e=>{let t=localStorage.getItem(e);if(t)return t;i.a.setRawString(e,"es"),t=localStorage.getItem(e)}},bPVY:function(e,t,s){"use strict";s.d(t,"a",function(){return a});var n=s("XNiG"),i=s("fXoL");let a=(()=>{class e{constructor(){this._darkBlue=new n.a,this._darkPink=new n.a,this.isDarkBlue=this._darkBlue.asObservable(),this.isDarkPink=this._darkPink.asObservable(),this._optionTheme=new n.a,this.optionTheme=this._optionTheme.asObservable()}setDarkBlue(e){this._darkBlue.next(e)}setDarkPink(e){this._darkPink.next(e)}setColorTheme(e){this._optionTheme.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})()},nsOn:function(e,t,s){"use strict";s.d(t,"a",function(){return i}),s.d(t,"b",function(){return n});const n={delete:e=>{sessionStorage.removeItem(e)},deleteAll:()=>{Object.keys(sessionStorage).forEach(e=>{sessionStorage.removeItem(e)})},deleteArray:e=>{e.forEach(e=>sessionStorage.removeItem(e))},get:e=>{const t=sessionStorage.getItem(e);return JSON.parse(t)},set:(e,t)=>{const s=JSON.stringify(t);sessionStorage.setItem(e,s)},setRawString:(e,t)=>{sessionStorage.setItem(e,t)},update:(e,t)=>{const s=Object.keys(t),n=sessionStorage.getItem(e);let i=JSON.parse(n);i||(i={});for(const a of s)i[a]=t[a];sessionStorage.setItem(e,JSON.stringify(i))}},i={delete:e=>{localStorage.removeItem(e)},deleteAll:()=>{Object.keys(localStorage).forEach(e=>{localStorage.removeItem(e)})},deleteArray:e=>{e.forEach(e=>localStorage.removeItem(e))},get:e=>{const t=localStorage.getItem(e);return JSON.parse(t)},set:(e,t)=>{const s=JSON.stringify(t);localStorage.setItem(e,s)},setRawString:(e,t)=>{localStorage.setItem(e,t)},update:(e,t)=>{const s=Object.keys(t),n=localStorage.getItem(e);let i=JSON.parse(n);i||(i={});for(const a of s)i[a]=t[a];localStorage.setItem(e,JSON.stringify(i))}}},zUnb:function(e,t,s){"use strict";s.r(t);var n=s("jhN1"),i=s("fXoL"),a=s("tk/3"),o=s("0IaG"),r=s("2Yyj"),c=s.n(r),u=s("sYmb"),l=s("bPVY"),b=s("ofXK"),d=s("tyNb");const g=function(e,t){return{"blue-dark":e,"pink-dark":t}};let h=(()=>{class e{constructor(e,t){this.translate=e,this.themeService=t,this.title="Frontend";const s=e.getBrowserLang();e.addLangs(["es","en"]),e.setDefaultLang("es"),e.use(s.match(/es|en/)?s:"es")}ngOnInit(){this.isDarkBlue=this.themeService.isDarkBlue,this.isDarkPink=this.themeService.isDarkPink,this.optionTheme=this.themeService.optionTheme}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(u.d),i.Ob(l.a))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-root"]],decls:5,vars:8,consts:[[1,"mat-typography",3,"ngClass"],[1,"mat-app-background"]],template:function(e,t){1&e&&(i.Ub(0,"div",0),i.gc(1,"async"),i.gc(2,"async"),i.Ub(3,"div",1),i.Pb(4,"router-outlet"),i.Tb(),i.Tb()),2&e&&i.kc("ngClass",i.nc(5,g,i.hc(1,1,t.isDarkBlue),i.hc(2,3,t.isDarkPink)))},directives:[b.i,d.d],pipes:[b.b],encapsulation:2}),e})(),m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&i.Pb(0,"router-outlet")},directives:[d.d],encapsulation:2}),e})();var p=s("R0Ic");const v=Object(p.m)("onSideNavChange",[Object(p.j)("close",Object(p.k)({"min-width":"50px"})),Object(p.j)("open",Object(p.k)({"min-width":"200px"})),Object(p.l)("close => open",Object(p.e)("250ms ease-in")),Object(p.l)("open => close",Object(p.e)("250ms ease-in"))]),S=Object(p.m)("onMainContentChange",[Object(p.j)("close",Object(p.k)({"margin-left":"62px"})),Object(p.j)("open",Object(p.k)({"margin-left":"200px"})),Object(p.l)("close => open",Object(p.e)("250ms ease-in")),Object(p.l)("open => close",Object(p.e)("250ms ease-in"))]),f=Object(p.m)("animateText",[Object(p.j)("hide",Object(p.k)({display:"none",opacity:0})),Object(p.j)("show",Object(p.k)({display:"block",opacity:1})),Object(p.l)("close => open",Object(p.e)("350ms ease-in")),Object(p.l)("open => close",Object(p.e)("200ms ease-out"))]);var y=s("YMfE"),k=s("NFeN");let T=(()=>{class e{constructor(e,t){this.matIconRegistry=e,this.domSanitizer=t}init(){this.matIconRegistry.addSvgIcon("addClients",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/addClients.svg")),this.matIconRegistry.addSvgIcon("addRegister",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/addRegister.svg")),this.matIconRegistry.addSvgIcon("avion",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/avion.svg")),this.matIconRegistry.addSvgIcon("blueBlack",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/blueBlack.svg")),this.matIconRegistry.addSvgIcon("blueWhite",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/blueWhite.svg")),this.matIconRegistry.addSvgIcon("create",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/create.svg")),this.matIconRegistry.addSvgIcon("dashboard",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/dashboard.svg")),this.matIconRegistry.addSvgIcon("delete",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/delete.svg")),this.matIconRegistry.addSvgIcon("edit",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/edit.svg")),this.matIconRegistry.addSvgIcon("email",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/email.svg")),this.matIconRegistry.addSvgIcon("english",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/english.svg")),this.matIconRegistry.addSvgIcon("excel",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/excel.svg")),this.matIconRegistry.addSvgIcon("exit",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/exit.svg")),this.matIconRegistry.addSvgIcon("languages",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/languages.svg")),this.matIconRegistry.addSvgIcon("librarys",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/librarys.svg")),this.matIconRegistry.addSvgIcon("logout",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logout.svg")),this.matIconRegistry.addSvgIcon("menu",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/menu.svg")),this.matIconRegistry.addSvgIcon("newSale",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/newSale.svg")),this.matIconRegistry.addSvgIcon("palette",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/palette.svg")),this.matIconRegistry.addSvgIcon("pdf",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/pdf.svg")),this.matIconRegistry.addSvgIcon("piloto",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/piloto.svg")),this.matIconRegistry.addSvgIcon("pinkBlack",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/pinkBlack.svg")),this.matIconRegistry.addSvgIcon("reserva",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/reserva.svg")),this.matIconRegistry.addSvgIcon("settings",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/settings.svg")),this.matIconRegistry.addSvgIcon("spanish",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/spanish.svg"))}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(k.c),i.Yb(n.b))},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})();var I=s("XNiG");let O=(()=>{class e{constructor(){this.sideNavState$=new I.a}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})();var R=s("nsOn"),U=s("rDax"),D=s("/t3+"),j=s("bTqV"),w=s("STbY"),x=s("QibW"),P=s("3Pt+");function C(e,t){if(1&e&&(i.Ub(0,"mat-radio-button",17),i.Ub(1,"div",18),i.yc(2),i.gc(3,"translate"),i.Pb(4,"mat-icon",19),i.Tb(),i.Tb()),2&e){const e=t.$implicit;i.lc("value",e.businessCode),i.Db(2),i.zc(i.hc(3,3,e.description)),i.Db(2),i.lc("svgIcon",e.icon)}}function z(e,t){if(1&e&&(i.Ub(0,"mat-radio-button",17),i.Ub(1,"div",18),i.yc(2),i.Pb(3,"mat-icon",19),i.Tb(),i.Tb()),2&e){const e=t.$implicit;i.lc("value",e.value),i.Db(2),i.Ac("",e.description," "),i.Db(1),i.lc("svgIcon",e.icon)}}let L=(()=>{class e{constructor(e,t,s){this.themeService=e,this.translate=t,this.overlayContainer=s,this.themeList=[{businessCode:"1",description:"logged-user.themes.theme1",icon:"blueWhite"},{businessCode:"2",description:"logged-user.themes.theme2",icon:"pinkBlack"},{businessCode:"3",description:"logged-user.themes.theme3",icon:"blueBlack"}],this.languages=[{value:"es",description:"Espa\xf1ol",icon:"spanish"},{value:"en",description:"Ingles",icon:"english"}];const n=t.getBrowserLang();this.translate.setDefaultLang(n),this.loadLanguage(),R.a.get("theme")&&this.changeTheme(R.a.get("theme").toString())}ngOnInit(){}loadLanguage(){this.language=R.b.get("language"),this.language&&this.useLanguage(this.language)}toggleDarkTheme(e){this.themeService.setDarkBlue(e)}changeTheme(e){this.theme=e,R.a.setRawString("theme",e),"2"===e?(this.themeService.setDarkPink(!0),this.themeService.setDarkBlue(!1),this.themeService.setColorTheme("pinkDark"),this.overlayContainer.getContainerElement().classList.add("blue-dark")):"3"===e?(this.themeService.setDarkBlue(!0),this.themeService.setDarkPink(!1),this.themeService.setColorTheme("blueDark"),this.overlayContainer.getContainerElement().classList.add("blue-dark")):(this.themeService.setDarkBlue(!1),this.themeService.setDarkPink(!1),this.overlayContainer.getContainerElement().classList.remove("blue-dark"))}useLanguage(e){this.language=e,R.a.setRawString("language","es"),this.translate.use(this.language)}logout(e){window.location.href="http://localhost:4200/#"+e}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(l.a),i.Ob(u.d),i.Ob(U.e))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-navigator-header"]],inputs:{sidenav:"sidenav"},decls:22,vars:9,consts:[[1,"navigator-header"],["color","primary"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"],["svgIcon","menu"],[1,"order-items"],["mat-icon-button","","title","Cambiar tema","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon",3,"matMenuTriggerFor"],["svgIcon","palette"],[1,"menu-theme"],["menuTheme","matMenu"],[3,"ngModel","change","ngModelChange"],["style","width: 100%; padding-left: 10px;",3,"value",4,"ngFor","ngForOf"],["mat-icon-button","","title","Cambiar idioma",3,"matMenuTriggerFor"],["svgIcon","languages"],["mat-icon-button","","title","Salir",3,"click"],["svgIcon","logout"],[1,"menu-language"],["menuLanguage","matMenu"],[2,"width","100%","padding-left","10px",3,"value"],[1,"menu-icons"],[1,"icons",3,"svgIcon"]],template:function(e,t){if(1&e&&(i.Ub(0,"section",0),i.Ub(1,"mat-toolbar",1),i.Ub(2,"button",2),i.bc("click",function(){return t.sidenav.toggle()}),i.Pb(3,"mat-icon",3),i.Tb(),i.Ub(4,"span"),i.yc(5),i.gc(6,"translate"),i.Tb(),i.Pb(7,"span",4),i.Ub(8,"button",5),i.Pb(9,"mat-icon",6),i.Tb(),i.Ub(10,"mat-menu",7,8),i.Ub(12,"mat-radio-group",9),i.bc("change",function(e){return t.changeTheme(e.value)})("ngModelChange",function(e){return t.theme=e}),i.xc(13,C,5,5,"mat-radio-button",10),i.Tb(),i.Tb(),i.Ub(14,"button",11),i.Pb(15,"mat-icon",12),i.Tb(),i.Ub(16,"button",13),i.bc("click",function(){return t.logout("/login")}),i.Pb(17,"mat-icon",14),i.Tb(),i.Ub(18,"mat-menu",15,16),i.Ub(20,"mat-radio-group",9),i.bc("change",function(e){return t.useLanguage(e.value)})("ngModelChange",function(e){return t.language=e}),i.xc(21,z,4,3,"mat-radio-button",10),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&e){const e=i.pc(11),s=i.pc(19);i.Db(5),i.zc(i.hc(6,7,"homeToolbar")),i.Db(3),i.kc("matMenuTriggerFor",e),i.Db(4),i.kc("ngModel",t.theme),i.Db(1),i.kc("ngForOf",t.themeList),i.Db(1),i.kc("matMenuTriggerFor",s),i.Db(6),i.kc("ngModel",t.language),i.Db(1),i.kc("ngForOf",t.languages)}},directives:[D.a,j.a,k.a,w.c,w.a,x.b,P.m,P.p,b.j,x.a],pipes:[u.c],encapsulation:2}),e})();var M=s("XhcP"),N=s("/Rdr"),A=s("MutI"),B=s("f0Cb");function E(e,t){if(1&e&&(i.Ub(0,"div"),i.Ub(1,"a",12),i.Pb(2,"mat-icon",13),i.Ub(3,"span"),i.yc(4),i.gc(5,"translate"),i.Tb(),i.Tb(),i.Tb()),2&e){const e=t.$implicit,s=i.fc();i.Db(1),i.lc("routerLink",null==e?null:e.url),i.Db(1),i.lc("svgIcon",null==e?null:e.icon),i.Db(1),i.kc("@animateText",s.linkText?"show":"hide"),i.Db(1),i.zc(i.hc(5,4,null==e?null:e.title))}}function F(e,t){1&e&&(i.Ub(0,"mat-icon"),i.yc(1,"arrow_left"),i.Tb())}function _(e,t){1&e&&(i.Ub(0,"mat-icon"),i.yc(1,"arrow_right"),i.Tb())}let Y=(()=>{class e{constructor(e,t,s){this.sessionService=e,this.sidenavService=t,this.translate=s,this.sideNavState=!1,this.linkText=!1,this.userData=this.sessionService.getSessionData(),this.createMenu()}ngOnInit(){}createMenu(){this.menu=[{title:"menu.home",url:"/home",icon:"dashboard"}],"A"===this.userData.tipo?this.menu.push({title:"menu.aircraft",url:"aircraft",icon:"avion"},{title:"menu.pilots",url:"pilot",icon:"piloto"}):this.menu.push("P"===this.userData.tipo?{title:"menu.pilots",url:"pilot",icon:"piloto"}:{title:"menu.aircraft",url:"aircraft",icon:"avion"})}onSinenavToggle(){this.sideNavState=!this.sideNavState,setTimeout(()=>{this.linkText=this.sideNavState},200),this.sidenavService.sideNavState$.next(this.sideNavState)}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(N.a),i.Ob(O),i.Ob(u.d))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-navigator-menu"]],decls:18,vars:6,consts:[[1,"navigator-menu"],[1,"sidenav_container"],["fxLayout","column","fxLayoutGap","10px",2,"height","100%"],[1,"user_menu"],["mat-list-item",""],["src","https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png","alt","",1,"jim"],[2,"margin-left","12px"],[4,"ngFor","ngForOf"],[1,"spacer"],["fxLayout","row","fxLayoutAlign","end center",2,"padding","0px 10px"],["mat-icon-button","",3,"click"],[4,"ngIf"],["mat-list-item","",3,"routerLink"],[2,"margin-right","12px",3,"svgIcon"]],template:function(e,t){1&e&&(i.Ub(0,"section",0),i.Ub(1,"div",1),i.Ub(2,"div",2),i.Ub(3,"div",3),i.Ub(4,"mat-nav-list"),i.Ub(5,"a",4),i.Pb(6,"img",5),i.Ub(7,"span",6),i.yc(8),i.Tb(),i.Tb(),i.Tb(),i.Pb(9,"mat-divider"),i.Tb(),i.Ub(10,"div"),i.Ub(11,"mat-nav-list"),i.xc(12,E,6,6,"div",7),i.Tb(),i.Tb(),i.Tb(),i.Pb(13,"span",8),i.Ub(14,"div",9),i.Ub(15,"button",10),i.bc("click",function(){return t.onSinenavToggle()}),i.xc(16,F,2,0,"mat-icon",11),i.xc(17,_,2,0,"mat-icon",11),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&e&&(i.Db(1),i.kc("@onSideNavChange",t.sideNavState?"open":"close"),i.Db(6),i.kc("@animateText",t.linkText?"show":"hide"),i.Db(1),i.Ac("",t.userData.usuario," "),i.Db(4),i.kc("ngForOf",t.menu),i.Db(4),i.kc("ngIf",t.sideNavState),i.Db(1),i.kc("ngIf",!t.sideNavState))},directives:[A.c,A.a,B.a,b.j,j.a,b.k,d.b,k.a],pipes:[u.c],encapsulation:2,data:{animation:[v,f]}}),e})();const J=["sidenav"];let K=(()=>{class e{constructor(e,t,s){this.customIconService=e,this.sidenavService=t,this.translate=s,this.customIconService.init(),this.translate.setDefaultLang(Object(y.c)("language")),this.sidenavService.sideNavState$.subscribe(e=>{this.onSideNavChange=e})}ngOnInit(){}controlSidenav(){}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(T),i.Ob(O),i.Ob(u.d))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-logged-user"]],viewQuery:function(e,t){if(1&e&&i.Bc(J,1),2&e){let e;i.oc(e=i.cc())&&(t.sidenav=e.first)}},decls:10,vars:2,consts:[[1,"app-library"],[1,"mat-elevation-z3",3,"sidenav"],[1,"sidenav-container"],["mode","side","opened",""],["leftSidenav",""],[1,"main_content"],[2,"padding","20px"]],template:function(e,t){if(1&e&&(i.Ub(0,"main",0),i.Pb(1,"app-navigator-header",1),i.Ub(2,"mat-sidenav-container",2),i.Ub(3,"mat-sidenav",3,4),i.Pb(5,"app-navigator-menu"),i.Tb(),i.Ub(6,"mat-sidenav-content"),i.Ub(7,"div",5),i.Ub(8,"div",6),i.Pb(9,"router-outlet"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&e){const e=i.pc(4);i.Db(1),i.kc("sidenav",e),i.Db(5),i.kc("@onMainContentChange",t.onSideNavChange?"open":"close")}},directives:[L,M.b,M.a,Y,M.c,d.d],encapsulation:2,data:{animation:[S]}}),e})(),X=(()=>{class e{constructor(e,t){this.sessionService=e,this.router=t}canActivate(e,t){return!!this.sessionService.isAuthenticated()||(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(N.a),i.Yb(d.a))},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const V=[{canActivate:[X],children:[{canActivate:[X],loadChildren:()=>Promise.all([s.e(0),s.e(2),s.e(3),s.e(8)]).then(s.bind(null,"AE+X")).then(e=>e.AircraftModule),path:"aircraft"},{canActivate:[X],loadChildren:()=>Promise.all([s.e(0),s.e(2),s.e(3),s.e(10)]).then(s.bind(null,"fVWP")).then(e=>e.PilotModule),path:"pilot"},{canActivate:[X],loadChildren:()=>Promise.all([s.e(0),s.e(2),s.e(9)]).then(s.bind(null,"zQ56")).then(e=>e.HomeModule),path:""}],component:K,path:"home"},{path:"home",redirectTo:"home"}];var $=s("R1ws"),W=s("LOCc"),G=s("1jcm"),H=s("qEH2");function q(e){return new H.a(e,[{prefix:W.a.appParams.translatesPathlibrary,suffix:".json"}])}const Q=[$.b,n.a,a.c,(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({providers:[T,N.a],imports:[[b.c,j.b,k.b,P.h,M.d,D.b,A.b,P.r,w.b,x.c,G.a,d.c,u.b.forRoot({loader:{deps:[a.b],provide:u.a,useFactory:q}})]]}),e})(),d.c.forRoot(V,{enableTracing:!1,scrollPositionRestoration:"enabled",useHash:!0}),u.b.forRoot({loader:{deps:[a.b],provide:u.a,useFactory:function(e){return new H.a(e,[{prefix:W.a.appParams.translatesPathlibrary,suffix:".json"}])}}})],Z=[O];let ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Mb({type:e,bootstrap:[m]}),e.\u0275inj=i.Lb({providers:Z,imports:[[Q]]}),e})();class te{static forRoot(){return{ngModule:ee,providers:Z}}}const se=[{loadChildren:()=>Promise.all([s.e(0),s.e(11)]).then(s.bind(null,"g7DB")).then(e=>e.LoginModule),path:"login"},{loadChildren:()=>te,path:"management"},{path:"**",pathMatch:"full",redirectTo:"home"}];let ne=(()=>{class e{constructor(e,t){this.matIconRegistry=e,this.domSanitizer=t}init(){this.matIconRegistry.addSvgIcon("create",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/create.svg")),this.matIconRegistry.addSvgIcon("delete",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/delete.svg")),this.matIconRegistry.addSvgIcon("edit",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/edit.svg"))}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(k.c),i.Yb(n.b))},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})();var ie=s("z6cu"),ae=s("vkgz"),oe=s("JIr8"),re=s("lJxs");let ce=(()=>{class e{constructor(e,t){this.sessionService=e,this.router=t}intercept(e,t){return t.handle(e).pipe(Object(ae.a)(e=>{}),Object(oe.a)(e=>{(403===e.status||401===e.status)&&(this.sessionService.removeSessionData(),this.router.navigate(["/login"]));const t=e.error.message||e.statusText;return Object(ie.a)(t)}),Object(re.a)(e=>e),Object(oe.a)(this.handleError))}handleError(e){return e.error instanceof ErrorEvent&&console.error("An error occurred:",e.error.message),Object(ie.a)(e)}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(N.a),i.Yb(d.a))},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})();const ue=[b.c,n.a,$.b,a.c,d.c.forRoot(se,{enableTracing:!1,scrollPositionRestoration:"enabled",useHash:!0}),te.forRoot()],le=[{multi:!0,provide:a.a,useClass:ce},ne,l.a,{provide:o.a,useValue:{}},{provide:o.d,useValue:{}}];Object(b.s)(c.a);let be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Mb({type:e,bootstrap:[h]}),e.\u0275inj=i.Lb({providers:[le],imports:[[ue]]}),e})();s("AytR").a.production&&Object(i.U)(),n.c().bootstrapModule(be).catch(e=>console.error(e))},zn8P:function(e,t){function s(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}s.keys=function(){return[]},s.resolve=s,e.exports=s,s.id="zn8P"}},[[0,1,7]]]);