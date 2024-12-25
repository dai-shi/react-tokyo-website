import type { PathsForPages, GetConfigResponse } from 'waku/router';

import type { getConfig as Index_getConfig } from './pages/index';
import type { getConfig as Root_getConfig } from './pages/_root';

type Page =
  | ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
  | ({ path: '/_root' } & GetConfigResponse<typeof Root_getConfig>);

declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
