import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContainerDimensions from 'react-container-dimensions'
import IconButton from 'material-ui/IconButton/IconButton';
import ListMenu from './ListMenu.js'

const styles={
  menu_container:{
    display: 'flex',
    width: '100%',
    justifyContent:'flex-end',
    margin: 0,
    padding: 0,
  }
}

const getIcon = (item, i) => {
  if(item.seperator){
    return undefined;
  }else if(item.menu){
    return item.getSelectMenuItems();

  }else{
    return <IconButton
      key={i}
      disabled={item.disabled}
      onClick={item.onClick}
      tooltip={item.tooltip}>
      {item.icon}
    </IconButton>;
  }
}

const Menu = (props) => {
  const {
    iconMenuColor,
    width,
    marginCorrection,
    iconWidth,
    menuList
  } = props;



  let icons= [];
  let menus= [];

  const visibleItems=menuList.filter((item)=>item.hidden!==true);
  const iconW=iconWidth!==undefined?iconWidth:48;
  const correction=marginCorrection!==undefined?marginCorrection:0;
  const breackLimit=visibleItems.length*iconW;

  const hiddenWidth=breackLimit-width-correction;
  const hiddenIcons=Math.ceil(hiddenWidth/iconW)+1;

  if(hiddenIcons > 0){
    menus = visibleItems.slice(visibleItems.length-hiddenIcons, visibleItems.length),
    icons = visibleItems.slice(0, hiddenIcons*-1)
  }else{
    menus=[]
    icons=visibleItems
  }

  return (
    <div
      style={styles.menu_container}
      ref={(container)=>{
        this.menuContainer=container;
      }}>

      {icons.map((item, i) =>getIcon(item, i))}

      {menus.length!=0 &&
        <ListMenu
          items={menus}
          iconMenuColor={iconMenuColor}
        />
      }
    </div>
  );

}

const ResponsiveMenu = (props) => {
  return <ContainerDimensions>
    { ({ width }) => <Menu width={width} {...props}/> }
  </ContainerDimensions>
}



ResponsiveMenu.propTypes = {
  menuList: PropTypes.array.isRequired,
  iconWidth: PropTypes.number,
  marginCorrection: PropTypes.number,
  iconMenuColor: PropTypes.string,
};

export default ResponsiveMenu;
