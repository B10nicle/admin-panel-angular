"use strict";(self.webpackChunkadmin_panel_angular=self.webpackChunkadmin_panel_angular||[]).push([[560],{7560:(O,l,s)=>{s.r(l),s.d(l,{AdminModule:()=>j});var i=s(6895),c=s(3599),t=s(1571);let h=(()=>{class e{getDate(){return(new Date).getFullYear()}ngOnInit(){this.date=this.getDate()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],decls:3,vars:1,consts:[[1,"bg-dark","text-center","text-white","fixed-bottom"],[1,"text-center","p-3","bg-opacity-20"]],template:function(n,r){1&n&&(t.TgZ(0,"footer",0)(1,"div",1),t._uU(2),t.qZA()()),2&n&&(t.xp6(2),t.hij("\xa9 ",r.date," Oleg Khilko"))}}),e})();var v=s(7556),u=s(9300),d=s(4004),g=s(6451),C=s(529);let a=(()=>{class e{constructor(n,r){this.http=n,this.router=r}getPersonalList(){return this.http.get("https://jsonplaceholder.typicode.com/users?_start=0&_limit=5")}getPerson(n){return this.http.get(`https://jsonplaceholder.typicode.com/users/${n}`)}getLoader(){this.hideLoader$=this.router.events.pipe((0,u.h)(n=>n instanceof c.Av),(0,d.U)(()=>!1)),this.showLoader$=this.router.events.pipe((0,u.h)(n=>n instanceof c.sK),(0,d.U)(()=>!0)),this.isLoading$=(0,g.T)(this.hideLoader$,this.showLoader$)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(C.eN),t.LFG(c.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),x=(()=>{class e{constructor(n,r){this.authService=n,this.adminService=r}logout(){this.authService.logout()}ngOnInit(){this.adminService.getLoader()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.e),t.Y36(a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],decls:14,vars:0,consts:[[1,"bg-dark","text-white"],[1,"d-flex","justify-content-between","align-items-center","p-3","bg-opacity-20"],[1,"text-center","user-select-none"],[1,"navbar"],[1,"navbar","nav","ml-auto"],["routerLinkActive","active","routerLink","./home",1,"text-info","text-decoration-none","ms-3","p-1","rounded-3"],["routerLinkActive","active","routerLink","./contacts",1,"text-info","text-decoration-none","ms-3","p-1","rounded-3"],["type","button",1,"btn","btn-info","ms-3","rounded-3",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"header",0)(1,"div",1)(2,"div",2),t._uU(3,"Admin Menu"),t.qZA(),t.TgZ(4,"nav",3)(5,"ul",4)(6,"li")(7,"a",5),t._uU(8,"Home"),t.qZA()(),t.TgZ(9,"li")(10,"a",6),t._uU(11,"Personal Contacts"),t.qZA()(),t.TgZ(12,"button",7),t.NdJ("click",function(){return r.logout()}),t._uU(13," Logout "),t.qZA()()()()())},dependencies:[c.rH,c.Od]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-dashboard"]],decls:3,vars:0,template:function(n,r){1&n&&t._UZ(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[c.lC,h,x]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-spinner"]],decls:3,vars:0,consts:[["role","status",1,"spinner-border","text-light","text-success"],[1,"visually-hidden"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Loading..."),t.qZA()())}}),e})();const A=function(e){return["user",e]};function Z(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div")(3,"h2",7),t._uU(4),t.qZA(),t.TgZ(5,"button",8),t.NdJ("click",function(){t.CHM(n);const p=t.oxw(2);return t.KtG(p.hideComponent())}),t._uU(6," Details "),t.qZA()()()()}if(2&e){const n=o.$implicit;t.xp6(4),t.Oqu(n.name),t.xp6(1),t.Q6J("routerLink",t.VKq(2,A,n.id))}}function _(e,o){if(1&e&&(t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,Z,7,4,"div",4),t.ALo(3,"async"),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,n.personalList$))}}function T(e,o){1&e&&(t.TgZ(0,"div",9),t._UZ(1,"app-spinner"),t.qZA())}let L=(()=>{class e{constructor(n,r){this.activatedRoute=n,this.adminService=r,this.component=!0}hideComponent(){return this.component=!1}ngOnInit(){this.personalList$=this.activatedRoute.data.pipe((0,d.U)(n=>n?.users)),this.adminService.getLoader()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.gz),t.Y36(a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contacts"]],decls:2,vars:2,consts:[["class","d-flex h-75 align-items-center justify-content-center",4,"ngIf"],["class","d-flex h-75 align-items-center justify-content-center flex-column",4,"ngIf"],[1,"d-flex","h-75","align-items-center","justify-content-center"],[1,"col-3","mt-2"],["class","card bg-dark text-white mt-2 rounded-4",4,"ngFor","ngForOf"],[1,"card","bg-dark","text-white","mt-2","rounded-4"],[1,"card-body","p-2","text-center"],[1,"fs-4"],[1,"fs-6","btn","btn-success",3,"routerLink","click"],[1,"d-flex","h-75","align-items-center","justify-content-center","flex-column"]],template:function(n,r){1&n&&(t.YNc(0,_,4,3,"div",0),t.YNc(1,T,2,0,"div",1)),2&n&&(t.Q6J("ngIf",!0===r.component),t.xp6(1),t.Q6J("ngIf",!1===r.component))},dependencies:[i.sg,i.O5,c.rH,m,i.Ov]}),e})();function F(e,o){if(1&e&&(t.TgZ(0,"section")(1,"h3",9),t._uU(2),t.qZA(),t.TgZ(3,"p",10),t._uU(4),t.qZA()()),2&e){const n=o.ngIf;t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.email)}}const U=function(){return["../"]};function b(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div")(5,"h2",6),t._uU(6,"User Details:"),t.qZA(),t.YNc(7,F,5,2,"section",7),t.ALo(8,"async"),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(n);const p=t.oxw();return t.KtG(p.hideComponent())}),t._uU(10,"Go Back"),t.qZA()()()()()}if(2&e){const n=t.oxw();t.xp6(7),t.Q6J("ngIf",t.lcZ(8,2,n.user$)),t.xp6(2),t.Q6J("routerLink",t.DdM(4,U))}}function S(e,o){1&e&&(t.TgZ(0,"div",11),t._UZ(1,"app-spinner"),t.qZA())}let k=(()=>{class e{constructor(n,r){this.activatedRoute=n,this.adminService=r,this.component=!0}hideComponent(){return this.component=!1}ngOnInit(){this.user$=this.activatedRoute.data.pipe((0,d.U)(n=>n?.user)),this.adminService.getLoader()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.gz),t.Y36(a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contacts-details"]],decls:2,vars:2,consts:[["class","d-flex h-75 align-items-center justify-content-center",4,"ngIf"],["class","d-flex h-75 align-items-center justify-content-center flex-column",4,"ngIf"],[1,"d-flex","h-75","align-items-center","justify-content-center"],[1,"col-4","mt-2"],[1,"card","bg-dark","text-white","mt-2","rounded-4"],[1,"card-body","p-2","text-center"],[1,"fs-3","text-decoration-underline"],[4,"ngIf"],[1,"btn","btn-success",3,"routerLink","click"],[1,"fs-5"],[1,"fs-6"],[1,"d-flex","h-75","align-items-center","justify-content-center","flex-column"]],template:function(n,r){1&n&&(t.YNc(0,b,11,5,"div",0),t.YNc(1,S,2,0,"div",1)),2&n&&(t.Q6J("ngIf",!0===r.component),t.xp6(1),t.Q6J("ngIf",!1===r.component))},dependencies:[i.O5,c.rH,m,i.Ov]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:3,vars:0,consts:[[1,"d-flex","h-75","align-items-center","justify-content-center"],[1,"text-white","fs-1","fw-bold"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Home page"),t.qZA()())}}),e})();var f=s(1005),I=s(262),w=s(515);const H=[{path:"",component:y,children:[{path:"contacts",component:L,resolve:{users:(()=>{class e{constructor(n){this.adminService=n}resolve(n,r){return this.adminService.getPersonalList().pipe((0,f.g)(700))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(a))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}},{path:"contacts/user/:id",component:k,resolve:{user:(()=>{class e{constructor(n,r){this.adminService=n,this.router=r}resolve(n,r){return this.adminService.getPerson(n.params?.id).pipe((0,f.g)(700),(0,I.K)(()=>(this.router.navigate(["admin/contacts"]),w.E)))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(a),t.LFG(c.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}},{path:"contacts/user",redirectTo:"contacts",pathMatch:"full"},{path:"home",component:D},{path:"",redirectTo:"home",pathMatch:"full"}]}];let Y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(H),c.Bz]}),e})(),j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,Y]}),e})()}}]);