import React from 'react'

import { getLocalDate } from '../../utils'

import './card-header.css'


const CardHeader = () => (
  <div>
    <h1>Kraków, Poland</h1>
    <p>{getLocalDate()}</p>
    <p>Częściowe zachmurzenie</p>
  </div>
)


export default CardHeader
