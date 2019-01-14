/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react'
import Loadable from 'react-loadable'

// Rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader'

// Dashboard
const AsyncEcommerceDashboardComponent = Loadable({
  loader: () => import('Routes/dashboard'),
  loading: () => <RctPageLoader />,
})

const AsyncPersonalAccountComponent = Loadable({
  loader: () => import('Routes/personal-account'),
  loading: () => <RctPageLoader />,
})

const AsyncSuggestCandidateComponent = Loadable({
  loader: () => import('Routes/suggest-candidate'),
  loading: () => <RctPageLoader />,
})

/* ---------------- Session ------------------ */

// Session Login
const AsyncSessionLoginComponent = Loadable({
  loader: () => import('Routes/session/login'),
  loading: () => <RctPageLoader />,
})

// Session Lock Screen
const AsyncSessionLockScreenComponent = Loadable({
  loader: () => import('Routes/session/lock-screen'),
  loading: () => <RctPageLoader />,
})

// Session Page 404
const AsyncSessionPage404Component = Loadable({
  loader: () => import('Routes/session/404'),
  loading: () => <RctPageLoader />,
})

// Session Page 500
const AsyncSessionPage500Component = Loadable({
  loader: () => import('Routes/session/500'),
  loading: () => <RctPageLoader />,
})

export {
  AsyncEcommerceDashboardComponent,
  AsyncPersonalAccountComponent,
  AsyncSuggestCandidateComponent,
  AsyncSessionLoginComponent,
  AsyncSessionLockScreenComponent,
  AsyncSessionPage404Component,
  AsyncSessionPage500Component,
}
