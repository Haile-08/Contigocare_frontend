import type { MouseEvent, ReactNode } from 'react'
import { navigate, type Route } from '../router'

type RouteLinkProps = {
  to: Route
  className?: string
  children: ReactNode
}

/** A real anchor for crawlers and middle-click, intercepted for plain left-clicks. */
function RouteLink({ to, className, children }: RouteLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}

export default RouteLink
