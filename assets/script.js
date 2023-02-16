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
const arrowRight = document.querySelector(".arrow_right");
console.log(arrowRight)
arrowRight.addEventListener("click", (e) => {
	console.log(e.target)
	//const img = e.target;
})
const dots = document.querySelector(".dots");
console.log(dots)
const imagesNumber = slides.length;
console.log(imagesNumber)
for(let i = 0; i<imagesNumber; i++){
	console.log(i)
	dots.insertAdjacentHTML('beforebegin', '<div class="dot"></div>');
}
const slide1 = slides[0].image;
console.log(slide1)
const tagLine = slides [0].tagLine;
console.log(tagLine)

