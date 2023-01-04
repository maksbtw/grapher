const $board = document.querySelector('.board')
const ctx = $board.getContext('2d')
// let points = [
//     {x: 4, y: 20},
//     {x: 3, y: 9},
//     {x: 2, y: 4},
//     {x: 1, y: 1},
//     {x: 0, y: 0},
// ]
let points = []
let buffer = prompt('Enter pair of numbers [x,y], example: 15,3')
while(buffer){
    if(/\d,\d/.test(buffer)){
        buffer = buffer.split(',')
        points.push({x: buffer[0], y: buffer[1]})
        buffer = prompt('Enter pair of numbers: x,y')
    }
    else {
        alert('Invalid format')
        buffer = prompt('Enter pair of numbers: x,y')
    }
}

function coordinateSystem() {
    // guide lines
    ctx.strokeStyle = '#c2c2c2'
    ctx.lineWidth = '1'
    ctx.beginPath()
    for (let i = 0; i < 50; i++) {
        ctx.moveTo(i * 10, 0)
        ctx.lineTo(i * 10, 500)
    }
    for (let i = 0; i < 50; i++) {
        ctx.moveTo(0, i * 10)
        ctx.lineTo(500, i * 10)
    }
    ctx.closePath()
    ctx.stroke()


    // xy axes
    ctx.strokeStyle = '#3f3f3f'
    ctx.lineWidth = '2'
    ctx.beginPath()
    ctx.moveTo(0, 250)
    ctx.lineTo(500, 250)
    ctx.moveTo(250, 0)
    ctx.lineTo(250, 500)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle = '#000'
    ctx.font = '20px sans-serif'
    ctx.fillText('X', 480, 270)
    ctx.fillText('Y', 260, 20)
}

coordinateSystem()

function displayPoints() {
    ctx.strokeStyle = '#ad0000'
    ctx.fillStyle = '#ad0000'
    ctx.lineWidth = '2'
    ctx.beginPath()
    points.forEach((item, i) => {
        ctx.lineTo(250 + item.x * 10, 250 - item.y * 10)
        ctx.moveTo(252 + item.x * 10, 250 - item.y * 10)
        ctx.arc(250 + item.x * 10, 250 - item.y * 10, 2, 0, 2 * Math.PI)
        ctx.fill()
        ctx.moveTo(250 + item.x * 10, 250 - item.y * 10)
    })
    ctx.stroke()
}

displayPoints()