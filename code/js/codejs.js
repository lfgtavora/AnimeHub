var dontpad = {
	
	TIME_TO_SAVE: 2000, //two seconds

	$text: null,
	changed: false,
    

	load: function() {
		dontpad.$text = $('#editor');
		dontpad.enableAutoSaveOrUpdate();
		dontpad.setOnChangeTextEvent();		
	},
	
	
	
	saveOrUpdate: function() {
		if (dontpad.changed) {
			this.save();
		} else {
			this.update();
		}
	},
	
	update: function(){
		$.ajax({
			data: {lastUpdate:$('#lastUpdate').val()},
			url: document.location + '.body.json',
	        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
	        dataType: 'json',
	        type: "GET",
	        success: function(result){
		        	if (result && result.changed) {
		        		dontpad.$text.val(result.body);
		        		$('#lastUpdate').val(result.lastUpdate);
		        	}
	        },
	        error: function() {
	        }
		});
	},
	
	save: function() {
		if (dontpad.changed) {
			dontpad.changed = false;			
			$.ajax({
				data: {text:dontpad.$text.val()},
				url: document.location,
		        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
		        type: "POST",
		        dataType: 'json',
		        success: function(result) {
		        	$('#lastUpdate').val(result);
		        }
			});
		}
	},
	
	enableAutoSaveOrUpdate: function(){
		window.setInterval(function() { dontpad.saveOrUpdate(); }, this.TIME_TO_SAVE);
	},
	
	setOnChangeTextEvent:function (){
		this.$text.keydown(function(){
			dontpad.changed = true;
		});
		this.$text.change(function(){
			dontpad.changed = true;
		});		
		this.$text.on('paste', function(){
			dontpad.changed = true;
		});
	},
	

	
	
};


$(document).ready(function () {
    
        dontpad.load();	
    
});
