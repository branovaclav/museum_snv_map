import React from 'react';

const Legend = props => (
	<section className="legend">
		<ul className="labels">
			{ props.labels.map((item, index) => {
				let color = item.code.charAt(0) == '#'
				return (
					<li key={ index }>
						<div className={ `key ${ color ? 'color' : item.code }`} style={ color ? { backgroundColor: item.code } : {}}></div>
						<label>{ item.label[ props.lang ] }</label>
					</li>
				)
			})}
		</ul>
	</section>
)

const About = props => (
	<div className="overlay">
		<section className="about">
			{ props.children }
		</section>
	</div>
)

const DialogHeadline = props => (
	<h1 className="headline">{ props.title[ props.lang ] }</h1>
)

const AboutLogos = props => (
	<ul className="logos">
		<img className="muzeumspisa" src="/images/logos/muzeumspisa_logo.svg" />
		<img className="fpu" src="/images/logos/fpu_logo.svg" />
	</ul>
)

const AboutDescription = props => (
	<ul className="credentials">
		{ props.content.map((item, index) => (
			<li key={ index }>
				<label>{ item.label[ props.lang ] }</label>
				<p>{ item.value }</p>
			</li>
		))}
	</ul>
)

const AboutFooter = props => (
	<div className="footer">
		{ props.text[ props.lang ] }
	</div>
)


export {
	Legend,
	About,
	DialogHeadline,
	AboutLogos,
	AboutDescription,
	AboutFooter	
}