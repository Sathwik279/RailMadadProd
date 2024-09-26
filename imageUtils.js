const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const apiKey = "acc_b9046a2c3022b82";
const apiSecret = "1b86dd98565f613b6db310c43490bca1";
const endpoint = "https://api.imagga.com/v2/tags";

const analyzeImage = async (imagePath) => {
  try {
    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));

    const response = await axios.post(endpoint, form, {
      headers: {
        ...form.getHeaders(),
        Authorization:
          "Basic " + Buffer.from(`${apiKey}:${apiSecret}`).toString("base64"),
      },
    });

    const tags = response.data.result.tags;
    const labelDescriptions = tags.map((tag) => tag.tag.en.toLowerCase());

    if (
      labelDescriptions.includes("trash") ||
      labelDescriptions.includes("dirty")
    ) {
      return "cleanliness";
    } else if (
      labelDescriptions.includes("damage") ||
      labelDescriptions.includes("broken")
    ) {
      return "technical";
    } else if (
      labelDescriptions.includes("fire") ||
      labelDescriptions.includes("hazard")
    ) {
      return "security";
    } else {
      return "general";
    }
  } catch (error) {
    console.error("Error analyzing image:", error);
    return null;
  }
};

module.exports = { analyzeImage };
