import React from 'react'
import Transition from 'react-addons-css-transition-group';

const regions = {
	'spisska_magura': <image key="spisska_magura" xlinkHref="/images/maps/all/spisska_magura@1x.png" x="104" y="6" width="535px" />
}

export default ({ region, anim }) => (
	<Transition component="g" className="image" transitionName={ anim.name } transitionEnterTimeout={ anim.enter } transitionLeaveTimeout={ .5 * 1000 }>
		{ region ?
			regions[ region ] :
			<image key="all" xlinkHref="/images/maps/all/all@1x.png" x="0" y="0" width="934px" height="1000px" />
		}
	</Transition>
)
