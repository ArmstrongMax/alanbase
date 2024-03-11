import React, { useEffect, useState } from "react";
import { ListContainer, Loader } from "./styled.ts";
import SelectItem from "../SelectItem/SelectItem.tsx";
import { IUser } from "../../types/types.ts";
import { getUsers } from "../../api/users.ts";
import { sliceArray } from "../../utils/sliceArray.ts";

interface ISelectListProps {
  handleSelectUser: (user: IUser) => void;
  selectedUserId?: number;
}

const SelectList = ({ handleSelectUser, selectedUserId }: ISelectListProps) => {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [hasMore, setHasMore] = useState(true);

  /**
   * Процесс полученя пользователя
   */
  const fetchUsers = async () => {
    try {
      setIsFetching(true);

      const data = await getUsers(page);
      setUsers((prevUsers) => [...sliceArray(prevUsers, 200), ...data.data]);
      setHasMore(data.meta.to < data.meta.total);
      setIsFetching(false);
    } catch (error) {
      console.log("Error");
    }
  };

  /**
   * Обработчик выбора пользователя
   */
  const handleSelect = (user: IUser) => {
    handleSelectUser(user);
    setPage(1);
    setUsers([]);
  };

  /**
   * Эффект загрузки, зависит от страницы
   */
  useEffect(() => {
    fetchUsers();
  }, [page]);

  /**
   * Если высота содержимого с учетом прокрученной области элемента - высота прокрученной сверху части элемента
    === высоте содержимого вместе с внутренними отступами padding (без полосы)
    и есть еще страницы для загрузки (понимаем из мета-данных),
    то меняем страницу. Это тригерит эффект
   */
  //
  const handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <ListContainer onScroll={handleScroll}>
      {users.map((user) => (
        <SelectItem
          key={user.id}
          user={user}
          handleSelect={handleSelect}
          selected={user.id === selectedUserId}
        />
      ))}
      {isFetching && <Loader />}
    </ListContainer>
  );
};

export default SelectList;
