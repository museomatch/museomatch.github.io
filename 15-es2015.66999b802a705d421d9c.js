(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{rr2t:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("mrSG"),s=t("ZZ/e");class r{constructor(l,n,t){this.name=l,this.keywords=n,this.imagePath=t}}let a=(()=>{class l{constructor(){this.plants=["Bleuet","Gen\xeat","Basilic","Cerise"],this.plantsKeyWords=["Bleuet1, bleuet2","Genet1, Genet2","Basilic1, Basilic2","Cerise1, Cerise2"],this.plantsImgs=["bleuet.jpg","genet.jpg","basilic.jpg","cerise.jpg"],this.characters=["X\xe9r\xe8s","V\xe9nus","Ange"],this.charactersKeyWords=["Xeres1, xeres2","Venus1, venus2","ANge1, ange2"],this.charactersImgs=["xeres.jpg","venus.jpg","ange.jpg"],this.plantCodes=[123,456,789,987],this.characterCodes=[234,567,890],this.plantsFound=[],this.charactersFound=[]}unlock(l){this.plantCodes.forEach((n,t)=>{if(l==n)return this.plantsFound.push(t),this.getPlant(t)}),this.characterCodes.forEach((n,t)=>{if(l==n)return this.charactersFound.push(t),this.getCharacter(t)})}getFoundPlants(){let l=[];return this.plants.forEach((n,t)=>{this.plantsFound.find(l=>l==t)?l.push(n):l.push("?")}),l}getFoundCharacters(){let l=[];return this.characters.forEach((n,t)=>{this.charactersFound.find(l=>l==t)?l.push(n):l.push("?")}),l}getPlant(l){return new r(this.plants[l],this.plantsKeyWords[l],this.plantsImgs[l])}getCharacter(l){return new r(this.characters[l],this.charactersKeyWords[l],this.charactersImgs[l])}}return l.ngInjectableDef=e.Lb({factory:function(){return new l},token:l,providedIn:"root"}),l})();class i{constructor(l,n){this.alertController=l,this.basketService=n,this.plants=["Bleuet","Gen\xeat","Basilic","Cerise"],this.characters=["Xeres","Venus","Ange"],this.couples=[{plantId:0,characterId:1}],this.explanations=["Le bleuet est en effet associ\xe9 \xe0 V\xe9nus."],this.plantId=0,this.characterId=0}ngOnInit(){this.plants=this.basketService.getFoundPlants(),this.characters=this.basketService.getFoundCharacters()}selectPlant(l){this.plantId=l}selectCharacter(l){this.characterId=l}isAnExistingCouple(l,n){let t=-1;return this.couples.forEach((e,u)=>{e.plantId==l&&e.characterId==n&&(t=u)}),t}alertInfo(l){return u.b(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:"Bien jou\xe9 !",message:this.explanations[l],buttons:["Fermer"]});yield n.present()}))}alertWrong(){return u.b(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Faux !",message:"Le couple n'a pas match\xe9. Essaye un autre !",buttons:["Fermer"]});yield l.present()}))}validateCouple(l,n){let t=this.isAnExistingCouple(l,n);-1!=t?this.alertInfo(t):this.alertWrong()}}class c{}var o=t("pMnS"),h=t("oBZk"),b=t("SVse"),p=e.pb({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,10,"ion-card",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectPlant(l.context.index)&&e),e}),h.u,h.c)),e.qb(1,49152,null,0,s.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,8,"ion-card-content",[],null,null,null,h.t,h.d)),e.Eb(512,null,b.p,b.q,[e.q,e.r,e.k,e.B]),e.qb(4,278528,null,0,b.h,[b.p],{ngClass:[0,"ngClass"]},null),e.Db(5,{"ion-text-uppercase":0}),e.qb(6,49152,null,0,s.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(7,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e.Hb(8,null,["",""])),(l()(),e.rb(9,0,null,0,1,"ion-img",[["src","../assets/img/basilic.jpg"]],null,null,null,h.z,h.i)),e.qb(10,49152,null,0,s.B,[e.h,e.k,e.x],{src:[0,"src"]},null)],(function(l,n){var t=l(n,5,0,n.component.plantId==n.context.index);l(n,4,0,t),l(n,10,0,"../assets/img/basilic.jpg")}),(function(l,n){l(n,8,0,n.context.$implicit)}))}function g(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,10,"ion-card",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectCharacter(l.context.index)&&e),e}),h.u,h.c)),e.qb(1,49152,null,0,s.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,8,"ion-card-content",[],null,null,null,h.t,h.d)),e.Eb(512,null,b.p,b.q,[e.q,e.r,e.k,e.B]),e.qb(4,278528,null,0,b.h,[b.p],{ngClass:[0,"ngClass"]},null),e.Db(5,{"ion-text-uppercase":0}),e.qb(6,49152,null,0,s.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(7,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e.Hb(8,null,["",""])),(l()(),e.rb(9,0,null,0,1,"ion-img",[["src","../assets/img/ange.jpg"]],null,null,null,h.z,h.i)),e.qb(10,49152,null,0,s.B,[e.h,e.k,e.x],{src:[0,"src"]},null)],(function(l,n){var t=l(n,5,0,n.component.characterId==n.context.index);l(n,4,0,t),l(n,10,0,"../assets/img/ange.jpg")}),(function(l,n){l(n,8,0,n.context.$implicit)}))}function f(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,20,"ion-content",[],null,null,null,h.w,h.f)),e.qb(1,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,18,"ion-grid",[],null,null,null,h.x,h.g)),e.qb(3,49152,null,0,s.y,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,9,"ion-row",[],null,null,null,h.C,h.l)),e.qb(5,49152,null,0,s.hb,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,3,"ion-col",[],null,null,null,h.v,h.e)),e.qb(7,49152,null,0,s.r,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,1,null,d)),e.qb(9,278528,null,0,b.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.rb(10,0,null,0,3,"ion-col",[],null,null,null,h.v,h.e)),e.qb(11,49152,null,0,s.r,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,1,null,g)),e.qb(13,278528,null,0,b.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.rb(14,0,null,0,6,"ion-row",[["class","ion-justify-content-center"]],null,null,null,h.C,h.l)),e.qb(15,49152,null,0,s.hb,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,4,"ion-col",[["size","3"]],null,null,null,h.v,h.e)),e.qb(17,49152,null,0,s.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(18,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.validateCouple(u.plantId,u.characterId)&&e),e}),h.s,h.b)),e.qb(19,49152,null,0,s.i,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Valider "]))],(function(l,n){var t=n.component;l(n,9,0,t.plants),l(n,13,0,t.characters),l(n,17,0,"3")}),null)}function k(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"app-match",[],null,null,null,f,p)),e.qb(1,114688,null,0,i,[s.a,a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e.nb("app-match",i,k,{},{},[]),m=t("s7LF"),C=t("iInd");t.d(n,"MatchPageModuleNgFactory",(function(){return I}));var I=e.ob(c,[],(function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[o.a,x]],[3,e.j],e.v]),e.Ab(4608,b.k,b.j,[e.s,[2,b.s]]),e.Ab(4608,m.d,m.d,[]),e.Ab(4608,s.b,s.b,[e.x,e.g]),e.Ab(4608,s.Eb,s.Eb,[s.b,e.j,e.p]),e.Ab(4608,s.Ib,s.Ib,[s.b,e.j,e.p]),e.Ab(1073742336,b.b,b.b,[]),e.Ab(1073742336,m.c,m.c,[]),e.Ab(1073742336,m.a,m.a,[]),e.Ab(1073742336,s.Cb,s.Cb,[]),e.Ab(1073742336,C.n,C.n,[[2,C.s],[2,C.m]]),e.Ab(1073742336,c,c,[]),e.Ab(1024,C.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);