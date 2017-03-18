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
        icon: <ActionHome/>,
        onTouchTap: ()=>{console.log('test1')}
      },
      {
        text: 'test2',
        icon: <ActionHome/>,
        tooltip:'test2',
        onTouchTap: ()=>{console.log('test2')}
      },
      {
        text: 'test3',
        icon: <ActionHome/>,
        tooltip:'test2',
        onTouchTap: ()=>{console.log('test2')}
      },
      {
        text: 'test4',
        icon: <ActionHome/>,
        tooltip:'test2',
        onTouchTap: ()=>{console.log('test2')}
      },
      {
        text: 'test5',
        icon: <ActionHome/>,
        tooltip:'test2',
        onTouchTap: ()=>{console.log('test2')}
      },
      {
        text: 'test6',
        icon: <ActionHome/>,
        tooltip:'test2',
        onTouchTap: ()=>{console.log('test2')}
      },
      {
        text: 'test7',
        icon: <ActionHome/>,
        tooltip:'test2',
        onTouchTap: ()=>{console.log('test2')}
      },
      {
        text: 'test8',
        icon: <ActionHome/>,
        tooltip:'test2',
        onTouchTap: ()=>{console.log('test2')}
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
