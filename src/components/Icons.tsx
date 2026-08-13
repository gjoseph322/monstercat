import React from 'react'
export const SPRITE_URL =
  `src/assets/sprite/sprite.svg`
type IconProps = {
    name: string
    className?: string
}
const Icons = ({name, className}: IconProps) => {
    return (
        <svg className={className}>
            <use xlinkHref={`${SPRITE_URL}#icon-${name}`}/>
        </svg>
    )
}

export default Icons
