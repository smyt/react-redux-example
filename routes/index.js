/**
 * Description of index.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 23.10.18 21:49
 */
import {
  AsyncSessionLockScreenComponent,
  AsyncEcommerceDashboardComponent,
  AsyncPersonalAccountComponent,
  AsyncSuggestCandidateComponent,
  AsyncSessionLoginComponent,
} from '../components/async'

const routes = [{
  key: 'dashboard',
  path: '/dashboard',
  component: AsyncEcommerceDashboardComponent,
  isPrivate: true,
}, {
  key: 'personal-account',
  path: '/personal-account',
  component: AsyncPersonalAccountComponent,
  isPrivate: true,
}, {
  key: 'suggest-candidate',
  path: '/suggest-candidate/:id',
  component: AsyncSuggestCandidateComponent,
  isPrivate: true,
}, {
  key: 'login',
  path: '/login',
  component: AsyncSessionLoginComponent,
  isPrivate: false,
}, {
  key: 'lock',
  path: '/lock',
  component: AsyncSessionLockScreenComponent,
  isPrivate: false,
}]

export default routes
