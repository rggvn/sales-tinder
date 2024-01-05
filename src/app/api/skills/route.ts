import { DATA_DIR } from '@/constants';
import readFile from '@/utils/readFile';

export async function GET(request: Request) {
  try {
    const file = await readFile(`${DATA_DIR}/skills.json`);
    return Response.json(file);
  }
  catch {
    return new Response(null, { status: 500 });
  }
}
