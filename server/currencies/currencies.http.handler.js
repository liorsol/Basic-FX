import {Currencies} from "./currencies.service";

export const list = async (req, res) => {
  try {
    console.log("Fetching list of forex currencies");

    let currencies = await (new Currencies()).getLatest();

    res.send({data: currencies, status: "ok"});
  } catch (e) {
    console.log("error Fetching list of forex currencies", e);
    res.send(JSON.stringify({status: "fail"}));
  }
};
