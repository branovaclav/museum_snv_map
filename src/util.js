module.exports = {
	thumbnailize: path => path.replace(/^(.*)\.([^.]+)$/, '$1_thumbnail.$2'),
	filenamize: path => path.replace(/^(.*)[\/\\](.*)\.([^.]+)$/, '$2.$3')
}
