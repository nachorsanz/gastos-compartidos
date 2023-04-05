export const convertDateFormat = (dateString: string): string => {
  const [day, month, year] = dateString.split('/');
  return `${month}/${day}/${year}`;
};
