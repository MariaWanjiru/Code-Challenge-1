function estimateTransactionFee(amountToSend) {
  const feePercent = 0.015; // 1.5%
  let transactionFee = amountToSend * feePercent;

  // Apply min and max limits
  if (transactionFee < 10) {
    transactionFee = 10;
  } else if (transactionFee > 70) {
    transactionFee = 70;
  }

  const totalDebited = amountToSend + transactionFee;

  // Output
  console.log(`\nSending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely! 📱");
}

// Prompt the user for input
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(input);

// Validate input and run function
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Tafadhali, ingiza kiasi halali cha kutuma.");
}