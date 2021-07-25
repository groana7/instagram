import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'Center'}}>
        <Text>User is logged in</Text>
      </View>
    )
  }
}

const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(null, mapDispatchToProps)(Main);
