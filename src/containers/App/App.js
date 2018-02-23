import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRates } from '../../actions';
import React, { Component } from 'react';
import Converter from '../../components/Converter/Converter';

const mapStateToProps = (state) => {
  return {
    rates: state.app.rates
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getRates
  }, dispatch);
}

class App extends Component {

  componentDidMount = () => {
    this.props.getRates();
  }

  render() {
    console.log('this.props: ', this.props);
    return (
      <div className="App">
        <Converter rates={this.props.rates}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
