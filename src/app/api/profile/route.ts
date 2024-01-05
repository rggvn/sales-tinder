export async function GET(request: Request) {
  /*
  Name -> Your Name
  Location -> {City , Country}
  Intrests -> ['react' , 'vue' , 'angular']
  Role -> React Engineer
  Max distance -> 100km
  */

  const profile = {
    name: "John Doe",
    location: { city: "Utrecht", country: "The Netherlands" },
    interests: ["react", "vue", "angular"],
    role: "React Engineer",
    maxDistance: "100km",
  };

  return Response.json(profile);
}
