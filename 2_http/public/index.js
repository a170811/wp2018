

$(document).ready(function() {  
    $("#list_all button").click(function(event) {
        event.preventDefault();//取消reload
        
        $.get('/list_all',function(data, status){
            $("#list_all .item3>div").html(data);
        });
        $("#list_all .item3>div").html('<h2>loading</h2>');
    })  
})
$(document).ready(function() {  
    $("#search_name button").click(function(event) {
        event.preventDefault();//取消reload
        
        $.post('/search_name',{
            id : $('#search_name input').val(),
        },
        function(data, status){
            $("#search_name .item3>div").html(data);
        });
        $("#search_name .item3>div").html('<h2>loading</h2>');
    })  
})
$(document).ready(function() {  
    $("#add_person button").click(function(event) {
        event.preventDefault();//取消reload
        
        $.post('/add_person',{
            id : $("#add_person input[name='id']").val(),
            name : $("#add_person input[name='name']").val(),
        },
        function(data, status){
            $("#add_person .item3>div").html(data);
        });
        $("#add_person .item3>div").html('<h2>loading</h2>');
    })  
})
$(document).ready(function() {  
    $("#delete_data button").click(function(event) {
        event.preventDefault();//取消reload
        
        $.post('/delete_data',{
            id : $("#delete_data input").val(),
        },
        function(data, status){
            $("#delete_data .item3>div").html(data);
        });
        $("#delete_data .item3>div").html('<h2>loading</h2>');
    })  
})
