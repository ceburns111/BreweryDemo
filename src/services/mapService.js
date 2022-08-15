import axios from "axios";

export const mapService = {
  getCoordinates,
};

async function getCoordinates(address) {
  let mapsResponse = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      address +
      "&key=" +
      "AIzaSyBiW6JjserHXkmD27zDB8eRB-DP_X44Gfo"
  );
  if (!mapsResponse.data) {
    return;
  }
  const coordinates = mapsResponse.data;
  return coordinates;
}
