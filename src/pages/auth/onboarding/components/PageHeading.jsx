import React from 'react'
import Onboarding from '../../../../assets/style/Onboarding.module.css'

const PageHeading = ({children}) => {
  return (
    <>
      <h1 className={`${Onboarding.green} `}>{children}</h1>
    </>
  )
}

export default PageHeading