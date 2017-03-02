	var conti =  0;
	function mpSetLoading(pIncrease)
	{
		conti += pIncrease;
		console.log(conti+'%');
	}
	$(document)
	 $(window).on("load", function()
	 {
	 	$('#loader-block').css('display', 'none');
	 	$('#nav-container').css('display', 'block');
	 	$('#0').css('display', 'block');
	 });