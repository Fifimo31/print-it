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

const banner = document.getElementById('banner')
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dots = document.querySelector(".dots");

const imagesNumber = slides.length;

//création des dots
for(let i = 0; i<imagesNumber; i++){
	console.log(i)
	dots.insertAdjacentHTML('afterbegin', '<div class="dot"></div>');
}

arrowRight.addEventListener("click", (e) => {
	//console.log(e.target)
	currentImage++;
	console.log(currentImage)
	if(currentImage>= imagesNumber){
		currentImage=0;
	}
	displaySlider(currentImage)
	
})


arrowLeft.addEventListener("click", (e)=> {
	currentImage--;
	if(currentImage < 0){
		currentImage = imagesNumber - 1;
		}
		displaySlider(currentImage)
		
})

const displaySlider =(numImage=0) => {

	//savoir si l'élément existe. Si l'élément n'existe pas mettre un !
	if (!document.querySelector('#img-banner')){
		
		banner.insertAdjacentHTML('afterbegin', `<img id="img-banner" src="assets/images/slideshow/${slides[numImage].image}">`)
	}
	else {
		
		banner.firstElementChild.setAttribute('src', `assets/images/slideshow/${slides[numImage].image}`)
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











