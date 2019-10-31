let tetris = {
    width : 10,
    height : 20,
    domMatrix : [],
    gridMatrix : [],
    state : 0, // 0 paused // 1 start // 2 game over //
    level : 1,
    intervalDelay : 750,
    intervalDelayBasic : 750,
    intervalDelayBoost : 200,
    actualShape : {},
    actualShapeColor : '',
    shapeTab : ['a', 'b', 'c', 'd'],
    actualShapeState : 0,
    actualShapePosX : 3,
    actualShapePosY : 0,
    nextShape : {},
    interval : 0,

    tShape : {
        
        color : 'purple',

        a : [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0 ,0]
        ],

        b : [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0 ,0]
        ],

        c : [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0 ,0]
        ],

        d : [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0 ,0]
        ],
    },

    iShape : {
        
        color : 'blue',

        a : [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0 ,0]
        ],

        b : [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1 ,0]
        ],

        c : [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0 ,0]
        ],

        d : [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0 ,0]
        ],
    },

    lShape : {
        
        color : 'orange',

        a : [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0 ,0]
        ],

        b : [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 1, 0, 0],
            [0, 0, 0 ,0]
        ],

        c : [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1 ,0]
        ],

        d : [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0 ,0]
        ],
    },

    jShape : {
        
        color : 'pink',

        a : [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0 ,0]
        ],

        b : [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0 ,0]
        ],

        c : [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0 ,0]
        ],

        d : [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0 ,0]
        ],
    },

    zShape : {
        
        color : 'red',

        a : [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0 ,0]
        ],

        b : [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0 ,0]
        ],

        c : [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0 ,0]
        ],

        d : [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0 ,0]
        ],
    },

    sShape : {
        
        color : 'green',

        a : [
            [0, 0, 0, 0],
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0 ,0]
        ],

        b : [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1 ,0]
        ],

        c : [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0 ,0]
        ],

        d : [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0 ,0]
        ],
    },

    oShape : {
        
        color : 'yellow',

        a : [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0 ,0]
        ],

        b : [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0 ,0]
        ],

        c : [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0 ,0]
        ],

        d : [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0 ,0]
        ],
    },

    shapeList : [],

    domTableCreation(){
        let table = document.querySelector('.containerTetris_grid')
        for (let i = 0; i < this.height; i++) {
            let row = document.createElement('tr')
            table.appendChild(row)
            for (let j = 0; j < this.width; j++) {
                let cell = document.createElement('td')
                row.appendChild(cell)
                this.domCubeCreation(cell, "purple")
                this.domCubeCreation(cell, "blue")
                this.domCubeCreation(cell, "orange")
                this.domCubeCreation(cell, "red")
                this.domCubeCreation(cell, "green")
                this.domCubeCreation(cell, "yellow")
                this.domCubeCreation(cell, "pink")
            }
        }
    },

    domMatrixCreation(){
        let u = 0
        for (let i = 0; i < this.height; i++) {
            this.domMatrix.push([])
            for (let j = 0; j < this.width; j++) {
                this.domMatrix[i].push(document.querySelectorAll('.containerTetris_grid td')[u])
                u += 1
            }
        }
    },

    binaryMatrixCreation(){
        for (let i = 0; i < this.height + 3; i++) {
            this.gridMatrix.push([])
            for (let j = 0; j < this.width; j++) {
                if(i < this.height){
                    this.gridMatrix[i].push(0)
                }
                else{
                    this.gridMatrix[i].push(2)
                }
            }
        }
    },

    shapeListCreation(){
        this.shapeList.push(this.tShape, this.iShape, this.lShape, this.jShape, this.zShape, this.sShape, this.oShape)
    },

    domCubeApparition : function(x, y, color){
        
        this.gridMatrix[y][x] = 1
        let cube = this.domMatrix[y][x].querySelector(`.${color}`)
        cube.style.opacity = 1
    },

    domCubeCreation : function(cell, colorClasseName){

        let container = document.createElement('div')
        container.classList.add('cubeContainer')
        container.classList.add(colorClasseName)
        cell.appendChild(container)

        let frontFace = document.createElement('div')
        frontFace.classList.add('frontFace')
        container.appendChild(frontFace)

        let backFace = document.createElement('div')
        backFace.classList.add('backFace')
        container.appendChild(backFace)

        let leftFace = document.createElement('div')
        leftFace.classList.add('leftFace')
        container.appendChild(leftFace)

        let rightFace = document.createElement('div')
        rightFace.classList.add('rightFace')
        container.appendChild(rightFace)

        let upFace = document.createElement('div')
        upFace.classList.add('upFace')
        container.appendChild(upFace)

        let downFace = document.createElement('div')
        downFace.classList.add('downFace')
        container.appendChild(downFace)
    },

    gridClear(){
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if(this.gridMatrix[i][j] == 1){
                    this.gridMatrix[i][j] = 0
                    let cube = this.domMatrix[i][j].querySelector(`.${this.actualShapeColor}`)
                    cube.style.opacity = 0
                }
            }
        }
    },

    loseTest(shape, shapeState){
        for (let i = 0; i < 4; i++) {
            for (let j = 3; j < 7; j++) {
                if(shape[shapeState][i][j - 3] == 1 && this.gridMatrix[i][j] == 2){
                    return false
                }
            }
        }
        return true
    },

    wallTest(direction){
        for (let i = 0 + this.actualShapePosY; i < 4 + this.actualShapePosY; i++) {
            for (let j = 0 + this.actualShapePosX; j < 4 + this.actualShapePosX; j++) {
                if(this.gridMatrix[i][j] == 1){
                    if((this.gridMatrix[i][j + direction]) === undefined || (this.gridMatrix[i][j + direction]) === 2){
                        return false
                    }
                }
            }
        }
        return true
    },

    groundTest(){
        for (let i = 0 + this.actualShapePosY; i < 4 + this.actualShapePosY; i++) {
            for (let j = 0 + this.actualShapePosX; j < 4 + this.actualShapePosX; j++) {
                if(this.gridMatrix[i][j] == 1){
                    if(this.gridMatrix[i + 1][j] == 2 ){
                        return false
                    }
                }
            }
        }
        return true
    },

    keyboardControlsTouchDown : event => {
        switch (event.code) {
            case 'KeyW' :
                if(tetris.actualShapeState == 3){
                    tetris.gridClear()
                    tetris.actualShapeState = 0
                    tetris.shapeDisplay(tetris.actualShape, tetris.shapeTab[tetris.actualShapeState])
                }
                else{
                    tetris.gridClear()
                    tetris.actualShapeState++
                    tetris.shapeDisplay(tetris.actualShape, tetris.shapeTab[tetris.actualShapeState])
                }
                break;
            case 'KeyA' :
                if(tetris.wallTest(-1)){
                    tetris.actualShapePosX--
                    tetris.gridClear()
                    tetris.shapeDisplay(tetris.actualShape, tetris.shapeTab[tetris.actualShapeState])
                }
                break
            case 'KeyS' :
                tetris.falling()
                break;
            case 'KeyD' :
                if(tetris.wallTest(1)){
                    tetris.actualShapePosX++
                    tetris.gridClear()
                    tetris.shapeDisplay(tetris.actualShape, tetris.shapeTab[tetris.actualShapeState])
                }
                break;
            case 'Space' :
                tetris.start()
                break;
            default:
        }
    },

    keyboardControlsTouchUp : event => {
        switch (event.code) {
            case 'KeyW' :
                break;
            case 'KeyA' :
                break
            case 'KeyS' :
                break;
            case 'KeyD' :
                break;
            default:
        }
    },

    randomShape(){
        this.actualShape = this.nextShape
        this.actualShapeColor = this.actualShape['color']
        this.nextShape = this.shapeList[Math.floor(Math.random() * this.shapeList.length)]
    },

    shapeDisplay(shape, shapeState){
        for (let i = 0 + this.actualShapePosY; i < 4 + this.actualShapePosY; i++) {
            for (let j = 0 + this.actualShapePosX; j < 4 + this.actualShapePosX; j++) {
                if(shape[shapeState][i - this.actualShapePosY][j - this.actualShapePosX] == 1){
                    this.gridMatrix[i][j] = 1
                    this.domCubeApparition(j, i, shape['color'])
                }
            }
        }
    },

    shapeFreezing(){
        for (let i = 0 + this.actualShapePosY - 1; i < 4 + this.actualShapePosY; i++) {
            for (let j = 0 + this.actualShapePosX; j < 4 + this.actualShapePosX; j++) {
                if(this.gridMatrix[i][j] == 1){
                    this.gridMatrix[i][j] = 2
                }
            }
        }
    },

    falling(){
        if(this.groundTest()){
            this.gridClear()
            this.shapeDisplay(this.actualShape, this.shapeTab[this.actualShapeState])
            this.actualShapePosY += 1
        }
        else{
            this.shapeFreezing(this.actualShape, this.shapeTab[this.actualShapeState])
            this.actualShape = this.nextShape
            this.randomShape()
            this.actualShapePosX = 3
            this.actualShapePosY = 0
            tetris.loseTest(tetris.actualShape, tetris.actualShapeState)
        }
    },

    settingFallingInterval(){
        this.interval = window.setInterval( () => {
            this.falling()
        },this.intervalDelay)
    }, 

    start(){
        tetris.randomShape()
        tetris.randomShape()
        tetris.settingFallingInterval()
    },

}

document.addEventListener('keydown', tetris.keyboardControlsTouchDown)
document.addEventListener('keyup', tetris.keyboardControlsTouchUp)

tetris.domTableCreation()
tetris.domMatrixCreation()
tetris.binaryMatrixCreation()
tetris.shapeListCreation()

