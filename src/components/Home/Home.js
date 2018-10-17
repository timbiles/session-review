import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Home</h1>
        {this.props.name && <p>Hi {this.props.name}, welcome home!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  };
};

export default connect(mapStateToProps)(Home);
