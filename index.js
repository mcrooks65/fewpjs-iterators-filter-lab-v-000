function findMatching (list, name) {
  return list.filter((driverName) => {
    return driverName.toLowerCase() === name.toLowerCase
  });
}
