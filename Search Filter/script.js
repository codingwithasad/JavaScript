const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase()
    const storeitem = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pName = storeitem.getElementsByTagName("h2")

    for (var i = 0; i < pName.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0]

        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = ""
            }
            else {
                product[i].style.display = "none"
            }
        }
    }
}