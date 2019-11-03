let customShapeOverlay = 
{

    colors : ['#BFB2F3', '#C5F1FF', '#F3C6A5', '#F8A3A8', '#9CDCAA', '#F7EEA1', '#F6D7E8'],
    colorsName : ['purple', 'blue', 'orange', 'pink', 'red', 'green', 'yellow'],
    actualColor : 0,
    drawingMatrix : 
    [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    customShapeList : [],


    landingOverlayAnimation()
    {
        setTimeout( () =>
        {
            document.querySelector('.landingOverlay').style.display = 'none'
        }, 5000)
    },

    drawing()
    {
        let td = document.querySelectorAll('.drawingArea td')
        let div = document.querySelectorAll('.drawingArea td div')

        td.forEach( (e, index) =>
        {
            e.addEventListener('click', () =>
            {
                if(this.drawingMatrix[index] == 0)
                {
                    e.style.background = this.colors[this.actualColor]
                    this.drawingMatrix[index] = 1
                }
                else
                {
                    e.style.background = 'transparent'
                    this.drawingMatrix[index] = 0
                }
            })
        })

        div.forEach( e =>
            {
            e.addEventListener('mouseover', () =>
            {
                e.style.background = 'rgba(255, 255, 255, 0.5)'
            })
            e.addEventListener('mouseout', () =>
            {
                e.style.background = 'transparent'
            })
        })
    },

    nextShape()
    {
        let button = document.querySelector('.nextButton')
        button.addEventListener('click', () =>
        {
            let matrix = []
            let matrixLine = []
            u = 0
            for (let i = 0; i < 4; i++)
            {
                for (let j = 0; j < 4; j++)
                {
                    matrixLine.push(this.drawingMatrix[u])
                    u++
                }
                matrix.push(matrixLine)
                matrixLine = []
            }

            let matrixA = _.cloneDeep(matrix)
            this.rotate(matrix)
            let matrixB = _.cloneDeep(matrix)
            this.rotate(matrix)
            let matrixC = _.cloneDeep(matrix)
            this.rotate(matrix)
            let matrixD = _.cloneDeep(matrix)

            const shape = new Shape(this.colorsName[this.actualColor], matrixA, matrixB, matrixC, matrixD)
            this.customShapeList.push(shape)
            this.interfaceActualisation(1)
            this.actualColor++
            if(this.actualColor == 7)
            {
                this.launchingGame(1)
            }
        })
    },

    previousShape()
    {
        document.querySelector('.shapeMenuOverlay_customPieces_drawings .backButton').addEventListener('click', () =>
        {
            this.interfaceActualisation(0)
            this.actualColor--
            this.customShapeList.pop()
        })
    },

    rotate(matrix)
    {
        let test = matrix
        const n = test.length;
        const x = Math.floor(n/ 2);
        const y = n - 1;
        for (let i = 0; i < x; i++)
        {
           for (let j = i; j < y - i; j++)
           {
              k = test[i][j];
              test[i][j] = test[y - j][i];
              test[y - j][i] = test[y - i][y - j];
              test[y - i][y - j] = test[j][y - i]
              test[j][y - i] = k
           }
        }
        return test
    },

    interfaceActualisation(action) // 1 to add / 0 to remove
    {
        let td = document.querySelectorAll('.drawingArea td')
        td.forEach( (e, index) =>
        {
            e.style.background = 'transparent'
            this.drawingMatrix[index] = 0
        })

        let colorsIndex = document.querySelectorAll('.shapeMenuOverlay_customPieces_colors .colors')
        let tick = document.createElement('div')
        tick.classList.add('tick')
        let tickA = document.createElement('div')
        tickA.classList.add('tickA')
        tick.appendChild(tickA)
        let tickB = document.createElement('div')
        tickB.classList.add('tickB')
        tick.appendChild(tickB)
        if(action == 1)
        {
            colorsIndex[this.actualColor].appendChild(tick)
        }
        else if(action == 0)
        {
            colorsIndex[this.actualColor - 1].innerHTML = ""
        }
    },

    basicShapeButton()
    {
        document.querySelector(".shapeMenuOverlay_basicPieces_pieces svg").addEventListener('click', () =>
        {
            customShapeOverlay.launchingGame(0)
        })
    },

    launchingGame(state) // 1 for custom / 0 for basic
    {
        if(state == 1)
        {
            tetris.shapeList = this.customShapeList
        }
        else if(state == 0)
        {
            tetris.shapeListCreation()
        }
        setTimeout( () =>
        {
            document.querySelector('.shapeMenuOverlay').style.display = 'none'
            tetris.start()
            tetris.state = 1
        },250)
    }
}
customShapeOverlay.landingOverlayAnimation()
customShapeOverlay.drawing()
customShapeOverlay.nextShape()
customShapeOverlay.previousShape()
customShapeOverlay.basicShapeButton()

class Shape 
{
    constructor(color, matrixA, matrixB, matrixC, matrixD) {
      this.color = color
      this.a = matrixA
      this.b = matrixB
      this.c = matrixC
      this.d = matrixD
    }
}