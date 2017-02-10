$(window.document)
	.on('ready', function () {
		$('#infoText').val('В CSSSR меня привлекли интересные проекты, возможность изучить новые технологии и опробовать их на практике, то, что у вас отлажена система работы с удаленными сотрудниками, ' +
			'имеются исчерпывающие инструкции и сборщик проектов.');
		$('#infoText').attr('rows', '7');
	})
	.on('focus', '#infoText', function(){
		$('#infoText').val('');
		$('#infoText').attr('rows', '3');
		this.baseScrollHeight = this.scrollHeight;
	})
	.on('input', '#infoText', function(){
		const minRows = this.getAttribute('data-min-rows')|0;
		let rows;
		this.rows = minRows;
		rows = Math.ceil((this.scrollHeight - this.baseScrollHeight)/60);
		this.rows = minRows + rows;
	});
