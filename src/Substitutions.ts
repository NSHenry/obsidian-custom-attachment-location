import {
  extname,
  basename,
  dirname
} from "obsidian-dev-utils/Path";

export type Substitutions = {
  filename: string;
  foldername: string;
  folderPath: string;
  originalCopiedFilename: string;
};

export function createSubstitutionsFromPath(path: string, originalCopiedFilename?: string): Substitutions {
  const folderPath = dirname(path);
  return {
    filename: basename(path, extname(path)),
    foldername: basename(folderPath),
    folderPath,
    originalCopiedFilename: originalCopiedFilename ?? ""
  };
}
