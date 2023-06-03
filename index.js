function change(){
    var child1 = document.getElementById("blue")
    child1.setAttribute("style", "background-color: blue")
    child1.style.color="white"

    var child9 = document.getElementById("green")
    child9.setAttribute("style", "background-color: green")
    child9.style.color="white"


    var child17 = document.getElementById("palevioletred")
    child17.setAttribute("style", "background-color: palevioletred")
    child17.style.color="white"

    var childeven = document.getElementsByClassName("lime")
    for(let i=0; i<8; i++){
        childeven[i].setAttribute("style", "background-color: lime")
        childeven[i].style.color="white"
    }
}