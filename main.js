let hero = document.querySelector('.hero')

let slider = document.querySelector('.slider')

let slides = slider.querySelectorAll('.slide')

let slide_index = 0

let can_slide_play = true

let hero_bgs = [
    './img/Milktea\ -\ bg.png',
    './img/Milktea\ -\ bg.png',
    './img/Milktea\ -\ bg.png',
    './img/Milktea\ -\ bg.png'
]

showSlide = (index) => {
    slides.forEach(e => e.classList.remove('active'))
    slides[index].classList.add('active')
    hero.style.backgroundImage = `url(${hero_bgs[index]})`
}

nextSlide = () => {
    slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
    showSlide(slide_index)
}

// pause slide when mouse come in slider
slider.addEventListener('mouseover', () => can_slide_play = false)

// resume slide when mouse leave out slider
slider.addEventListener('mouseleave', () => can_slide_play = true)

showSlide(slide_index)

// auto play slide
// setInterval(() => {
//     if (!can_slide_play) return
//     nextSlide()
// }, 2500);

// manual slide select
slider.querySelectorAll('.slider-control-item').forEach((item, index) => {
    item.addEventListener('click', () => showSlide(index))
})
		let menu = document.querySelector('#menu');
		let navbar = document.querySelector('.navbar');

		menu.onclick = () =>{
			menu.classList.toggle('fa-times');
			navbar.classList.toggle('active');
		
        }