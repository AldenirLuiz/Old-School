const home = window.location.href;


if (sessionStorage.getItem('path') == null) {
    sessionStorage.setItem('path', home)
    console.log(sessionStorage.getItem('path'))
}


const mainsection = document.getElementById('container-iframe')
const maingalery = document.getElementById('galery')
const maintitle = document.getElementById('block-descript')
const menu = document.getElementById('responsive-menu')

var mainframe = document.getElementById('myObject')

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
    console.log(`MainHome: ${sessionStorage.getItem('path')}}`)
    window.location.href = sessionStorage.getItem('path')
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
