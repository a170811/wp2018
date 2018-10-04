function content(status){
    var title = $('#title') ;
    var gallery = $('#gallery') ;
    var move = 40 ;
    if(status==1) {
        title.animate({margin:`-=${move}px auto +=${move}px auto`, opacity:'0'}, 600) ;
        gallery.animate({marginTop:`${2*move}px`,opacity:'0'}, 600) ;
    }
    else {
        title.stop();
        gallery.stop();
        title.css({'margin':'3vh auto', 'opacity':'1'}) ;
        gallery.css({'marginTop':'0', 'opacity':'1'}) ;
    }
}


function img_enlarge(status, element){
    var offset = $('#container').offset();
    var j_ele = $(element);
    var info = $('#info') ;
    var info_container = $('#info_container')
    if(status==1) {
        var top = `${j_ele.offset().top-offset.top}px`;
        var left = `${j_ele.offset().left-offset.left}px`;
        var width = `${j_ele.width()}px`;
        var height = `${j_ele.height()}px`;
        var id = element.getAttribute('id');
        info_container.css({ 'display':'block' });
        $('#info_title').html(id) ;
        info_container.css({ 'top':top });

        if( $('#show_img').length == 0 ) {
        
            var div = $(`<div id='show_img' class='c_border' style='
                position:absolute;
                top:0px;
                left:${left};
                width:${width};
                height:${height};
                '></div>`).appendTo('#info_container'); 
            div.css({'background-image':`url('./src/${id}.JPG')`, 'background-size':'cover' });
            $('#arrow').appendTo('#show_img') ;
        
        }
        //pic and container
        info_container.animate({ top:'0px' }, 500 , 'easeInOutCubic');
        div.animate({top:'0px', width:'100%', left:'0px', height:'30vh'}, 500 ,'easeInOutCubic');
        
        //info block
        info.animate({top:'25vh'}, 400 , 'easeInOutQuart');
    }
    else {
        
        $('#arrow').appendTo(info_container) ;
        info_container.animate({top:'-300px', opacity:'0'}, 500, function(){
            $('#show_img').remove();
            this.style.opacity = 1;
            info_container.css({ 'display':'none' });
        });
        
    }
}


$(document).ready(()=>{
    $('.pic').click(function(){
        content(1);
        img_enlarge(1, this);
    });
    $('#arrow').click(function(){
        content(2);
        img_enlarge(2);
    });
});

