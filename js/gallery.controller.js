'use strict'


function renderGallery() {
    const imgs = getImgs()
    console.log('imgs at render:', imgs)

    const elGallery = document.querySelector('.gallery-container')

    // console.log('elgallery:',elGallery)
    const strHTMLs = imgs.map(img => {
        return `<article class="img-container">
<img data-id="${img.id}" src="${img.url}" onClick="onImgSelect(${img.id})" >
</article>`
    })
    console.log('strHTMLs:', strHTMLs)
    elGallery.innerHTML = strHTMLs.join('')

}

function onImgSelect(imgId) {
    const elGallery=document.querySelector('.gallery-container')
    const elEditor=document.querySelector('.editor-container')
    const elbtn= document.querySelector('.gallery-btn')
    elGallery.style.display='none'
    elEditor.style.display='flex'
    elbtn.classList.remove('chosen')
    setImg(imgId)
    renderMeme()
}

  function onShowGallery(){
    const elGallery=document.querySelector('.gallery-container')
    const elEditor=document.querySelector('.editor-container')
    const elbtn= document.querySelector('.gallery-btn')
    elGallery.style.display='grid'
    elEditor.style.display='none'
    elbtn.classList.add('chosen')
  }