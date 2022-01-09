(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{232:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},243:function(e,t,n){},244:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},276:function(e,t){},278:function(e,t){},282:function(e,t){},308:function(e,t){},310:function(e,t){},323:function(e,t){},325:function(e,t){},533:function(e,t,n){},534:function(e,t,n){},535:function(e,t,n){},536:function(e,t,n){},538:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(35),o=n.n(i),r=(n(243),n(244),n(4)),c=n(5),l=n(8),u=n(9),p=n.p+"static/media/owl.009159d1.png",d=n.p+"static/media/OPENSEA_Banner.40e6ad61.png",b=(n(245),n(546)),m=n(542),y=n(547),j=(n(246),n(30)),h=(n(247),n(0)),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(a.a.Component),f=O;function x(){document.getElementById("mint").scrollIntoView()}function g(){document.getElementById("roadmap").scrollIntoView()}function v(){window.open("https://opensea.io/")}var w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"header-control",children:[Object(h.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(b.a.Brand,{href:"#home",children:Object(h.jsx)("img",{src:p,width:100,height:100,alt:"logo"})}),Object(h.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsx)(y.a,{className:"me-auto"}),Object(h.jsxs)(y.a,{children:[Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:x,children:"MINT"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:g,children:"ROADMAP"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:v,children:"OPENSEA"}),Object(h.jsx)("text",{style:{width:20}}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com",children:[" ",Object(h.jsx)(j.d,{size:32})]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10,paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com",children:[" ",Object(h.jsx)(j.g,{size:32})]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10},target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg",children:[" ",Object(h.jsx)(j.a,{size:32}),"   "]})]})]})]})]})}),Object(h.jsxs)("div",{className:"header-content",children:[Object(h.jsx)("h1",{children:Object(h.jsx)("img",{className:"thePicture",src:d})}),Object(h.jsx)("div",{className:"header-content-buttons-container"})]}),Object(h.jsx)("div",{})]})})}}]),n}(a.a.Component),T=w,S=n(543),C=n(544),A=(n(253),n.p+"static/media/dicklogo.9f1ffd25.png"),N=(n.p,n.p,n.p,n(254),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(h.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(h.jsxs)("div",{className:"teammember-description",children:[Object(h.jsxs)("p",{className:"teammember-name",children:["@",this.props.name]}),Object(h.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(a.a.Component)),E=N,M=(a.a.Component,n(255),a.a.Component,n(256),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"footer-control",id:"socials",children:Object(h.jsxs)(m.a,{className:"footer",children:[Object(h.jsx)("p",{style:{fontSize:15}}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{style:{fontSize:15},children:Object(h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai/",style:{textDecoration:"none",color:"white",textAlign:"right"},children:"Website by Metaverse Solutions, LLC"})})})]})})}}]),n}(a.a.Component)),I=M,k=n.p+"static/media/roadmap.2f2509ab.png",B=(n(257),n.p,n(235)),_=(n(258),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={open:!1},s}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(h.jsxs)("div",{className:"collapse-header",children:[Object(h.jsx)("h4",{children:this.props.tag}),Object(h.jsx)("p",{children:this.props.title})]}),Object(h.jsx)(j.e,{})]}),Object(h.jsx)(B.a,{in:this.state.open,children:Object(h.jsx)("div",{id:"example",className:"collapse-content",children:this.props.content})})]})}}]),n}(a.a.Component)),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={roadmaps:[{tag:"10%",title:"SELL OUT!! LET\u2019S PAY THE BANKS!",content:"With the help of this community, we will be funded enough to provide dreams to all holders."},{tag:"20%",title:"REVEAL AND REWARDS!",content:"Once we sell out, we will have a live reveal party in which all holders have access to. Legendary holder will then be reveled for their chance to win a 2022 BMW M8 Competition Coupe or $100,000!!!"},{tag:"30%",title:"EXCLUSIVE 1-OF-1 MERCHANDISE ",content:"Holders that meet minimum hold time, will be entitled to a 1-of-1 hoodie that represents their own SBC. If hoodie is not claimed when the SBC is minted, secondary holder may claim it for themselves."},{tag:"40%",title:"SERIOUS BUSINESS CATS LAUNCH\u2014PHASE 1",content:"60-Day hold verification will be completed. 2,500 holders will be randomly selected (if minimum held time is met) and will begin the process of verification and presentation of their business plan in order to be funded. "},{tag:"\t50%  ",title:"SERIOUS BUSINESS CATS LAUNCH\u2014PHASE 2",content:"2,500 holders will be randomly selected (if minimum held time is met) and will begin the process of verification and presentation of their business plan in order to be funded. "},{tag:"\t60%  ",title:"SERIOUS BUSINESS CATS LAUNCH\u2014PHASE 3",content:"2,500 holders will be randomly selected (if minimum held time is met) and will begin the process of verification and presentation of their business plan in order to be funded. "},{tag:"70% ",title:"\t SERIOUS BUSINESS CATS LAUNCH\u2014PHASE 4",content:"2,500 holders will be randomly selected (if minimum held time is met) and will begin the process of verification and presentation of their business plan in order to be funded. (All first-time holders will have business up and running)"},{tag:"80%",title:"   NO ONE IS LEFT BEHIND!",content:"90-Day verification will be done for all secondary owners and their business plans and verification will then be received and review in a timely fashion. "},{tag:"90%",title:"LET\u2019S GET RICH!",content:"All created and funded business would have been launched and monitored for the $1 Million mark. "},{tag:"100%",title:"LETS DO IT AGAIN!",content:"Serious Business Cats Club will give birth to their distant relatives and bring out new opportunities into the world. The creation of Serious Business Fox Club will be ready to launch. "}]},s}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(h.jsxs)(m.a,{style:{backgroundColor:"#FF82A9",padding:30,border:"solid black 10px",borderRadius:20},children:[Object(h.jsxs)("header",{style:{fontWeight:900},children:[Object(h.jsx)("span",{children:"CHECK OUT OUR"})," ",Object(h.jsx)("br",{})," ROADMAP"]}),Object(h.jsxs)(S.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(h.jsx)(C.a,{xs:12,md:6,children:Object(h.jsx)("img",{className:"roadimage",style:{border:"solid 10px black",borderRadius:20},src:k})}),Object(h.jsx)(C.a,{style:{color:"white",alignContent:"center",justifyContent:"center",textAlign:"center"},children:this.state.roadmaps.map((function(e,t){return Object(h.jsx)(_,{style:{textAlign:"center",color:"black"},tag:e.tag,title:e.title,content:e.content},t)}))})]})]})})}}]),n}(a.a.Component),U=(n(259),n.p+"static/media/item1.1c214071.png"),R=n.p+"static/media/item2.81e34ae6.png",H=n.p+"static/media/item3.eec91da6.png",D=(n(260),n.p+"static/media/fire.76eb30ed.png"),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"top-item",children:[Object(h.jsx)("img",{src:this.props.image,alt:"top item"}),Object(h.jsxs)("div",{className:"top-item-description",children:[Object(h.jsx)("p",{children:this.props.name}),Object(h.jsx)("h6",{children:this.props.price})]}),Object(h.jsxs)("div",{className:"top-item-bid",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(j.f,{})," HighestBid ",Object(h.jsx)("b",{children:this.props.highestBid})]}),Object(h.jsxs)("p",{children:["New Bid \xa0",Object(h.jsx)("img",{src:D,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(a.a.Component),F=z,W=(a.a.Component,n(22)),P=n.p+"static/media/catz.a1981156.gif",K=(n(261),n(74)),Y=n(88),G=n(27),V=n.n(G),$=(n(86),n(231),n(232),n(89)),J=n(233),Q=n(3),q={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(Q.a)(Object(Q.a)({},q),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(Q.a)(Object(Q.a)({},q),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(Q.a)(Object(Q.a)({},e),{},{account:t.payload.account});default:return e}},Z={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(Q.a)(Object(Q.a)({},Z),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},te=Object($.b)({blockchain:X,data:ee}),ne=[J.a],se=Object($.c)($.a.apply(void 0,ne)),ae=Object($.d)(te,se),ie=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},oe=function(e){return function(){var e=Object(Y.a)(V.a.mark((function e(t){var n,s,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,ae.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,ae.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return s=e.sent,e.next=10,ae.getState().blockchain.smartContract.methods.cost().call();case 10:a=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:s,cost:a}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(ie("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()};var re=function(){var e=Object(K.b)(),t=Object(K.c)((function(e){return e.blockchain})),n=(Object(K.c)((function(e){return e.data})),Object(s.useState)("")),a=Object(W.a)(n,2),i=(a[0],a[1]),o=Object(s.useState)(!1),r=Object(W.a)(o,2),c=r[0],l=r[1],u=Object(s.useState)(0),p=Object(W.a)(u,2),d=p[0],b=p[1],y=function(){""!==t.account&&null!==t.smartContract&&e(oe(t.account))};return Object(s.useEffect)((function(){y()}),[t.account]),Object(h.jsx)("div",{className:"mint-control",id:"mint",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsx)(C.a,{md:6,xs:12,className:"mint-image",children:Object(h.jsx)("img",{src:P,alt:"mint gif"})}),Object(h.jsxs)(C.a,{md:6,xs:12,className:"mint-description",children:[Object(h.jsxs)("header",{children:["MINT YOUR ",Object(h.jsx)("text",{style:{color:"#172a55"},children:"SERIOUS BUSINESS CAT"})]}),Object(h.jsxs)("p",{style:{textAlign:"center"},children:["With all these great benefits this club has to offer, there is a small fee to join the club. Minting will be .255 ETH +Gas.",Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"number-control",children:[Object(h.jsx)(j.b,{color:"white",size:40,onClick:function(){d<=0||b(d-1)}}),Object(h.jsx)("span",{id:"inputBox",children:d}),Object(h.jsx)(j.c,{color:"white",size:40,onClick:function(){d>=25||b(d+1)}})]}),Object(h.jsx)("p",{style:{marginTop:0,marginBottom:0},children:"0.255 ETH + Gas"}),""===t.account||null===t.smartContract?Object(h.jsxs)("div",{className:"flex-column",children:[Object(h.jsx)("button",{className:"ybutton",onClick:function(e){console.log("--------")},children:"COMING SOON"}),""!==t.errorMsg?Object(h.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:t.errorMsg}):null]}):Object(h.jsx)("button",{className:"ybutton",onClick:function(n){var s;n.preventDefault(),s=1,(s=document.getElementById("inputBox").textContent)<=0||(i("Minting your Official BooCrew NFT..."),l(!0),t.smartContract.methods.mint(t.account,s).send({gasLimit:285e3*s,to:"0x6C243F70eEE0Fb472553012f58754C9BfE5238B0",from:t.account,value:t.web3.utils.toWei((.05*s).toString(),"ether")}).once("error",(function(e){console.log(e),i("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){i("Your BooCrew NFT has been successfully minted!"),l(!1),e(oe(t.account))}))),y()},children:c?"BUSY":"MINT"})]})]})})})},ce=(n(533),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"about-control",children:[Object(h.jsx)(m.a,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsxs)(C.a,{md:6,xs:12,className:"about-description",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("span",{children:"BILLIONS OF CATS IN THE WORLD."}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"ONLY 10,000 MEAN"})," SERIOUS BUSINESS."]}),Object(h.jsxs)("p",{children:["Serious Business Cats Club is a collection of 10,000 serious business cats NFTs (non-fungible tokens) that conduct all their business inside the Ethereum blockchain. Uniquely designed and compromised, the SBCs will provide each holder with great utilities and rewards with each business matter associated with and through the Serious Business Cats Club."," "]}),Object(h.jsxs)("header",{children:[Object(h.jsx)("span",{})," UTILITIES:"]}),Object(h.jsxs)("p",{children:["1. Each Holder will have the ability to access exclusive business content pertaining to each and one of the cats.",Object(h.jsx)("br",{}),"2. 10,000 Opportunities will be given to the holders of the SBCs.",Object(h.jsx)("br",{}),"3. All holders will be given equal opportunities to launch their legally owned business through Serious Business Cats Club and will be funded until each business successfully reach the $1 Million Dollar Mark!"]})]}),Object(h.jsx)(C.a,{md:6,xs:12,className:"image-control",children:Object(h.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:P,alt:"about gif"})})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(m.a,{children:Object(h.jsxs)(C.a,{className:"about-description",children:[Object(h.jsx)("header",{style:{textAlign:"center"},children:"ROYALTIES:"}),Object(h.jsx)("p",{style:{textAlign:"center"},children:"The royalties have been set to 5% of all secondary market sells. All money raised will be used to fund the business plans of all holders that develop independent and thorough plans to create a million-dollar business. Primary holders of the SBCs will have to hold a minimum of 60 days until all benefits can be provided; if minimum hold time is not accomplished, their SBCs will be nullified from royalty compensation. Secondary holders will have a minimum hold time of 90 days. All benefits will be then passed on."})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(m.a,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsx)(C.a,{md:6,xs:12,className:"image-control",children:Object(h.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:P,alt:"about gif"})}),Object(h.jsxs)(C.a,{md:6,xs:12,className:"about-description",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("span",{children:"ONLY A HANDFUL OF "}),"SBCs"," ",Object(h.jsx)("span",{children:"WILL HAVE A SPECIAL RARITY..."}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("p",{style:{fontSize:25},children:["Holders of the:",Object(h.jsx)("br",{}),Object(h.jsx)("text",{style:{color:"#172A55",fontSize:25},children:"\u2022 Cactiman Suit"}),Object(h.jsx)("br",{}),Object(h.jsx)("text",{style:{color:"#172A55",fontSize:25},children:"\u2022 Goldman Suit"}),Object(h.jsx)("br",{}),Object(h.jsx)("text",{style:{color:"#172A55",fontSize:25},children:"\u2022 Louis Vuitton Suit"}),Object(h.jsx)("br",{}),Object(h.jsx)("text",{style:{color:"#172A55",fontSize:25},children:"\u2022 Etherman Suit"}),Object(h.jsx)("br",{}),Object(h.jsx)("text",{style:{color:"#172A55",fontSize:25},children:"\u2022 Royal Plains Suit"}),Object(h.jsx)("br",{}),"Will be given a fully loaded ",Object(h.jsx)("text",{style:{color:"#172A55",fontSize:25},children:"2022 BMW M8 Competition Coupe"})," in the color of their choice! (MSRP $156,350.00)",Object(h.jsx)("br",{}),"Holders can deny the car for a cash price of $100,000!"]})]})]})})]})}}]),n}(a.a.Component)),le=ce,ue=n(234),pe=n.n(ue),de=(n.p,n(534),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"meet-control",children:[Object(h.jsx)(m.a,{children:Object(h.jsxs)("header",{style:{textAlign:"center"},children:["CHECK OUT ",Object(h.jsx)("br",{})," ",Object(h.jsx)("span",{children:"OUR CATS!"})]})}),Object(h.jsxs)(pe.a,{breakpoints:[{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}}],dots:!1,arrows:!0,showSides:!0,sidesOpacity:.5,sideSize:.1,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/1.png",alt:"boy1"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/2.png",alt:"boy2"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/3.png",alt:"boy3"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/4.png",alt:"boy4"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/5.png",alt:"boy5"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/6.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/7.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/8.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/9.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/10.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://seriousbusinesscats.s3.us-east-2.amazonaws.com/11.png",alt:"boy6"})})]})]})}}]),n}(a.a.Component)),be=de;n(535),a.a.Component,n.p,n(536);var me=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(T,{}),Object(h.jsx)(le,{}),Object(h.jsx)(be,{}),Object(h.jsx)(re,{}),Object(h.jsx)(L,{}),Object(h.jsx)(I,{})]})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,548)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),i(e),o(e)}))};n(537);o.a.render(Object(h.jsx)(K.a,{store:ae,children:Object(h.jsx)(me,{})}),document.getElementById("root")),ye()}},[[538,1,2]]]);
//# sourceMappingURL=main.dda4c5f5.chunk.js.map