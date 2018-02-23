import React, { Component } from 'react';
import { 
    InputNumber,
    Select,
} from 'antd';

const Option = Select.Option;

export default class Converter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            currency: '',
            rate: 0
        };
    }

    // formatCurrency = amount => (amount || 0) + ' SEK';

    // parseCurrency = amount => {
    //     // return amount.replace("![+-]?([0-9]*[.])?[0-9]+", '');
    //     return amo
    // };

    onAmountChange = (amount) => {
        console.log('amount: ', amount);
        this.setState({
            ...this.state,
            amount
        })
    };

    onCurrencyChange = (currency) => {
        console.log('currency: ', currency);
        this.setState({
            ...this.state,
            currency,
            rate: this.props.rates[currency]
        })
    }

    render() {
        // if (Object.keys(this.props.rates).length > 0) {
        //     return <span>Loading!!!</span>
        // }

        const amount = this.state.amount;
        const showResult = !!amount && !!this.state.currency;
        console.log(amount, this.state.currency, showResult);

        return <div className='Converter'>
            <label>How much SEK would you like to convert?</label>
            <InputNumber className="from-input" 
                        onChange={this.onAmountChange}
                        // formatter={this.formatCurrency} 
                        // parser={this.parseCurrency} 
            />
            <label>To which currency?</label>
            <Select showArrow 
                    allowClear 
                    showSearch 
                    onChange={this.onCurrencyChange}
                    className='currency-select'
            >
                {Object.keys(this.props.rates).map(currencyCode => {

                    return <Option key={currencyCode} value={currencyCode}>
                        {currencyCode}
                    </Option>
                })}
            </Select>

            {showResult &&
                <div className='result'>
                    <span className='result-title'>Result:</span>
                    <span className='result-amount'>
                        {`${amount} SEK equals ${(amount * this.state.rate).toFixed(3)} ${this.state.currency}`}
                    </span>
                </div>
            }
        </div>
    }

}
