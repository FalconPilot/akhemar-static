import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import Header from '../header'
import { FlexRow, FlexColumn } from '../styled'

const GamePageWrapper = styled(FlexColumn)`
  width: 100%;
`

const SideMenu = styled(FlexColumn)`
`

const SideMenuItem = styled('button')`
  background-color: transparent;
  border: none;
`

const CategoryHeader = styled(SideMenuItem)`
`

const PageButton = styled(SideMenuItem)`
`

const ContentWrapper = styled(FlexColumn)`
`

const renderPageButton = page => (
  <PageButton />
)

const renderCategory = category => (
  <React.Fragment key={category.selfPage}>
    <CategoryHeader>
      {category.name}
    </CategoryHeader>
    {category.sub && category.sub.map(sub => (
      Array.isArray(sub.categories)
        ? sub.categories.map(renderCategory)
        : Array.isArray(sub.pages)
          ? sub.pages.map(renderPageButton)
          : null
    ))}
  </React.Fragment>
)

const GamePage = ({ game, ...props }) => console.log(game) || (
  <GamePageWrapper>
    <Header />
    <FlexRow>
      <SideMenu>
        {game.categories.map(renderCategory)}
      </SideMenu>
      <ContentWrapper>
      </ContentWrapper>
    </FlexRow>
  </GamePageWrapper>
)

const mapStateToProps = ({ page }) => ({
  pageSlug: page.currentPageSlug
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
