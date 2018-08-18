import React from 'react';
import { connect } from "react-redux";
import * as Finance from "../reducers/finance"
import { ProgressBar } from "react-bootstrap";
import {bindActionCreators} from "redux";
import UnitsList from "./UnitsList";
import RateCalculator from "./RateCalculator";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      progress: true
    }
  }

  componentDidMount() {
    setTimeout( () => this.setState({progress: false}), 2000)
  }

	render() {
    const { progress } = this.state;
    const { process } = this.props;
    if (progress || process) {
      return <ProgressBar active now={100}/>
    }
		return (
		  <div>
        <UnitsList />
        <RateCalculator />
      </div>
    )
	}
}

// export the connected class
function mapStateToProps(state) {
  return {
    financeUnits: state.finance.financeUnits || [],
    process: state.process,
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
)(App);