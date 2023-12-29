const mainsection = document.getElementById('container-iframe')
const maingalery = document.getElementById('galery')
const maintitle = document.getElementById('block-descript')
const menu = document.getElementById('responsive-menu')

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


openMenu.addEventListener('click', () => {
	menuLinks.style.display = "flex"
    menuLinks.style.width = "100%"
    menuLinks.style.opacity = 1
    menuLinks.style.background = 'white'
	menuLinks.style.right = (menu.offsetWidth * -1) + 'px'
    openMenu.style.display = "none"
})

closeMenu.addEventListener('click', () => {
    
	menuLinks.style.opacity = '0'
	menuLinks.style.right = (menuLinks.offsetWidth * -1) + 'px'
	setTimeout(()=> {
		menuLinks.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 600);
})
