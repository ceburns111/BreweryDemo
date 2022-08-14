import axios from "axios";
import { BehaviorSubject } from "rxjs";

const baseUrl = "https://api.openbrewerydb.org";

const breweriesSubject = new BehaviorSubject();

export const breweryService = {
  getBreweries,
  breweries: breweriesSubject.asObservable(),
  get breweriesValue() {
    return breweriesSubject.value;
  },
};

async function getBreweries() {
  console.log("fetching breweries...");
  let breweriesResponse = await axios.get(`${baseUrl}/breweries`);
  if (!breweriesResponse.data) {
    return;
  }
  breweriesSubject.next(breweriesResponse.data);
}
