import styled from "styled-components";
import { COLOR_AVATAR, COLOR_BACKGROUND } from "../../constants/constants.ts";

export const InputContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background: ${COLOR_BACKGROUND};
  border-radius: 4px;
  height: 32px;
  box-sizing: border-box;
  padding: 5px 10px;
  min-width: 250px;
  cursor: pointer;

  ${({ isOpen }) => isOpen && `border: 1px solid ${COLOR_AVATAR};`}
`;

export const ArrowIcon = styled.img<{ isOpen: boolean }>`
  width: 15px;
  height: 20px;
  ${({ isOpen }) => isOpen && `transform: scaleY(-1);`}
`;

export const SelectContainer = styled.div`
  position: relative;
`;
