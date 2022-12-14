'use strict'

var gImgs = []

var nextId = 1

var gMeme = {
    selectedImgId:1,
    selectedLineIdx:0,
    lines: [{ txt: '',
        size: 20,
        align: 'ltr',
        fillColor:'white',
        strokeColor: 'black'
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
            id: nextId++,
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


function getMeme() {
    return gMeme
}


function setLineTxt(value) {
    // console.log('text:',value)
    gMeme.lines[gMeme.selectedLineIdx].txt = value
      
    }
//    gMeme.lines[gMeme.selectedLineIdx]=line
//    console.log('gmeme:',gMeme)


function setFillColor(value){
    // console.log('value at fill:',value)
    // console.log('lineidx color:',gMeme.lines[gMeme.selectedLineIdx])
    gMeme.lines[gMeme.selectedLineIdx].fillColor=value

}

function setStrokeColor(value){
    console.log('value at stroke:',value)
    gMeme.lines[gMeme.selectedLineIdx].strokeColor=value

}

function setAlign(value){
    gMeme.lines[gMeme.selectedLineIdx].align=value

}