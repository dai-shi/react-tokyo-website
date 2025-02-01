import type { PathsForPages, GetConfigResponse } from 'waku/router';

import type { getConfig as Root_getConfig } from './pages/_root';
import type { getConfig as About_getConfig } from './pages/about';
import type { getConfig as CodeOfConduct_getConfig } from './pages/code-of-conduct';
import type { getConfig as Index_getConfig } from './pages/index';
import type { getConfig as MembersIndex_getConfig } from './pages/members/index';

type Page =
  | ({ path: '/_root' } & GetConfigResponse<typeof Root_getConfig>)
  | ({ path: '/about' } & GetConfigResponse<typeof About_getConfig>)
  | ({ path: '/code-of-conduct' } & GetConfigResponse<
      typeof CodeOfConduct_getConfig
    >)
  | ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
  | ({ path: '/members' } & GetConfigResponse<typeof MembersIndex_getConfig>);

declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
