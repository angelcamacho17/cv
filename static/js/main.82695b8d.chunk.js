(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),s=t(8),c=t.n(s),i=(t(14),t(1)),m=t(2),o=t(4),u=t(3),h=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return console.log(e.socialLinks),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#skill"},"Skills")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#language"},"Languages")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e.name),r.a.createElement("hr",null),r.a.createElement("h2",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,"."),r.a.createElement("h4",{style:{color:"#bfbebb",fontFamily:"sans-serif "}},e.roleDescription,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("i",{className:e.className})))})))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(l.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:"images/face_profile.jpg",alt:""})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e.aboutme),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e.name),r.a.createElement("br",null),r.a.createElement("span",null,e.address),r.a.createElement("br",null),r.a.createElement("span",null,e.phone),r.a.createElement("br",null),r.a.createElement("span",null,e.mail)))))))}}]),a}(l.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("div",null,r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.UniversityName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfEntry," ",e.YearOfEntry," - ",e.MonthOfPassing," ",e.YearOfPassing)),r.a.createElement("p",null,e.Achievements)))}))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.CompanyName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfEntry," ",e.YearOfEntry," - ",e.MonthOfLeaving," ",e.YearOfLeaving," ")),r.a.createElement("br",null),r.a.createElement("p",null,e.Achievements),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("a",{href:e.Link,target:"_blank"},e.Link))))})))),r.a.createElement("section",{id:"skill"},r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e.skillsDescription),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return r.a.createElement("li",null,r.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),r.a.createElement("em",null,e.skillname))})))))),r.a.createElement("section",{id:"language"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Languages"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e.languagesDescription),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"languages"},e.languages&&e.languages.map(function(e){return r.a.createElement("li",null,r.a.createElement("span",{className:"bar-expand ".concat(e.languagename.toLowerCase())}),r.a.createElement("em",null,e.languagename))})))))))}}]),a}(l.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Freelance Work."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return r.a.createElement("div",{className:"eigth columns footer-widgets"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.link,target:"_blank"},e.link)))))})))))}}]),a}(l.Component),g=(l.Component,function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"eigth columns footer-widgets"},r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"#fff",fontFamily:"sans-serif "}},"Mail : ",r.a.createElement("h6",{style:{color:"#bfbebb",fontFamily:"sans-serif "}},e.mail)),r.a.createElement("h4",{style:{color:"#fff",fontFamily:"sans-serif "}},"Phone Number : ",r.a.createElement("h6",{style:{color:"#bfbebb",fontFamily:"sans-serif "}},e.phone))))))}}]),a}(l.Component)),b=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))),r.a.createElement("h6",{style:{color:"#bfbebb",fontFamily:"sans-serif "}},"This webpage is developed with React.js by Angel Camacho"))}}]),a}(l.Component),v=t(6),w=(n={imagebaseurl:"https://rbhatia46.github.io/",name:"Angel Camacho",role:"full-stack developer and software engineer student",linkedinId:"LinkedIn Id",skypeid:"skypeid",roleDescription:" Create, develop and promote top high quality products, regardless the effort it demands",socialLinks:[{name:"linkedin",url:"http://linkedin.com/in/angel-camacho-479780125",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/angelcamacho17",className:"fa fa-github"}],aboutme:"I\u2019m currently developing and maintaining a powerful resource management application for wholesale companies in cache language (like a mini SAP), and also independently full-stack developing a webapp with spring boot, mysql and react. As a freelancer, I collaborate and strongly improve an insurance administrator webapp, which was developed in php. In college I\u2019ve achieved to make the best copy of a game (Laps Fuse) and the professor was so thrilled with my work that he ask me to tutor and help him in the programming course after that. I\u2019m 21 years old and I study software engineering (3rd year).",nationality:"Venezuelan",address:"Cordoba, Argentina",phone:"+54 01122506896",age:"21",mail:"angelcamacho1708@gmail.com",education:[{UniversityName:"Universidad Siglo 21",specialization:"Software Engineer",MonthOfEntry:"Mar",YearOfEntry:"2016",MonthOfPassing:"Present",Achievements:""}],work:[{CompanyName:"SDP Belgium",specialization:"Software Programmer ",MonthOfEntry:"Oct",YearOfEntry:"2018",MonthOfLeaving:"Present",Achievements:"Developing and maintaining a powerful resource management application for wholesale companies.",Link:"https://www.softwareseleccion.com/sdp+distripack-p-195"},{CompanyName:"El Menu Virtual",specialization:"Web Developer",MonthOfEntry:"May",YearOfEntry:"2016",MonthOfLeaving:"Feb",YearOfLeaving:"2018",Achievements:"I worked as the webmaster and I was in charge of the maintenance, features and bug fixes. By the time I started worked in the webpage, I increase its visits a 30% applying a strong strategy of SEO",Link:"http://www.elmenuvirtual.com/"},{CompanyName:"Turismo de Playa",specialization:"Marketing Team",MonthOfEntry:"Aug",YearOfEntry:"2015",MonthOfLeaving:"Feb",YearOfLeaving:"2016",Achievements:"I was able to worked, along professionals in the area, in all the social media of the webpage, increasing the followers a 120% since the day I got in, reaching more than 70.000 followers on Instagram.",Link:"https://www.instagram.com/turismodeplaya/"}],skillsDescription:"Skills",skills:[{skillname:"Java"},{skillname:"Reactjs"},{skillname:"MySQL"},{skillname:"Spring"},{skillname:"JavaScript"},{skillname:"Php"},{skillname:"Photoshop"}],languagesDescription:"Languages",languages:[{languagename:"Spanish"},{languagename:"English"},{languagename:"French"}],portfolio:[{name:"AdminsegV3",description:"Management System, perfect for Agencies, Brokers, Companies and every professional in the insurance industry.",link:"https://adminsegv3.com/"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},Object(v.a)(n,"mail","angelcamacho1708@gmail.com"),Object(v.a)(n,"phone","01122506896"),n),N=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{resumeData:w}),r.a.createElement(d,{resumeData:w}),r.a.createElement(E,{resumeData:w}),r.a.createElement(f,{resumeData:w}),r.a.createElement(g,{resumeData:w}),r.a.createElement(b,{resumeData:w}))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.82695b8d.chunk.js.map