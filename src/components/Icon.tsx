import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { resolveIcon } from './icons'
import type { IconName } from '../types'

export interface IconProps {
  name: IconName
  className?: string
  'aria-hidden'?: boolean
}

export default function Icon({ name, className, 'aria-hidden': ariaHidden = true }: IconProps) {
  const definition: IconDefinition = resolveIcon(name)
  return (
    <FontAwesomeIcon icon={definition} className={className} aria-hidden={ariaHidden} />
  )
}