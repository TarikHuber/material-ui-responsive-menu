import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton/IconButton';
import ListMenu from './ListMenu.js'
import VisibilitySensor from 'react-visibility-sensor';
import Measure from 'react-measure';

const styles={
  menu_container:{
    //display: 'inline-block',
    display: 'flex',
    width: '100%',
    justifyContent:'flex-end',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  }
}

class ResponsiveMenu extends Component {

  state = {
    initList: [],
    iconList: [],
    menuList: [],
    dimensions: {}
  };

  arraysContainSame = (a, b) => {
    a = Array.isArray(a) ? a : [];
    b = Array.isArray(b) ? b : [];
    return a.length === b.length && a.every(el => b.includes(el));
  }

  componentWillMount(){
    const { menuList} = this.props;
    this.setState({initList: menuList});
  }

  handleWidthChange = (dimensions) => {
    this.setState({dimensions});
    this.updateLists(this.props);
  }

  componentWillReceiveProps(nextProps){

    this.updateLists(nextProps);

    /*
    const { menuList} = this.props;

    const nextMenuList=nextProps.menuList;

    if(!this.arraysContainSame(menuList, nextMenuList)){
      this.updateLists();
    }
    */

  }

  updateLists = (props) => {

    const { menuList, iconWidth} = props;

    const dimensions=this.state.dimensions;
    const iconW=iconWidth!==undefined?iconWidth:48;
    const breackLimit=menuList.length*iconW;

    console.log(dimensions);

    const hiddenWidth=breackLimit-dimensions.width;
    const hiddenIcons=Math.ceil(hiddenWidth/iconW)+1;

    if(hiddenIcons > 0){
      this.setState({menuList: menuList.slice(menuList.length-hiddenIcons, menuList.length)})
      this.setState({iconList: menuList.slice(0, hiddenIcons*-1)})
    }else{
      this.setState({menuList: []})
      this.setState({iconList: menuList})
    }
  }

  getIcon = (item) => {
    if(item.seperator){
      return undefined;
    }else if(item.menu){
      return item.getSelectMenuItems();

    }else{
      return <IconButton
        key={item.text}
        disabled={item.disabled}
        onClick={item.onTouchTap}
        tooltip={item.tooltip}>
        {item.icon}
      </IconButton>;
    }
  }


  render() {
    const iconList=this.state.iconList;
    const menuList=this.state.menuList;

    return (
      <Measure
        onMeasure={this.handleWidthChange}
        whitelist={['width']}>

        <div style={styles.menu_container}>

          {iconList.filter((item)=>!item.hidden).map(item =>this.getIcon(item))}

          {menuList.length!=0 &&
            <ListMenu
              items={menuList.filter((item)=>!item.hidden)}
              secondary={false}
            />
          }


        </div>
      </Measure>
    );

  }
}

ResponsiveMenu.propTypes = {
  menuList: PropTypes.array.isRequired,
  iconWidth: PropTypes.number,
};

export default ResponsiveMenu;
