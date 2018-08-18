import React from "react";
import { connect } from "react-redux";
import {Button, Table} from "react-bootstrap";
import UnitsListElement from "./UnitsListElement";
import {bindActionCreators} from "redux";
import * as Finance from "../reducers/finance";

class UnitsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    }
  }

  componentWillMount() {
    this.props.getFinancialUnits();
    setTimeout(() => {
      this.props.getFinancialUnits();
      this.setState({timer: this.state.timer+1})
    }, 10000);
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
    const { financeUnits } = this.props;
    return (
      <div>
        <h1> Calculated Financial positions </h1>
        <Button onClick={() => location.href = `/calcFinancialUnits.csv`} > Export CSV </Button>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>Financial Unit Name</th>
            <th>Notional Value</th>
            <th>Rate</th>
            <th>Currency</th>
            <th>Calculated Value (in USD)</th>
          </tr>
          </thead>
          <tbody>
          {financeUnits.map((unit, index) =>
                <UnitsListElement key={index} unit={unit} />
          )}
          </tbody>
        </Table>

      </div>
    );
  }

}

// export the connected class
function mapStateToProps(state) {
  return {
    financeUnits: state.finance.financeUnits || [],
  };
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getFinancialUnits: Finance.getFinancialUnits,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitsList);
