import { spawn } from "node:child_process";
import {
  resolve,
} from "node:path";
import { tsImport } from "tsx/esm/api";
import { fileURLToPath } from "node:url";
import process from "node:process";

export const rootUrl = new URL("../../", import.meta.url).href;
export const rootDir = fileURLToPath(rootUrl);

export function execFromRoot(command: string, {
  quiet = false,
  ignoreExitCode = false
}: {
  quiet?: boolean,
  ignoreExitCode?: boolean
} = {}): Promise<{ stdout: string, stderr: string }> {
  return new Promise((resolve, reject) => {
    const [cmd = "", ...args] = command.split(" ");

    const child = spawn(cmd, args, {
      cwd: rootDir,
      stdio: ["inherit", "pipe", "pipe"],
      shell: true
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data: string) => {
      if (!quiet) {
        process.stdout.write(data);
      }
      stdout += data;
    });

    child.stderr.on("data", (data: string) => {
      if (!quiet) {
        process.stderr.write(data);
      }
      stderr += data;
    });

    child.on("close", (code) => {
      if (code !== 0 && !ignoreExitCode) {
        reject(new Error(`Command failed with exit code ${code}\n${stderr}`));
      } else {
        resolve({ stdout, stderr });
      }
    });

    child.on("error", (err) => {
      if (!ignoreExitCode) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

export async function tsImportFromRoot<T>(specifier: string): Promise<T> {
  return await tsImport(specifier, rootUrl) as T;
}

export function resolvePathFromRoot(path: string): string {
  return resolve(rootDir, path);
}
