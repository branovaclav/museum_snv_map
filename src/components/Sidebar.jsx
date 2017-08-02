import React from 'react';

const Sidebar = props => (
	<section className={ `sidebar ${ props.visible || 'hidden' }` }>
		{ props.children }
	</section>
)

const ArticleHeadline = props => (
	<h1 className="headline">
		<div className="title">{ props.title[ props.lang ] }</div>
		<div className="subtitle">{ props.subtitle[ props.lang ] }</div>
	</h1>
)

const ArticleDescription = props => (
	<p>{ props.text[ props.lang ] }</p>
)

const RegionList = props => (
	<ul className="regions">
		{ Object.keys(props.regions).map(region => (
			<li key={ region }>
				<a className="region" onClick={ () => props.onClick(region) }>
					<h2>
						<div className="title">{ props.regions[ region ].title[ props.lang ] }</div>
						{/* <div className="subtitle">{ props.regions[region].subtitle[props.lang] }</div> */}
					</h2>
				</a>
			</li>
		))}
	</ul>
)

const MapList = props => (
	<ul className="maps">
		{ Object.keys(props.maps).map(map => (
			<li key={ map }>
				<a className={ `map ${ map == props.map && 'selected' }` } data-map={ map } onClick={ () => props.onClick(map) }>
					{ props.maps[map].title[props.lang] }
				</a>
			</li>
		))}
	</ul>
)

export {
	Sidebar,
	ArticleHeadline,
	ArticleDescription,
	RegionList,
	MapList
}
