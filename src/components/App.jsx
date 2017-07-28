import React from 'react';

import Map from './Map';
import Sidebar from './Sidebar';
import Detail from './Detail';

export default class App extends React.Component {
    render() {
        return (
			<div>
				<Map />
				<Sidebar />
				<Detail />
			</div>
        )
    }
}
