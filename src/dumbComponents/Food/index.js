import React from "react"
import Container from "container/Food"
import StyledContainer from "dumbComponents/common/StyledComponents/Container"
import Paragraph from "dumbComponents/common/Typography/Paragraph"
import styled, { css } from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag, faFilter } from "@fortawesome/free-solid-svg-icons"
import colors from "library/colors"
import Search from "./Search"
import FoodCard from "./FoodCard"
import Favourites from "./Favourites"

library.add(faShoppingBag)
library.add(faFilter)

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const FoodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  small {
    color: #c6c9cb;
    font-size: 14px;
  }
`

const Tabs = styled.ul`
  display: flex;
  padding: 0px;
  margin: 20px 0;
  margin-top: 15px;
  position: relative;
`
const Tab = styled.li`
  padding: 10px 0;
  margin-right: 20px;
  position: relative;
  top: 3px;
  ${props => props.isActive
    && css`
      border-bottom: ${colors.primaryColor} solid 4px;
    `}
`

const Anchor = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #354052;
  text-decoration: none;
`

const FilterContainer = styled.div`
  width: 100%;
  overflow: auto;
`

class FoodLists extends React.Component {
  state = {
    activeTab: "Dessert",
  }

  componentDidMount() {
    const { getFoodLists } = this.props
    getFoodLists()
  }

  changeActiveTab = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      foods: { categories },
      searchResults,
      favourites,
      filteredResults,
    } = this.props
    const { activeTab } = this.state
    return (
      <StyledContainer>
        <Wrapper>
          <TitleSection>
            <div>
              <Paragraph size="16" fontWeight={500}>
                FAVOURITES
              </Paragraph>
              <small>Enjoy what you have been ordering</small>
            </div>
            <div>
              <FontAwesomeIcon icon="shopping-bag" />
            </div>
          </TitleSection>
          <Favourites favourites={favourites} />
          <Search searchResults={searchResults} />
          <TitleSection>
            <div>
              <Paragraph size="16" fontWeight={500}>
                SELECT CATEGORIES
              </Paragraph>
            </div>
            <div>
              Filter&nbsp;
              <FontAwesomeIcon icon="filter" />
            </div>
          </TitleSection>
          <FilterContainer>
            <Tabs>
              {categories
                && categories.map(category => (
                  <Tab key={category.name} isActive={activeTab === category.name}>
                    <Anchor href="javascript:void(0);" onClick={() => this.changeActiveTab(category.name)}>
                      {category.name}
                    </Anchor>
                  </Tab>
                ))}
            </Tabs>
          </FilterContainer>
          <FoodContainer>
            {filteredResults && filteredResults.map(food => <FoodCard key={food.name} food={food} />)}
          </FoodContainer>
        </Wrapper>
      </StyledContainer>
    )
  }
}

export default Container(FoodLists)
