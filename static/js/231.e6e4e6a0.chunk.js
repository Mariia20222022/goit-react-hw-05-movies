"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[231],{231:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(689),s=n(87),a=n(861),i=n(439),c=n(757),o=n.n(c),l={item:"MovieGalleryItem_item__lV9y5",container:"MovieGalleryItem_container__IFXDe",wrapper:"MovieGalleryItem_wrapper__jXhhE",img:"MovieGalleryItem_img__+UXq7",date:"MovieGalleryItem_date__o76m9",customButton:"MovieGalleryItem_customButton__xYO0+",box:"MovieGalleryItem_box__Rcsqo"},u=n(791),h=n(184),v=function(e){var t,n,c=e.movieId,v=(e.from,(0,r.TH)()),m="acee11b4b18b6e03b694743e5006f3ac",d="en-US",p="https://api.themoviedb.org/3",x=(0,u.useState)(null),f=(0,i.Z)(x,2),_=f[0],j=f[1],g=(0,u.useState)([]),w=(0,i.Z)(g,2),N=w[0],b=w[1],M=(0,u.useState)(!1),y=(0,i.Z)(M,2),H=y[0],k=y[1];if((0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/movie/").concat(c,"?api_key=").concat(m,"&language=").concat(d));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,j(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,a.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/genre/movie/list?api_key=").concat(m,"&language=").concat(d));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,b(n),console.log(n),e.abrupt("return",n.name);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();k(!0),e(),t()}),[c]),H)return(0,h.jsx)("p",{children:"Loading..."});if(!_)return null;var I,Z=(I=_.vote_average,Math.round(10*I));return console.log(N),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:l.box,children:(0,h.jsxs)("button",{className:l.customButton,children:[(0,h.jsx)(s.rU,{to:null!==(t=null===(n=v.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/"}),"Back"]})}),(0,h.jsxs)("li",{className:l.item,children:[(0,h.jsx)(s.rU,{to:"/movies/".concat(c)}),(0,h.jsx)("img",{className:l.img,src:_.poster_path?"https://image.tmdb.org/t/p/w500"+_.poster_path:"https://via.placeholder.com/500x750?text=No+Image",alt:_.title}),(0,h.jsxs)("div",{className:l.container,children:[(0,h.jsxs)("div",{className:l.wrapper,children:[(0,h.jsx)("h2",{className:l.title,children:_.original_title}),"("," ",(0,h.jsx)("p",{className:l.date,children:_.release_date?_.release_date.split("-")[0]:""}),")"]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:l.subtitle,children:"User score:"}),(0,h.jsxs)("p",{className:l.rating,children:[Z,"%"]})]}),(0,h.jsx)("h3",{className:l.subtitle,children:"Overview:"}),(0,h.jsx)("p",{className:l.overview,children:_.overview}),_.genres&&_.genres.length>0&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:l.subtitle,children:"Genres:"}),(0,h.jsx)("p",{className:l.genre,children:_.genres.map((function(e){return e.name})).join(", ")})]})]})]})]})},m=function(){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"128",viewBox:"0 0 24 24",width:"128",children:[(0,h.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,h.jsx)("path",{d:"M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z",fill:"#ffa500"})]})},d=function(){return(0,h.jsx)("svg",{id:"Flat",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",height:"128",width:"128",children:(0,h.jsx)("path",{d:"M216,42H40A14.01572,14.01572,0,0,0,26,56V200a14.01572,14.01572,0,0,0,14,14H216a14.01572,14.01572,0,0,0,14-14V56A14.01572,14.01572,0,0,0,216,42Zm2,158a2.0026,2.0026,0,0,1-2,2H40a2.0026,2.0026,0,0,1-2-2V56a2.0026,2.0026,0,0,1,2-2H216a2.0026,2.0026,0,0,1,2,2ZM186,96a6.00029,6.00029,0,0,1-6,6H76a6,6,0,0,1,0-12H180A6.00029,6.00029,0,0,1,186,96Zm0,32a6.00029,6.00029,0,0,1-6,6H76a6,6,0,0,1,0-12H180A6.00029,6.00029,0,0,1,186,128Zm0,32a6.00029,6.00029,0,0,1-6,6H76a6,6,0,0,1,0-12H180A6.00029,6.00029,0,0,1,186,160Z",fill:"#ffa500"})})},p="MovieDetails_wrapper__-4bCr",x="MovieDetails_list__eJ2XB",f="MovieDetails_link__Q43Zz",_=function(){var e=(0,r.UO)().movieId,t=(0,r.TH)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{movieId:e,from:t.state&&t.state.from}),(0,h.jsx)("div",{className:p,children:(0,h.jsxs)("ul",{className:x,children:[(0,h.jsx)("li",{children:(0,h.jsxs)(s.rU,{className:f,to:"/movies/".concat(e,"/cast"),children:["Cast",(0,h.jsx)(m,{})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(s.rU,{className:f,to:"/movies/".concat(e,"/reviews"),children:["Review",(0,h.jsx)(d,{})]})})]})}),(0,h.jsx)(r.j3,{})]})}},861:function(e,t,n){function r(e,t,n,r,s,a,i){try{var c=e[a](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function c(e){r(i,s,a,c,o,"next",e)}function o(e){r(i,s,a,c,o,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=231.e6e4e6a0.chunk.js.map