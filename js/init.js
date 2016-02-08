var fbURL = "https://www.facebook.com/Mezzopane-1540279952936461/";
var twURL = "https://www.facebook.com/Mezzopane-1540279952936461/";
var insURL = "https://www.facebook.com/Mezzopane-1540279952936461/";

$("head").first().append('<script type="application/ld+json">' +
	'{ '+
	  '"@context" : "http://schema.org",' +
	  '"@type" : "LocalBusiness",' +
	  '"name" : "mezzopane",' +
	  '"image" : "http://40.118.247.246/mezzopane/img/mezzopane.png",' +
	  '"telephone" : "23154654654",' +
	  '"address" : {' +
	    '"@type" : "PostalAddress",' +
	    '"streetAddress" : "Filadelfia 128 Col. Nápoles",' +
	    '"addressLocality" : "Ciudad de México"' +
	  '}' +
	'}' +
	'</script>');


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$('.materialboxed').materialbox();
	$('#fbURL').attr('href', fbURL);
	$('#twURL').attr('href', twURL);
	$('#insURL').attr('href', insURL);
  }); // end of document ready

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73301537-1', 'auto');
  ga('send', 'pageview');

})(jQuery); // end of jQuery name space
