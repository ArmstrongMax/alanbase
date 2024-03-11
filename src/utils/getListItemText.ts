export const getListItemText = (
  firstName: string,
  lastName: string,
  job?: string
) => {
  return `${lastName} ${firstName}${job ? `, ${job}` : ""}`;
};
