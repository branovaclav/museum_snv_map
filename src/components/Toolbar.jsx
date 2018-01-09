import React from 'react';

const Actions = props => (
	<ul className="actions">
		<li><a className="icon home" onClick={ props.onHomeClick }></a></li>
		<li><a className="icon info" onClick={ props.onAboutClick }></a></li>
		{/*
		<li><a className="icon labels" onClick={ props.onLabelsClick }></a></li>
		<li><a className="icon legend" onClick={ props.onLegendClick }></a></li>
		*/}
	</ul>
)

const Languages = props => (
	<ul className="actions">
		<li><a className={ props.lang == 'sk' && 'selected' } onClick={ () => props.onClick('sk') }>SLO</a></li>
		<li><a className={ props.lang == 'en' && 'selected' } onClick={ () => props.onClick('en') }>ENG</a></li>
	</ul>
)

const Toolbar = props => (
	<section className="toolbar">
		<Actions onHomeClick={ props.onHomeClick } onAboutClick={ props.onAboutClick } />
		<Languages lang={ props.lang } onClick={ props.onLangClick } />
	</section>
)

const Back = props => (
	<section className="backbar hidden">
		<ul className="actions">
			<li><a className="icon return" onClick={ props.onClick }></a></li>
		</ul>
	</section>
)

export {
	Toolbar,
	Back
}