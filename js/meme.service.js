'use strict'

var gImgs = []

var nextId = 1

var gMeme = {
    selectedImgId:1,
    selectedLineIdx:0,
    lines: []
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
    console.log('text:',value)
    const line = {
        txt: value,
        size: 20,
        align: 'left',
        fillColor:'white',
        strokeColor: 'black'
    }
   gMeme.lines[0]=line
//    console.log('gmeme:',gMeme)
}
