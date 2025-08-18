import fs from "fs";
import path from "path";
import sharp from "sharp";

// Define where your input (original) images are
const imagesFolder = path.join("img");

// Define where to save low-quality versions
const outputFolder = path.join(".", "img", "img low quality pics");

// Make sure the output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Read all image files from the folder
const imageFiles = fs
  .readdirSync(imagesFolder)
  .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

imageFiles.forEach((file) => {
  const inputPath = path.join(imagesFolder, file);
  const outputPath = path.join(outputFolder, file);

  sharp(inputPath)
    .resize(20) // Resize to tiny dimensions for LQIP
    .blur(50) // Apply blur effect
    .toFile(outputPath)
    .then(() => console.log(`Generated LQIP for ${file}`))
    .catch((err) => console.error(`Error processing ${file}:`, err));
});
