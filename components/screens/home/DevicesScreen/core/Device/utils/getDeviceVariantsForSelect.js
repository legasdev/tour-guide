function getDeviceVariantsForSelect(devicesVariants) {
  return devicesVariants.map(({ id, label }) => ({
    id,
    label,
  }));
}

export { getDeviceVariantsForSelect };
