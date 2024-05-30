const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["VENKAT", "MOHAN"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getLaunchWithId(launchId) {
  console.log(launches.has(launchId));
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  launches.set(
    ++latestFlightNumber,
    Object.assign(launch, {
      customers: ["VENKAT", "MOHAN"],
      flightNumber: latestFlightNumber,
      upcoming: true,
      success: true,
    })
  );
}

function abortLaunchById(launchId) {
  const abortedLaunch = launches.get(launchId);
  abortedLaunch.upcoming = false;
  abortedLaunch.success = false;
  return abortedLaunch;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  getLaunchWithId,
  abortLaunchById,
};
