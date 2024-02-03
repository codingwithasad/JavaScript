const slides = document.querySelectorAll(".slide")
var counter = 0
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    })
    const gonext=()=>{
        if (counter===slides.length-1) {
            counter=0
            slideimage()
        }
        else{
            counter++
            slideimage()
        }
    }
    const gopre=()=>{
        if(counter===0){
            counter=slides.length-1
            slideimage()
        }
        else{
            counter--
            slideimage()
        }
    }
const slideimage=()=> {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        })
}
const dot=(e)=>{
   ( slides.length-1)-e
   slideimage()
}