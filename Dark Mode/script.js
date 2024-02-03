function changeBG(color) {
    document.body.style.backgroundColor = color
    let text = document.getElementsByClassName("text")
    if (color === '#292929') {
        for (const elem of text) {
            elem.style.color = 'grey'
        }
    }
   else if (color === '#800080') {
        for (const elem of text) {
            elem.style.color = 'white'
        }
    }
    else {
        for (const elem of text) {
            elem.style.color = 'black'
        }
    }
}