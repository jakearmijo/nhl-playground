import styled from "styled-components";

export const TopNavDiv = styled.div`
  background-color: #333;
  overflow: hidden;
  width: 100%;
`;

export const TopNavAnchor = styled.a`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #ddd;
  color: black;
  }
  &:active {
    background-color: #04AA6D;
  color: white;
  }
`;
