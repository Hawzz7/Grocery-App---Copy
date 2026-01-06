import multer from "multer";

export const upload = multer({ storage: multer.diskStorage({}) });

// continue from 7:15:57