
//will delete
function Cursor_pos() {
    var x = event.clientX ;
    var y = event.clientY ;
    return [ x, y]
}

function move_img_block() {

    var block = document.getElementById('show_img') ;
    block.classList.add('move_img_block') ;

}

function show_pic( element , callback ) {

    var img = document.getElementById('show_img') ;
    var rect = element.getBoundingClientRect() ;
    img.style.position = 'absolute' ;
    img.style.zIndex = '2' ;
    var pos = [ rect.top , rect.left , (rect.right-rect.left) , (rect.bottom-rect.top) ]
    document.documentElement.style.setProperty('--top' , pos[0]) ;
    document.documentElement.style.setProperty('--left' , pos[1]) ;
    document.documentElement.style.setProperty('--width' , pos[2]) ;
    document.documentElement.style.setProperty('--height' , pos[3]) ;
    img.childNodes[1].classList.add('show_pic') ;

    if (typeof callback == 'function') {
        callback() ;
    }
}

function show_info() {

    var info = document.getElementById('info') ;
    info.classList.add('show_info') ;
}

function fadeOut() {
    var favorite = document.getElementById('title') ;
    favorite.classList.add('fadeUp') ;
    var favorite = document.getElementById('favorite') ;
    favorite.classList.add('fadeDown') ;

}

pic = document.getElementsByClassName('pic') ;
for(let i of pic) {
    //console.log(i.getAttribute('id')) ;
    i.onclick = ( )=> { 
        move_img_block() ;
        show_pic( i , show_info ) ;
        fadeOut() ;
        show_info() ;
    } ;
}
