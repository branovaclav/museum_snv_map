import React from 'react';
import ReactDOM from 'react-dom'

import * as maps from './maps'
import * as regions from './regions'

import $ from 'jquery'

const Image = props => (
	<g className="map">
		{ maps[ props.map || 'fauna' ]() }
	</g>
)

class Regions extends React.Component {
	componentDidMount() {
		for (let region in this.refs)
			if (this.refs[region].refs.elem)
				this.props.onRender(this.refs[region].refs.elem, region)
	}

	render() {
		return (
			<g className="regions">
				{ Object.keys(regions).map(region => (
					React.createElement(regions[ region ], { key: region, ref: region, region: region, onClick: () => this.props.onClick(region) })
				))}
			</g>
		)
	}
}

const Pois = props => (
	<g className="pois">
		{ Object.keys(props.pois).map(poi => {
			const transform = `translate(${ props.pois[ poi ].position.left }px, ${ props.pois[ poi ].position.top }px) scale(${ 1 / props.scale })`
			return (
				<g key={ poi } className={ `poi ${ poi == props.poi && 'selected' }` } onClick={ () => props.onClick(poi) } data-map={ props.pois[ poi ].map } style={{ transform }}>
					<circle className="bkg" x="0" y="0" r="35" />
					<circle className="beacon colored stroke" x="0" y="0" r="26" />
					<g className="point colored fill" clipPath="url(#svg-clip)">
						<circle x="0" y="0" r="34" />
						<circle x="0" y="0" r="26" />
					</g>
				</g>
			)
		})}
	</g>
)

class Map extends React.Component {
	componentDidMount() {
		this.props.onRender(this.refs.map)
	}

	componentDidUpdate(prevProps) {
		const view = this.props.view
		if (view != prevProps.view)
			$('body').animate({ scrollLeft: view.scroll.left, scrollTop: view.scroll.top }, .5 * 1000); // window.scrollTo(view.scroll.left, view.scroll.top)
	}

	render() {
		const view = this.props.view
		const transform = view && view.scale ? `scale(${ view.scale })` : 'none'
		const transformOrigin = view && view.origin ? this.origin = `${ view.origin.left * 100 }% ${ view.origin.top * 100 }%` : this.origin

		return (
			<section id="map" ref="map" className="map" style={{ transform, transformOrigin }}>
				<svg>
					<defs>
						<clipPath id="svg-clip">
							<path d="M0,34 C-18.778,34 -34,18.778 -34,0 C-34,-18.778 -18.778,-34 0,-34 C18.778,-34 34,-18.778 34,0 C34,18.778 18.778,34 0,34 Z M0,18 C9.941,18 18,9.941 18,0 C18,-9.941 9.941,-18 0,-18 C-9.941,-18 -18,-9.941 -18,0 C-18,9.941 -9.941,18 0,18 Z"></path>
						</clipPath>
					</defs>
					{ this.props.children }
				</svg>
			</section>
		)
	}
}

export {
	Map,
	Image,
	Regions,
	Pois
}
