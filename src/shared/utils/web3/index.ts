export const formatAddressToShort = (address: string): string => {
  const firstPart = address.slice(0, 9);
  const lastPart = address.slice(-4);

  return `${firstPart}...${lastPart}`;
};
