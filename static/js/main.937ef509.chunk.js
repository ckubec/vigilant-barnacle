(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{127:function(e,t,a){var n={"./C Sharp.svg":128,"./C++.svg":129,"./C.svg":130,"./Java.svg":131,"./Javascript.svg":132,"./Python.svg":133,"./React.svg":57,"./ReactBootstrap.svg":58,"./Typescript.svg":59};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=127},128:function(e,t,a){e.exports=a.p+"static/media/C Sharp.afa245f5.svg"},129:function(e,t,a){e.exports=a.p+"static/media/C++.5be9bde4.svg"},130:function(e,t,a){e.exports=a.p+"static/media/C.00cc5bdb.svg"},131:function(e,t,a){e.exports=a.p+"static/media/Java.00d7cdd3.svg"},132:function(e,t,a){e.exports=a.p+"static/media/Javascript.dd60b11e.svg"},133:function(e,t,a){e.exports=a.p+"static/media/Python.fbef321e.svg"},134:function(e,t,a){},135:function(e,t,a){var n={"./Email.svg":136,"./Github.svg":137,"./LinkedIn.svg":138,"./Phone.svg":139,"./Text.svg":140};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=135},136:function(e,t,a){e.exports=a.p+"static/media/Email.43a710bc.svg"},137:function(e,t,a){e.exports=a.p+"static/media/Github.032a9ef3.svg"},138:function(e,t,a){e.exports=a.p+"static/media/LinkedIn.dd50c0f2.svg"},139:function(e,t,a){e.exports=a.p+"static/media/Phone.17b348b4.svg"},140:function(e,t,a){e.exports=a.p+"static/media/Text.946e7a76.svg"},141:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(30),c=a.n(r),l=a(11),s=a(12),o=a(14),d=a(13),m=a(15),u=(a(20),a(150)),h=a(148),p=(a(75),a(33)),f=a(32),v=a(31),g=a(39),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).windowheight=425,a.windowwidth=window.innerWidth,a.grid=[],a.interval=void 0,a.handleWindowResize=a.handleWindowResize.bind(Object(v.a)(a)),a.buildGrid(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"buildGrid",value:function(){for(var e=40*Math.sqrt(3),t=0;t<this.windowheight;t+=60)for(var a=0;a<=this.windowwidth+e;a+=e)t/60%2===0?this.grid.push(new E((a+1)*(t+1),a,t,40,"black")):this.grid.push(new E((a+1)*(t+1),a-e/2,t,40,"black"))}},{key:"rebuildGrid",value:function(){this.grid=[],this.buildGrid()}},{key:"handleWindowResize",value:function(){this.windowwidth=window.innerWidth,this.rebuildGrid()}},{key:"render",value:function(){return i.a.createElement(g.Stage,{id:"bannerstage",width:this.windowwidth,height:400,style:{backgroundColor:"black",display:"flex"},key:"BannerStage"},i.a.createElement(g.Layer,{id:"bannerlayer"},this.grid.map((function(e){return e.draw()}))))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.handleWindowResize),this.interval=setInterval((function(){return e.tick()}),200)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"tick",value:function(){this.grid[Math.floor(Math.random()*this.grid.length)].setColor(this.grid[0].randColor()),this.grid[Math.floor(Math.random()*this.grid.length)].setColor("rgba(0,0,0,alp".replace("alp","1")),this.forceUpdate()}}]),t}(i.a.Component),E=function(){function e(t,a,n,i,r){Object(l.a)(this,e),this.id=void 0,this.x=void 0,this.y=void 0,this.size=void 0,this.color=void 0,this.stroke=void 0,this.id=t,this.x=a,this.y=n,this.size=i,this.color=r,this.stroke="black"}return Object(s.a)(e,[{key:"draw",value:function(){return i.a.createElement(g.RegularPolygon,{id:"hex "+this.id,key:"hex"+this.id,sides:6,radius:this.size,x:this.x,y:this.y,fill:this.color,stroke:this.stroke})}},{key:"setColor",value:function(e){this.color=e,this.stroke=e}},{key:"randColor",value:function(){return"rgba("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"}}]),e}(),y=["Chris Kubec","About","Skills","Contact"],k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=y.shift(),t=y.map((function(e){return t=e,i.a.createElement(h.a.Link,{href:"#"+t},t.toUpperCase());var t}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{key:"Banner"}),i.a.createElement(u.a,{collapseOnSelect:!0,className:"sticky-top",expand:"md"},i.a.createElement(h.a.Link,{className:"title"},null===e||void 0===e?void 0:e.toUpperCase()),i.a.createElement(f.a,{className:"menuToggle"},"MENU"),i.a.createElement(p.a,{id:"responsive-navbar-nav"},i.a.createElement(h.a,{className:"justify-content-center mr-auto"},t))))}}]),t}(i.a.Component);var x=a(147),w=a(143),O=a(144),j=a(145),C=a(149),N=a(65),M=a.n(N),R=(a(29),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"lrgCard",id:"Skills"},i.a.createElement(w.a,{className:"title-bar"},i.a.createElement(O.a,{id:"card-title-p"},i.a.createElement("img",{className:"img-fluid",style:{marginRight:"0.5rem",maxWidth:"40px",maxHeight:"40px"},src:M.a,width:40,color:"white",alt:"skills section"}),i.a.createElement("h2",null,"Skills"))),i.a.createElement("div",{className:"container-fluid"},function(){var e=S.map((function(e){return function(e){return i.a.createElement(j.a,{xs:6,sm:4,md:3,key:e,style:T},i.a.createElement(C.a,null,i.a.createElement(C.a.Img,{className:"d-flex",src:a(127)("./"+e+".svg"),alt:"Card image"})),i.a.createElement(C.a.Text,{style:B,color:"white"},e))}(e)}));return i.a.createElement(O.a,{className:"deck"},e)}()))}}]),t}(i.a.Component)),S=["React","Python","Javascript","Typescript","Java"];var T={marginBottom:"0px",backgroundColor:"black"},B={textAlign:"center",color:"white",marginBottom:"0px",overflow:"hidden",textOverflow:"hidden",whiteSpace:"nowrap",fontSize:"1rem"};var W=a(67),z=a(68),U=a(146),L=a(66),G=a.n(L),J=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"lrgCard",id:"About"},i.a.createElement(w.a,{className:"title-bar"},i.a.createElement(O.a,{id:"card-title-p"},i.a.createElement("img",{className:"img-fluid",src:G.a,style:{marginRight:"0.5rem",textAlign:"center",maxHeight:"40px"},width:40,color:"white",alt:"about section"}),i.a.createElement("h2",{id:"card-title"},"About Me"))),i.a.createElement(C.a.Body,null,i.a.createElement(C.a.Text,null,"Hi my name is Chris, a Full Stack Software Engineer located in Seattle, Washington... This site is still under construction, come back soon.  ",i.a.createElement("i",null,"Posted - 2/25/20")),i.a.createElement(W.a,{eventKey:"open"},i.a.createElement(C.a.Text,null)),i.a.createElement(z.a,{as:U.a,variant:"link",eventKey:"open"},"more")))}}]),t}(i.a.Component),P=a(69),A=a.n(P),I=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={backgroundColor:"black",fontSize:".75rem",textAlign:"center"},t={padding:"0px",margin:"auto",verticalAlign:"middle"};return i.a.createElement("div",{className:"lrgCard",id:"Built",style:t},i.a.createElement(C.a.Header,{style:t,as:"h6"},i.a.createElement(w.a,null,i.a.createElement(O.a,{id:"card-title-p"},i.a.createElement("img",{className:"img-fluid",src:A.a,style:{marginRight:"0.5rem",maxWidth:"40px",maxHeight:"40px"},width:40,color:"white",alt:"about section"}),i.a.createElement("div",{id:"card-title"},"Built Using")))),i.a.createElement(C.a.Body,null,i.a.createElement(w.a,null,i.a.createElement(O.a,null,i.a.createElement("div",{className:"col",style:e},i.a.createElement("img",{className:"mr-3",src:a(57)}),i.a.createElement("div",null,"React")),i.a.createElement("div",{className:"col",style:e},i.a.createElement("img",{className:"mr-3",src:a(59)}),i.a.createElement("div",null,"Typescript")),i.a.createElement("div",{className:"col",style:e},i.a.createElement("img",{className:"mr-3",src:a(58)}),i.a.createElement("div",null,"Bootstrap"))))))}}]),t}(i.a.Component),H=a(70),D=a.n(H),F=(a(134),[{name:"LinkedIn",href:"https://www.linkedin.com/in/chriskubec/"},{name:"Email",href:"mailto:ckubec@gmail.com"},{name:"Text",href:"sms:206-245-0897"},{name:"Phone",href:"tel:206-245-0897"},{name:"Github",href:"https://github.com/ckubec"}]),_=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=F.map((function(e){return t=e.name,n=e.href,i.a.createElement(j.a,{xs:4,sm:2},i.a.createElement("a",{href:n},i.a.createElement("img",{src:a(135)("./"+t+".svg"),alt:t}),i.a.createElement("h6",null,t)));var t,n}));return i.a.createElement("div",{className:"lrgCard",id:"Contact"},i.a.createElement(w.a,{className:"title-bar"},i.a.createElement(O.a,{id:"card-title-p"},i.a.createElement("img",{className:"img-fluid",style:{marginRight:"0.5rem",maxWidth:"40px",maxHeight:"40px"},src:D.a,width:40,color:"white",alt:"contact section"}),i.a.createElement("h2",{id:"card-title"},"Contact"))),i.a.createElement(w.a,null,i.a.createElement(O.a,{className:"justify-content-center"},e)))}}]),t}(i.a.Component);var K=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Body"},i.a.createElement(x.a,null,i.a.createElement(J,null),i.a.createElement(R,null),i.a.createElement(_,null),i.a.createElement(I,null)))}}]),t}(i.a.Component),q={position:"relative",overflowY:"scroll",backgroundColor:"black"},Y=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,null),i.a.createElement("div",{style:q},i.a.createElement(K,{key:"pagebody"})))}}]),t}(i.a.Component);c.a.render(i.a.createElement(Y,{key:"app"}),document.getElementById("app"))},29:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/React.aa112e2e.svg"},58:function(e,t,a){e.exports=a.p+"static/media/ReactBootstrap.83fe61b0.svg"},59:function(e,t,a){e.exports=a.p+"static/media/Typescript.5039401c.svg"},65:function(e,t,a){e.exports=a.p+"static/media/skills-icon.f147a5a1.svg"},66:function(e,t,a){e.exports=a.p+"static/media/about-icon.3decae06.svg"},69:function(e,t,a){e.exports=a.p+"static/media/built-icon.af726519.svg"},70:function(e,t,a){e.exports=a.p+"static/media/contact-icon.c4af1d93.svg"},71:function(e,t,a){e.exports=a(141)},75:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.937ef509.chunk.js.map