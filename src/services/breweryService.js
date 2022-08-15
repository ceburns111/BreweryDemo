import axios from "axios";
import { BehaviorSubject } from "rxjs";

const baseUrl = "https://api.openbrewerydb.org/breweries";

const breweriesSubject = new BehaviorSubject();

export const breweryService = {
  getBreweries,
  getBreweryById,
  breweries: breweriesSubject.asObservable(),
  get breweriesValue() {
    return breweriesSubject.value;
  },
};

async function getBreweries() {
  console.log("fetching breweries...");
  let breweriesResponse = await axios.get(`${baseUrl}`);
  if (!breweriesResponse.data) {
    return;
  }
  const breweries = breweriesResponse.data;
  breweriesSubject.next(breweries);
  return breweries;
}

async function getBreweryById(breweryId) {
  console.log("fetching breweries...");
  let breweryResponse = await axios.get(`${baseUrl}/${breweryId}`);
  if (!breweryResponse.data) {
    return;
  }
  const brewery = breweryResponse.data;
  return brewery;
}
