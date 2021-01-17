/* eslint-disable react/prop-types */
import React from 'react'

import { Button } from '../styles/components/buttonDefault'

interface ButtonDefaultProps {
  text: string,
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  text,
}) => (
  <Button>
    {text}
  </Button>
)

export default ButtonDefault
