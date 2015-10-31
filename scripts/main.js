window.laod=function(){
    window.mouseover=function(event){
    	var e=event || window.event;
	alert("x:"+e.pageX+" "+"y:"+e.pageY);
    }
    window.mousedown=function(evet){
    	var e=event | window.event;
	alert(e.x+" "+e.y);
    }
	
}
function whichPic(){
	for(var i=0;i<photos.length;i++){
	   var pic=document.getElemetById('photo-'+i+'.jpg');
		alert(pic.getAtrribut('id'));
	}
}
