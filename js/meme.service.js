'use strict'

var gImgs=[]
var nextIdx=1

 console.log('hi from sevice:')

 _createImgs()

function getImgs(){
return gImgs
}


function _createImgs(){

// while (`img/${nextIdx}.jpg`){
for (var i=0;i<18;i++){
 const img= {
id: nextIdx++, 
url: `img/${i+1}.jpg`, 
keywords: []
//  }
 }
 gImgs.push(img)
}

console.log('imgs:',gImgs)
}

