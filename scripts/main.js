window.laod=function(){
    window.mouseover=function(event){
    	var e=event || window.event;
	alert("x:"+e.pageX+" "+"y:"+e.pageY);
    }
}
