import axios from "axios";
const baseUrl = "https://api.openbrewerydb.org/breweries";

export const breweryService = {
  getBreweries,
  getBreweryById,
};

async function getBreweries() {
  console.log("fetching breweries...");
  let breweriesResponse = await axios.get(`${baseUrl}`);
  if (!breweriesResponse.data) {
    return;
  }
  const breweries = breweriesResponse.data;
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
