const mainsection = document.getElementById('container-iframe')
const maingalery = document.getElementById('galery')
const maintitle = document.getElementById('block-descript')
var mainframe = document.getElementById('myObject')
console.log(maintitle)

function expandlink(source, size){
    maingalery.style.display = 'none';
    maintitle.style.display = 'none';
    mainsection.style.display = 'block';
    mainsection.style.height = size;
    mainframe.style.display = 'flex';

    mainframe.src = source
    mainframe.width="100%" 
    mainframe.height="100%" 
    mainframe.scrolling="no"
}

function remObject(){
    mainframe.src = ''
    mainframe.style.display = "none"
    maingalery.style.display = 'flex';
    maintitle.style.display = 'flex';
    mainsection.style.display = 'none';
}

$(function(){
    $('')
})