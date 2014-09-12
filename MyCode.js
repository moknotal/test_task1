$(document).ready(function() {
	$(".menu li").hover(function() {

		$(this).children('div').stop(false, true).fadeIn(300);

	}, function() {

		$(this).children('div').stop(false, true).fadeOut(300);

	});
$( ".city p" ).click(function() {
				console.log(1);
	if ($('#more_shops').is(":hidden")) 
	{
		$( "#more_shops" ).slideDown( 'slow');
		$(".city p").css({  position:"absolute", bottom:"0px" });

	}
	else
	{

		$( "#more_shops" ).slideUp('slow');
		$(".city p").css({  position:"absolute", bottom:"0px", padding:"20px 0"});
	}

  
  return false;
  console.log('ura')

});
});