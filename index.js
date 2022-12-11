'use strict'
/*variables*/
let article=document.getElementById('article');


/*Parts - Contents*/
let home=`
	<h1>This is the main page</h1>
	<p>This is a web page practice</p>
`;

let products=`
	<h1>Products</h1>
	<p>Welcome! <br> Ours products are the best of world</p>
	<p>We have shoes, T-shirts, tennis and more!</p>
	<p>You should visit us</p>

`; 
let about=`
	<h1>About us</h1>
	<p>We are the first company in the world</p>
	<p>We sell unique products as are smart shoes, shiny candies</p>
	<p>You are the best and also we thanks you </p>
`; 
let contact=`
	<h1>Contact us</h1>
	<p>We are located in Damasco, near of market </p>
`;


/*Functions*/
function menu() {
	article.innerHTML='';
	let URL=window.location.hash;
	console.log(URL);
	switch(URL) {
	case '#home': 
		article.innerHTML=home;
		break;
	case '#product':
		article.innerHTML=products;
		break;
	case '#about':
		article.innerHTML=about;
		break;
	case "#contact":
		article.innerHTML=contact;
		break;
	default:
		article.innerHTML=home;
		break;
	}
};


/*Main Process*/

window.onhashchange=function() { 
	menu();

};

window.onload=function() {
	menu()
}