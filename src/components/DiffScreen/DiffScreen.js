import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DatePicker } from 'antd';

const RangePicker = DatePicker.RangePicker;

export default class DiffScreen extends Component {

    static propTypes = {
        className: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string,
        getArchivedRates: PropTypes.func.isRequired,
        startRate: PropTypes.number,
        endRate: PropTypes.number
    }

    static defaultProps = {
        amount: 0,
        currency: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: ''
        }
    }

    onDateRangeChange = (range) => {
        const startDate = range[0].format('YYYY-MM-DD');
        const endDate = range[1].format('YYYY-MM-DD');

        this.setState({
            ...this.state,
            startDate,
            endDate
        });
    }

    componentDidUpdate() {
        if (this.state.startDate && this.state.endDate && this.props.currency) {
            this.props.getArchivedRates(
                this.props.currency,
                this.state.startDate,
                this.state.endDate
            );
        }
    }

    render() {
        const className = classNames({
            'DiffScreen': true,
            [this.props.className]: this.props.className
        })
        const amount = this.props.amount;
        const startRate = this.props.startRate;
        const endRate = this.props.endRate;
        const showDiff = startRate && endRate && amount > 0 && this.props.currency;

        const firstAmount = amount * startRate;
        const secondAmount = amount * endRate;
        const diffPercent = (secondAmount - firstAmount) * 100 / firstAmount;

        return <div className={className}>
            <RangePicker onChange={this.onDateRangeChange}/>
            {showDiff && <div className='diff'>
                <span className='first-amount'>{firstAmount.toFixed(3)}</span>
                <span className='diff-arrow'>&rarr;</span>
                <span className='second-amount'>{`${secondAmount.toFixed(3)} (${diffPercent.toFixed(2)}%)`}</span>
            </div>}
        </div>
    }

}
