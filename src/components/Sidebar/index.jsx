import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return (
			<nav className="sidebar">
				<ul className="groups">
					{ Object.keys(data.groups).map(group => (
						<li key={ group }>
							<a className="group" data-group={ group }>
								{ data.groups[group].title[data.lang] }
							</a>
						</li>
					))}
				</ul>
			</nav>
        );
    }
}
