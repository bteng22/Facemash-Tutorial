'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;

class FaceMashTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          FaceMash Tab!
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

modules.export = FaceMashTab;