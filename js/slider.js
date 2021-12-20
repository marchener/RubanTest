$('.imgs').on('click',function(){
    let s = $('#'+this.id).attr('src');
    $('#max-img').attr('src',s);
    $('.imgs').removeClass('active')
    $('#'+this.id).addClass("active");
 });