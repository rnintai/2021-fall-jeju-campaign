import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMenuButton = styled.button`
  font-family: "Noto Sans KR", "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  display: inline-block;
  cursor: pointer;
  color: ${(props) => (props.primary ? "white" : props.secondaryColor)};
  background-color: ${(props) => (props.primary ? props.themeColor : "white")};
  border: 1px solid ${(props) => props.secondaryColor};
  font-size: ${(props) => {
    if (props.size === "small") {
      return "0.8rem";
    } else if (props.size === "medium") {
      return "1.1rem";
    } else return "1.4rem";
  }};
  padding: ${(props) => {
    if (props.size === "small") {
      return "0.4rem 1.6rem";
    } else if (props.size === "medium") {
      return "0.6rem 1.8rem";
    } else return "0.8rem 2.0rem";
  }};
`;

export const MenuButton = ({
  primary,
  themeColor,
  secondaryColor,
  size,
  label,
  ...props
}) => {
  return (
    <StyledMenuButton
      primary={primary}
      themeColor={themeColor}
      secondaryColor={secondaryColor}
      size={size}
      {...props}
    >
      {label}
    </StyledMenuButton>
  );
};

MenuButton.propTypes = {
  /**
   * 활성화 -> primary(true), 비활성화 -> secondary(false)
   */
  primary: PropTypes.bool,
  /**
   * 사용할 테마 색상 (활성화 시 background 색상)
   */
  themeColor: PropTypes.string,
  /**
   * 사용할 secondary 색상 (border, 비활성화 시 폰트 색상)
   */
  secondaryColor: PropTypes.string,
  /**
   * 크기 설정
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * 버튼의 label
   */
  label: PropTypes.string.isRequired,
  /**
   * click시의 handler function
   */
  onClick: PropTypes.func,
};

MenuButton.defaultProps = {
  themeColor: "#ec7742",
  secondaryColor: "#c45722",
  primary: false,
  size: "medium",
  onClick: undefined,
};
