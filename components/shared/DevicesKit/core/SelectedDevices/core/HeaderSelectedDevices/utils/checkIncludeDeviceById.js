function checkIncludeDeviceById(id, ...idList) {
  return idList
    .map((idInList) => idInList === id)
    .some((comparisonResult) => comparisonResult);
}

export { checkIncludeDeviceById };
