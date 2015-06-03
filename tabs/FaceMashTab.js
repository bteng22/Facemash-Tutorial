'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component,
  ActivityIndicatorIOS
} = React;

class FaceMashTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      currentIndex: 0,
      isLoading: true
    };
  }

  componentWillMount() {
    fetch('http://localhost:8882/rest/mash')
      .then(res => res.json())
      .then(res => this.setState({
        userList: res,
        isLoading: false
      })
    );
  }

  render() {
    if(this.state.isLoading) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FaceMash</Text>
      </View>
        <Text>
          FaceMash Tab!
        </Text>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS
            size='large'/>
        <Text>Loading users...</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 50,
    backgroundColor: '#ff0000',
    paddingTop: 20,
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = FaceMashTab;