(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0MNC":function(t,e,a){"use strict";a.d(e,"a",function(){return w}),a.d(e,"b",function(){return O});var i=a("fXoL"),n=a("8LU1"),s=a("XNiG"),r=a("itXk"),o=a("GyhO"),c=a("HDdC"),d=a("IzEk"),h=a("7o/Q");class l{constructor(t){this.total=t}call(t,e){return e.subscribe(new m(t,this.total))}}class m extends h.a{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}var p=a("Kj3r"),u=a("lJxs"),b=a("JX91"),f=a("1G5W"),_=a("nLfN");const x=new Set;let g,v=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):k}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!x.has(t))try{g||(g=document.createElement("style"),g.setAttribute("type","text/css"),document.head.appendChild(g)),g.sheet&&(g.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),x.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Yb(_.a))},t.\u0275prov=Object(i.Kb)({factory:function(){return new t(Object(i.Yb)(_.a))},token:t,providedIn:"root"}),t})();function k(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let w=(()=>{class t{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new s.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return y(Object(n.b)(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const e=y(Object(n.b)(t)).map(t=>this._registerQuery(t).observable);let a=Object(r.a)(e);return a=Object(o.a)(a.pipe(Object(d.a)(1)),a.pipe(t=>t.lift(new l(1)),Object(p.a)(0))),a.pipe(Object(u.a)(t=>{const e={matches:!1,breakpoints:{}};return t.forEach(({matches:t,query:a})=>{e.matches=e.matches||t,e.breakpoints[a]=t}),e}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),a={observable:new c.a(t=>{const a=e=>this._zone.run(()=>t.next(e));return e.addListener(a),()=>{e.removeListener(a)}}).pipe(Object(b.a)(e),Object(u.a)(({matches:e})=>({query:t,matches:e})),Object(f.a)(this._destroySubject)),mql:e};return this._queries.set(t,a),a}}return t.\u0275fac=function(e){return new(e||t)(i.Yb(v),i.Yb(i.B))},t.\u0275prov=Object(i.Kb)({factory:function(){return new t(Object(i.Yb)(v),Object(i.Yb)(i.B))},token:t,providedIn:"root"}),t})();function y(t){return t.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}const O={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}},B0s9:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var i=a("62Xs"),n=a("fXoL"),s=a("pKB/");let r=(()=>{class t{constructor(t){this.serviceUtils=t}getAeronaves(){return this.serviceUtils.buildRequest(i.a.getAeronaves,"get")}setAeronaves(t){return this.serviceUtils.buildRequest(i.a.setAeronaves,"post",t)}updateAeronaves(t){return this.serviceUtils.buildRequest(Object(i.b)(i.a.updateAeronaves,{idAeronave:t.id}),"put",t)}deletetAeronaves(t){return this.serviceUtils.buildRequest(Object(i.b)(i.a.deletetAeronaves,{idAeronave:t.id}),"delete")}getPilotos(){return this.serviceUtils.buildRequest(i.a.getPilotos,"get")}setPilotos(t){return this.serviceUtils.buildRequest(i.a.setPilotos,"post",t)}updatePilotos(t){return this.serviceUtils.buildRequest(Object(i.b)(i.a.updatePilotos,{idPiloto:t.id}),"put",t)}deletePilotos(t){return this.serviceUtils.buildRequest(Object(i.b)(i.a.deletePilotos,{idPiloto:t.id}),"delete")}setReservas(t){return this.serviceUtils.buildRequest(i.a.setReservas,"post",t)}}return t.\u0275fac=function(e){return new(e||t)(n.Yb(s.a))},t.\u0275prov=n.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Wp6s:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return d});var i=a("R1ws"),n=a("FKr1"),s=a("fXoL");const r=["*",[["mat-card-footer"]]],o=["*","mat-card-footer"];let c=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(i.a,8))},t.\u0275cmp=s.Ib({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&s.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:o,decls:2,vars:0,template:function(t,e){1&t&&(s.jc(r),s.ic(0),s.ic(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({imports:[[n.h],n.h]}),t})()},dNgK:function(t,e,a){"use strict";a.d(e,"a",function(){return A}),a.d(e,"b",function(){return j});var i=a("rDax"),n=a("+rOU"),s=a("ofXK"),r=a("fXoL"),o=a("FKr1"),c=a("bTqV"),d=a("XNiG"),h=a("IzEk"),l=a("1G5W"),m=a("R0Ic"),p=a("u47x"),u=a("0MNC"),b=a("nLfN");function f(t,e){if(1&t){const t=r.Vb();r.Ub(0,"div",1),r.Ub(1,"button",2),r.bc("click",function(){return r.rc(t),r.fc().action()}),r.yc(2),r.Tb(),r.Tb()}if(2&t){const t=r.fc();r.Db(2),r.zc(t.data.action)}}function _(t,e){}const x=new r.s("MatSnackBarData");class g{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}const v=Math.pow(2,31)-1;class k{constructor(t,e){this._overlayRef=e,this._afterDismissed=new d.a,this._afterOpened=new d.a,this._onAction=new d.a,this._dismissedByAction=!1,this.containerInstance=t,this.onAction().subscribe(()=>this.dismiss()),t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(t,v))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}let w=(()=>{class t{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(k),r.Ob(x))},t.\u0275cmp=r.Ib({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(r.Ub(0,"span"),r.yc(1),r.Tb(),r.xc(2,f,3,1,"div",0)),2&t&&(r.Db(1),r.zc(e.data.message),r.Db(1),r.kc("ngIf",e.hasAction))},directives:[s.k,c.a],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"],encapsulation:2,changeDetection:0}),t})();const y={snackBarState:Object(m.m)("state",[Object(m.j)("void, hidden",Object(m.k)({transform:"scale(0.8)",opacity:0})),Object(m.j)("visible",Object(m.k)({transform:"scale(1)",opacity:1})),Object(m.l)("* => visible",Object(m.e)("150ms cubic-bezier(0, 0, 0.2, 1)")),Object(m.l)("* => void, * => hidden",Object(m.e)("75ms cubic-bezier(0.4, 0.0, 1, 1)",Object(m.k)({opacity:0})))])};let O=(()=>{class t extends n.a{constructor(t,e,a,i,n){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=a,this._platform=i,this.snackBarConfig=n,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new d.a,this._onExit=new d.a,this._onEnter=new d.a,this._animationState="void",this.attachDomPortal=t=>(this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachDomPortal(t)),this._live="assertive"!==n.politeness||n.announcementMessage?"off"===n.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)}onAnimationEnd(t){const{fromState:e,toState:a}=t;if(("void"===a&&"void"!==e||"hidden"===a)&&this._completeExit(),"visible"===a){const t=this._onEnter;this._ngZone.run(()=>{t.next(),t.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe(Object(h.a)(1)).subscribe(()=>{this._onExit.next(),this._onExit.complete()})}_applySnackBarClasses(){const t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(e=>t.classList.add(e)):t.classList.add(e)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),null==a||a.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.B),r.Ob(r.l),r.Ob(r.h),r.Ob(b.a),r.Ob(g))},t.\u0275cmp=r.Ib({type:t,selectors:[["snack-bar-container"]],viewQuery:function(t,e){if(1&t&&r.Bc(n.b,3),2&t){let t;r.oc(t=r.cc())&&(e._portalOutlet=t.first)}},hostAttrs:[1,"mat-snack-bar-container"],hostVars:1,hostBindings:function(t,e){1&t&&r.vc("@state.done",function(t){return e.onAnimationEnd(t)}),2&t&&r.wc("@state",e._animationState)},features:[r.Ab],decls:3,vars:2,consts:[["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,e){1&t&&(r.Ub(0,"div",0),r.xc(1,_,0,0,"ng-template",1),r.Tb(),r.Pb(2,"div")),2&t&&(r.Db(2),r.Eb("aria-live",e._live)("role",e._role))},directives:[n.b],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],encapsulation:2,data:{animation:[y.snackBarState]}}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({imports:[[i.f,n.e,s.c,c.b,o.h],o.h]}),t})();const B=new r.s("mat-snack-bar-default-options",{providedIn:"root",factory:function(){return new g}});let A=(()=>{class t{constructor(t,e,a,i,n,s){this._overlay=t,this._live=e,this._injector=a,this._breakpointObserver=i,this._parentSnackBar=n,this._defaultConfig=s,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=w,this.snackBarContainerComponent=O,this.handsetCssClass="mat-snack-bar-handset"}get _openedSnackBarRef(){const t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",a){const i=Object.assign(Object.assign({},this._defaultConfig),a);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){const a=r.t.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:g,useValue:e}]}),i=new n.c(this.snackBarContainerComponent,e.viewContainerRef,a),s=t.attach(i);return s.instance.snackBarConfig=e,s.instance}_attach(t,e){const a=Object.assign(Object.assign(Object.assign({},new g),this._defaultConfig),e),i=this._createOverlay(a),s=this._attachSnackBarContainer(i,a),o=new k(s,i);if(t instanceof r.N){const e=new n.f(t,null,{$implicit:a.data,snackBarRef:o});o.instance=s.attachTemplatePortal(e)}else{const e=this._createInjector(a,o),i=new n.c(t,void 0,e),r=s.attachComponentPortal(i);o.instance=r.instance}return this._breakpointObserver.observe(u.b.HandsetPortrait).pipe(Object(l.a)(i.detachments())).subscribe(t=>{const e=i.overlayElement.classList;t.matches?e.add(this.handsetCssClass):e.remove(this.handsetCssClass)}),a.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(o,a),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){const e=new i.d;e.direction=t.direction;let a=this._overlay.position().global();const n="rtl"===t.direction,s="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!n||"end"===t.horizontalPosition&&n,r=!s&&"center"!==t.horizontalPosition;return s?a.left("0"):r?a.right("0"):a.centerHorizontally(),"top"===t.verticalPosition?a.top("0"):a.bottom("0"),e.positionStrategy=a,this._overlay.create(e)}_createInjector(t,e){return r.t.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:k,useValue:e},{provide:x,useValue:t.data}]})}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(i.c),r.Yb(p.k),r.Yb(r.t),r.Yb(u.a),r.Yb(t,12),r.Yb(B))},t.\u0275prov=Object(r.Kb)({factory:function(){return new t(Object(r.Yb)(i.c),Object(r.Yb)(p.k),Object(r.Yb)(r.p),Object(r.Yb)(u.a),Object(r.Yb)(t,12),Object(r.Yb)(B))},token:t,providedIn:j}),t})()},"ysB/":function(t,e,a){"use strict";a.d(e,"a",function(){return s});var i=a("fXoL"),n=a("dNgK");let s=(()=>{class t{constructor(t){this.snackService=t}returnTime(t){return t||500}showSnackBar(t,e,a){this.snackService.open(t,e,{duration:a,horizontalPosition:"center",verticalPosition:"bottom"})}}return t.\u0275fac=function(e){return new(e||t)(i.Yb(n.a))},t.\u0275prov=i.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);