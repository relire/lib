
function querystring(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r.push(m[1]);
   return r;
}

$(function(){
var p_idx = 0;
var first_idx = 2; // == $first_idx de ql.php et permet de sauter les <p> du début

var max_idx = $('p').size() - first_idx;
	if(location.search != "") {
	 	// récupère l'index du paragraphe à afficher
		p_idx =	 querystring('p')*1 ;
		p_idx =	max_idx - (p_idx -1); // car on commence pas à 0 l'idx mais les <p> commencent à [0]
		// récupère le scrollTop (position)
		p_v = $('p:eq('+p_idx+')');
		p_st = p_v.offset().top;
	
		// descend jusqu'à sa position après un temps (chargement)
        	var h = setTimeout("jQuery('html, body').animate({scrollTop: p_st}, 1000);", 1000);


	}
});

