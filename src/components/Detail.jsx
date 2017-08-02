import React from 'react'

const PoiHeadline = props => (
	<h1 className="headline" data-map={ props.map }>{ props.title[ props.lang ] }</h1>
)

const PoiDescription = props => (
	<p className="description">{ props.text[ props.lang ] }</p>
)

const Actions = props => (
	<ul className="actions">
		<li><a className="icon back"></a></li>
		<li><a className="icon forward"></a></li>
		<li><a className="icon close" onClick={ props.onCloseClick }></a></li>
	</ul>
)

const Gallery = props => (
	<div>
		<div className="photo">
			<ul className="actions">
				<li><a className="back"><span className="icon back"></span></a></li>
				<li><a className="forward"><span className="icon forward"></span></a></li>
			</ul>
			<ul className="images"></ul>
		</div>
		<ul className="thumbnails"></ul>
	</div>
)

export {
	PoiHeadline,
	PoiDescription,
	Actions,
	Gallery
}
