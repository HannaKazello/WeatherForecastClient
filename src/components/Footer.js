import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_CURRENT">
      Current
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_FORECAST">
      Forecast
    </FilterLink>
  </p>
)

export default Footer
