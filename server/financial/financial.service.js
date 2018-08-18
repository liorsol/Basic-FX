import store from "../store";
import {Currencies} from "../currencies/currencies.service";

export class Financial {

  constructor() {
  }

  async getCalculatedFinancialUnits() {
    const finUnits = store.getData("finUnits");
    const positions = store.getData("positions");
    const exRates = await (new Currencies()).getLatest();

    const finUnitsById = finUnits.reduce((map, unit) => (map[unit.id]=unit, map), {});

    const retData = positions.map(({ fuOriginId, data: { currency : { notionalValue, ccy} } }) => {
      const { name : finUnitName } = finUnitsById[fuOriginId];
      return {
        finUnitName,
        notionalValue,
        ccy,
        exchangeRateToUSD: exRates[ccy],
        calculatedValue: notionalValue*exRates[ccy]
      }
    });

    return retData;
  }
}