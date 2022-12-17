'use strict'

const gElCanvas = document.querySelector('canvas')
const gCtx = gElCanvas.getContext('2d')
var glinePos
var gRenderImg
var isEditing=false
// console.log('hi from controller:')

function onInit() {
    renderGallery()
    createMemes(gElCanvas)
    // addListeners()
}


function renderMeme() {
    // console.log('img:',img)
    const imgId = getMemeImgId()
    const img = getImgById(imgId)
    console.log('img:', img)
    // console.log('img at renderimg :',img)
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
       if (isEditing) makeRect()
        renderMemeLine()
    }
}

function OnsetLineTxt(value, ev) {
    ev.stopPropagation()
    isEditing=true
    setLineTxt(value)
    // if (ev.key === 'Backspace') {

    //     // .onload= renderMeme
    //     return
    // }
    renderMeme()
    // renderMeme()
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
    renderMemeLine()
}

function onSetStrokeColor(value) {
    console.log('value at stroke color:', value)
    setStrokeColor(value)
    renderMemeLine()
}


function renderMemeLine() {

    const memeLines = getMemeLines()
    // console.log('meme:', meme)
    // setTimeout(() => { 
    gCtx.beginPath()
    memeLines.forEach(line => {
        const { txt, fillColor, strokeColor, align, size, pos } = line

        gCtx.lineWidth = 5
        gCtx.font = `${size}px serif`
        // console.log('gCtx.font:',gCtx.font)
        gCtx.fillStyle = fillColor
        gCtx.strokeStyle = strokeColor
        gCtx.textAlign = align
        var writeStartPos
        switch (align) {
            case 'right':
                gCtx.direction = 'rtl';
                writeStartPos = (gElCanvas.width / 4) * 3
                break
            case 'center':
                // gCtx.textBaseline = 'middle';
                writeStartPos = gElCanvas.width / 2
                // - (txt.length*size)/2
                // gCtx.align=align
                break
            case 'left':
                gCtx.direction = 'ltr'
                writeStartPos = gElCanvas.width / 6
        }


        gCtx.strokeText(txt, writeStartPos, pos.y + 20)
        gCtx.fillText(txt, writeStartPos, pos.y + 20)
        // }, 10)
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
    renderMeme()
    // renderMeme()
    // setTimeout(renderMeme, 10)
}

// onDeleteText(){
function onCanvasClicked(ev) {
    console.log('pos x, pos y:', ev.offsetX, ev.offsetY)
    const clickedPosX=ev.offsetX
    const clickedPosY=ev.offsetY
    const currLine = getCurrLine()
    const { pos } = currLine
    if (clickedPosX<=10 || clickedPosY<=(pos.y - 30)||
    clickedPosX>=(gElCanvas.width - 20)|| clickedPosY>=pos.y + 20) {
    isEditing=false
    }else {
        isEditing=true
    }
    renderMeme()
    }
  


function onSetFontSize(value) {
    setFontSize(value)
    renderMeme()
    // renderMeme()
}

function onSetLinePos(value) {
    isEditing=false
    setLinePos(value)
    renderMeme()
    // isEditing=true
    // renderMeme()
}

function onSwitchLines() {
    isEditing=true
    switchLines()
    renderMeme()


}

function makeRect() {
    // renderMeme()
    gCtx.beginPath()
    const currLine = getCurrLine()
    const { pos } = currLine
    gCtx.fillStyle = "rgba(255, 255, 255, 0.5)";
    gCtx.rect(10, pos.y - 30, gElCanvas.width - 20, pos.y + 20)
    gCtx.fillRect(10, pos.y - 30, gElCanvas.width - 20, pos.y + 20)
    gCtx.stroke()

}

function onDeleteTextLine() {
    deleteTextLine()
    renderMeme()

}

function onShare() {
    console.log('share!:')
    share(gElCanvas)
}

function onDownload(elLink) {
 isEditing=false
 renderMeme()
  const imgContent = gElCanvas.toDataURL('image/jpeg')
        elLink.href = imgContent
}


function onShowNav(){
    console.log('hi from hamburger:')
const elNav=document.querySelector('header nav')
const elScreen=document.querySelector('.main-screen')
elNav.style.display='flex'
elNav.style.transform='translateX(0)'
elScreen.style.display='block'
// elScreen.style.backgroungColor=''

}

function onHideNav(){
    const elNav=document.querySelector('header nav')
    const elScreen=document.querySelector('.main-screen')
    elNav.style.transform='translateX(100%)'
    elScreen.style.display='none'
}

// function renderMemeForDownload(elLink) {
//     const imgId = getMemeImgId()
//     const img = getImgById(imgId)
//     console.log('img:', img)
//     // console.log('img at renderimg :',img)
//     const elImg = new Image()
//     elImg.src = img.url
//     elImg.onload = () => {
//         gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
//         renderMemeLine()
//     }   
//     setTimeout(()=>{
      
// }