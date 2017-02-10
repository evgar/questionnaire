var textArea = $('.textfield');

$(window.document)
	.on('ready', function () {
		textArea.val('В CSSSR меня привлекли интересные проекты, возможность изучить новые технологии и опробовать их на практике, то, что у вас отлажена система работы с удаленными сотрудниками, ' +
			'имеются исчерпывающие инструкции и сборщик проектов.');
		textArea.attr('rows', '7');
	})
	.on('focus', '.textfield', function(){
		textArea.val('');
		textArea.attr('rows', '3');
		this.baseScrollHeight = this.scrollHeight;
	})
	.on('input', '.textfield', function(){
		const minRows = this.getAttribute('data-min-rows')|0;
		let rows;
		this.rows = minRows;
		rows = Math.ceil((this.scrollHeight - this.baseScrollHeight)/60);
		this.rows = minRows + rows;
	});
