import React from "react";
import { getInitials } from "../../utils/getInitials.ts";
import { IUser } from "../../types/types";
import { ItemAvatar, SelectItemContainer } from "./styled.ts";
import { getListItemText } from "../../utils/getListItemText.ts";

interface ISelectItemProps {
  user: IUser;
  handleSelect: (user: IUser) => void;
  selected: boolean;
}

const SelectItem: React.FC<ISelectItemProps> = ({
  user,
  handleSelect,
  selected,
}) => {
  const { first_name, last_name, job } = user;
  return (
    <SelectItemContainer onClick={() => handleSelect(user)} selected={selected}>
      <ItemAvatar>{getInitials(last_name)}</ItemAvatar>
      <span>{getListItemText(first_name, last_name, job)}</span>
    </SelectItemContainer>
  );
};

export default SelectItem;
