var mode = "Display";
var count = 1;

$("document").ready(function() {
	
	readyScrollArrows();	
	
	$('.testOption').click(function() {
		var selectedText = $('#dropDownTest option:selected').text();
		alert(selectedText);
    });
		
	$('#viewTypeIcon').click(function() {
		if($(this).hasClass('fa-television')){
			mode = "Display"; 
			$(this).removeClass('fa-television').addClass('fa-pencil-square-o');
			$(this).attr('title','Edit record');
		} else {
			mode = "Edit";
			$(this).removeClass('fa-pencil-square-o').addClass('fa-television');
			$(this).attr('title','Display record');
		}
		$("#info-span").text(mode + " record " + count);
    });	
	$("#info-span").text(mode + " record " + count);	

function readyScrollArrows() {
	$('#arrowLeft').click(function() {
		scrollRecords(this);
    });
	
	$('#arrowRight').click(function() {
		scrollRecords(this);		
    });
}

function scrollRecords(obj) {
	var event = $(obj).attr("id");
	
	if((event === "arrowLeft") && (count > 1)) {
		count--;
	}
	
	if((event === "arrowRight") && (count < 10)) {
		count++;
	}
	if(mode === "Display") {
		
	} else {
		
	}
	$("#info-span").text(mode + " record " + count);
}
	
});