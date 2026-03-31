$(document).ready(function () {
    $('.has-submenu').on('click', 'a.icon', function (e) {
        e.preventDefault();
        var that = $(this);
        that.closest('.has-submenu').toggleClass('open', 500);
    });
    $('#navigation').on("click", function(e) {
    	$('.left-nav').animate({width:'toggle'},350);
        $('.left-nav ul').toggleClass('show');
    });
    $('.left-nav').on('click', function(e) {
    	//console.log($(e.target).attr('class'));
    	if($(e.target).attr('class')!='show' && $(e.target).attr('class').indexOf('side-item')<=0) {
	    	$('.left-nav').hide();
	    	$('.left-nav ul').toggleClass('show');
    	}
    });
});
