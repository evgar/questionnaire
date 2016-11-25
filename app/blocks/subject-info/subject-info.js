global.$(window.document)
	.one('focus', 'textarea#infoText', function(){
		const savedValue = this.value;
		this.value = '';
		this.baseScrollHeight = this.scrollHeight;
		this.value = savedValue;
	})
	.on('input', 'textarea#infoText', function(){
		const minRows = this.getAttribute('data-min-rows')|0;
		let rows;
		this.rows = minRows;
		rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 60);
		this.rows = minRows + rows;
	});
