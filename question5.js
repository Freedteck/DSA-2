const customerInfoCSV = `First Name,Last Name,Account Number,Phone Number
Onome,Ehigiator,6152081489,75238
Adegoke,Akeem-omosanya,6972070151,81324
Bukola,Ehigiator,8467070293,00358
Olufunmi,Aremu,3976080101,70877
Ifeanyichukwu,Ekwueme,8965070211,18253
Isioma,Mustapha,8555091643,93835
Ayebatari,Joshua,8657090501,43877
Nnamdi,Olawale,3587070218,99665
Lola,Abosede,6807070629,43330
Emeka,Oyelude,6701081905,76207`;

const transactionCSV = `SN,Account Number,Amount,Credit/Debit
1,6152200,8,Credit
2,6152117,3,Credit
3,6152299,4,Credit
4,6152214,7,Debit
5,6152498,9,Debit
6,6972434,4,Credit
7,6972454,5,Credit
8,6972402,1,Credit
9,6972499,1,Debit
10,6972203,8,Credit`;

const customerInfoRows = customerInfoCSV.split("\n").slice(1);
const transactionRows = transactionCSV.split("\n").slice(1);

const customers = customerInfoRows.map((row) => {
  const [firstName, lastName, accountNumber, phoneNumber] = row.split(",");
  return { firstName, lastName, accountNumber, phoneNumber };
});

const transactions = transactionRows.map((row) => {
  const [sn, accountNumber, amount, type] = row.split(",");
  return { accountNumber, amount: parseFloat(amount), type };
});

function checkBalance(accountNumber) {
  const customerTransactions = transactions.filter(
    (t) => t.accountNumber === accountNumber
  );
  const balance = customerTransactions.reduce((acc, t) => {
    return t.type === "Credit" ? acc + t.amount : acc - t.amount;
  }, 0);
  return balance;
}

function getAccountDetails(accountNumber) {
  return customers.find((c) => c.accountNumber === accountNumber);
}

function printLast3Transactions(accountNumber) {
  const customerTransactions = transactions
    .filter((t) => t.accountNumber === accountNumber)
    .slice(-3);
  return customerTransactions;
}

function changePhoneNumber(accountNumber, oldPhoneNumber, newPhoneNumber) {
  const customer = getAccountDetails(accountNumber);
  if (customer.phoneNumber === oldPhoneNumber) {
    customer.phoneNumber = newPhoneNumber;
    return true;
  } else {
    return false;
  }
}

// Example usage
const accountNumber = prompt("Enter account number:");
const action = prompt(
  "Enter 1 to check balance\nEnter 2 to check account details\nEnter 3 to print last 3 transactions\nEnter 4 to change phone number"
);

if (action === "1") {
  const balance = checkBalance(accountNumber);
  const customer = getAccountDetails(accountNumber);
  console.log(
    `The account balance for ${customer.firstName} ${customer.lastName} is: ${balance}`
  );
} else if (action === "2") {
  const customer = getAccountDetails(accountNumber);
  console.log(
    `The account details for account number ${accountNumber} are: First Name: ${customer.firstName}, Last Name: ${customer.lastName}, Phone Number: ${customer.phoneNumber}`
  );
} else if (action === "3") {
  const transactions = printLast3Transactions(accountNumber);
  console.log("The last 3 transactions are:");
  transactions.forEach((t) => {
    console.log(`Amount: ${t.amount}, Transaction Type: ${t.type}`);
  });
} else if (action === "4") {
  const oldPhoneNumber = prompt("Enter previous phone number:");
  const newPhoneNumber = prompt("Enter new phone number:");
  const success = changePhoneNumber(
    accountNumber,
    oldPhoneNumber,
    newPhoneNumber
  );
  if (success) {
    console.log("Your phone number has been changed.");
  } else {
    console.log("Invalid phone number. Please enter the correct phone number.");
  }
} else {
  console.log("Invalid option");
}
