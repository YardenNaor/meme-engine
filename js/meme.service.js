'use strict'

var gImgs
var nextIdx=1

 console.log('hi from sevice:')

function getImgs(){
return gImgs
}


function _createImgs(){

while (`img/${nextIdx}.jpg`){
 const img= {
id: nextIdx++, 
url: `img/${nextIdx}.jpg`, 
keywords: []
 }
}
 gImgs.push(img)
}

