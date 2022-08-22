const AlgoliaIndexTransform = require("algolia-index-transform");

const algoliaIndexTransform = new AlgoliaIndexTransform({
  //applicationID and Key
  //Source and Destination can be the same.
  sourceApplicationID: "****",
  sourceApiKey: "****",
  sourceIndexName: "****",
  destinationApplicationID: "****",
  destinationApiKey: "****",
  destinationIndexName: "****",
  //objectID will come through on its own. Limiting this will make it faster.
  requestOptions: {
    attributesToRetrieve: ["description"],
  },
  //you don't have to worry about this if you're copying to the same index.
  copySettings: false,
});
//there are several functions but map will allow you run through the index and make changes to the attribute
algoliaIndexTransform.map((item) => {
  let newDesc = item.description.replace("google", "Apple");
  item.description = newDesc;
  return item;
});
