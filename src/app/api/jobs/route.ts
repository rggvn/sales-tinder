export async function GET(request: Request) {
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
      company: randomCompany,
      jobTitle: randomJobTitle,
      requirements: randomRequirement,
      location: randomLocation
    };

    jobs.push(randomJob);
  }

  return Response.json(jobs);
}
