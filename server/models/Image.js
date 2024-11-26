const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    name: String,
    data: String,
});

const Image = model('Image', imageSchema);

module.exports = Image;

// app.post("/api/upload", async (req, res) => {
//     try {
//         const { image } = req.body;

//         const newImage = new Image({
//             name: "uploaded-image",
//             data: image,
//         });

//         await newImage.save();

//         res.status(200).json({ message: "Image uploaded successfully" });
//     } catch (error) {
//         console.error("Error uploading image:", error);
//         res.status(500).json({ error: "Error uploading image" });
//     }
// });