import React from 'react'
import Transition from 'react-addons-css-transition-group';

const Detail = props => (
	<section className={ `detail ${ props.maximized ? 'maximized' : '' }` }>
		{ props.children }
	</section>
)

const PoiHeadline = props => (
	<h1 className="headline poi" data-map={ props.map }>{ props.title[ props.lang ] }</h1>
)

const PoiDescription = props => (
	<p className="description">{ props.text[ props.lang ] }</p>
)

const RegionHeadline = props => (
	<h1 className="headline region" data-map={ props.map || 'flora' }>{ props.title[ props.lang ] }</h1>
)

const Actions = props => {
	const prevPoi = props.poi && props.pois[ props.pois.indexOf(props.poi) - 1 ]
	const nextPoi = props.poi && props.pois[ props.pois.indexOf(props.poi) + 1 ]

	return (
		<ul className="actions">
			<li><a className={ `icon back ${ prevPoi ? '' : 'disabled' }` } onClick={ () => prevPoi && props.onNextClick(prevPoi) }></a></li>
			<li><a className={ `icon forward ${ nextPoi ? '' : 'disabled' }` } onClick={ () => nextPoi && props.onNextClick(nextPoi) }></a></li>
			<li><a className="icon close" onClick={ props.onCloseClick }></a></li>
		</ul>
	)
}

const Gallery = props => {
	const prevImage = props.images[ props.images.indexOf(props.image) - 1 ]
	const nextImage = props.images[ props.images.indexOf(props.image) + 1 ]

	return (
		<div>
			<div className="photo">
				<ul className="actions">
					<li><a className={ `back ${ prevImage ? '' : 'disabled' }` } onClick={ () => prevImage && props.onClick(prevImage) }><span className="icon back"></span></a></li>
					<li><a className={ `forward ${ nextImage ? '' : 'disabled' }` } onClick={ () => nextImage && props.onClick(nextImage) }><span className="icon forward"></span></a></li>
				</ul>
				<Transition component="ul" className="images" transitionName={ props.anim.name } transitionEnterTimeout={ props.anim.enter } transitionLeaveTimeout={ props.anim.leave }>
					{ props.image &&
						<li key={ props.image }>
							<img src={ `${ props.paths.images }/${ props.image }` } />
						</li>
					}
				</Transition>
			</div>
			<ul className="thumbnails">
				{ props.images.map(image => (
					<li key={ image }>
						<a className={ image == props.image && 'selected' } onClick={ () => props.onClick(image) }>
							<img src={ `${ props.paths.thumbnails }/${ image }` } />
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export {
	Detail,
	PoiHeadline,
	PoiDescription,
	RegionHeadline,
	Actions,
	Gallery
}
