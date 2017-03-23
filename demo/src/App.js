import React, { Component, PropTypes } from 'react';
import {ResponsiveMenu} from '../../src'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {connect} from 'react-redux';
import ActionHome from 'material-ui/svg-icons/action/home';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class App extends Component {

  render() {
    //const { } = this.props

    const menuList=[
      {
        text: 'test1',
        icon: undefined,
        tooltip: 'test1',
        hidden: false,
        icon: <ActionHome/>,
        onTouchTap: ()=>{console.log('test1')}
      },
      {
        text: 'test2',
        icon: <ActionHome/>,
        tooltip:'test2',
        hidden: undefined,
        onTouchTap: ()=>{console.log('test2')}
      },
      {
        text: 'test3',
        icon: <ActionHome/>,
        tooltip:'test3',
        hidden: true,
        onTouchTap: ()=>{console.log('test3')}
      },
      {
        text: 'test4',
        icon: <ActionHome/>,
        tooltip:'test4',
        onTouchTap: ()=>{console.log('test4')}
      },
      {
        text: 'test5',
        icon: <ActionHome/>,
        tooltip:'test5',
        onTouchTap: ()=>{console.log('test5')}
      },
      {
        text: 'test6',
        icon: <ActionHome/>,
        tooltip:'test6',
        onTouchTap: ()=>{console.log('test6')}
      },
      {
        text: 'test7',
        icon: <ActionHome/>,
        tooltip:'test7',
        onTouchTap: ()=>{console.log('test7')}
      },
      {
        text: 'test8',
        hidden: true,
        icon: <ActionHome/>,
        tooltip:'test8',
        onTouchTap: ()=>{console.log('test8')}
      },
    ]

    return (

      <div>
        <AppBar
          title={'Responsive Menu Demo'}
          zDepth={1}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={
            <div>
              <ResponsiveMenu menuList={menuList}/>
            </div>
          }
          iconStyleRight={{width:'50%'}}
          showMenuIconButton={true}
        />

        <Paper>
          <ResponsiveMenu menuList={menuList}/>
        </Paper>

        <Toolbar>

          <ToolbarGroup firstChild={true}>

          </ToolbarGroup>
          <ToolbarGroup lastChild={true} style={{width:'50%'}}>
            <ResponsiveMenu menuList={menuList}/>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

App.propTypes = {

};

const mapStateToProps = (state) => {
  //const {  browser, responsiveDrawer } = state;
  return {

  };
};

const mapDispatchToProps = (dispatch) => {

  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
