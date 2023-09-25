import multer, { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid_v4 } from 'uuid';

/**
 *
 * @param {number} path add path save file | default "public/uploads/{order}" | start path "public/uploads/...".
 * @return {{storage: multer.StorageEngine}} storage multer engine.
 *
 */
export function createDiskStorage({
  path = 'others',
}: { path?: string } = {}): {
  storage: multer.StorageEngine;
} {
  return {
    storage: diskStorage({
      destination: `./public/uploads/${path}`,
      filename(req, file, callback) {
        const uniqueSuffix = uuid_v4();
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename);
      },
    }),
  };
}
createDiskStorage();
