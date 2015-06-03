'use strict';

var React = require('react-native');
var FaceMashTab = require('./tabs/FaceMashTab');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Component,
  StatusBarIOS
} = React;

class FaceMash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'facemash'
    };
  }

  changeTab(tabName) {
    StatusBarIOS.setStyle(tabName === 'facemash' ? 1 : 0, false);
    this.setState({
      selectedTab: tabName
    });
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="FaceMash"
          icon={ require('image!facemash') }
          selected={ this.state.selectedTab === 'facemash' }
          onPress={()=> this.changeTab('facemash')}>
          <View style={styles.pageView}>
            <FaceMashTab/>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Messages"
          icon={ require('image!messages') }
          selected={ this.state.selectedTab === 'messages' }
          onPress={()=> this.changeTab('messages')}>
          <View style={styles.pageView}>
            <Text>Messages</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={ require('image!settings') }
          selected={ this.state.selectedTab === 'settings' }
          onPress={()=> this.changeTab('settings')}>
          <View style={styles.pageView}>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('FaceMash', () => FaceMash);
