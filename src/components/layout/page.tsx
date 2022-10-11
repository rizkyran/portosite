import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

import { Box } from '@chakra-ui/react'

const Page = forwardRef(({ children, title, ...other }: any, ref) => (
  <Box
    ref={ref}
    {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
))

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Page
