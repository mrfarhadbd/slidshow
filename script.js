var picture=[
'farhad.png',
'farhad1.png',
'farhad2.png',
'farhad3.png',
'farhad4.png',
'farhad5.png'
]
var index=0;
var img=document.getElementById('img')

function prev () {
 index = index === 0 ? picture.length -1  :index - 1;
 img.setAttribute('src', picture[index])
}

function next() {
 index = index === picture.length - 1 ? 0 : index + 1;
 img.setAttribute('src', picture[index])
}

setInterval(prev, 2000);