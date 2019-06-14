import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { FlexColumn } from '../styled'

const PageBanner = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
`

const Header = props => (
  <PageBanner>
    Coucou
  </PageBanner>
)

export default connect()(Header)
