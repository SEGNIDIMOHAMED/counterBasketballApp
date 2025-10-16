

let nbreHome = document.getElementById("nbreHome")
let count = 0
function ajoutePar1() {
    count = count + 1
    nbreHome.innerText = count

}
function ajoutePar2() {
    count = count + 2
    nbreHome.innerText = count

}
function ajoutePar3() {
    count = count + 3
    nbreHome.innerText = count

}





let nbreGuest = document.getElementById("nbreGuest")
let count2 = 0
function ajoutePar12() {
    count2 = count2 + 1
    nbreGuest.innerText = count2

}
function ajoutePar22() {
    count2 = count2 + 2
    nbreGuest.innerText = count2

}
function ajoutePar32() {
    count2 = count2 + 3
    nbreGuest.innerText = count2

}





function reset() {
    count =0
    nbreHome.innerText = count
}

function reset2() {
    count2 =0
    nbreGuest.innerText = count2
}
