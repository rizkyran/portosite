import React from 'react'

import Page from '../layout/page'
import { Head } from './Head'

export default (props: any) => {
  return (
    <Page title='Tes'>
      <Head {...props} />
    </Page>
  )
}
