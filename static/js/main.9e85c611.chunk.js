(this.webpackJsonpmertkesknn=this.webpackJsonpmertkesknn||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(7),n=s.n(i),r=(s(13),s(2)),l=s(3),o=s(5),d=s(4),j=(s(14),s(8)),m=s.n(j),u=s.p+"static/media/author.dc966971.jpeg",b=(s(15),s(0)),h=function(){return Object(b.jsxs)("div",{className:"Home",id:"Home",children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsxs)("h1",{children:[Object(b.jsx)("p",{children:"Hi,"}),Object(b.jsx)("p",{children:"I'm Mert"}),Object(b.jsx)("p",{children:Object(b.jsx)(m.a,{className:"typed-text",strings:["Web Developer","UI Developer"],typeSpeed:100,backSpeed:100,loop:!0})})]})}),Object(b.jsx)("div",{className:"person",children:Object(b.jsx)("img",{src:u,alt:"person"})})]})},x=(s(17),s.p+"static/media/real-logo.bc628a43.PNG"),p=function(){return Object(b.jsx)("div",{className:"Navbar",children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-white",style:{borderRadius:"5px"},children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:Object(b.jsx)("img",{src:x,className:"logo",alt:"logo"})}),Object(b.jsx)("button",{className:"navbar-toggler dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse dropdown-menu","aria-labelledby":"dropdownMenuLink",style:{position:"inherit",justifyContent:"flex-end",border:"none"},children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsxs)("a",{className:"nav-link",href:"#Home",children:["Home ",Object(b.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"#AboutMe",children:"About Me"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"#Projects",children:"Projects"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"#Comments",children:"Comments"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"#Contact",children:"Contact"})})]})})]})})},O=(s(18),function(){return Object(b.jsxs)("div",{className:"About",id:"AboutMe",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."})]})}),v=(s(19),s(20),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"posts",children:Object(b.jsxs)("li",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("p",{id:"author",children:this.props.author}),Object(b.jsx)("p",{children:Object(b.jsxs)("i",{children:["-",this.props.body]})}),Object(b.jsx)("button",{onClick:this.props.delete,children:"Delete"}),Object(b.jsx)("hr",{})]})})}}]),s}(c.Component)),f=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).deleteEvent=function(t){var s=Object.assign([],e.state.postArray);s.splice(t,1),e.setState({postArray:s})},e.setPost=function(t){e.setState({Body:t.target.value})},e.setName=function(t){e.setState({Author:t.target.value})},e.addPost=function(){e.postID=e.postID+1;var t=Object.assign([],e.state.postArray);t.push({author:e.state.Author,body:e.state.Body}),e.setState({postArray:t})},e.postID=0,e.state={postArray:[{id:1,author:"landiggity",body:"This is my first comment on this forum so don't be a dick"},{id:2,author:"scarlett-jo",body:"That's a mighty fine comment you've got there my good looking fellow..."},{id:3,author:"rosco",body:"What is the meaning of all of this 'React' mumbo-jumbo?"}],Body:"",Author:""},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"Comments",children:[Object(b.jsx)("h2",{children:"Comments"}),Object(b.jsx)("ul",{children:this.state.postArray.map((function(t,s){return Object(b.jsx)(v,{author:t.author,body:t.body,delete:e.deleteEvent.bind(e,s)},t.id)}))}),Object(b.jsx)("input",{type:"text",placeholder:"Username",onBlur:this.setName}),Object(b.jsx)("input",{type:"text",placeholder:"Comments",onBlur:this.setPost}),Object(b.jsx)("button",{onClick:this.addPost,children:"Add Post"})]})})}}]),s}(c.Component),N=(s(21),s.p+"static/media/pro1.1272ab8e.jpg"),g=(s(22),s(23),function(){return Object(b.jsxs)("div",{className:"Projects",id:"Projects",children:[Object(b.jsx)("section",{className:"pt-3",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-12",children:Object(b.jsx)("h2",{children:"Some Of My Past Projects"})})})}),Object(b.jsx)("section",{className:"carousel slider","data-ride":"carousel",id:"postsCarousel",children:Object(b.jsx)("div",{className:"container pt-0 mt-2 carousel-inner",children:Object(b.jsxs)("div",{className:"row row-equal carousel-item active m-t-0",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-img-top card-img-top-250",children:Object(b.jsx)("img",{className:"img-fluid",src:N,alt:"project_1"})}),Object(b.jsxs)("div",{className:"card-block pt-2",children:[Object(b.jsx)("div",{className:"card-header",style:{backgroundColor:"#fff"},children:Object(b.jsx)("h3",{children:"Project 1"})}),Object(b.jsx)("div",{className:"card-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})]})]})}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-img-top card-img-top-250",children:Object(b.jsx)("img",{className:"img-fluid",src:N,alt:"project_1"})}),Object(b.jsxs)("div",{className:"card-block pt-2",children:[Object(b.jsx)("div",{className:"card-header",style:{backgroundColor:"#fff",color:"#3f71f4"},children:Object(b.jsx)("h3",{children:"Project 2"})}),Object(b.jsx)("div",{className:"card-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})]})]})}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-img-top card-img-top-250",children:Object(b.jsx)("img",{className:"img-fluid",src:N,alt:"project_1"})}),Object(b.jsxs)("div",{className:"card-block pt-2",children:[Object(b.jsx)("div",{className:"card-header",style:{backgroundColor:"#fff",color:"#3f71f4"},children:Object(b.jsx)("h3",{children:"Project 3"})}),Object(b.jsx)("div",{className:"card-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})]})]})})]})})})]})}),y=(s(24),function(){return Object(b.jsxs)("div",{className:"Contact",id:"Contact",children:[Object(b.jsx)("h2",{children:"Get In Touch"}),Object(b.jsxs)("div",{className:"contact-me",children:[Object(b.jsxs)("div",{className:"column contact-info",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("i",{children:Object(b.jsx)("span",{children:Object(b.jsx)("ion-icon",{name:"person"})})}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h4",{children:"Name"}),Object(b.jsx)("p",{children:"Mert Keskin"})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("i",{children:Object(b.jsx)("span",{children:Object(b.jsx)("ion-icon",{name:"location"})})}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h4",{children:"Address"}),Object(b.jsx)("p",{children:"Ankara, Turkey"})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("i",{children:Object(b.jsx)("span",{children:Object(b.jsx)("ion-icon",{name:"mail"})})}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h4",{children:"E-mail"}),Object(b.jsx)("p",{children:"mertkskinmtk6@gmail.com"})]})]})]}),Object(b.jsxs)("div",{className:"column contact-form",children:[Object(b.jsx)("h3",{children:"Message Me"}),Object(b.jsxs)("form",{action:"#",children:[Object(b.jsxs)("div",{className:"fields",children:[Object(b.jsx)("div",{className:"field name",children:Object(b.jsx)("input",{type:"text",placeholder:"Name",required:!0})}),Object(b.jsx)("div",{className:"field surname",children:Object(b.jsx)("input",{type:"text",placeholder:"Surname",required:!0})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{className:"field",type:"text",placeholder:"Subject",required:!0})}),Object(b.jsx)("div",{id:"textarea",children:Object(b.jsx)("textarea",{id:"text",name:"text",rows:"4",cols:"50",placeholder:"Details..."})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{id:"submit",type:"submit",children:"Send Message"})})]})]})]})]})}),k=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsx)(h,{}),Object(b.jsx)(O,{}),Object(b.jsx)(g,{}),Object(b.jsx)(f,{}),Object(b.jsx)(y,{})]})}}]),s}(c.Component),q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),q()}],[[25,1,2]]]);
//# sourceMappingURL=main.9e85c611.chunk.js.map