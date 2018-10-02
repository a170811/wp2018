
//will delete
function Cursor_pos() {
    var x = event.clientX ;
    var y = event.clientY ;
    return [ x, y]
}

function move_img_block( status ) {

    var block = document.getElementById('show_img') ;
    if(status==1) {
        block.classList.add('move_img_block') ;
        block.style.display = 'block' ;
    }
    else {
        block.classList.remove('move_img_block') ;    
        block.style.display = 'none' ;
    }
}

function show_pic( status , element , callback ) {

    var img = document.getElementById('show_img') ;
    img.style.position = 'absolute' ;
    img.style.zIndex = '2' ;

    if(status == 1) {
        var rect = element.getBoundingClientRect() ;
        var pic = element.getAttribute('id') ;
        img.childNodes[1].style.backgroundImage = "url('./src/"+pic+".JPG')" ;
        img.childNodes[1].style.backgroundImage = "url('./src/"+pic+".JPG')" ;
        var pos = [ rect.top , rect.left , (rect.right-rect.left) , (rect.bottom-rect.top) ]
        document.documentElement.style.setProperty('--top' , pos[0]) ;
        document.documentElement.style.setProperty('--left' , pos[1]) ;
        document.documentElement.style.setProperty('--width' , pos[2]) ;
        document.documentElement.style.setProperty('--height' , pos[3]) ;
        img.childNodes[1].classList.add('show_pic') ;
    }
    else {
        img.childNodes[1].classList.remove('show_pic') ;
    }

    if (typeof callback == 'function') {
        callback() ;
    }
}

function show_info( status ,id_name ) {

    var info = document.getElementById('info') ;
    if (status==1) {
        info.classList.add('show_info') ;
        document.getElementById('info_title').innerHTML = id_name ;
    }
    else {
        info.style.height = 0 ;
        info.classList.remove('show_info') ;
    }
}

function fadeOut( status ) {
    var title = document.getElementById('title') ;
    var favorite = document.getElementById('favorite') ;
    if(status==1) {
        title.classList.add('fadeUp') ;
        favorite.classList.add('fadeDown') ;
    }
    else {
        title.classList.remove('fadeUp') ;
        favorite.classList.remove('fadeDown') ;
    }

}

pic = document.getElementsByClassName('pic') ;
for(let i of pic) {
    i.onclick = ( )=> { 
        move_img_block( 1 ) ;
        show_pic( 1, i , show_info ) ;
        fadeOut(1) ;
        show_info( 1, i.getAttribute('id') ) ;
    } ;
}
arrow = document.getElementById('arrow') ;
arrow.onclick = ()=>{
    show_info(2) ;
    fadeOut(2) ;
    move_img_block(2) ;
    show_pic( 2, arrow , show_info ) ;
}
