let imageUrl = "";

exports.uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.json({ message: "Image uploaded successfully", url: imageUrl });
};

exports.getImage = (req, res) => {
  res.json({ url: imageUrl });
};

exports.deleteImage = (req, res) => {
  imageUrl = "";
  res.json({ message: "Image deleted successfully" });
};
