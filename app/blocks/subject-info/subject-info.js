// window.document.ready(function () {
	global.$(window.document)
		.one('focus.autoExpand', 'textarea.autoExpand', function(){
			// debugger;
			var savedValue = this.value;
			this.value = '';
			this.baseScrollHeight = this.scrollHeight;
			console.log('baseScrollHeight:' + this.baseScrollHeight);
			this.value = savedValue;
		})
		.on('input.autoExpand', 'textarea.autoExpand', function(){
			var minRows = this.getAttribute('data-min-rows')|0, rows;
			this.rows = minRows;
			console.log('Rows:' + this.rows);
			console.log('scrollHeight:' + this.scrollHeight);
			rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 60);
			console.log(rows);
			this.rows = minRows + rows;
		});
// });
