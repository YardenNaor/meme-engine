'use strict'

var gImgs = []

var gNextId = 1

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 30,
        align: 'left',
        fillColor: 'white',
        strokeColor: 'black',
        pos: { x: 70, y: 50 }
    }, {
        txt: '',
        size: 30,
        align: 'left',
        fillColor: 'white',
        strokeColor: 'black',
        pos: { x: 70, y: 440 }
    }
    ]
}

console.log('hi from sevice:')

_createImgs()

function getImgs() {
    return gImgs
}


function _createImgs() {

    // while (`img/${nextIdx}.jpg`){
    for (var i = 0; i < 18; i++) {
        const img = {
            id: gNextId++,
            url: `img/${i + 1}.jpg`,
            keywords: []
            //  }
        }
        gImgs.push(img)
    }

    console.log('imgs:', gImgs)
}

function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)

}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}


function getMemeImgId(){
    return gMeme.selectedImgId
}


function getMemeLines() {
    return gMeme.lines
}


function setLineTxt(value) {
    // console.log('text:',value)
    gMeme.lines[gMeme.selectedLineIdx].txt = value

}
//    gMeme.lines[gMeme.selectedLineIdx]=line
//    console.log('gmeme:',gMeme)


function setFillColor(value) {
    // console.log('value at fill:',value)
    // console.log('lineidx color:',gMeme.lines[gMeme.selectedLineIdx])
    gMeme.lines[gMeme.selectedLineIdx].fillColor = value

}

function setStrokeColor(value) {
    console.log('value at stroke:', value)
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = value

}

function setAlign(value) {
    // const {txt,size} =gMeme.lines[gMeme.selectedLineIdx]
    gMeme.lines[gMeme.selectedLineIdx].align = value
    // const pos = gMeme.lines[gMeme.selectedLineIdx].pos

}

function setFontSize(value) {
    if (value === 'up') gMeme.lines[gMeme.selectedLineIdx].size += 5
    if (value === 'down') gMeme.lines[gMeme.selectedLineIdx].size -= 5

}

function setLinePos(value) {
    if (value === 'up') gMeme.lines[gMeme.selectedLineIdx].pos.y -= 5
    if (value === 'down') gMeme.lines[gMeme.selectedLineIdx].pos.y += 5
}

function switchLines() {
    console.log('length:', gMeme.lines.length - 1)
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    }
    else {gMeme.selectedLineIdx++}
    console.log('idx:',gMeme.selectedLineIdx)

}