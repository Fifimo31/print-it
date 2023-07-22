const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById('banner')//getElementById permet de selectionner un element par son id
const arrowRight = document.querySelector(".arrow_right");//querySelector permet de séléctionner des éléments css plus flexible
const arrowLeft = document.querySelector(".arrow_left");
const dots = document.querySelector(".dots");

const imagesNumber = slides.length;// slides.length est le nombre d'élément dans le tableau c'est à dire 4 objets

//création des dots
for(let i = 0; i<imagesNumber; i++){// for est une boucle. i est le compteur de la boucle au début elle est initialisé a 0. 
									//Dans ce code la boucle est répété 4 fois car imagesNumber égale à slides.lenght
									//si la condition est vrai i est augmenter on dit quel est incrémenté
	console.log(i)
	dots.insertAdjacentHTML('afterbegin', '<div class="dot"></div>');// insertAdjacentHTML est une méthode pour insérer du HTML a un emplacement spécifique à l'intérieur d'un élément existant
																	//Elle permet d'ajouter du contenue HTML à côté ou à l'intérieur d'un élément cible.
}



const displaySlider =(numImage=0) => { //fonction qui retourne une image

	
	if (!document.querySelector('#img-banner')){// si aucun élément avec l'ID "img-banner" n'existe dans le document. 
		
		banner.insertAdjacentHTML('afterbegin', `<img id="img-banner" src="assets/images/slideshow/${slides[numImage].image}">`)// ça permet d'injecter du code html on peut l'injcter à l'intérrieur ou au début ou a la fin
																																//on a utiliser la concaténation dans le code html

	}
	else {// sinon
		
		banner.firstElementChild.setAttribute('src', `assets/images/slideshow/${slides[numImage].image}`)// c'est le première élément enfant de banner 
																										// setAttribute permet de modifier la valeur de l'attribut d'un élément html
	}
	//tagline
	const bannerP = banner.querySelector("p"); // pourquoi banner.querySelector et non document.querySelector ???????
	bannerP.innerHTML = slides[numImage].tagLine;// innerHTML permet récuperer le contenue d'une balise ou de le remplacer son contenue
	//dots
	//1: cibler les dot avec queryselectorall
	const dots = document.querySelectorAll(".dot");//querySelectorAll permet de séléctionner les 4 dot
	console.log(dots)
	//2: faire une boucle forEach avec 2 paramettre element et index
	
	dots.forEach((dot, index) => {//La forEach()méthode exécute une fonction fournie une fois pour chaque élément du tableau.
		if (index === numImage) {//si l'index = à numImage alors il l'exécute
		  dot.classList.add('dot_selected');// classList.add permet d'ajouter la class dot_selected à l'élément HTML dot
		} else {// sinon il là suprime
		  dot.classList.remove('dot_selected');// classList.remove  permet de suprimer des class
		}
	  });
	

	return numImage; // return permet de voir le résultat
	
}

let currentImage = displaySlider();//currentImage est initializé comme étant la première diapositive et displaySlider permet d'afficher cette diapositive

arrowRight.addEventListener("click", (e) => {// l'écouteur d'événement "click" est attaché a la flèche arrowRight grace à addEventListener 
	//et permet aussi de définir une fonction qui se produira lors du click sur l'élément cible
//console.log(e.target)
currentImage++;					//variable qui contient displaySlider et qui est incrémenté voir tout en bas du code 
console.log(currentImage)
if(currentImage>= imagesNumber){// if est une condition si currentImage est supérieur ou égale à imagesNumber alors currentImage retourne a l'image 0 
currentImage=0;
}
displaySlider(currentImage) // displaySlider est appelé avec currentImage comme argument pour afficher le contenue du slider


})


arrowLeft.addEventListener("click", (e)=> {
currentImage--;
if(currentImage < 0){
currentImage = imagesNumber - 1;
}
displaySlider(currentImage)

})









