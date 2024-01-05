import { promises as fs } from 'fs';

const readFile = async (path: string) => {
  const file = await fs.readFile(path, 'utf8');
  const data = JSON.parse(file);

  return data;
}

export default readFile;
