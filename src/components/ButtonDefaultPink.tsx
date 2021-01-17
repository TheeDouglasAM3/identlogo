/* eslint-disable react/prop-types */
import React from 'react'

import { Button } from '../styles/components/buttonDefaultPink'

interface ButtonDefaultPinkProps {
  text: string,
}

const ButtonDefaultPink: React.FC<ButtonDefaultPinkProps> = ({
  text,
}) => (
  <Button>
    {text}
  </Button>
)

export default ButtonDefaultPink
