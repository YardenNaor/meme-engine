'use strict'

const gElCanvas = document.querySelector('canvas')
const gCtx = gElCanvas.getContext('2d')
var glinePos
var gRenderImg
// console.log('hi from controller:')

function onInit() {
    renderGallery()
    // addListeners()
}


function renderImg() {
    // console.log('img:',img)
    const imgId = getMemeImgId()
    const img = getImgById(imgId)
    console.log('img:', img)
    // console.log('img at renderimg :',img)
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function OnsetLineTxt(value, ev) {
    setLineTxt(value)
    // if (ev.key === 'Backspace') {

    //     // .onload= renderMeme
    //     return
    // }
    gRenderImg= renderImg()
    renderMeme()
    // renderMeme()
}


// function deleteCurrText() {
//     console.log('hi from deletetext:')
//     const meme = getMemeCurrLine()
//     // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
//     // console.log('imgId:', meme.selectedImgId)
//     renderImg()
//     // renderImg.onload=renderMeme()

// }


function onSetFillColor(value) {
    console.log('value at fill color:', value)
    setFillColor(value)
    renderMeme()
}

function onSetStrokeColor(value) {
    console.log('value at stroke color:', value)
    setStrokeColor(value)
    renderMeme()
}


function renderMeme() {
   
    const memeLines = getMemeLines()
    // console.log('meme:', meme)
    setTimeout(() => {
    memeLines.forEach(line=>{
    const { txt, fillColor, strokeColor, align, size, pos } = line
    gCtx.beginPath()
    // console.log('size:', size)
    gCtx.font = `${size}px serif`
    // console.log('gCtx.font:',gCtx.font)
    gCtx.fillStyle = fillColor
    gCtx.strokeStyle = strokeColor
    gCtx.textAlign = align
   var posX
    switch (align) {
        case 'right':
            gCtx.direction= 'rtl';
            posX = (gElCanvas.width/4)*3
            break
        case 'center':
            // gCtx.textBaseline = 'middle';
            posX = gElCanvas.width/2 
            // - (txt.length*size)/2
            // gCtx.align=align
            break
        case 'left':
            gCtx.direction = 'ltr'
            posX =  gElCanvas.width/6
    }

    
        gCtx.strokeText(txt, posX, pos.y)
        gCtx.fillText(txt, posX, pos.y)
    }, 10)
})
    // console.log('Ctx:', gCtx)
    // console.log('canvas:', gElCanvas)

}


// function addListeners(){
//   const elText =document.querySelector('.text')
//   elText.addEventListener("Backspace",onDeleteText)

// }


function onSetAlign(value) {
    setAlign(value)
    renderImg()
    renderMeme()
    // setTimeout(renderMeme, 10)
}

// onDeleteText(){
function onGetPos(ev) {
    console.log('pos x, pos y:', ev.offsetX, ev.offsetY)
}

function onSetFontSize(value) {
    setFontSize(value)
    renderImg()
    renderMeme()
}

function onSetLinePos(value) {
    setLinePos(value)
    renderImg()
    renderMeme()
}

function onSwitchLines() {
    switchLines()
}