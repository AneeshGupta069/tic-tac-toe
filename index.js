
let turn = "x"
let auditurn = new Audio("ting.mp3")
let reset = document.getElementById('reset')
let gameover = true

dsv

const chechwin = () => {

let boxtext = document.getElementsByClassName('boxtext')

    let wins = [

        [0, 1, 2, 8, 6, 0],
        [3, 4, 5, 8, 16, 0],
        [6, 7, 8, 8, 26, 0],
        [0, 3, 6, 18, 2.5, 90],
        [1, 4, 7, 18, 7.5, 90],
        [2, 5, 8, 18, 17.5, 90],
        [0, 4, 8, 17, 6.5, 44],
        [2, 4, 6, 6, -17, 136],
    ]

    console.log(wins)

    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.getElementsByClassName('turnFor')[0].innerText = boxtext[e[0]].innerText + ' won'
            gameover = false
            document.getElementsByClassName('line').style.transform = `translate(${e[3]}vw, ${e[4]}vw ) rotate(${e[5]}deg)`
        }
        console.log(boxtext[e[0]])

    })

}

// function for change turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x"
}


// game logic
let box = document.getElementsByClassName("box");
Array.from(box).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = "y"
            // turn = changeTurn()
            // auditurn.play()
            chechwin()

            if (gameover) {

                document.getElementsByClassName('turnFor')[0].innerText = `turn for ${turn}`
            }

        }

    })
})


// reset the game 
reset.addEventListener('click', ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    })

    turn = "x"
    document.getElementsByClassName('turnFor')[0].innerText = `turn for ${turn}`

})


