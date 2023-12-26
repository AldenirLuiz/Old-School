const mainsection = document.getElementById('main-header')
const maingalery = document.getElementById('galery')
const maintitle = document.getElementById('block-descript')

function expandlink(){
    maingalery.style.display = 'none'
    maintitle.style.display = 'none'

    var objectHTML = document.createElement('object');
    objectHTML.className = 'obj';
    objectHTML.type = 'text/html';
    objectHTML.data = 'sub/history.html';

    objectHTML.style.overflow = 'hidden';

    mainsection.appendChild(objectHTML);
}