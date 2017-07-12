import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton/IconButton';
import ListMenu from './ListMenu.js'
import Measure from 'react-measure';

const styles={
  menu_container:{
    display: 'flex',
    width: '100%',
    justifyContent:'flex-end',
    margin: 0,
    padding: 0,
  }
}

class ResponsiveMenu extends Component {

  state = {
    iconList: [],
    menuList: []
  };

  arraysContainSame = (a, b) => {
    a = Array.isArray(a) ? a : [];
    b = Array.isArray(b) ? b : [];
    return a.length === b.length && a.every(el => b.includes(el));
  }

  componentDidMount(){
    const { menuList} = this.props;
    this.updateLists(this.props);
  }

  handleWidthChange = (dimensions) => {
    this.updateLists(this.props);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps!==undefined && !this.arraysContainSame(this.props.menuList, nextProps.menuList)){
      this.updateLists(nextProps);
    }
  }

  updateLists = (props) => {

    const { menuList, iconWidth, marginCorrection } = props;

    //const itemsCount=menuList.filter((item)=>item.hidden!==true).length;
    const visibleItems=menuList.filter((item)=>item.hidden!==true);
    const width =this.menuContainer.offsetWidth;
    const iconW=iconWidth!==undefined?iconWidth:48;
    const correction=marginCorrection!==undefined?marginCorrection:0;
    const breackLimit=visibleItems.length*iconW;

    const hiddenWidth=breackLimit-width-correction;
    const hiddenIcons=Math.ceil(hiddenWidth/iconW)+1;

    if(hiddenIcons > 0){
      this.setState({
        menuList: visibleItems.slice(visibleItems.length-hiddenIcons, visibleItems.length),
        iconList: visibleItems.slice(0, hiddenIcons*-1)
      });
    }else{
      this.setState({
        menuList: [],
        iconList: visibleItems
      });
    }
  }

  getIcon = (item, i) => {
    if(item.seperator){
      return undefined;
    }else if(item.menu){
      return item.getSelectMenuItems();

    }else{
      return <IconButton
        key={i}
        disabled={item.disabled}
        onClick={item.onTouchTap}
        tooltip={item.tooltip}>
        {item.icon}
      </IconButton>;
    }
  }


  render() {
    const { iconMenuColor } = this.props;
    const iconList=this.state.iconList;
    const menuList=this.state.menuList;

    return (
      <Measure
        includeMargin={false}
        onMeasure={this.handleWidthChange}
        whitelist={['width']}
        blacklist={['height', 'top', 'right', 'bottom', 'left']}>

        <div
          style={styles.menu_container}
          ref={(container)=>{
            this.menuContainer=container;
          }}>

          {iconList.map((item, i) =>this.getIcon(item, i))}

          {menuList.length!=0 &&
            <ListMenu
              items={menuList}
              iconMenuColor={iconMenuColor}
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
  marginCorrection: PropTypes.number,
  iconMenuColor: PropTypes.string,
};

export default ResponsiveMenu;
