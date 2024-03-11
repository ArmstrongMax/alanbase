import styled from "styled-components";
import {
  COLOR_AVATAR,
  COLOR_BACKGROUND,
  LIST_HEIGHT,
} from "../../constants/constants.ts";

export const ListContainer = styled.ul`
  padding: 4px 0px;
  border-radius: 4px;
  background-color: ${COLOR_BACKGROUND};
  max-height: ${LIST_HEIGHT};
  overflow: auto;
  position: absolute;
  width: max-content;
  min-width: 250px;
  margin: 0;
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${COLOR_AVATAR};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  align-self: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
