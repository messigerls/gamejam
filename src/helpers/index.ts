export const calculateDiffDay = (time: number) => {
  const days = Math.round(time / (1000 * 3600 * 24));
  const hours = (time - days * 1000 * 3600 * 24) / (1000 * 3600)

  return { days, hours };
}