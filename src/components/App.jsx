import React from 'react';
import Transition from 'react-addons-css-transition-group';

import { Titlebar, Content } from './Common'
import { Map, Image, Regions, Pois, PoiLabels, RegionLabels } from './Map'
import { Sidebar, ArticleHeadline, ArticleDescription, RegionList, MapList, Thumbnails } from './Sidebar'
import { Detail, PoiHeadline, PoiDescription, RegionHeadline, Actions, Gallery } from './Detail'
import { Toolbar, Back } from './Toolbar'
import { Legend, About, DialogHeadline, AboutLogos, AboutDescription, AboutFooter } from './Dialog'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			region: null,
			map: null,
			poi: null,
			image: null,
			view: {},
			lang: 'sk'
		}
		this.pois = {}
		this.views = {}
	}

	calculateView(elem, region) {
		const viewportPadding = 40
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
			this.views.all = {
				scale: null,
				origin: null,
				scroll: {
					left: elem.offsetLeft - viewport.left - (viewport.width - elem.offsetWidth) / 2,
					top: elem.offsetTop - viewport.top - (viewport.height - elem.offsetHeight) / 2
				}
			}
		}
	}

	updatePois() {
		this.pois = {}
		Object.keys(data.pois).forEach(poi => {
			const point = data.pois[ poi ]
			if (point.region == this.state.region && point.map == this.state.map)
				this.pois[ poi ] = point
		});
		this.setPoi(null)
	}

	setRegion(region) {
		const view = this.views[region || 'all']
		this.setState({ region, view }, this.updatePois)
	}

	setMap(map) {
		this.setState({ map }, this.updatePois)
	}

	setPoi(poi) {
		this.setState({ poi })
		if (this.state.image)
			this.setImage(this.pois[ poi ].filelist[ 0 ])
	}

	setImage(image, reset) {
		if (reset)
			this.setPoi(null)
		this.setState({ image })
	}

	handleHomeClick() {
		this.setMap(null)
		this.setRegion(null)
	}

	componentDidMount() {
		window.setTimeout(() => this.setRegion(null), 1);
	}

    render() {
		const anim = {
			name: { enter: 'hidden', leave: 'hidden' },
			enter: .005 * 1000, leave: .33 * 1000
		}

		let { region, map, poi, image, view, legend, about, lang } = this.state

		let article = data.articles[ region || 'all' ][ map || 'all' ]
		if (article.title[ lang ].length == 0 && article.description[ lang ].length == 0)
			article = data.articles[ region ].all;

        return (
			<div id="app">
				<Map view={ view } onRender={ this.calculateView.bind(this) }>
					<Image region={ region } map={ map } anim={ anim } />
					<Regions region={ region } view={ view } onRender={ this.calculateView.bind(this) } onClick={ region => this.setRegion(region) } />
					<Pois pois={ this.pois } poi={ poi } scale={ view.scale ? view.scale : 1 } onClick={ poi => this.setPoi(poi) } anim={ anim } />
					<RegionLabels regions={ data.regions } region={ region } lang={ lang } anim={ anim } />
					<PoiLabels pois={ this.pois } poi={ poi } scale={ view.scale ? view.scale : 1 } lang={ lang } anim={ anim } />
				</Map>

				<Transition transitionName={ anim.name } transitionEnterTimeout={ anim.enter } transitionLeaveTimeout={ anim.leave }>
					{ !image &&
						<Sidebar key="sidebar">
							<Titlebar>
								<ArticleHeadline title={ article.title } subtitle={ data.maps[ map || 'all' ].type } map={ map } lang={ lang } />
							</Titlebar>
							<Content>
								<ArticleDescription text={ article.description } lang={ lang } />
								{ region ?
									<div>
										<Thumbnails images={ data.regions[ region ].filelist.slice(0, 6) } onClick={ this.setImage.bind(this) } />
										<MapList maps={ data.maps } map={ map } onClick={ map => this.setMap(map) } lang={ lang } />
									</div> :
									<RegionList regions={ data.regions } onClick={ region => this.setRegion(region) } lang={ lang } />
								}
							</Content>
							<Toolbar onHomeClick={ this.handleHomeClick.bind(this) } onLegendClick = { () => this.setState({ legend: !legend }) } onAboutClick = { () => this.setState({ about: true }) } onLangClick={ lang => this.setState({ lang }) } lang={ lang } />
						</Sidebar>
					}
					{ region && !image &&
						<Back onClick={ this.handleHomeClick.bind(this) } />
					}
					{ (poi || (region && image)) &&
						<Detail key="detail" maximized={ image ? true : false }>
							<Titlebar>
								{ poi ?
									<PoiHeadline title={ data.pois[ poi ].title } map={ data.pois[ poi ].map } lang={ lang } /> :
									<RegionHeadline title={ data.regions[ region ].title } map={ map } lang={ lang } />
								}
								<Actions pois={ Object.keys(this.pois) } poi={ poi } onNextClick={ this.setPoi.bind(this) } onCloseClick={ () => image ? this.setImage(null) : this.setPoi(null) } />
							</Titlebar>
							<Content>
								{ poi &&
									<PoiDescription text={ data.pois[ poi ].description } lang={ lang } />
								}
								<Gallery images={ poi ? data.pois[ poi ].filelist : data.regions[ region ].filelist } image={ image } texts={ poi ? data.pois[ poi ].filedata : data.articles[ region ].all.filedata } onClick={ this.setImage.bind(this) } lang={ lang } anim={ anim } />
							</Content>
						</Detail>
					}
					{ legend && !(poi || image) &&
						<Legend labels={ data.legend[ Object.keys(data.legend).find(key => key.indexOf(map || 'all') >= 0) ] } lang={ lang } />
					}
				</Transition>

				{ about &&
					<About>
						<Titlebar>
							<DialogHeadline title={ data.about.title } lang={ lang } />
							<Actions onCloseClick={ () => this.setState({ about: false }) } />
						</Titlebar>
						<Content>
							<AboutLogos />
							<AboutDescription content={ data.about.content } lang={ lang } />
							<AboutFooter text={ data.about.footer } lang={ lang } />
						</Content>
					</About>
				}
			</div>
        )
    }
}
