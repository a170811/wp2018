function content(status){
    var title = $('#title') ;
    var gallery = $('#gallery') ;
    var move = 20 ;
    if(status==1) {
        title.animate({margin:`-=${move}px auto +=${move}px auto`, opacity:'0'}, 800) ;
        gallery.animate({marginTop:`${2*move}px`,opacity:'0'}, 800) ;
    }
    else {
        title.animate({marginTop:'0px', display:'block'}, 300) ;
        gallery.animate({paddingTop:'0px', display:'block'}, 300) ;
    }
}


function img_enlarge(status, element){
    var offset = $('#container').offset();
    var j_ele = $(element);
    if(status==1) {
        $('#info_container').css({ 'display':'block' });
        var id = element.getAttribute('id');
        var div = $(`<div id='show_img' class='c_border' style='
            position:absolute;
            top:0px;
            left:${j_ele.offset().left-offset.left}px;
            width:${j_ele.width()}px;
            height:${j_ele.height()}px;
            '></div>`).appendTo('#info_container'); 
        div.css({'background-image':`url('./src/${id}.JPG')`, 'background-size':'cover' });
        var info_container = $('#info_container')
        info_container.css({ 'top':`${j_ele.offset().top-offset.top}px` });


        var info = $('#info') ;
        $('#arrow').appendTo('#show_img') ;
        $('#info_title').html(id) ;

        //pic and container
        info_container.animate({ top:'0px' }, 500 , 'easeInOutCubic');
        div.animate({top:'0px', width:'100%', left:'0px', height:'30vh'}, 500 ,'easeInOutCubic');
        
        //info block
        info.animate({top:'25vh'}, 400 , 'easeInOutQuart');
    }
}


$(document).ready(()=>{
    $('.pic').click(function(){
        content(1);
        img_enlarge(1, this);
    });
});

/*
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
    } ;
}
arrow = document.getElementById('arrow') ;
arrow.onclick = ()=>{
    show_info(2) ;
    fadeOut(2) ;
    move_img_block(2) ;
    show_pic( 2, arrow , show_info ) ;
}
*/
