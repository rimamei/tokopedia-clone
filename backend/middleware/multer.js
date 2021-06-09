import multer from "multer";
import path from "path";
const limitFile = 2;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./backend/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// setting conneting multer with storage
const multerUploading = multer({
  storage: storage,
  limits: {
    fileSize: limitFile * 1024 * 1024, // MegaByte(s)
  },
  // custom extension
  fileFilter: (req, file, callback) => {
    const typeExt = path.extname(file.originalname);
    if (
      typeExt === ".jpg" ||
      typeExt === ".JPG" ||
      typeExt === ".png" ||
      typeExt === ".PNG" ||
      typeExt === ".jpeg" ||
      typeExt === ".JPEG"
    ) {
      callback(null, true);
    } else {
      callback(
        {
          error: "Wrong type extention! Please upload like png/PNG/jpg/JPG.",
          code: "typeExtWrong",
        },
        false
      );
    }
  },
});

// make middleware
const singleUploading = (req, res, next) => {
  // process upload
  const multerSingle = multerUploading.single("image"); // name file
  if (multerSingle) {
    multerSingle(req, res, (error) => {
      if (error) {
        // console.log(error)
        if (error.code === "LIMIT_FILE_SIZE") {
          return res
            .status(413)
            .json({ message: `File size exceeds the ${limitFile} Mb limit` });
        } else if (error.code === "typeExtWrong") {
          return res.status(413).json({
            message: `Wrong Extention! Please upload with png and jpg extention`,
          });
        } else {
          return res.status(400).json({ message: `Internal server error` });
        }
      } else {
        next();
      }
    });
  } else {
    next();
  }
};

export default singleUploading;