let textbox = document.getElementById("textbox")
textbox.addEventListener("input", () => {
    var text = textbox.value
    let char = text.length
    document.getElementById("char").innerHTML = char
    text=text.trim()
    let words=text.split(" ")
    let cleanWords=words.filter((elem)=>{
        return elem!=""
    })
    document.getElementById("word").innerHTML=cleanWords.length

})