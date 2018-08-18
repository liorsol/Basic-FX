import store from "../store";
import {Financial} from "./financial.service";
import { parse as json2csvParse } from 'json2csv';

export const calcUnits = async (req, res) => {
  try {
    console.log("Fetching list of calcUnits");

    let retData = await (new Financial()).getCalculatedFinancialUnits();

    res.send({data: retData, status: "ok"});
  } catch (e) {
    console.log("error Fetching list of calcUnits", e);
    res.send(JSON.stringify({status: "fail"}));
  }
};

export const calcUnitsCSV = async (req, res) => {
  try {
    console.log("Fetching list of calcUnits in CSV");

    let retData = await (new Financial()).getCalculatedFinancialUnits();
    //const parser = new Json2csvParser({ fields: Object.keys(retData) });

    res.setHeader('Content-disposition', 'attachment; filename=calcFinancialUnits.csv');
    res.setHeader('Content-type', 'text/plain');
    res.send(json2csvParse(retData, { fields: Object.keys(retData[0]) }));
  } catch (e) {
    console.log("error Fetching list of calcUnits", e);
    res.send(JSON.stringify({status: "fail"}));
  }
};

export const financialUnitsList = async (req, res) => {
  try {
    console.log("Fetching list of financialUnits");

    res.send({data: store.getData("finUnits"), status: "ok"});
  } catch (e) {
    console.log("error Fetching list of financialUnits", e);
    res.send(JSON.stringify({status: "fail"}));
  }
};

export const positionsList = async (req, res) => {
  try {
    console.log("Fetching list of positions");

    res.send({data: store.getData("positions"), status: "ok"});
  } catch (e) {
    console.log("error Fetching list of positions", e);
    res.send(JSON.stringify({status: "fail"}));
  }
};
