import React from 'react';

const Actions = props => (
	<ul className="actions">
		<li><a className="icon home" onClick={ props.onHomeClick }></a></li>
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
		<Actions onHomeClick={ props.onHomeClick } />
		<Languages lang={ props.lang } onClick={ props.onLangClick } />
	</section>
)

export default Toolbar
