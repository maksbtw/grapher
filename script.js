const ctx = document.querySelector('.board').getContext('2d')
let points = [[]]
let options = {
    currentArray: 0,
    funcColors: ['#ff0000'],
}

function addPoint() {
    let buffer = prompt('Enter pair of numbers [x,y], example: 15,3')
    if(buffer) {
        buffer = buffer.split(',')
        if (/\d/.test(buffer[0]) && /\d/.test(buffer[1])) {
            points[options.currentArray].push({x: buffer[0], y: buffer[1]})
            displayPoints(options.currentArray)
        } else {
            alert('Invalid format')
            buffer = prompt('Enter pair of numbers: x,y')
        }
    }
    else{}
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'n') {
        addPoint()
    } else if(e.key === 'b') {
        if(points[options.currentArray].length !== 0){
            options.currentArray++
            points.push([])
            options.funcColors.push('#ff0000')
            addPoint()
        }
        else {
            alert('Add at least 1 point by pressing [N]')
        }
    } else if(e.key === 'c') {
        changeFuncColor()
    }
})

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

function displayPoints(forArray) {
    ctx.strokeStyle = options.funcColors[forArray]
    ctx.fillStyle = options.funcColors[forArray]
    ctx.lineWidth = '2'
    ctx.beginPath()
    points[forArray].forEach((item, i) => {
        ctx.lineTo(250 + item.x * 10, 250 - item.y * 10)
        ctx.moveTo(252 + item.x * 10, 250 - item.y * 10)
        ctx.arc(250 + item.x * 10, 250 - item.y * 10, 2, 0, 2 * Math.PI)
        ctx.fill()
        ctx.moveTo(250 + item.x * 10, 250 - item.y * 10)
    })
    ctx.stroke()
}
displayPoints(0)

function changeFuncColor() {
    let func = prompt('Enter number of function which you want to change, example: 2')
    if(func){
        if(func > 0 && func <= options.currentArray + 1){
            let color = prompt('Enter color of function in the hexadecimal form, example: #32A852')
            if(/^#[0-9a-f]{6}$/i.test(color)){
                options.funcColors[func - 1] = color.toLowerCase()
                displayPoints(func - 1)
            }
            else {
                alert('Invalid color')
            }
        }
        else {
            alert('Invalid number')
        }
    }
    else {}
}