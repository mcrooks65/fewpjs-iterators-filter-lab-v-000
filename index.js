let even = arr.filter(n => {
  return n % 2 === 0;
});
// even = [2,4,6]

function findMatching (list, name) {
  return list.filter((driverName) => {
    return driverName.toLowerCase() === name.toLowerCase
  })
}
