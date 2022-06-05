let squares = document.querySelector('.areas')
let square = document.querySelector('.area')
let neutralArea = document.querySelector('.neutralArea')
let neutralItems = document.querySelector('.item')

let matriz = {
    a: null,
    b: null,
    c: null
}

document.querySelector('.neutralArea').addEventListener('drop', goBack)
document.querySelector('.neutralArea').addEventListener('dragover', overBack)
document.querySelector('.neutralArea').addEventListener('dragleave', leaveBack)

document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)

})

//item
function dragStart(event) {

    event.currentTarget.classList.add('dragging')
    neutralArea.style.backgroundColor = '#222'
}

function dragEnd(event) {
    event.currentTarget.classList.remove('dragging')
}

//area
document.querySelectorAll('.area').forEach((area) => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)

})

function dragOver(event) {
    event.preventDefault()
    event.currentTarget.classList.add('hover')
}

function dragLeave(event) {
    event.currentTarget.classList.remove('hover')
}


function drop(event) {
    event.preventDefault()
    event.currentTarget.classList.remove('hover')
    neutralArea.style.backgroundColor = '#333'
    let itemDragged = document.querySelector('.item.dragging')
    let dataname = event.currentTarget.getAttribute('data-name')

    //problema
    // matriz.map((item) => {
    //     let index = matriz.indexOf(item)
    //     matriz[index] = `${itemDragged.innerHTML}`

    // })

    if (event.currentTarget.querySelector('.item') === null) {
        event.target.appendChild(itemDragged)

    }

    updateAreas()
}


//voltar os troço 

function overBack(event) {
    event.preventDefault()
}

function goBack(event) {
    event.preventDefault()
    let itemDragged = document.querySelector('.item.dragging')
    let dataname = event.currentTarget


    matriz[itemDragged.getAttribute('data-name')] = null

    console.log(event.clicked)
    document.querySelector('.areas').classList.remove('correct')

    event.target.appendChild(itemDragged)
    neutralArea.style.backgroundColor = '#333'
    updateAreas()
}

function leaveBack() {
    neutralArea.style.backgroundColor = '#222'
}


//matriz

function updateAreas() {

    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name')

        if (area.querySelector('.item') !== null) {
            matriz[name] = area.querySelector('.item').innerHTML
        } else {
            matriz[name] = null
        }
    })

    if (matriz.a === '1' && matriz.b === '2' && matriz.c === '3') {

        document.querySelector('.areas').classList.add('correct')
    }

    console.log(matriz)
}