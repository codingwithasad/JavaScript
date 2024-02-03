const addbtn = document.querySelector(".btn")
const main=document.querySelector(".main")
const savenotes=()=>{
    const notes=document.querySelectorAll(".note textarea")
    const data=[]
    notes.forEach((note)=>{
        data.push(note.value)
    })
    localStorage.setItem("notes",JSON.stringify(data))
}
addbtn.addEventListener("click",function(){
    addnote()
})

const addnote=(text="")=>{
    const note=document.createElement("div")
    note.classList.add("note")
    note.innerHTML=`
    <div class="tool">
    <i class="trash fa-solid fa-trash"></i>
    <i class="save fa-solid fa-bookmark"></i>
    </div>
    <textarea>${text}</textarea>
    `
    note.querySelector(".trash").addEventListener("click",function(){
        note.remove()
        savenotes()
    })
    note.querySelector(".save").addEventListener("click",function(){
        savenotes()
    })

    main.appendChild(note)
    savenotes()
}



(
    function(){
        const getnotes=JSON.parse(localStorage.getItem("notes"))
        getnotes.forEach((getnotes)=>{
            addnote(getnotes)
        }
        )
    }
)()