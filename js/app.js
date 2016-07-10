$(function(){
	console.log("***** Inside app.js ******");
	$('#login').submit(function(){
		event.preventDefault();
		var newItem =  $.trim($('#item').val());
		console.log("****Input Item*****"+newItem);
		if(newItem){
			console.log("******validitem******");
			addItem(newItem);
		}
		updateCount();
	});

	//toggleclass on double clicking the item
	$('li').on('dblclick', '.itemtext',function(){
		console.log("***** Inside dblclick event ******");
		var item = $(this).parent('li.item');
		if(item.hasClass('label-success')){
			item.removeClass('label-success');
			item.addClass('label-danger');
		}else if (item.hasClass('label-danger')) {
			item.removeClass('label-danger');
			item.addClass('label-success');
		};
		updateCount();
	});

	//delete or remove the items from the list
    $(".close").on("click", function(){
    	$('.text-danger').html('<strong>Note:</strong> Your Item <em><b>'+$(this).siblings('.itemtext').text()+'</b></em> has been removed successfully.');
    	$('.text-success').hide();
    	$(this).parent("li.item").hide("explode");
    	$(this).parent("li.item").remove();
    	updateCount();        	
    });

    //Navigation of items
    $('.nav').on('click','.total', function(){
    	event.stopPropagation();
    	event.preventDefault();
    });

    $('.nav').on('click','.todo', function(){
    	event.stopPropagation();
    	event.preventDefault();
    });

    $('.nav').on('click','.done', function(){
    	event.stopPropagation();
    	event.preventDefault();    	
    });

	function addItem(item){
		/*var newItemElement = $('<li></li>').addClass('label label-success item');
        newItemElement.append($('<span></span>').addClass('itemtext').text(item));
        newItemElement.append($('<span></span>').addClass('close').html(' &times;'));
		$('.totallist > .itembox').append(newItemElement);
		$('.text-success').text('Success: Your Item \"'+item+'\" has been added successfully.');
		setFocus();*/
		var newItem = $(".totallist li.label-success").first().clone(true);
	    newItem.children().first().text(item);
	    console.log(newItem);
	    newItem.appendTo($(".totallist .itembox"));
	    $('.text-danger').hide();
	    $('.text-success').html('<strong>Success:</strong> Your Item <em><b>'+item+'</b></em> has been added successfully.');
	    setFocus();   
	}

	function updateCount(){
		var total = $('.itembox').find('li.item').length;
		var toDo  = $('.itembox').find('li.label-success').length;
		var done  = $('.itembox').find('li.label-danger').length;
		console.log('Total*****ToDo****Done'+ total+"****"+toDo+"*****"+done);
		$('.total').find('span.badge').text(total);
		$('.todo').find('span.badge').text(toDo);
		$('.done').find('span.badge').text(done);
	}

	function setFocus(){
            $('#item').val(' ');
            $('#item').focus();
	}

});