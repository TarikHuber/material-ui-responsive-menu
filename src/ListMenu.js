import React, {  Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class ListMenu extends Component{

	render(){

		const {  items } = this.props

		return (
			<IconMenu
				iconButtonElement={
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				}>
				{items.map(item =>
					<MenuItem
						key={item.text}
						disabled={item.disabled}
						primaryText={item.text}
						onTouchTap={item.onTouchTap}
					/>
				)}
			</IconMenu>
		);
	}
};

ListMenu.propTypes = {
	items: PropTypes.array.isRequired,
}

export default (ListMenu);
