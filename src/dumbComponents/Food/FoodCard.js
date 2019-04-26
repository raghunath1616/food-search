import React from "react"
import styled, { css } from "styled-components"
import Paragraph from "dumbComponents/common/Typography/Paragraph"
import Button from "dumbComponents/common/UI/Button"

const Image = styled.img`
  height: ${props => (props.height ? props.height : "250px")};
  width: ${props => (props.width ? props.width : "400px")};
  @media (max-width: 720px) {
    height: 200px;
    width: auto;
  }
`

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: space-around;
  margin: ${props => (props.type ? "10px 15px" : "10px 0")};
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Details = styled.div`
  width: ${props => (props.type ? "50%" : "300px")};
  @media (max-width: 720px) {
    width: 70%;
    p {
      font-size: 12px;
    }
  }
`

const AddToBag = styled.div`
  button {
    @media (max-width: 720px) {
      width: 75px;
      font-size: 10px;
    }
  }
`

export const FoodCard = ({
  food, height, width, type,
}) => (
  <StyledCard type={type}>
    <Image src={food.image} alt={food.name} height={height} width={width} />
    <Content>
      <Details type={type}>
        <Paragraph size={type ? "12" : "16"} fontWeight={500}>
          {food.name}
        </Paragraph>
        <Paragraph size={type ? "12" : "16"}>{food.price}</Paragraph>
      </Details>
      <AddToBag>
        <Button>{type ? "Reorder" : "Add to bag"}</Button>
      </AddToBag>
    </Content>
  </StyledCard>
)

export default FoodCard
