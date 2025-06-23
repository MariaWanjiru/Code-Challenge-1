function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // Base fare in KES
  const chargePerKm = 15; // Cost per km in KES

  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;

  console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki! 🛵");
}

// Prompt the user for input
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = parseFloat(input);

// Validate input and call the function
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Tafadhali, ingiza umbali halali kwa kilomita.");
}