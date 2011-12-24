var activatefun = function(i) { return function() {
	// change class
	var pictures = $("#picturepane .picture");
	var previews = $(".preview"); // TODO: why cna't I make this $picturepane.preview ???
	
	if ($(pictures[i]).hasClass("active")) {return false;}
	
	pictures.removeClass("active");
	previews.removeClass("active");
	$(previews[i]).addClass("active");
	
	$('#caption').css("visibility", "hidden");
	
	// Actually scroll window.
	// Offset x so as to center it.
	var picturexoff = $("#slidegallery").width()/2 - $(pictures[i]).width()/2;
	$('#picturepane').stop().scrollTo( $(pictures[i]), 800, {
		offset: {left: -picturexoff},
		onAfter: function(){
			$(pictures[i]).addClass("active");
			$('#caption').html( $("#picturepane .active > .caption").html() ).css("visibility", "visible");
		}
	} );
	var previewxoff = $("#slidegallery").width()/2 - $(previews[i]).width()/2;
	$('#previewpane').stop().scrollTo( $(previews[i]), 800, {offset: {left: -previewxoff}} );
	return true;
};};

jQuery(function($){
	var pictures=$("#slidegallery .picture");
	var previews=$("#slidegallery .preview");
	for (var i=0; i<pictures.length; i++) {
		$(pictures[i]).click( activatefun(i) );
		$(previews[i]).click( activatefun(i) );
	}
	activatefun(0)();
});

// vi: set ts=4 sw=4 expandtab!
