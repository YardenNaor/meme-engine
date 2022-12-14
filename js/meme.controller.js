'use strict'

const gElCanvas = document.querySelector('canvas')
const gCtx = gElCanvas.getContext('2d')

// console.log('hi from controller:')

function onInit() {
    renderGallery()
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

function onImgSelect() {
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

function OnsetLineTxt(value) {
    setLineTxt(value)
    renderMeme()
}


function renderMeme() {
    const meme = getMeme()
    console.log('meme:', meme)
    gCtx.font = "48px serif";
    gCtx.fillStyle = `${meme.lines[0].fillColor}`
    gCtx.strokeStyle = `${meme.lines[0].fillStroke}`
    gCtx.strokeText(`${value}`, 10, 50);
    gCtx.fillText(`${value}`, 10, 50);
    console.log('Ctx:', gCtx)
    console.log('canvas:', gElCanvas)
}


