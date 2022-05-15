"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[419],{3419:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return J}});var t,o,i=r(885),a=r(2791),c=r(2978),s=r(6895),u=r(7748),d=r(2005),l=r(6140),p=r(2007),h=r.n(p),m=r(168),b=r(955),g=b.ZP.ul(t||(t=(0,m.Z)(["\n  margin: 0;\n  padding: ",";\n"])),(function(n){return n.theme.spacing(5)})),x=b.ZP.button(o||(o=(0,m.Z)(["\n  display: inline-block;\n  margin-left: ",";\n  width: 80px;\n  height: 24px;\n  background: repeating-linear-gradient(45deg, black, transparent 100px);\n  color: ",";\n  cursor: pointer;\n  transition: ",";\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    box-shadow: 1px 1px 25px 10px rgba(34, 25, 9, 0.4);\n  }\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      120deg,\n      transparent,\n      rgba(224, 218, 206, 0.4),\n      transparent\n    );\n    transition: all 650ms;\n  }\n  :disabled {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n  }\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.colors.craftPapper}),(function(n){return n.theme.animation()}),(function(n){return n.theme.colors.newspapper}),(function(n){return n.theme.colors.metalic})),f=r(3329),Z=function(n){var e=n.contacts,r=(0,u.jn)(),t=(0,i.Z)(r,2),o=t[0],a=t[1].isLoading;return(0,f.jsx)(g,{children:e.map((function(n){var e=n.name,r=n.id,t=n.number;return(0,f.jsxs)("li",{children:[e,": ",t,(0,f.jsx)(x,{type:"button",onClick:function(){return o(r)},disabled:a,children:"Delete"})]},r)}))})};h().ContactList={contacts:h().arrayOf(h().shape({name:h().string.isRequired,id:h().string.isRequired,number:h().number.isRequired})).isRequired,onDeleteClick:h().func.isRequired};var v,k,w,j,C,y,P,q=r(9135),R=b.ZP.button(v||(v=(0,m.Z)(["\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 69%;\n  right: 57%;\n"]))),_=b.ZP.input(k||(k=(0,m.Z)(["\n  display: block;\n  width: 250px;\n  height: 22px;\n"]))),A=b.ZP.div(w||(w=(0,m.Z)(["\n  position: relative;\n"]))),F=function(){var n=(0,u.wY)().data,e=(0,c.v9)(s.zK),r=(0,c.I0)();return(0,f.jsx)(A,{children:n&&n.length>0&&(0,f.jsxs)("label",{children:["Find contacts by name",(0,f.jsx)(_,{type:"text",name:"filter",value:e,onChange:function(n){r((0,s.W1)(n.currentTarget.value))}}),e&&(0,f.jsx)(R,{onClick:function(){r((0,s.u5)(""))},children:(0,f.jsx)(q.asE,{})})]})})};h().Filter={filter:h().string.isRequired,contacts:h().arrayOf(h().shape({name:h().string.isRequired,id:h().string.isRequired,number:h().number.isRequired})).isRequired,onChange:h().func.isRequired,onClick:h().func};var L=b.ZP.form(j||(j=(0,m.Z)(["\n  border: ",";\n  max-width: 400px;\n  padding: ",";\n  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n  border-radius: 10px;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.tin)}),(function(n){return n.theme.spacing(2)})),z=b.ZP.label(C||(C=(0,m.Z)(["\n  display: block;\n"]))),S=b.ZP.input(y||(y=(0,m.Z)(["\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing(3)})),N=b.ZP.button(P||(P=(0,m.Z)(["\n  width: 150px;\n  height: 32px;\n  margin-bottom: 12px;\n  position: relative;\n  overflow: hidden;\n  color: ",";\n  background-color: ",";\n  transition: background-color ",";\n  cursor: pointer;\n\n  :hover {\n    color: ",";\n    background-color: ",';\n    box-shadow: 1px 1px 25px 10px rgba(34, 25, 9, 0.4);\n  }\n  :before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      120deg,\n      transparent,\n      rgba(224, 218, 206, 0.4),\n      transparent\n    );\n    transition: all 650ms;\n  }\n  :hover:before {\n    left: 100%;\n  }\n'])),(function(n){return n.theme.colors.newspapper}),(function(n){return n.theme.colors.tin}),(function(n){return"".concat(n.theme.animation())}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.metalic})),D=function(n){var e=n.onSubmit,r=(0,a.useState)(""),t=(0,i.Z)(r,2),o=t[0],c=t[1],s=(0,a.useState)(""),u=(0,i.Z)(s,2),d=u[0],l=u[1],p=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"name":c(t);break;case"number":l(t)}};return(0,f.jsxs)(L,{onSubmit:function(n){n.preventDefault(),e(o,d),c(""),l("")},children:[(0,f.jsxs)(z,{children:["Name",(0,f.jsx)(S,{type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p})]}),(0,f.jsxs)(z,{children:["Phone Number",(0,f.jsx)(S,{type:"tel",name:"number",value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p})]}),(0,f.jsx)(N,{type:"submit",children:"Add contact"})]})};h().ContactForm={onSubmit:h().func.isRequired};var E,T,K,O=r(7029),W=b.ZP.div(E||(E=(0,m.Z)(["\n  background-color: ",";\n  margin: 0 auto;\n  max-width: 600px;\n  padding: ",";\n  border: 1px dashed black;\n  border-radius: 8%;\n  min-height: 650px;\n"])),(function(n){return n.theme.colors.newspapper}),(function(n){return n.theme.spacing(10)})),Y=b.ZP.h1(T||(T=(0,m.Z)(["\n  margin: 0;\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing()})),B=b.ZP.h2(K||(K=(0,m.Z)(["\n  margin: 0;\n  font-weight: 700;\n"]))),I=function(){var n=(0,u.wY)(),e=n.data,r=n.error,t=n.isLoading,o=(0,u.jW)(),a=(0,i.Z)(o,1)[0],p=(0,c.v9)(s.zK),h=function(){var n=p.toLowerCase();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,f.jsxs)(W,{children:[(0,f.jsx)(Y,{children:"Phonebook"}),(0,f.jsx)(D,{onSubmit:function(n,r){var t=(0,d.x0)(),o={name:n,id:t,number:r},i=null===e||void 0===e?void 0:e.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}));i?l.ZP.error("".concat(i.name," is already in contacts")):a(o),!i&&l.ZP.success("successfully added!",{style:{border:"1px solid #713200",padding:"16px",color:"#713200"},iconTheme:{primary:"#713200",secondary:"#FFFAEE"}})}}),(0,f.jsx)(l.x7,{}),(0,f.jsx)(B,{children:"Contacts"}),(0,f.jsx)(F,{}),r?(0,f.jsx)("p",{children:"No contacts yet"}):t?(0,f.jsx)(O.Nx,{color:"black"}):(0,f.jsx)(Z,{contacts:h})]})},J=function(){return(0,f.jsx)(I,{})}}}]);
//# sourceMappingURL=419.86dfe965.chunk.js.map