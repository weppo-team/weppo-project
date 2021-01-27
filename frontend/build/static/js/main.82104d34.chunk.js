(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{313:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(0),i=n.n(c),a=n(20),s=n.n(a),o=n(75),l=n(9),u={antd:{spacing:{mid:"16px",big:"24px"}},spacing:{small:"5px",mid:"10px",big:"20px",huge:"40px"},color:{white:"#ffffff"}},j=function(e){var t=e.children;return Object(r.jsx)(l.a,{theme:u,children:t})},b=n(145),d=n(146),h=n(174),O=n(170),m=n(319),x=n(324),p=n(30);function f(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 60vh;\n\n    svg {\n      height: 170px;\n      width: 170px;\n      margin-bottom: ",";\n    }\n\n    .ant-typography {\n      width: 70%;\n      text-align: center;\n    }\n  "]);return f=function(){return e},e}var g={Container:l.c.div((function(e){var t=e.theme;return Object(l.b)(f(),t.spacing.huge)}))},v={title:"Board Gamer",repoUrl:"https://github.com/weppo-team/weppo-project"},y=Object(c.createContext)(v),w=function(){return Object(c.useContext)(y)},S=m.a.Title,C=g.Container,k=function(){var e=w().repoUrl;return Object(r.jsxs)(C,{children:[Object(r.jsx)(x.a,{twoToneColor:"#ee0000"}),Object(r.jsx)(S,{level:4,type:"danger",children:"An unexpected error occurred!"}),Object(r.jsxs)(S,{level:5,children:["We are really sorry that this has happened to you. Please let us know about the situation you encountered by opening the"," ",Object(r.jsx)("a",{href:"".concat(e,"/issues"),children:"issue"})]})]})},T=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(){}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(k,{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(c.Component),M=n(33),F=n(316);function I(){var e=Object(p.a)(["\n  text-align: center;\n"]);return I=function(){return e},e}var E=F.a.Footer,P={AntdFooter:Object(l.c)(E)(I())}.AntdFooter,D=function(){var e=w(),t=e.title,n=e.repoUrl;return Object(r.jsxs)(P,{children:[t," \xa92021 Created by three students. ",Object(r.jsx)("a",{href:n,children:"Details"})]})},q=n(82),L=n(322),B=n(325),V=n(326);function U(){var e=Object(p.a)(["\n    .ant-menu-item {\n      margin-top: ",";\n    }\n  "]);return U=function(){return e},e}var W={StyledMenu:Object(l.c)(L.a)((function(e){var t=e.customTheme;return Object(l.b)(U(),t.spacing.big)}))}.StyledMenu,R=[{key:"1",label:"Statistics",path:"/stats",icon:Object(r.jsx)(B.a,{})},{key:"2",label:"Games",path:"/games",icon:Object(r.jsx)(V.a,{})}],A=function(){var e=Object(M.f)(),t=Object(M.g)(),n=Object(c.useCallback)((function(){var e;return null===(e=R.find((function(e){return t.pathname.startsWith(e.path)})))||void 0===e?void 0:e.key}),[t]),i=Object(l.d)(),a=Object(c.useState)(n()),s=Object(q.a)(a,2),u=s[0],j=s[1];Object(c.useEffect)((function(){j(n())}),[n,j]);return Object(r.jsx)(W,{theme:"dark",mode:"inline",selectedKeys:[u],customTheme:i,onClickMenu:function(t){var n=R.find((function(e){return e.key===t.key}));n&&e.push(n.path)},children:R.map((function(e){return Object(r.jsx)(L.a.Item,{icon:e.icon,children:Object(r.jsx)(o.b,{to:e.path,children:e.label})},e.key)}))})},N=n(329),G=n(331),J=n(327),Y=n(69);function H(){var e=Object(p.a)(["\n    width: 90%;\n    margin: ",";\n  "]);return H=function(){return e},e}function K(){var e=Object(p.a)(["\n    margin-top: auto;\n    margin-bottom: ",";\n  "]);return K=function(){return e},e}var z={StyledDiv:l.c.div((function(e){var t=e.theme;return Object(l.b)(K(),t.spacing.big)})),StyledMenuButton:Object(l.c)(Y.a)((function(e){var t=e.theme;return Object(l.b)(H(),t.spacing.mid)}))},Q=n(323),X=n(328),Z=n(318);function $(){var e=Object(p.a)(["\n    width: 100%;\n  "]);return $=function(){return e},e}function _(){var e=Object(p.a)(["\n    width: 80%;\n    margin: auto;\n    padding: ",";\n  "]);return _=function(){return e},e}var ee={StyledForm:Object(l.c)(Z.a)((function(e){var t=e.theme;return Object(l.b)(_(),t.spacing.mid)})),StyledButton:Object(l.c)(Y.a)((function(){return Object(l.b)($())}))},te=ee.StyledForm,ne=ee.StyledButton,re=function(){return Object(r.jsxs)(te,{initialValues:{remember:!0},children:[Object(r.jsx)(te.Item,{name:"username",rules:[{required:!0,message:"Please enter your username"}],children:Object(r.jsx)(Q.a,{prefix:Object(r.jsx)(J.a,{}),placeholder:"Username"})}),Object(r.jsx)(te.Item,{name:"password",rules:[{required:!0,message:"Please enter your password"}],children:Object(r.jsx)(Q.a,{prefix:Object(r.jsx)(X.a,{}),type:"password",placeholder:"Password"})}),Object(r.jsx)(te.Item,{children:Object(r.jsx)(ne,{icon:Object(r.jsx)(N.a,{}),type:"primary",htmlType:"submit",children:"Log in"})})]})},ce=n(330),ie=ee.StyledForm,ae=ee.StyledButton,se=function(){return Object(r.jsxs)(ie,{children:[Object(r.jsx)(ie.Item,{name:"username",rules:[{required:!0,message:"Username is required"}],children:Object(r.jsx)(Q.a,{placeholder:"Username",prefix:Object(r.jsx)(J.a,{})})}),Object(r.jsx)(ie.Item,{name:"email",rules:[{type:"email",required:!0,message:"Proper e-mail is required"}],children:Object(r.jsx)(Q.a,{placeholder:"E-mail",prefix:Object(r.jsx)(ce.a,{})})}),Object(r.jsx)(ie.Item,{name:"password",placeholder:"password",rules:[{required:!0,message:"Proper password is required"}],children:Object(r.jsx)(Q.a,{placeholder:"Password",prefix:Object(r.jsx)(X.a,{}),type:"password"})}),Object(r.jsx)(ie.Item,{children:Object(r.jsx)(ae,{icon:Object(r.jsx)(G.a,{}),type:"primary",htmlType:"submit",children:"Register"})})]})},oe=ee.StyledForm,le=ee.StyledButton,ue=m.a.Title,je=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ue,{level:4,children:"You will be logged as a guest, without access to statistics and other settings of registered users, but with full access to games and rooms."}),Object(r.jsxs)(oe,{initialValues:{remember:!0},children:[Object(r.jsx)(oe.Item,{name:"nickname",rules:[{required:!0,message:"Please enter your nickname"}],children:Object(r.jsx)(Q.a,{prefix:Object(r.jsx)(J.a,{}),placeholder:"Nickname"})}),Object(r.jsx)(le,{icon:Object(r.jsx)(N.a,{}),type:"primary",htmlType:"submit",children:"Continue as a guest"})]})]})},be=n(320),de=m.a.Title,he=function(e){var t=e.modalTitle,n=e.modalContent,c=e.isModalVisible,i=e.onModalVisible,a=Object(r.jsx)(de,{level:2,children:t});return Object(r.jsx)(be.a,{visible:c,title:a,onCancel:function(){i(!1)},footer:null,children:n})},Oe=z.StyledDiv,me=z.StyledMenuButton,xe=[{key:"1",label:"Login",icon:Object(r.jsx)(N.a,{}),modalTitle:"Login as user",modalContent:Object(r.jsx)(re,{})},{key:"2",label:"Register",icon:Object(r.jsx)(G.a,{}),modalTitle:"Register as user",modalContent:Object(r.jsx)(se,{})},{key:"3",label:"Play as a guest",icon:Object(r.jsx)(J.a,{}),modalTitle:"Log as a guest",modalContent:Object(r.jsx)(je,{})}],pe=function(){var e=Object(c.useState)(!1),t=Object(q.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(null),s=Object(q.a)(a,2),o=s[0],l=s[1],u=Object(c.useState)(null),j=Object(q.a)(u,2),b=j[0],d=j[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Oe,{children:xe.map((function(e){return Object(r.jsx)(me,{shape:"round",icon:e.icon,onClick:function(){l(e.modalTitle),d(e.modalContent),i(!0)},children:e.label},e.key)}))}),Object(r.jsx)(he,{modalTitle:o,modalContent:b,isModalVisible:n,onModalVisible:function(e){return i(e)}})]})};function fe(){var e=Object(p.a)(["\n    border-bottom: 1px solid ",";\n    width: 90%;\n  "]);return fe=function(){return e},e}function ge(){var e=Object(p.a)(["\n    .ant-layout-sider-children {\n      display: flex;\n      flex-direction: column;\n    }\n    .ant-typography {\n      color: ",";\n    }\n  "]);return ge=function(){return e},e}function ve(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: ",";\n    height: 32px;\n    margin: "," 0 "," 0;\n  "]);return ve=function(){return e},e}var ye=F.a.Sider,we={LogoWrapper:l.c.div((function(e){var t=e.theme;return Object(l.b)(ve(),t.spacing.huge,t.antd.spacing.mid,t.spacing.huge)})),StyledSider:Object(l.c)(ye)((function(e){var t=e.theme;return Object(l.b)(ge(),t.color.white)})),StyledDivider:l.c.div((function(e){var t=e.theme;return Object(l.b)(fe(),t.color.white)}))},Se=m.a.Title,Ce=we.LogoWrapper,ke=we.StyledSider,Te=we.StyledDivider,Me=function(){var e=w().title;return Object(r.jsxs)(ke,{breakpoint:"lg",collapsedWidth:"0",children:[Object(r.jsxs)(Ce,{children:[Object(r.jsx)(Se,{level:4,children:e}),Object(r.jsx)(Te,{})]}),Object(r.jsx)(A,{}),Object(r.jsx)(pe,{})]})};function Fe(){var e=Object(p.a)(["\n  height: 100vh;\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(p.a)(["\n    margin: "," "," 0;\n    background-color: ",";\n    padding: ",";\n    overflow: auto;\n  "]);return Ie=function(){return e},e}var Ee=F.a.Content,Pe={Content:Object(l.c)(Ee)((function(e){var t=e.theme;return Object(l.b)(Ie(),t.antd.spacing.big,t.antd.spacing.mid,t.color.white,t.antd.spacing.big)})),MainLayout:Object(l.c)(F.a)(Fe())},De=Pe.Content,qe=Pe.MainLayout,Le=function(e){var t=e.children;return Object(r.jsxs)(qe,{children:[Object(r.jsx)(Me,{}),Object(r.jsxs)(F.a,{children:[Object(r.jsx)(De,{children:t}),Object(r.jsx)(D,{})]})]})},Be=function(){return Object(r.jsx)("h2",{children:"TODO: PUT HERE SOME INFO"})};function Ve(){var e=Object(p.a)(["\n    margin-bottom: ",";\n  "]);return Ve=function(){return e},e}var Ue={Container:l.c.div((function(e){var t=e.theme;return Object(l.b)(Ve(),t.spacing.huge)}))},We=m.a.Title,Re=Ue.Container,Ae=function(e){var t=e.title,n=e.subtitle;return Object(r.jsxs)(Re,{children:[Object(r.jsx)(We,{level:2,children:t}),Object(r.jsx)(We,{level:4,type:"secondary",children:n})]})},Ne=n.p+"static/media/tic-tac-toe.3ccb83be.svg",Ge=n.p+"static/media/checkers.2cccaa8a.svg",Je=n.p+"static/media/chess.e8ea6bf7.svg",Ye=function(e){return"/game/".concat(e)},He=[{title:"Tic-Tac-Toe",name:"tictactoe",route:Ye("tictactoe"),disabled:!1,icon:Ne},{title:"Checkers",name:"checkers",route:Ye("checkers"),disabled:!0,icon:Ge},{title:"Chess",name:"chess",route:Ye("chess"),disabled:!0,icon:Je}],Ke=Object(c.createContext)(He);function ze(){var e=Object(p.a)(["\n    display: flex;\n    gap: ",";\n    flex-wrap: wrap;\n    @media (max-width: 584px) {\n      justify-content: center;\n    }\n  "]);return ze=function(){return e},e}var Qe={Container:l.c.div((function(e){var t=e.theme;return Object(l.b)(ze(),t.spacing.big)}))},Xe=n(317),Ze=n(60),$e=n(321);function _e(){var e=Object(p.a)(["\n          opacity: 0.6;\n          cursor: normal;\n        "]);return _e=function(){return e},e}function et(){var e=Object(p.a)(["\n    width: 250px;\n    ","\n  "]);return et=function(){return e},e}var tt={StyledCard:Object(l.c)(Xe.a)((function(e){var t=e.disabled;return Object(l.b)(et(),t?Object(l.b)(_e()):null)}))},nt=Xe.a.Meta,rt=tt.StyledCard,ct=function(e){var t=e.disabled,n=e.icon,c=e.title,i=e.route,a=Object(M.f)();return Object(r.jsx)(Ze.a,{title:t&&"The game is currently unavailable",children:Object(r.jsx)(rt,{disabled:t,hoverable:!t,onClick:function(){return!t&&a.push(i)},title:Object(r.jsx)(nt,{avatar:Object(r.jsx)($e.a,{src:n}),title:c}),children:"Your rating in this game is unknown"})})},it=Qe.Container,at=function(){var e=Object(c.useContext)(Ke);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ae,{title:"Play a game!",subtitle:"Let's explore all the games that we have prepared for you!"}),Object(r.jsx)(it,{children:e.map((function(e){return Object(r.jsx)(ct,{disabled:e.disabled,icon:e.icon,route:e.route,title:e.title},e.title)}))})]})},st=function(){return Object(r.jsx)("h2",{children:"TODO: STATS VIEW"})},ot=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h1",{children:"TODO: ROOMS VIEW"})})},lt=function(){return Object(r.jsx)(M.c,{children:Object(r.jsxs)(Le,{children:[Object(r.jsx)(M.a,{exact:!0,path:"/",children:Object(r.jsx)(Be,{})}),Object(r.jsx)(M.a,{exact:!0,path:"/games",children:Object(r.jsx)(at,{})}),Object(r.jsx)(M.a,{exact:!0,path:"/stats",children:Object(r.jsx)(st,{})}),Object(r.jsx)(M.a,{exact:!0,path:"/game/:gameName",children:Object(r.jsx)(ot,{})})]})})},ut=function(){return Object(r.jsx)(j,{children:Object(r.jsx)(T,{children:Object(r.jsx)(lt,{})})})};n(313);s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(o.a,{children:Object(r.jsx)(ut,{})})}),document.getElementById("root"))}},[[314,1,2]]]);
//# sourceMappingURL=main.82104d34.chunk.js.map