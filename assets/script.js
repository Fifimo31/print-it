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

const displaySlider =(numImage=0) => { //fonction qui retourne une image

	
	if (!document.querySelector('#img-banner')){// si aucun élément avec l'ID "img-banner" n'existe dans le document. 
		
		banner.insertAdjacentHTML('afterbegin', `<img id="img-banner" src="assets/images/slideshow/${slides[numImage].image}">`)// le code à l'intérieur du bloc if est effectué.
	}
	else {// sinon
		
		banner.firstElementChild.setAttribute('src', `assets/images/slideshow/${slides[numImage].image}`)// c'est le première élément enfant de banner 
																										// avec laquelle on défini la classe src avec setAttribute
	}
	//tagline
	const bannerP = banner.querySelector("p");
	bannerP.innerHTML = slides[numImage].tagLine;
	//dots
	//1: cibler les dot avec queryselectorall
	const dots = document.querySelectorAll(".dot");
	console.log(dots)
	//2: faire une boucle for ich avec 2 paramettre element et index
	
	dots.forEach((dot, index) => {
		if (index === numImage) {
		  dot.classList.add('dot_selected');
		} else {
		  dot.classList.remove('dot_selected');
		}
	  });
	

	return numImage;
	
}

let currentImage = displaySlider();











