/**
 * ...
 */

import React from 'react'
import Currency from 'react-currency-formatter'
import VODPricingStyle from './styles/StyleVODPricing'


const VODPricing = ({
  active,
  price,
}) => {

  const { 
    DivRow,
  } = VODPricingStyle

  if(!active) {
    return false
  }

  return (
    <DivRow>
      <ul className="pricing-rent">
        <li className="price-us">
          <Currency
            quantity={ price.USD }
            currency="USD"
          />
        </li>
        <li className="price-ca">
          <Currency
            quantity={ price.CAD }
            currency="CAD"
          />
        </li>
        <li className="price-eu">
          <Currency
            quantity={ price.EUR }
            currency="EUR"
          />
        </li>
      </ul>
    </DivRow>
  )
}

export default VODPricing
