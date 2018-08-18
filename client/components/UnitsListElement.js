import React from "react";
import PropTypes from 'prop-types';

export default class UnitsListElement extends React.Component {
  render() {
    const {unit} = this.props;
    return (
      <tr>
        <td>{unit.finUnitName}</td>
        <td>{unit.notionalValue.toLocaleString()}</td>
        <td>{unit.ccy}</td>
        <td>{unit.exchangeRateToUSD.toLocaleString()}</td>
        <td>{unit.calculatedValue.toLocaleString()}</td>
      </tr>
    );
  }
}

UnitsListElement.propTypes = {
  unit: PropTypes.object.isRequired,
}
