const express = require("express");
const router = express.Router();
const upload = require("../utils/upload");
const {
  uploadImage,
  deleteImage,
  getImage
} = require("../controllers/imageController");

router.post("/upload", upload.single("image"), uploadImage);
router.delete("/delete", deleteImage);
router.get("/image", getImage);

module.exports = router;
    