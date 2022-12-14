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
<img data-id="${img.id}" src="${img.url}" onClick="onRenderImg(${img})" >
</article>`
    })
    console.log('strHTMLs:', strHTMLs)
    elGallery.innerHTML = strHTMLs.join('')


}

function onRenderImg(img){


}

function renderMeme(value) {
    console.log('value:', value)
    gCtx.font = "48px serif";
    gCtx.style='white'
    gCtx.strokeText(`${value}`, 10, 50);
    gCtx.fillText(`${value}`, 10, 50);

    const elImg = new Image()
    elImg.src = 'img/1.jpg'
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    console.log('Ctx:',gCtx)
    console.log('canvas:', gElCanvas)


}