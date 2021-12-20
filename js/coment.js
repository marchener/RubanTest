$.getJSON('js/data.json', function(data){
    $('.button-1').on('click',function(){
    var output = '<ul class="start">';
    $.each(data, function(key,val){ 
        output +='<li>'
        output +='<h3 class="name-client">'+ val.name +'</h3>';
        output +='<span class="small-gray">' + val.smallgray + '</span>';
        output += '<p class="client-content-1">' + val.clientcontent + '</p>';
    });
    output +='</ul>';
    $('#update').height('1000px');
    $('#update').append(output);
});
});
