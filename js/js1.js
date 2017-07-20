

//$("#dianji").click(function(){
//	   $("#ul_ul").slideDown()	   	 
//})
//$("#ul_ul li").click(function(){	
//	$(".input1").val($(this).text())
//	$("#ul_ul").hide()
//})


$("#dianji").click(function(){
	   $("#ul_ul").slideDown()	   	 
})
$("#ul_ul li").mouseover(function(){
	   $(this).css("backgroundColor","gray")
	    $(this).siblings().css("backgroundColor","white")
		$("#ul_ul li").click(function(){	
		$(".input1").val($(this).text())
		$("#ul_ul").hide()
	})
	
})


$("#dianji2").click(function(){
	$("#ul_ul2").slideDown()
})

$("#ul_ul2 li").mouseover(function(){
	   $(this).css("backgroundColor","gray")
	    $(this).siblings().css("backgroundColor","white")
		$("#ul_ul2 li").click(function(){	
		 $(".input2").val($(this).text())
	 	$("#ul_ul2").hide()
})
})
