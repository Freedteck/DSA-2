const csvData =
  "First Name,Last Name,Age\nOnome,Ehigiator,45\nAdegoke,Akeem-omosanya,67\nBukola,Ehigiator,66\nOlufunmi,Aremu,34\nIfeanyichukwu,Ekwueme,54\nIsioma,Mustapha,57\nAyebatari,Joshua,25\nNnamdi,Olawale,76\nLola,Abosede,45\nEmeka,Oyelude,34\nAminu,Ogunbanwo,67\nSimisola,Ekwueme,98\nAyebatari,Busari,56\nChinyere,Uchechi,52\nAdeboye,Jamiu,84\nTitilayo,Kimberly,56\nChimamanda,Ehigiator,34\nBukola,Adegoke,57\nCherechi,Elebiyo,59\nTitilayo,Afolabi,90";

const rows = csvData.split("\n").slice(1);
const records = rows.map((row) => {
  const [firstName, lastName, age] = row.split(",");
  return { firstName, lastName, age: parseInt(age, 10) };
});

const sortOption = prompt(
  "Enter 1 to sort by First Name\nEnter 2 to sort by Last Name\nEnter 3 to sort by Age"
);
if (sortOption === "1") {
  records.sort((a, b) => a.firstName.localeCompare(b.firstName));
} else if (sortOption === "2") {
  records.sort((a, b) => a.lastName.localeCompare(b.lastName));
} else if (sortOption === "3") {
  records.sort((a, b) => a.age - b.age);
} else {
  console.log("Invalid option");
}

console.log("Sorted records:");
records.forEach((record) => {
  console.log(`${record.firstName} ${record.lastName}, Age: ${record.age}`);
});
