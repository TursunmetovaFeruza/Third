var images=[];
images=[
 '../Second/style/img/Minus.png',
 '../Second/style/img/Plus.png'
];
	document.opcl.src=images[0];
var a=document.opcl.src;
console.log(a);
$('.open').on('click','#opcl', function(){
	if(document.opcl.src===a){
		$( ".top-bar" ).slideToggle( "slow" );
		document.opcl.src=images[1];
		document.getElementById('op-img').style.height = "11px";
		
	}
	else{
		$( ".top-bar" ).slideToggle( "slow" );
		document.opcl.src=images[0];
		document.getElementById('op-img').style.height = "1px";
		
	}
 	return false;
});
 