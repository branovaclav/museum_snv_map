import React from 'react';

const Container = (children, className) => (
	<section className={ className }>
		{ children }
	</section>
)

const Titlebar = props => Container(props.children, 'titlebar')
const Content = props => Container(props.children, 'content')

export {
	Titlebar,
	Content
}
