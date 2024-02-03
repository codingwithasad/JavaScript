function getandupdate(){
    let tit = document.getElementById("title").value
    let desc = document.getElementById("description").value
    if (localStorage.getItem("itemsJson")===null) {
        console.log('Updating....');
        itemsJsonArray = []
        itemsJsonArray.push([tit, desc])
        localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray))
        
    }
    else{
        itemsJsonArraystr=localStorage.getItem("itemsJson")
        itemsJsonArray=JSON.parse(itemsJsonArraystr)
        itemsJsonArray.push([tit, desc])
        localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray))
    }
    update()
}
function update(){
    if (localStorage.getItem("itemsJson")===null) {
        itemsJsonArray = []
        localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray))
        
    }
    else{
        itemsJsonArraystr=localStorage.getItem("itemsJson")
        localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray))
    }
    let tableBody=document.getElementById("tablebody")
    let str=""
    itemsJsonArray.forEach((element,index) => {
        str+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary btn-sm" onclick="deleted(${index})">Delete</button></td>
        </tr>
        `
        tableBody.innerHTML=str
    })
}
let add = document.getElementById("add")
add.addEventListener("click",getandupdate )
    update()
    function deleted(itemIndex){
        itemsJsonArraystr=localStorage.getItem("itemsJson")
        itemsJsonArray=JSON.parse(itemsJsonArraystr)
        itemsJsonArray.splice(itemIndex,1)
        localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray))
        update()
    }
    function cleared(){
        localStorage.clear()
        update()
    }
