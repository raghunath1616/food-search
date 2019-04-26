import React from "react"
import styled from "styled-components"
import FoodCard from "./FoodCard"

const Wrapper = styled.div`
  display: flex;
  marging: 15px 0;
  width: 100%;
  overflow: auto;
`

const Favourites = ({ favourites }) => (
  <Wrapper>
    {favourites
      && favourites.map(food => <FoodCard height="200px" width="auto" type="favourite" key={food.name} food={food} />)}
  </Wrapper>
)

export default Favourites
