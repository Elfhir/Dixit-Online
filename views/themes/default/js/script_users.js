//Système d'onglet pour le profil Joueur
function changeOnglet(i){
	var j;
	for (j=1; j<5; j++){
		document.getElementById('account'+j).style.display = 'none';
	}
	document.getElementById('account'+i).style.display = 'block';
}

//Pop-up  
var popupStatus = 0;

function loadPopup(){   
	if(popupStatus==0){  
		
		$("#backgroundPopup").css({  
				"opacity": "0.7"  
		});  
		$("#backgroundPopup").fadeIn("slow");  
		$("#popup").fadeIn("slow");  
		popupStatus = 1;  
	}  
} 

function disablePopup(){  
	if(popupStatus==1){  
		$("#backgroundPopup").fadeOut("slow");  
		$("#popup").fadeOut("slow");  
		popupStatus = 0;  
	}  
} 

function centerPopup(){ 
	
	var windowWidth = document.documentElement.clientWidth;  
	var windowHeight = document.documentElement.clientHeight;  
	var popupHeight = $("#popup").height();  
	var popupWidth = $("#popup").width();  

	$("#popup").css({  
			"position": "absolute",  
			"top": windowHeight/2-popupHeight/2,  
			"left": windowWidth/2-popupWidth/2  
	});   
	 
	$("#backgroundPopup").css({  	/*IE6*/
			"height": windowHeight  
	});  
} 
 
$(document).ready(function(){ 
	
	//Affichage des messages Flash dans la bannière rouge en haut de l'écran
	$('#flash').slideDown(800);
		setTimeout(function(){
			$('#flash').slideUp(800);
		}, 5000);
	
	//Pop-up
	$("#popupButton").click(function(){  /*Show popup*/
		centerPopup();    
		loadPopup();   
	});
	$("#popupClose").click(function(){  /*Click the x*/
		disablePopup();  
	});  
	$("#backgroundPopup").click(function(){  /*Click out event*/
		disablePopup();  
	});  
	$(document).keypress(function(e){  
		if(e.keyCode==27 && popupStatus==1){  /* Press escape event*/
			disablePopup();  
		}  
	});
	//A laisser en tout dernier parce qu'empeche la suite du script je sais pas encore pourquoi --'
	changeOnglet('1');
});