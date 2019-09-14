$(document).ready(function(){
var Project= $("#Project").html();
var About= $("#About").html();
var Contact= $("#Contact").html();

$(".About").on("click",function(){
	$(".col-md-9").html(About);
})
$(".Project").on("click",function(){
	$(".col-md-9").html(Project);
})
$(".Contact").on("click",function(){
	$(".col-md-9").html(Contact);
})
})