$( document ).ready(function() {
	$('#slider').nivoSlider({
		effect: 'random',
		slices: 15,
		boxCols: 10,
		boxRows: 4,
		animSpeed: 500,
		pauseTime: 3000				
	});
	$('#slider1').nivoSlider({
		effect: 'random',
        slices: 15,
        boxCols: 10,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000     	
	});	
	$('#slider2').nivoSlider({
		effect: 'random',
        slices: 15,
        boxCols: 10,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000     	
	});			
});
$(function(){
	$(".page-scroll").click(function(){
		$(this).addClass("active");
		$(".page-scroll").removeClass("active");
	})
})
//Modal
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
var modal1_a = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal2_a = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal3_a = document.getElementById('myModal3');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn1_a = document.getElementById("myBtn1_a");
var btn2 = document.getElementById("myBtn2");
var btn2_a = document.getElementById("myBtn2_a");
var btn3 = document.getElementById("myBtn3");
var btn3_a = document.getElementById("myBtn3_a");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn1_a.onclick = function() {
    modal1_a.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn2_a.onclick = function() {
    modal2_a.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn3_a.onclick = function() {
    modal3_a.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal1_a || event.target == modal2_a || event.target == modal3_a) {
        modal.style.display = "none";
        modal1.style.display = "none";
        modal1_a.style.display = "none";       
        modal2.style.display = "none";
        modal2_a.style.display = "none";        
        modal3.style.display = "none";
        modal3_a.style.display = "none";
    }
}
