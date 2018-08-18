import React from "react";
import { connect } from "react-redux";
import {FormControl} from "react-bootstrap";
import {bindActionCreators} from "redux";
import * as Finance from "../reducers/finance";

class RateCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rate: "USD",
      amount: 0
    }
  }

  componentWillMount() {
    this.props.getCurrenciesRates();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.timer !== this.state.timer) {
      setTimeout(() => {
        this.props.getFinancialUnits();
        this.setState({timer: this.state.timer+1})
        }, 10000);
    }
  }

  // render
  render() {
    const { rates } = this.props;
    const { rate, amount } = this.state;
    return (
      <div style={{margin: "5px",
        padding: "10px",
        border: "solid gray 1px",
        borderRadius: "5px"}}>
        <h1> Currency Rate Calc </h1>

        <div style={{display: "flex"}}>
          <FormControl
                style={{ width: "33%", margin: "3px", padding: "3px"}}
                componentClass="select" placeholder="select"
                onChange={(evt) => this.setState( { rate: evt.target.value})}>
            {Object.keys(rates).map(curr =>
              <option value={rates[curr]}>{curr}</option>
            )}
          </FormControl>
          <input
            style={{ width: "33%", margin: "3px"}}
            onChange={(evt) => this.setState( { amount: evt.target.value})}></input>
          <div
            style={{ display: "flex", width: "33%", margin: "3px", border: "1px solid gray", borderRadius: "5px",
              alignItems: "center",
              padding: "3px"}}>
            {(rate * amount).toLocaleString()} in USD</div>
        </div>
      </div>
    );
  }

}

// export the connected class
function mapStateToProps(state) {
  return {
    rates: state.finance.currenciesRate || [],
  };
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getCurrenciesRates: Finance.getCurrenciesRates,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateCalculator);
