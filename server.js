const express = require('express')
const parser = require('body-parser')
const loki = require('lokijs')
const fs = require('fs-extra')
const path = require('path')
const upload = require('multer')()
const sharp = require('sharp')

const constants = require('./data/const')
const util = require('./src/util')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000;

const root = __dirname
const filebase = path.join('data', 'files')

let data = {};
let lang = 'sk';

const db = new loki('data/db.js', {
	autoload: true,
	autoloadCallback: () => {
		['pois', 'articles'].forEach(collection => {
			let dbcoll = db.getCollection(collection);
			data[collection] = {
				collection: dbcoll,
				all: dbcoll.data
			};
		});
	}
});

const filelists = function () {
	data.pois.all.forEach(poi => { //pois
		try {
			const dir = path.join(filebase, poi.$loki.toString())
			poi.filelist = fs.readdirSync(dir).filter(file => fs.lstatSync(path.join(dir, file)).isFile() && file.indexOf('thumbnail') == -1).map(file => path.join(dir, file))
		}
		catch (err) { poi.filelist = [] }
	});
	for (let region of Object.keys(constants.regions).slice(1)) { //regions
		try {
			const dir = path.join(filebase, region)
			constants.regions[region].filelist = fs.readdirSync(dir).filter(file => fs.lstatSync(path.join(dir, file)).isFile() && file.indexOf('thumbnail') == -1).map(file => path.join(dir, file))
		}
		catch (err) { constants.regions[region].filelist = [] }
	}
}

app.use('/data', express.static( path.join(root, 'data') ));
app.use(express.static( path.join(root, 'src') ));

app.use(parser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(root, 'src', 'views'));

//app
app.get('/data.js', (req, res) => {
	filelists()
	res.render('data.ejs', { pois: data.pois.all, articles: data.articles.all, maps: constants.maps, regions: constants.regions, legend: constants.legend, about: constants.about, settings: constants.settings, lang });
});

//admin
app.get('/admin', (req, res) => {
	filelists()
	res.render('admin.ejs', { pois: data.pois.all, articles: data.articles.all, maps: constants.maps, regions: constants.regions });
});

//admin - file operations
app.post('/admin/upload/:id', upload.array('files'), (req, res) => {
	const dir = path.join(filebase, req.params.id)
	if (!fs.existsSync(dir))
		fs.mkdirSync(dir)

	let results = [];
	req.files.forEach(file => results.push(
		sharp(file.buffer).resize(undefined, constants.settings.photoHeight).jpeg({ quality: 85 }).toFile(path.join(dir, file.originalname)),
		sharp(file.buffer).resize(undefined, constants.settings.thumbnailHeight).jpeg({ quality: 85 }).toFile(path.join(dir, util.thumbnailize(file.originalname)))
	))
	Promise.all(results)
		.then(() => res.sendStatus(200))
		.catch(err => { res.sendStatus(500); console.error('Error: ', err) })
});

app.delete('/admin/erase/:id/:filename', (req, res) => {
	const dir = path.join(filebase, req.params.id)
	fs.removeSync( path.join(dir, req.params.filename) )
	fs.removeSync( path.join(dir, util.thumbnailize(req.params.filename)) )
	res.sendStatus(200)
});

//admin - database operations
app.post('/admin/:collection', (req, res) => {
	let collection = req.params.collection;
	res.send( data[ collection ].collection.insert(req.body.data) );
	db.saveDatabase('db');
});

app.put('/admin/:collection', (req, res) => {
	let collection = req.params.collection;
	let doc = data[ collection ].collection.get(req.body.id);
	Object.assign(doc, req.body.data);
	delete doc.filelist;
	res.send( data[ collection ].collection.update(doc) );
	db.saveDatabase('db');
});

app.delete('/admin/:collection', (req, res) => {
	let collection = req.params.collection;
	res.send( data[ collection ].collection.remove(data[ collection ].collection.get(req.body.id)) );
	db.saveDatabase('db');

	const dir = path.join(filebase, req.body.id.toString())
	fs.removeSync(dir)
});

//server
app.listen(port, host, () => {
	console.log(`Server started on localhost:${ port }`);
	console.log('Press Ctrl+C to exit...');
});


//seed
/*
app.get('/seed', (req, res) => {
	db.removeCollection('pois');
	db.addCollection('pois').insert([
		{
			position: { left: 400, top: 400 },
			title: { sk: 'Nadpis 1', en: 'Headline 1' },
			description: { sk: 'Popis 1', en: 'Description 2'},
			group: 'flora',
			region: 'vt',
			folder: 'vt_001'
		},
		{
			position: { left: 600, top: 600 },
			title: { sk: 'Nadpis 2', en: 'Headline 2' },
			description: { sk: 'Popis 2', en: 'Description 2'},
			group: 'fauna',
			region: 'nt',
			folder: 'nt_001'
		}
	]);

	db.removeCollection('articles');
	db.addCollection('articles').insert([
		{
			title: { sk: 'Fauna Spiša', en: 'Spis Fauna' },
			description: { sk: '', en: '' },
			group: 'fauna',
			region: ''
		},
		{
			title: { sk: 'Chránené územia Vysokých Tatier', en: 'Vysoke Tatry Natural Reserves' },
			description: { sk: '', en: '' },
			group: 'reserves',
			region: 'vysoke_tatry'
		}
	]);

	db.saveDatabase('db');
	res.redirect('/admin')
});
*/

/*
	let abcsort = (a, b) => {
		a = a.title[lang]; b = b.title[lang];
		return a < b ? -1 : (a > b ? 1 : 0);
	};
	data.pois.sorted = data.pois.collection.chain().sort(abcsort).data();
*/
