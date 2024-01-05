import { DATA_DIR } from '@/constants';
import readOffers from '@/utils/readOffers';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request) {
  try {
    const file = await readOffers();
    return Response.json(file);
  }
  catch (err) {
    const companies = [
      "Royal Dutch Shell",
      "Philips",
      "ING Group",
      "Unilever",
      "ASML"
    ];
    const requirements = [
      "Proficient in JavaScript and one or more modern frameworks (e.g., React, Angular, Vue)",
      "Experience with backend development using Node.js or other server-side technologies",
      "Strong understanding of HTML, CSS, and responsive design principles",
      "Experience with version control systems (e.g., Git)",
      "Knowledge of database systems and SQL (e.g., MySQL, MongoDB)"
    ];
    const locations = [
      { city: "Amsterdam", country: "Netherlands" },
      { city: "Rotterdam", country: "Netherlands" },
      { city: "Utrecht", country: "Netherlands" },
      { city: "The Hague", country: "Netherlands" },
      { city: "Eindhoven", country: "Netherlands" }
    ];
    const jobTitles = [
      "Software Developer",
      "Web Developer",
      "Data Scientist",
      "UX/UI Designer",
      "DevOps Engineer"
    ];

    const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

    type Job = {
      id: String;
      company: String;
      jobTitle: String;
      requirements: String;
      location: typeof locations;
    };

    const jobs: Job[] = [];

    for (let i = 0; i < 10; i++) {
      const randomCompany = getRandomElement(companies);
      const randomRequirement = getRandomElement(requirements);
      const randomLocation = getRandomElement(locations);
      const randomJobTitle = getRandomElement(jobTitles);

      const randomJob = {
        id: uuidv4(),
        company: randomCompany,
        jobTitle: randomJobTitle,
        requirements: randomRequirement,
        location: randomLocation
      };

      jobs.push(randomJob);
    }

    await fs.writeFile(`${DATA_DIR}/offers.json`, JSON.stringify(jobs, null, 2));

    return Response.json(jobs);
  }
}
