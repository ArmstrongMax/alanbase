import { PLACEHOLDER } from "../constants/constants.ts";
import { IUser } from "../types/types.ts";
import { getListItemText } from "./getListItemText.ts";

/**
 * Если выбора нет, то возвращается Placegolder, иначе преобразует данные пользователя по формату
 * @param user Пользователь типа IUSer или null
 * @returns данные пользователя по формату
 */

export const getTextOrPlaceHolder = (user: IUser | null) => {
  if (!user) return PLACEHOLDER;
  return getListItemText(user.first_name, user.last_name, user.job);
};
