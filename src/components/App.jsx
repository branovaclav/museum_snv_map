import React from 'react';

import { Titlebar, Content } from './Common'
import { Map, Image, Regions, Pois } from './Map'
import { Sidebar, ArticleHeadline, ArticleDescription, RegionList, MapList } from './Sidebar'
import { Detail, PoiHeadline, PoiDescription, Actions, Gallery } from './Detail'
import Toolbar from './Toolbar'

const path = {
	images: '/data/images',
	thumbnails: '/data/images/thumbnails'
}

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			region: null,
			map: null,
			poi: 4,
			image: null,
			view: {},
			lang: 'sk'
		}
		this.views = {}
	}

	getView(elem, region) {
		const viewportPadding = 50
		const viewport = {
			left: viewportPadding,
			top: viewportPadding,
			width: window.innerWidth - 586 - (2 * viewportPadding),
			height: window.innerHeight - (2 * viewportPadding)
		}

		if (region) { //region
			const box = elem.getBBox();
			const scale = Math.min(viewport.width / box.width, viewport.height / box.height)
			const map = document.getElementById('map')

			this.views[region] = {
				scale,
				origin: {
					left: (box.x + box.width / 2) / map.offsetWidth,
					top: (box.y + box.height / 2) / map.offsetHeight
				},
				scroll: {
					left: (map.offsetLeft + box.x) + (1 - scale) * box.width / 2 - viewport.left - (viewport.width - box.width * scale) / 2,
					top: (map.offsetTop + box.y) + (1 - scale) * box.height / 2 - viewport.top - (viewport.height - box.height * scale) / 2,
				}
			}
		}
		else { //map
			this.views.global = {
				scale: null,
				origin: null,
				scroll: {
					left: elem.offsetLeft - viewport.left - (viewport.width - elem.offsetWidth) / 2,
					top: elem.offsetTop - viewport.top - (viewport.height - elem.offsetHeight) / 2
				}
			}
		}
	}

	setRegion(region) {
		const view = this.views[region || 'global']
		this.setState({ region, view })
	}

	setMap(map) {
		this.setState({ map })
	}

	setPoi(poi) {
		this.setState({ poi })
	}

	setImage(image) {
		this.setState({ image })
	}

	handleHomeClick() {
		this.setMap()
		this.setRegion()
		this.setPoi()
	}

	componentDidMount() {
		window.setTimeout(() => this.setRegion(null), 1);
	}

    render() {
		const defaultMapType = { sk: 'FIXME', en: 'FIXME' }
		let { region, map, poi, image, view, lang } = this.state

		let article = data.articles[ region || 'global' ][ map || 'global' ]
		if (article.title[lang].length == 0 && article.description.length == 0)
			article = data.articles[ region ].global;

        return (
			<div id="app">
				<Map view={ view } onRender={ this.getView.bind(this) }>
					<Image region={ region } map={ map } />
					<Regions onRender={ this.getView.bind(this) } onClick={ region => this.setRegion(region) } />
					{// region &&
						<Pois pois={ data.pois } poi={ poi } region={ region } map={ map } scale={ view.scale ? view.scale : 1 } onClick={ poi => this.setPoi(poi) } />
					}
				</Map>

				<Sidebar visible={ image ? false : true }>
					<Titlebar>
						<ArticleHeadline title={ article.title } subtitle={ data.maps[ map ] ? data.maps[ map ].type : defaultMapType } lang={ lang } />
					</Titlebar>
					<Content>
						<ArticleDescription text={ article.description } lang={ lang } />
						{ region ?
							<MapList maps={ data.maps } map={ map } onClick={ map => this.setMap(map) } lang={ lang } /> :
							<RegionList regions={ data.regions } onClick={ region => this.setRegion(region) } lang={ lang } />
						}
					</Content>
					<Toolbar onHomeClick={ this.handleHomeClick.bind(this) } onLangClick={ lang => this.setState({ lang }) } lang={ lang } />
				</Sidebar>

				{ poi &&
					<Detail maximized={ image ? true : false }>
						<Titlebar>
							<PoiHeadline title={ data.pois[ poi ].title } map={ data.pois[ poi ].map } lang={ lang } />
							<Actions onCloseClick={ () => image ? this.setImage() : this.setPoi() } />
						</Titlebar>
						<Content>
							<PoiDescription text={ data.pois[ poi ].description } lang={ lang } />
							<Gallery files={ data.pois[ poi ].files } image={ image } path={ path } onClick={ image => this.setImage(image) } />
						</Content>
					</Detail>
				}
			</div>
        )
    }
}
