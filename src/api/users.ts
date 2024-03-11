import { IGetUsersResponse } from "../types/types";

/**
 * Запрос на получение пользователей
 * @param page страница пагинации
 * @returns массив пользователей и мета-данные пагинации
 */

export const getUsers = async (page: number) => {
  const response = await fetch(
    `https://alanbase.vercel.app/api/users?page=${page}&limit=50`
  );
  const data: IGetUsersResponse = await response.json();
  return data;
};
