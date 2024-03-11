import React, { useState } from "react";
import { IUser } from "../../types/types";

import arrowIcon from "../../assets/arrowIcon.svg";
import { ArrowIcon, InputContainer, SelectContainer } from "./styled.ts";
import { getTextOrPlaceHolder } from "../../utils/getTextOrPlaceHolder.ts";
import SelectList from "../SelectList/SelectList.tsx";

type SelectProps = {
  onSelect: (user: IUser) => void;
};

const Select: React.FC<SelectProps> = () => {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prevOpen) => !prevOpen);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      {/* Инпут с выбранным пользователем */}
      <InputContainer onClick={toggleOpen} isOpen={isOpen}>
        <span>{getTextOrPlaceHolder(selectedUser)}</span>
        <ArrowIcon src={arrowIcon} isOpen={isOpen} />
      </InputContainer>
      {/* Список пользователей из списка */}
      {isOpen && (
        <SelectList
          handleSelectUser={handleSelectUser}
          selectedUserId={selectedUser?.id}
        />
      )}
    </SelectContainer>
  );
};

export default Select;
