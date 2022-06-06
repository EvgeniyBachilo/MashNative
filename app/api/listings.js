import client from "./client";

const listingsApi = {
  getListings: () => client.get("/listings"),
  addListing: (listing, onUploadProgress) => {
    const formData = new FormData();
    formData.append("title", listing.title);
    formData.append("price", listing.price);
    formData.append("categoryId", listing.category.value);
    formData.append("description", listing.description);
    if (listing.location) {
      formData.append("location", JSON.stringify(listing.location));
    }
    listing.images.forEach((image, idx) => {
      formData.append("images", {
        name: "image" + idx,
        type: "image/jpeg",
        uri: image,
      });
    });
    return client.post("/listings", formData, {
      onUploadProgress: (progress) => {
        onUploadProgress(progress.loaded / progress.total);
      },
    });
  },
};

export default listingsApi;
