import styled from "styled-components";
import {
  COLOR_AVATAR,
  COLOR_BACKGROUND,
  COLOR_HOVER,
} from "../../constants/constants.ts";

export const SelectItemContainer = styled.li<{ selected: boolean }>`
  display: flex;
  padding: 5px 10px;
  gap: 10px;
  background-color: ${COLOR_BACKGROUND};
  ${({ selected }) => selected && `border: 2px solid ${COLOR_AVATAR};`}

  &:hover {
    cursor: pointer;
    background-color: ${COLOR_HOVER};
  }
`;

export const ItemAvatar = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  color: white;
  line-height: 1.2;
  background-color: ${COLOR_AVATAR};
`;
