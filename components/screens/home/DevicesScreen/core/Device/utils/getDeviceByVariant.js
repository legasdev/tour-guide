function getDeviceByVariant(variantsList, variant) {
  return variantsList.find(({ id }) => id === variant);
}

export { getDeviceByVariant };
