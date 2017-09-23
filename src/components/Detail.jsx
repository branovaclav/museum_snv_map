import React from 'react'
import Transition from 'react-addons-css-transition-group';

import $ from 'jquery'

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


class Gallery extends React.Component {
	componentDidUpdate(prevProps) {
		const thumbnails = this.refs.thumbnails
		const thumbnail = thumbnails.querySelector(`[src*="${ this.props.image }"]`).parentNode.parentNode;

		if (thumbnails.scrollLeft > thumbnail.offsetLeft)
			$(thumbnails).animate({ scrollLeft: thumbnail.offsetLeft }, .33 * 1000);
		if (thumbnails.scrollLeft + thumbnails.offsetWidth - thumbnail.offsetWidth < thumbnail.offsetLeft)
			$(thumbnails).animate({ scrollLeft: thumbnail.offsetLeft - (thumbnails.offsetWidth - thumbnail.offsetWidth) }, .33 * 1000);
	}

	render () {
		const prevImage = this.props.images[ this.props.images.indexOf(this.props.image) - 1 ]
		const nextImage = this.props.images[ this.props.images.indexOf(this.props.image) + 1 ]

		return (
			<div>
				<div className="photo">
					<ul className="actions">
						<li><a className={ `back ${ prevImage ? '' : 'disabled' }` } onClick={ () => prevImage && this.props.onClick(prevImage) }><span className="icon back"></span></a></li>
						<li><a className={ `forward ${ nextImage ? '' : 'disabled' }` } onClick={ () => nextImage && this.props.onClick(nextImage) }><span className="icon forward"></span></a></li>
					</ul>
					<Transition component="ul" className="images" transitionName={ this.props.anim.name } transitionEnterTimeout={ this.props.anim.enter } transitionLeaveTimeout={ this.props.anim.leave }>
						{ this.props.image &&
							<li key={ this.props.image }>
								<img src={ `${ this.props.paths.images }/${ this.props.image }` } />
							</li>
						}
					</Transition>
				</div>
				<ul ref="thumbnails" className="thumbnails">
					{ this.props.images.map(image => (
						<li key={ image }>
							<a className={ image == this.props.image && 'selected' } onClick={ () => this.props.onClick(image) }>
								<img src={ `${ this.props.paths.thumbnails }/${ image }` } />
							</a>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export {
	Detail,
	PoiHeadline,
	PoiDescription,
	RegionHeadline,
	Actions,
	Gallery
}
