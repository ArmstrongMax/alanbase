
/**
 * Преобразует фамилию в инициал
 * @param lastName фамилия
 * @returns букву инициала
 */
export const getInitials = (lastName: string) =>
  lastName.charAt(0).toUpperCase();

  