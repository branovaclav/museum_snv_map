import React from 'react';

const Container = (children, className) => (
	<section className={ className }>
		{ children }
	</section>
)

const Sidebar = props => Container(props.children, 'sidebar')
const Detail = props => Container(props.children, 'detail')

const Titlebar = props => Container(props.children, 'titlebar')
const Content = props => Container(props.children, 'content')

export {
	Sidebar,
	Detail,
	Titlebar,
	Content
}
