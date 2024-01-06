let turn = 'x'
let boxtext =document.getElementsByClassName('boxtext')
let turnFor = document.getElementById('turnFor')
let reset = document.getElementById('reset')


let chechwin = ()=>{

let win = [
    [0,1,2, 8, 6, 0 ],
    [3,4,5, 8, 16, 0],
    [6,7,8, 8, 26, 0],
    [0,3,6, -1, 17, 90],
    [1,4,7, 8, 17, 90],
    [2,5,8, 17, 17, 90],
    [0,4,8, 8, 16, 44],
    [2,4,6, 8, 16, 135],
]

win.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
        document.getElementById('info').innerText = boxtext[e[0]].innerText + ' is won'
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector('.line').style.visibility = "visible"
        document.querySelector('.line').style.width = "20vw"
    } 
});

}



const changeturn = ()=>{
    return turn === 'x' ? '0' : 'x'
}
let box = document.getElementsByClassName('box')

Array.from(box).forEach((Element)=>{
    let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click',()=>{
        boxtext.innerHTML = turn
        turn = changeturn()
        turnFor.innerHTML = 'Turn for ' + turn
        chechwin()
    })
})


reset.addEventListener('click',(e)=>{
    console.log(e.target)
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach((Element)=>{
        Element.innerHTML = ''
        console.log(Element)
    })
    turn = 'x'
    turnFor.innerHTML = 'Turn for ' + turn
    document.querySelector('.line').style.visibility = "hidden"
    
})