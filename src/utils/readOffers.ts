import { DATA_DIR } from '@/constants';
import { promises as fs } from 'fs';

const readOffers = async () => {
  const file = await fs.readFile(`${DATA_DIR}/offers.json`, 'utf8');
  const data = JSON.parse(file);

  return data;
}

export default readOffers;
