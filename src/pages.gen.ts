import type { PathsForPages, GetConfigResponse } from 'waku/router';

import type { getConfig as Root_getConfig } from './pages/_root';
import type { getConfig as About_getConfig } from './pages/about';
import type { getConfig as Index_getConfig } from './pages/index';

type Page =
  | ({ path: '/_root' } & GetConfigResponse<typeof Root_getConfig>)
  | ({ path: '/about' } & GetConfigResponse<typeof About_getConfig>)
  | ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>);

declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
