import $ from 'jquery'
import util from './util'
import './styles/admin.scss'

let Tabs = class {
	constructor () {
		this.el = {
			tabs: $('.tabs .tab'),
			panels: $('.panels .panel')
		};

		this.el.tabs.on('click', evt => { evt.preventDefault(); this.toggle( $(evt.target) ); })
	}

	toggle (tab) {
		this.el.tabs.removeClass('selected').filter(tab).addClass('selected');
		this.el.panels.hide().filter( tab.attr('href') ).show();
	}
};

let Collection = class {
	constructor () {
		this.collection = this.constructor.name.toLowerCase()

		this.el = {
			form: $(`#${ this.collection } .form`),
			uploader: $(`#${ this.collection } .uploader`),
			gallery: $(`#${ this.collection } .gallery`),
			btn: {
				create: $(`#${ this.collection } .create`),
				edit: $(`#${ this.collection } .edit`),
				delete: $(`#${ this.collection } .delete`),

				cancel: $(`#${ this.collection } .cancel`),
				submit: $(`#${ this.collection } .submit`),

				upload: $(`#${ this.collection } .upload`),
			}
		}

		this.el.btn.upload.on('click', () => this.upload())
		this.el.gallery.on('click', '.erase', event => { if (window.confirm('Zmazať obrázok?')) this.erase($(event.target).data('filename'), $(event.target).closest('tr')) })
	}

	uploader (show) {
		this.el.uploader.toggle(show ? true : false)
	}

	gallery (filelist, filedata) {
		const tbody = this.el.gallery.find('tbody').empty()
		const template = this.el.gallery.find('.template')

		this.el.gallery.toggle(filelist && filelist.length ? true : false)
		if (!filelist)
			return

		filelist.forEach(file => {
			let filename = util.filenamize(file)
			let data = filedata && filedata[ filename ]

			let row = template.clone().removeClass('template')
			row.find('img').attr({ src: util.thumbnailize(file) });
			row.find('.erase').data({ filename });
			['sk', 'en'].forEach(lang => row.find(`[name=filedesc_${ lang }]`).val(data && data.description[ lang ]).data({ filename, lang }))
			tbody.append(row)
		})
	}

	send (action, id = this.el.form.find('[name=id]').val()) {
		let method = (action == 'submit') ? (id.length ? 'put' : 'post') : 'delete'
		let data = (action == 'submit') ? this.structurize(this.el.form.prop('elements'), this.el.gallery.find('tbody tr [name*=filedesc]')) : null

		fetch(`/admin/${ this.collection }`, {
			method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id, data })
		})
		.then(res => res.ok ? window.location.reload() : console.error('Error: ', `${ this.collection }/${ method }`))
		.catch(err => console.error('Error: ', err));
	}

	upload () {
		let files = this.el.uploader.find('[name=files]').prop('files')
		if (files.length == 0)
			return;

		let data = new FormData()
		for (let i = 0; i < files.length; i++)
			data.append(`files`, files[i])

		fetch(`/admin/upload/${ this.el.uid.val() }`, {
			method: 'post',
			body: data
		})
		.then(res => res.ok ? window.location.reload() : console.error('Error: ', `${ this.collection }/upload`))
		.catch(err => console.error('Error: ', err));
	}

	erase (filename, row) {
		fetch(`/admin/erase/${ this.el.uid.val() }/${ filename }`, { method: 'delete' })
		.then(res => res.ok ? row.remove() : console.error('Error: ', `${ this.collection }/erase`))
		.catch(err => console.error('Error: ', err));
	}

	structurize (fields, filedescs) {
		let result = {
			title: {
				sk: fields.title_sk.value,
				en: fields.title_en.value
			},
			description: {
				sk: fields.description_sk.value,
				en: fields.description_en.value
			},
			map: fields.map.value,
			region: fields.region.value,
		};
		if (fields.position && fields.label)
			Object.assign(result, {
				position: {
					left: fields.position.value.split(',')[0],
					top: fields.position.value.split(',')[1] || ''
				},
				label: fields.label.value
			});

		if (filedescs.length) {
			let filedata = {}
			filedescs.each((i, filedesc) => {
				if (filedesc.value) {
					let filename = $(filedesc).data('filename')
					let lang = $(filedesc).data('lang')

					if (filedata[ filename ] == undefined)
						filedata[ filename ] = { description: {} }
					filedata[ filename ].description[ lang ] = filedesc.value
				}
			})
			Object.assign(result, { filedata })
		}

		return result;
	}
}

let Articles = class extends Collection {
	constructor () {
		super()

		Object.assign(this.el, {
			maps: $('#articles .maps a'),
			regions: $('#articles .regions a'),
			uid: $('#articles [name=region]')
		});

		this.el.maps.add(this.el.regions).on('click', evt => this.toggle( $(evt.target) ))
			.filter(this.el.maps.first().add(this.el.regions.first())).click();

		this.el.btn.submit.on('click', () => this.send('submit'));
	}

	toggle (link) {
		let type = link.is(this.el.maps) ? 'map' : 'region';
		let fields = this.el.form.prop('elements');
		fields[type].value = link.data(type);

		let article = data.articles.find(article => article.map == fields.map.value && article.region == fields.region.value);

		fields.id.value = article ? article.$loki : '';
		['title_sk', 'title_en', 'description_sk', 'description_en'].forEach(field => fields[field].value = article ? article[field.split('_')[0]][field.split('_')[1]] : '');

		this.el[`${ type }s`].removeClass('selected').filter(link).addClass('selected');

		let show = (this.el.uid.val() !== 'all') && $('#articles [name=map]').val() == 'all'
		this.uploader(show && article)
		this.gallery(show && article && data.regions[ this.el.uid.val() ].filelist, article && article.filedata)
	}
};

let Pois = class extends Collection {
	constructor() {
		super()

		Object.assign(this.el, {
			pois: $('#pois .pois'),
			uid: $('#pois [name=id]')
		});

		this.el.btn.create.add(this.el.btn.edit).on('click', evt => this.toggle( $(evt.target).data('id') ));
		this.el.btn.cancel.on('click', () => { this.el.pois.show(); this.el.form.parent().hide() });

		this.el.btn.submit.on('click', () => this.send('submit'));
		this.el.btn.delete.on('click', () => { if (window.confirm('Zmazať bod záujmu?')) this.send('delete', $(event.target).data('id')) });
	}

	toggle (id) {
		this.el.pois.hide()
		this.el.form.parent().show();
		let fields = this.el.form.prop('elements');

		let poi = data.pois.find(poi => poi.$loki == id);
		fields.id.value = poi ? poi.$loki : '';
		['map', 'region', 'label'].forEach(field => fields[field].value = poi ? poi[field] : fields[field].options[0].value);
		['title_sk', 'title_en', 'description_sk', 'description_en'].forEach(field => fields[field].value = poi ? poi[field.split('_')[0]][field.split('_')[1]] : '');
		fields.position.value = poi && poi.position.left ? `${ poi.position.left },${ poi.position.top }` : '';
		this.gallery(poi && poi.filelist, poi && poi.filedata)
		this.uploader(this.el.uid.val())
	}
}

let Picker = class {
	constructor () {
		const form = $('#pois .form')
		this.el = {
			region: form.find('[name=region]'),
			map: form.find('[name=map]'),
			position: form.find('[name=position]'),
			picker: form.find('.picker'),
		};

		this.el.position.on('focus blur', event => this.toggle(event.type == 'focus'))
		this.el.picker.on('mousedown', event => this.point({ top: event.originalEvent.pageY, left: event.originalEvent.pageX }))
	}

	toggle (show) {
		if (show && this.el.region.val() && this.el.map.val()) {
			this.el.picker.html(`<img src="/images/maps/${ this.el.map.val() }/${ this.el.region.val() }@1x.png" />`).show()
			window.setTimeout(() => {
				const region = this.el.region.find(':selected').data()
				const coords = this.el.position.val().split(',')
				if (coords.length == 2) {
					const position = {
						left: this.el.picker.width() * (coords[0] - region.left) / region.width,
						top: this.el.picker.height() * (coords[1] - region.top) / region.height
					}
					$('<div class="pointer"></div>').css({ left: `${ position.left }px`, top: `${ position.top }px` }).appendTo(this.el.picker)
				}					
			}, 0.1 * 1000);
		}
		else
			this.el.picker.hide()
	}

	point ({ top, left }) {
		const region = this.el.region.find(':selected').data()
		const position = {
			left: region.left + region.width * (left - this.el.picker.offset().left) / this.el.picker.width(),
			top: region.top + region.height * (top - this.el.picker.offset().top) / this.el.picker.height()
		}
		this.el.position.val(`${ Math.round(position.left * 10) / 10 },${ Math.round(position.top * 10) / 10 }`)
	}
};

$(window).on('load', () => {
	new Tabs();
	new Articles();
	new Pois();
	new Picker();
});
