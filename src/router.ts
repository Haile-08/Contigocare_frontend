/* Minimal history-based router — two routes, no dependency. */

import { useEffect, useState } from 'react'

export const ROUTES = {
  home: '/',
  privacy: '/privacidad',
} as const

export type Route = (typeof ROUTES)[keyof typeof ROUTES]

/** Unknown paths fall back to the landing page. */
function toRoute(pathname: string): Route {
  return pathname.replace(/\/+$/, '') === ROUTES.privacy ? ROUTES.privacy : ROUTES.home
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => toRoute(window.location.pathname))

  useEffect(() => {
    const sync = () => setRoute(toRoute(window.location.pathname))
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  return route
}

export function navigate(to: Route) {
  if (toRoute(window.location.pathname) === to) return
  window.history.pushState(null, '', to)
  // useRoute listens on popstate, which pushState does not fire on its own.
  window.dispatchEvent(new PopStateEvent('popstate'))
}
