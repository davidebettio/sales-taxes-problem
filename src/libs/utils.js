export const roundNearestFiveCents = (price) => {
  const nearestFiveCents = 1.0 / 0.05;
  return Math.ceil(price * nearestFiveCents) / nearestFiveCents;
};

export default {
  roundNearestFiveCents,
};
