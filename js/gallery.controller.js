'use strict'


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
    renderImg()
}