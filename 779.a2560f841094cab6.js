"use strict";(self.webpackChunkyoutube=self.webpackChunkyoutube||[]).push([[779],{779:(A,m,r)=>{r.r(m),r.d(m,{HomeModule:()=>U});var a=r(6895),c=r(187),t=r(4650),u=r(529);let d=(()=>{class i{constructor(e){this._homehttp=e,this.apikey="AIzaSyD7D8SVNUYYrfT4cFDfBs1clpkSlpP-_Ys",this.getHomeData=()=>this._homehttp.get("/proxy/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=1000&key="+this.apikey),this.getsearch=o=>(console.log("hi"),this._homehttp.get("/proxy/search?part=snippet&maxResults=25&q="+o+"&key="+this.apikey)),this.getvideodetails=o=>(console.log(typeof o),console.log(o),this._homehttp.get("/proxy/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+o+"&key="+this.apikey)),this.getrelatedvideo=o=>this._homehttp.get("/proxy/search?part=snippet&relatedToVideoId="+o+"&type=video&key="+this.apikey)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(u.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function g(i,s){if(1&i&&(t.TgZ(0,"div",5)(1,"a",6),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"div",8)(4,"div",9),t._UZ(5,"img",10),t.qZA(),t.TgZ(6,"div",11)(7,"div",12),t._uU(8),t.qZA(),t.TgZ(9,"div",13),t._uU(10),t.qZA(),t.TgZ(11,"div",8)(12,"div",14)(13,"span",15),t._uU(14,"200M Views . 9 days ago"),t.qZA()()()()()()),2&i){const e=s.$implicit;t.xp6(2),t.s9C("src",e.snippet.thumbnails.medium.url,t.LSH),t.xp6(3),t.s9C("src",e.logo,t.LSH),t.xp6(3),t.Oqu(e.snippet.localized.title),t.xp6(2),t.Oqu(e.snippet.channelTitle)}}let v=(()=>{class i{constructor(e){this._homeService=e,this.homeoutputdata=[]}ngOnInit(){this._homeService.getHomeData().subscribe(e=>{console.log(e),this.homeoutputdata=e.items;for(var o=0;o<this.homeoutputdata.length;o++)this.homeoutputdata[o].logo="assets/images/logo1.jpg";console.log(this.homeoutputdata)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],decls:6,vars:1,consts:[["href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css","rel","stylesheet"],["href","//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css","rel","stylesheet"],[1,"container"],[1,"row","row-text-center"],["class","col-sm-3",4,"ngFor","ngForOf"],[1,"col-sm-3"],[1,"thumbnail"],[3,"src"],[1,"row"],[1,"col-sm-2"],[1,"logoclass",3,"src"],[1,"col-sm-10"],[1,"titleclass"],[1,"channelname"],[1,"col-sm-12"],[1,"publishtime"]],template:function(e,o){1&e&&(t.TgZ(0,"head"),t._UZ(1,"link",0)(2,"link",1),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t.YNc(5,g,15,4,"div",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",o.homeoutputdata))},dependencies:[a.sg],styles:[".thumbnail[_ngcontent-%COMP%]{cursor:pointer;border:none;height:180;width:320}.logoclass[_ngcontent-%COMP%]{margin-top:10px;margin-left:20px;border-radius:50%;width:25px;height:25px}.titleclass[_ngcontent-%COMP%]{font-weight:700;padding-top:10px;font-size:13px;margin-left:5px}.row[_ngcontent-%COMP%]{margin-bottom:10px}.channelname[_ngcontent-%COMP%]{text-align:center;font-size:10px}.publishtime[_ngcontent-%COMP%]{margin-left:20px}"]}),i})();var f=r(5711);function _(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",5)(1,"button",6),t.NdJ("click",function(){const n=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.gotovideo(n.id.videoId))}),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"div",8)(4,"div",9),t._UZ(5,"img",10),t.qZA(),t.TgZ(6,"div",11)(7,"div",12),t._uU(8),t.qZA(),t.TgZ(9,"div",13),t._uU(10),t.qZA(),t.TgZ(11,"div",8)(12,"div",14)(13,"span",15),t._uU(14,"200M Views . 9 days ago"),t.qZA()()()()()()}if(2&i){const e=s.$implicit;t.xp6(2),t.s9C("src",e.snippet.thumbnails.medium.url,t.LSH),t.xp6(3),t.s9C("src",e.logo,t.LSH),t.xp6(3),t.Oqu(e.snippet.title),t.xp6(2),t.Oqu(e.snippet.channelTitle)}}let y=(()=>{class i{constructor(e,o,l){this._searchService=e,this._homeservice=o,this._router=l,this.searchid="",this.searchdata=[],this.apicall=n=>{this._homeservice.getsearch(n).subscribe(p=>{this.searchdata=p.items;for(var h=0;h<this.searchdata.length;h++)this.searchdata[h].logo="assets/images/logo1.jpg";console.log(this.searchdata)})},this.gotovideo=n=>{console.log(n),this._router.navigate(["video",n])}}ngOnInit(){this._searchService.getValue().subscribe(e=>{this.searchid=e,this.apicall(this.searchid)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.k),t.Y36(d),t.Y36(c.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-search"]],decls:6,vars:1,consts:[["href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css","rel","stylesheet"],["href","//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css","rel","stylesheet"],[1,"container"],[1,"row","row-text-center"],["class","col-sm-3",4,"ngFor","ngForOf"],[1,"col-sm-3"],[1,"thumbnail",3,"click"],[3,"src"],[1,"row"],[1,"col-sm-2"],[1,"logoclass",3,"src"],[1,"col-sm-10"],[1,"titleclass"],[1,"channelname"],[1,"col-sm-12"],[1,"publishtime"]],template:function(e,o){1&e&&(t.TgZ(0,"head"),t._UZ(1,"link",0)(2,"link",1),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t.YNc(5,_,15,4,"div",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",o.searchdata))},dependencies:[a.sg],styles:[".thumbnail[_ngcontent-%COMP%]{cursor:pointer;border:none;height:180;width:320}.logoclass[_ngcontent-%COMP%]{margin-top:10px;margin-left:20px;border-radius:50%;width:25px;height:25px}.titleclass[_ngcontent-%COMP%]{font-weight:700;padding-top:10px;font-size:13px;margin-left:5px}.row[_ngcontent-%COMP%]{margin-bottom:10px}.channelname[_ngcontent-%COMP%]{text-align:center;font-size:10px}.publishtime[_ngcontent-%COMP%]{margin-left:20px}"]}),i})();var Z=r(1481);let x=(()=>{class i{constructor(e){this._sanitizer=e}transform(e,o){switch(o){case"html":default:return this._sanitizer.bypassSecurityTrustHtml(e);case"style":return this._sanitizer.bypassSecurityTrustStyle(e);case"script":return this._sanitizer.bypassSecurityTrustScript(e);case"url":return this._sanitizer.bypassSecurityTrustUrl(e);case"resourceUrl":return this._sanitizer.bypassSecurityTrustResourceUrl(e)}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z.H7,16))},i.\u0275pipe=t.Yjl({name:"safe",type:i,pure:!0}),i})(),b=(()=>{class i{transform(e){return parseInt(e/=1e3)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=t.Yjl({name:"customdatepipe",type:i,pure:!0}),i})();function C(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",28)(2,"button",29),t.NdJ("click",function(){const n=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.suggest(n.id.videoId))}),t._UZ(3,"img",30),t.qZA()(),t.TgZ(4,"div",28),t._uU(5),t._UZ(6,"br"),t.TgZ(7,"div",31),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"div",32),t._uU(11),t.ALo(12,"date"),t.qZA()()()}if(2&i){const e=s.$implicit;t.xp6(3),t.s9C("src",e.snippet.thumbnails.medium.url,t.LSH),t.xp6(2),t.hij(" ",e.snippet.title," "),t.xp6(3),t.hij(" ",e.snippet.channelTitle," "),t.xp6(3),t.hij("1M Views . ",t.xi3(12,4,e.snippet.publishedAt,"dd-MMM-yyyy"),"")}}const T=[{path:"",component:v},{path:"search",component:y},{path:"video/:id",component:(()=>{class i{constructor(e,o,l){this._queryrouter=e,this._homeServive=o,this._router=l,this.relatedVideo=[],this.videodata=[],this.singledata=[],this.videoget=()=>{this._homeServive.getvideodetails(this.id).subscribe(n=>{console.log(n),this.videodata=n.items,console.log(this.videodata)})},this.relatedvideo=()=>{this._homeServive.getrelatedvideo(this.id).subscribe(n=>{console.log(n),this.relatedVideo=n.items,console.log(this.relatedVideo)})},this.suggest=n=>{console.log("hi"),this._router.navigate(["/video",n]),this.ngOnInit()}}ngOnInit(){console.log(this._queryrouter.snapshot.params),this.id=this._queryrouter.snapshot.params.id,this.iddata="https://www.youtube.com/embed/"+this.id,console.log(this.iddata),this.videoget(),this.relatedvideo()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.gz),t.Y36(d),t.Y36(c.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-videodisplay"]],decls:54,vars:18,consts:[["href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css","rel","stylesheet"],["href","//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css","rel","stylesheet"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"],[1,"row"],[1,"col-sm-1"],[1,"col-sm-7"],["width","700","height","400","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"],["src","/assets/images/location.png","height","20","width","20",1,"locationclass"],[2,"display","flex","margin-top","-20px","margin-left","45px","color","blue","font-style","italic"],[1,"titleclass"],[1,"statistics"],[1,"views",2,"color","#666666"],[1,"postedtime",2,"color","#666666"],[1,"likeicon",2,"margin-left","100px","font-weight","600"],[1,"bi","bi-hand-thumbs-up",2,"font-size","20px","font-weight","600"],[1,"likeicon",2,"margin-left","15px","font-weight","600"],[1,"bi","bi-hand-thumbs-down",2,"font-size","20px","font-weight","600"],[1,"bi","bi-box-arrow-in-up-right",2,"font-size","20px","font-weight","600"],[1,"fa-sharp","fa-solid","fa-scissors"],[1,"fa-sharp","fa-solid","fa-floppy-disk"],[2,"font-size","20px","font-weight","600","margin-top","-3px","margin-left","10px"],[1,"channeldetails"],["src","/assets/images/logo1.jpg",1,"photodetails"],[1,"channelname"],[1,"channeltitle",2,"width","200px"],["type","button",1,"btn","btn-danger"],[1,"col-sm-4"],["class","row",4,"ngFor","ngForOf"],[1,"col-sm-6",2,"margin-bottom","20px"],[1,"relatedbutton",3,"click"],[3,"src"],[1,"relatedtitle"],[1,"relatedviews"]],template:function(e,o){1&e&&(t.TgZ(0,"head"),t._UZ(1,"link",0)(2,"link",1)(3,"link",2),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"div",4),t.TgZ(6,"div",5),t._UZ(7,"iframe",6),t.ALo(8,"safe"),t._UZ(9,"br")(10,"img",7),t.TgZ(11,"div",8),t._uU(12,"US"),t.qZA(),t.TgZ(13,"div",9),t._uU(14),t.qZA(),t.TgZ(15,"div",10)(16,"div",11),t._uU(17),t.ALo(18,"customdatepipe"),t.qZA(),t.TgZ(19,"div",12),t._uU(20),t.ALo(21,"date"),t.qZA(),t.TgZ(22,"div",13),t._UZ(23,"i",14),t._uU(24),t.ALo(25,"customdatepipe"),t.qZA(),t.TgZ(26,"div",15),t._UZ(27,"i",16),t._uU(28,"DISLIKE"),t.qZA(),t.TgZ(29,"div",15),t._UZ(30,"i",17),t._uU(31,"SHARE"),t.qZA(),t.TgZ(32,"div",15),t._UZ(33,"i",18),t._uU(34,"CLIP"),t.qZA(),t.TgZ(35,"div",15),t._UZ(36,"i",19),t._uU(37,"SAVE"),t.qZA(),t.TgZ(38,"div",20),t._uU(39,"..."),t.qZA()(),t._UZ(40,"hr"),t.TgZ(41,"div",21),t._UZ(42,"img",22),t.TgZ(43,"div")(44,"div",23)(45,"div",24),t._uU(46),t.qZA(),t.TgZ(47,"button",25),t._uU(48,"SUBSCRIBE"),t.qZA()()()(),t._UZ(49,"hr"),t.TgZ(50,"div"),t._uU(51),t.qZA()(),t.TgZ(52,"div",26),t.YNc(53,C,13,7,"div",27),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("src",t.xi3(8,8,o.iddata,"resourceUrl"),t.uOi),t.xp6(7),t.Oqu(o.videodata[0].snippet.localized.title),t.xp6(3),t.hij("",t.lcZ(18,11,o.videodata[0].statistics.viewCount),"KViews "),t.xp6(3),t.hij(" .",t.xi3(21,13,o.videodata[0].snippet.publishedAt,"dd-MMM-yyyy"),""),t.xp6(4),t.hij("",t.lcZ(25,16,o.videodata[0].statistics.likeCount),"K"),t.xp6(22),t.Oqu(o.videodata[0].snippet.channelTitle),t.xp6(5),t.Oqu(o.videodata[0].snippet.description),t.xp6(2),t.Q6J("ngForOf",o.relatedVideo))},dependencies:[a.sg,a.uU,x,b],styles:[".locationclass[_ngcontent-%COMP%]{margin-left:20px}.titleclass[_ngcontent-%COMP%]{font-size:15px;margin-top:10px}.statistics[_ngcontent-%COMP%], .channeldetails[_ngcontent-%COMP%]{display:flex;margin-top:10px}.photodetails[_ngcontent-%COMP%]{border-radius:50%;height:40px;width:40px}.channelname[_ngcontent-%COMP%]{display:flex;margin-left:10px;margin-top:10px;color:#000;font-weight:400}.btn[_ngcontent-%COMP%]{margin-left:350px}.relatedtitle[_ngcontent-%COMP%]{font-size:15spx;font-style:italic}.relatedviews[_ngcontent-%COMP%]{margin-top:-10px;font-size:10px;font-style:italic}.relatedbutton[_ngcontent-%COMP%]{border:none;cursor:pointer}"]}),i})()}];let w=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(T),c.Bz]}),i})(),U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[a.ez,w,u.JF]}),i})()}}]);