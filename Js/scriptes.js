AOS.init();

window.onscroll = function(){
    scroll = document.documentElement.scrollTop;

    Header = document.getElementById("header");

    if (scroll > 20){
        Header.classList.add('nav__mod')
    }else if(scroll < 20){
        Header.classList.remove('nav__mod')
    }
}