function displayInformation(data) {
  Object.entries(data).forEach(([key, value]) =>
    console.log(`My ${key} is ${value}`)
  );
}

module.exports = displayInformation;