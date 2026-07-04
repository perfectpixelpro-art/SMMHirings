import multer from "multer";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const UPLOAD_DIR = path.join(__dirname, "../../uploads");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const id = crypto.randomBytes(8).toString("hex");
    cb(null, `${file.fieldname}-${Date.now()}-${id}${path.extname(file.originalname)}`);
  },
});

// Allow images (logo/avatar) and common resume document types.
function fileFilter(_req, file, cb) {
  const ok = /image\/(png|jpe?g|webp|gif)|application\/pdf|application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document/;
  if (ok.test(file.mimetype)) cb(null, true);
  else cb(new Error("Unsupported file type"));
}

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});

// Turn a stored file into the public URL path the frontend can load.
export const publicPath = (file) => (file ? `/uploads/${file.filename}` : null);
