import styled, { css } from "styled-components"
import colors from "library/colors"

const btnColors = {
  primary: {
    backgroundColor: colors.primaryColor,
    fontColor: colors.white,
    fontHoverColor: colors.primaryHover,
    borderColor: colors.primaryColor,
    boxShadowColor: colors.primaryColor,
    disabledColor: colors.disabledColor,
  },
  secondary: {
    backgroundColor: colors.white,
    fontColor: colors.primaryColor,
    fontHoverColor: colors.primaryHover,
    borderColor: colors.primaryColor,
    boxShadowColor: false,
    disabledColor: colors.disabledColor,
  },
}

const Button = styled.button`
  display: inline-block;
  font-family: "Rubik", sans-serif;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: none;
  cursor: pointer;
  height: ${props => props.height};
  width: ${props => (props.width ? props.width : "auto")};
  line-height: normal;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => btnColors[props.bsStyle].fontColor};
  border: ${props => (props.border ? `${props.borderWidth} solid ${btnColors[props.bsStyle].borderColor}` : "none")};
  border-radius: ${props => props.borderRadius}px;
  background-color: ${props => btnColors[props.bsStyle].backgroundColor};

  &:hover,
  &:active {
    border-color: ${props => btnColors[props.bsStyle].borderColor};
    opacity: 0.8;
    outline: 0;
  }
`

Button.defaultProps = {
  bsStyle: "primary",
  border: true,
  borderWidth: "1px",
  width: "100px",
  padding: "8px 12px",
  fontSize: "14px",
  borderRadius: "25",
}

export default Button
