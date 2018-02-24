import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  getRates,
  setAmount,
  setCurrency,
  getArchivedRates
} from '../../actions';
import React, { Component } from 'react';
import Converter from '../../components/Converter/Converter';
import DiffScreen from '../../components/DiffScreen/DiffScreen';

const mapStateToProps = (state) => {
  return {
    rates: state.rates.rates,
    startRate: state.rates.startRate,
    endRate: state.rates.endRate,
    amount: state.app.amount,
    currency: state.app.currency,
    gettingRates: state.app.gettingRates,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getRates,
    setAmount,
    setCurrency,
    getArchivedRates
  }, dispatch);
}

class App extends Component {

  componentDidMount = () => {
    this.props.getRates();
  }

  render() {
    console.log('this.props: ', this.props);
    if (this.props.errors) {
      return <div>{this.props.errors}</div>
    }
    else if (this.props.gettingRates) {
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        <Converter rates={this.props.rates} 
                  setAmount={this.props.setAmount}
                  setCurrency={this.props.setCurrency}
                  amount={this.props.amount}
                  currency={this.props.currency}
        />
        <DiffScreen amount={this.props.amount}
                    currency={this.props.currency}
                    rates={this.props.rates}
                    getArchivedRates={this.props.getArchivedRates}
                    startRate={this.props.startRate}
                    endRate={this.props.endRate}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
