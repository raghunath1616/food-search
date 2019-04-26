import styled from "styled-components"

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: ${props => props.pl}px;
  padding-right: ${props => props.pl}px;
  max-width: 1030px;
  width: 100%;
`
Container.defaultProps = {
  pl: "40",
  pr: "40",
}

export default Container
