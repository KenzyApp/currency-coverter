import React, { Component } from 'react';
import { 
    InputNumber,
    Select,
} from 'antd';

const Option = Select.Option;

export default class Converter extends Component {

    // formatCurrency = amount => (amount || 0) + ' SEK';

    // parseCurrency = amount => {
    //     console.log(amount);
    //     // return parseFloat(amount); 
    //     return parseFloat(amount.replace(/\D/g, ''));
    // };

    render() {
        // if (Object.keys(this.props.rates).length > 0) {
        //     return <span>Loading!!!</span>
        // }

        return <div className='Converter'>
            Converter
            <label>How much SEK would you like to convert?</label>
            <InputNumber className="from-input" 
                        // formatter={this.formatCurrency} 
                        // parser={this.parseCurrency} 
            />
            <label>To which currency?</label>
            <Select showArrow allowClear showSearch>
                {Object.keys(this.props.rates).map(currencyCode => {

                    return <Option key={currencyCode} value={currencyCode}>
                        {currencyCode}
                    </Option>
                })}
            </Select>
        </div>
    }

}
