import React from "react"
import styled from "styled-components"
import Textbox from "dumbComponents/common/UI/Textbox"

const SearchBox = styled(Textbox)`
  width: 100%;
  height: 50px;
  margin: 20px 0;
`

const Search = ({ searchResults }) => (
  <SearchBox onChange={e => searchResults(e.target.value)} placeholder="Search For a particular dish" />
)

export default Search
