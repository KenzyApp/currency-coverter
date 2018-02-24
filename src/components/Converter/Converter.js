import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';
import { 
    InputNumber,
    Select,
} from 'antd';

const Option = Select.Option;

export default class Converter extends Component {

    static propTypes = {
        rates: PropTypes.object.isRequired,
        className: PropTypes.string,
        setAmount: PropTypes.func.isRequired,
        setCurrency: PropTypes.func.isRequired,
        amount: PropTypes.number,
        currency: PropTypes.string
    }

    static defaultProps = {
        rates: {},
        amount: 0,
        currency: ''
    }

    render() {
        // if (!this.props.rates  || (this.props.rates && Object.keys(this.props.rates).length > 0)) {
        //     return <span>Loading!!!</span>
        // }
        const className = classNames({
            'Converter': true,
            [this.props.className]: this.props.className
        });
        const amount = this.props.amount;
        const currency = this.props.currency;
        const rate = this.props.rates[currency];
        const showResult = !!amount && !!currency;

        return <div className={className}>

            <div className='converter-form'>
                <label>How much SEK would you like to convert?</label>
                <InputNumber className="from-input" 
                            onChange={this.props.setAmount}
                />
                <label>To which currency?</label>
                <Select showArrow 
                        allowClear 
                        showSearch 
                        onChange={this.props.setCurrency}
                        className='currency-select'
                >
                    {Object.keys(this.props.rates).map(currencyCode => {

                        return <Option key={currencyCode} value={currencyCode}>
                            {currencyCode}
                        </Option>
                    })}
                </Select>
            </div>

            {showResult &&
                <div className='result'>
                    <span className='result-title'>Result:</span>
                    <span className='result-amount'>
                        {`${amount} SEK equals ${(amount * rate).toFixed(3)} ${currency}`}
                    </span>
                </div>
            }
        </div>
    }

}
