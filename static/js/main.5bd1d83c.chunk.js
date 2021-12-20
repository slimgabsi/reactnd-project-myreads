(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),s=a(13),r=a.n(s),c=a(15),i=a(4),l=a(5),u=a(7),h=a(6),b=a(8),k=a(2),d=(a(21),a(0)),m=a(9),p=a(11),f="https://reactnd-books-api.udacity.com",v=localStorage.token;v||(v=localStorage.token=Math.random().toString(36).substr(-8));var y={Accept:"application/json",Authorization:v},j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onChangeValue=a.onChangeValue.bind(Object(k.a)(Object(k.a)(a))),a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"onChangeValue",value:function(e){var t=this.props.book;t.shelf=e.target.value,this.props.onUpdateBooks(t)}},{key:"render",value:function(){return n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:this.props.book.shelf?this.props.book.shelf:"none",onChange:this.onChangeValue},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))}}]),t}(o.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.book;return n.a.createElement("li",null,n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks?e.imageLinks.thumbnail:"icons/book-placeholder.svg",")")}}),n.a.createElement(j,{book:e,onUpdateBooks:this.props.onUpdateBooks})),n.a.createElement("div",{className:"book-title"},e.title),n.a.createElement("div",{className:"book-authors"},e.authors)))}}]),t}(o.Component),O=a(14),E=a.n(O),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e)))._handleKeyDown=function(){""!==a.state.query&&a.searchBooks(a.state.query)},a.state={query:"",books:[]},a.handleChange=a.handleChange.bind(Object(k.a)(Object(k.a)(a))),a.searchBooks=a.searchBooks.bind(Object(k.a)(Object(k.a)(a))),a._handleKeyDown=a._handleKeyDown.bind(Object(k.a)(Object(k.a)(a))),a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"searchBooks",value:function(e){var t=this;(function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(p.a)({},y,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})})(e).then(function(e){var a=t.props.books;t.mergeBooks(e,a),t.setState({books:e})}).catch(function(e){return console.log(e)})}},{key:"mergeBooks",value:function(e,t){for(var a=0;a<e.length;a++)for(var o=0;o<t.length;o++)e[a].id===t[o].id&&(e[a].shelf=t[o].shelf)}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState(function(){return{query:t}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.query,o=t.books;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(m.b,{className:"close-search",to:"/"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:this.handleChange,onKeyDown:E.a.debounce(this._handleKeyDown,400)}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},""!==a&&o.length>0&&this.state.books.map(function(t){return n.a.createElement(g,{key:t.id,book:t,onUpdateBooks:e.props.onUpdateBooks})}))))}}]),t}(o.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},this.props.categorie),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.map(function(t){return n.a.createElement(g,{key:t.id,book:t,onUpdateBooks:e.props.onUpdateBooks})})," ")))))}}]),t}(o.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),this.props.categories.map(function(t){return n.a.createElement(N,{categorie:t.name,onUpdateBooks:e.props.onUpdateBooks,key:t.key,books:e.props.onCategorizeBooks(t.key)})}),n.a.createElement("div",{className:"open-search"},n.a.createElement(m.b,{to:"/search"},n.a.createElement("button",null,"Add a book"))))}}]),t}(o.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={books:[]},a.categorizeBooks=a.categorizeBooks.bind(Object(k.a)(Object(k.a)(a))),a.updateBooks=a.updateBooks.bind(Object(k.a)(Object(k.a)(a))),a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"categorizeBooks",value:function(e){return this.state.books.filter(function(t){return t.shelf===e})}},{key:"updateBooks",value:function(e){var t=this.state.books.findIndex(function(t){return t.id===e.id});if(-1!==t){var a=this.state.books;a[t]=e,this.setState(function(){return{books:a}})}else this.setState(function(t){return{books:Object(c.a)(t.books).concat([e])}});(function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},y,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})})(e,e.shelf).then().catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/books"),{headers:y}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){return e.setState({books:t})})}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/search",element:n.a.createElement(B,{onUpdateBooks:this.updateBooks,books:this.state.books})}),n.a.createElement(d.a,{exact:!0,path:"/",element:n.a.createElement(C,{categories:[{key:"currentlyReading",name:"Currently Reading"},{key:"wantToRead",name:"Want to Read"},{key:"read",name:"Have Read"}],onUpdateBooks:this.updateBooks,onCategorizeBooks:this.categorizeBooks})})))}}]),t}(n.a.Component);a(25);r.a.render(n.a.createElement(m.a,{basename:"/reactnd-project-myreads"},n.a.createElement(w,null)),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.5bd1d83c.chunk.js.map