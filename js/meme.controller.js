'use strict'

const gElCanvas = document.querySelector('canvas')
const gCtx = gElCanvas.getContext('2d')
var glinePos

// console.log('hi from controller:')

function onInit() {
    renderGallery()
    // addListeners()
}

function renderGallery() {
    const imgs = getImgs()
    console.log('imgs at render:', imgs)

    const elGallery = document.querySelector('.gallery-container')

    // console.log('elgallery:',elGallery)
    const strHTMLs = imgs.map(img => {
        return `<article>
<img data-id="${img.id}" src="${img.url}" onClick="onImgSelect(${img.id})" >
</article>`
    })
    console.log('strHTMLs:', strHTMLs)
    elGallery.innerHTML = strHTMLs.join('')

}

function onImgSelect(imgId) {
    setImg(imgId)
    renderImg(imgId)
}

function renderImg(imgId) {
    // console.log('img:',img)
    const img = getImgById(imgId)
    // console.log('img at renderimg :',img)
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function OnsetLineTxt(value, ev) {
    setLineTxt(value)
    if (ev.key === 'Backspace') {
        deleteCurrText()
        // .onload= renderMeme
        return
    }
    renderMeme()
}


function deleteCurrText() {
    console.log('hi from deletetext:')
    const meme = getMeme()
    // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    renderImg(meme.selectedImgId)
    // renderImg.onload=renderMeme()
    setTimeout(renderMeme, 10)
}


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
    const meme = getMeme()
    console.log('meme:', meme)
    // renderImg(meme.selectedImgId)
    const { txt, fillColor, strokeColor, align,size,pos } = meme.lines[0]
    console.log('pos:',pos)
    gCtx.font = `${size}px serif`
    gCtx.fillStyle = fillColor
    gCtx.strokeStyle = strokeColor
    gCtx.direction = align
    gCtx.strokeText(txt, pos.x, pos.y)
    gCtx.fillText(txt, pos.x, pos.y)
    console.log('Ctx:', gCtx)
    console.log('canvas:', gElCanvas)
}


// function addListeners(){
//   const elText =document.querySelector('.text')
//   elText.addEventListener("Backspace",onDeleteText)

// }


function onSetAlign(value) {
    setAlign(value)
    deleteCurrText()
    // setTimeout(renderMeme, 10)
}

// onDeleteText(){
function onGetPos(ev) {
    console.log('pos x, pos y:', ev.offsetX, ev.offsetY)
}

function  onSetFontSize(value){
    setFontSize(value)
     deleteCurrText()
}

function onSetLinePos(value){
    setLinePos(value)
    deleteCurrText()   
}