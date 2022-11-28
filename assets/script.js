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

const fleche_gauche = document.getElementsByClassName("arrow_left")[0];

const fleche_droite = document.getElementsByClassName("arrow_right")[0];

let i=0;



function changeScrRight() {
		document.getElementsByTagName("img")[1].src = "./assets/images/slideshow/"+slides[i].image;
	
	}
function changeScrLeft() {
		document.getElementsByTagName("img")[1].src = "./assets/images/slideshow/"+slides[i].image;
	}
function changetagline() {
	let elt = document.querySelector("#banner p");
	elt.innerHTML = slides[i].tagLine;

	console.log(elt.innerHTML)
}



	fleche_gauche.addEventListener("click", () => {
		i--;
		if (i < 0){
			i = slides.length-1
		}
		changeScrLeft();
		changetagline();
		dotselector ();
	});	

	fleche_droite.addEventListener("click", () => {
		i++;
		if (i > slides.length-1){
			i = 0;
		}
		changeScrRight();
		changetagline();
		dotselector ();

	});

/*dot*/

const dots = document.getElementsByClassName("dots")[0];


for (let image of slides) {
	const dot = document.createElement("div");
	dots.appendChild(dot);
	dot.classList.add("dot")
}



const dot = document.getElementsByClassName("dot")

	dot[0].classList.add("dot_selected")


function dotselector () {
	let alldotselected = document.getElementsByClassName("dot_selected")
	for ( let d of alldotselected){
		d.classList.remove("dot_selected")
	}
	dot[i].classList.add("dot_selected")
	
}


