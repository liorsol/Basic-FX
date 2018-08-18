import oxr from "open-exchange-rates";
import store from "../store";


export class Currencies {

  constructor() {
    oxr.set({ app_id: '2bf46ac4a7c146dea6606221118381e8' });
  }
  async getLatest() {
    try {
      const savedRates = store.getData("CurrencyRates");
      // if data is same for last 5 minutes
      if ((new Date()).getTime() - savedRates.updated.getTime() < 360000) {
        console.log("Got Saved rates", savedRates.updated);
        return savedRates.rates;
      }
    } catch (e) {
      console.log(e.message)
    }

    // Only fetching from external provider, if stored rates are not updated
    return new Promise(function(resolve, reject){
      oxr.latest(function() {
        console.log("Fetched rates from oxr external API", new Date())
        const rates = oxr.rates;
        store.setData({
          updated: new Date(),
          rates
        }, "CurrencyRates")
        resolve(rates);
      });
    })
  }
}

const data = {
  "AED": 3.673158,
  "AFN": 72.755844,
  "ALL": 110,
  "AMD": 482.128618,
  "ANG": 1.844499,
  "AOA": 268.6005,
  "ARS": 29.75,
  "AUD": 1.373505,
  "AWG": 1.793003,
  "AZN": 1.7025,
  "BAM": 1.717049,
  "BBD": 2,
  "BDT": 84.439103,
  "BGN": 1.714352,
  "BHD": 0.377077,
  "BIF": 1785,
  "BMD": 1,
  "BND": 1.510906,
  "BOB": 6.908226,
  "BRL": 3.939033,
  "BSD": 1,
  "BTC": 0.00015440102,
  "BTN": 70.07086,
  "BWP": 10.877472,
  "BYN": 2.049958,
  "BZD": 2.009488,
  "CAD": 1.308126,
  "CDF": 1615,
  "CHF": 0.994883,
  "CLF": 0.02338,
  "CLP": 669.55,
  "CNH": 6.854868,
  "CNY": 6.876448,
  "COP": 3023.63,
  "CRC": 567.209185,
  "CUC": 1,
  "CUP": 25.5,
  "CVE": 97.1835,
  "CZK": 22.548898,
  "DJF": 178.05,
  "DKK": 6.537473,
  "DOP": 49.755,
  "DZD": 118.916583,
  "EGP": 17.903,
  "ERN": 14.996833,
  "ETB": 27.695,
  "EUR": 0.876503,
  "FJD": 2.129494,
  "FKP": 0.78535,
  "GBP": 0.78535,
  "GEL": 2.477767,
  "GGP": 0.78535,
  "GHS": 4.875,
  "GIP": 0.78535,
  "GMD": 48.175,
  "GNF": 8935,
  "GTQ": 7.48659,
  "GYD": 208.499583,
  "HKD": 7.84935,
  "HNL": 24.030079,
  "HRK": 6.498557,
  "HTG": 67.361924,
  "HUF": 283.125181,
  "IDR": 14346.771583,
  "ILS": 3.66448,
  "IMP": 0.78535,
  "INR": 69.984269,
  "IQD": 1191,
  "IRR": 43164.252013,
  "ISK": 107.664966,
  "JEP": 0.78535,
  "JMD": 136.13009,
  "JOD": 0.710009,
  "JPY": 110.54725,
  "KES": 100.8275,
  "KGS": 68.137481,
  "KHR": 4071,
  "KMF": 431.70233,
  "KPW": 900,
  "KRW": 1123.2,
  "KWD": 0.303456,
  "KYD": 0.833077,
  "KZT": 359.95,
  "LAK": 8520,
  "LBP": 1510.5,
  "LKR": 160.430887,
  "LRD": 154.249852,
  "LSL": 14.255,
  "LYD": 1.39,
  "MAD": 9.5438,
  "MDL": 16.650107,
  "MGA": 3315,
  "MKD": 53.965,
  "MMK": 1489.657202,
  "MNT": 2442.166667,
  "MOP": 8.08326,
  "MRO": 357.5,
  "MRU": 35.97,
  "MUR": 34.719844,
  "MVR": 15.450044,
  "MWK": 727.290008,
  "MXN": 19.062475,
  "MYR": 4.102481,
  "MZN": 59.041109,
  "NAD": 14.534635,
  "NGN": 361,
  "NIO": 31.86,
  "NOK": 8.47155,
  "NPR": 112.109955,
  "NZD": 1.5138,
  "OMR": 0.385026,
  "PAB": 1,
  "PEN": 3.322596,
  "PGK": 3.3172,
  "PHP": 53.335,
  "PKR": 123.683333,
  "PLN": 3.769084,
  "PYG": 5756.00401,
  "QAR": 3.641,
  "RON": 4.079214,
  "RSD": 103.461242,
  "RUB": 67.5089,
  "RWF": 865.75,
  "SAR": 3.751303,
  "SBD": 7.88911,
  "SCR": 13.589592,
  "SDG": 18.02,
  "SEK": 9.175005,
  "SGD": 1.37275,
  "SHP": 0.78535,
  "SLL": 6542.71,
  "SOS": 578.5,
  "SRD": 7.458,
  "SSP": 130.2634,
  "STD": 21050.59961,
  "STN": 21.55,
  "SVC": 8.748373,
  "SYP": 514.99999,
  "SZL": 14.534541,
  "THB": 33.237,
  "TJS": 9.413073,
  "TMT": 3.499986,
  "TND": 2.770596,
  "TOP": 2.310538,
  "TRY": 6.044946,
  "TTD": 6.737735,
  "TWD": 30.767392,
  "TZS": 2282.4,
  "UAH": 27.689519,
  "UGX": 3747.579147,
  "USD": 1,
  "UYU": 31.479234,
  "UZS": 7800,
  "VEF": 141572.666667,
  "VND": 23109.742672,
  "VUV": 108.499605,
  "WST": 2.588533,
  "XAF": 574.948509,
  "XAG": 0.06772557,
  "XAU": 0.00084235,
  "XCD": 2.70255,
  "XDR": 0.71658,
  "XOF": 574.948509,
  "XPD": 0.00101,
  "XPF": 104.594672,
  "XPT": 0.00127078,
  "YER": 250.350747,
  "ZAR": 14.56358,
  "ZMW": 10.247,
  "ZWL": 322.355011
}