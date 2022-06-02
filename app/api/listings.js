import client from "./client";

const listingsApi = {
  getListings: () => client.get("/listings"),
};

export default listingsApi;
