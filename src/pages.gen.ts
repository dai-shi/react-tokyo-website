import type { PathsForPages, GetConfigResponse } from 'waku/router';

import type { getConfig as About_getConfig } from './pages/about';
import type { getConfig as Index_getConfig } from './pages/index';

type Page = {
  DO_NOT_USE_pages:| ({path: '/about'} & GetConfigResponse<typeof About_getConfig>)
| ({path: '/'} & GetConfigResponse<typeof Index_getConfig>)
};

  declare module 'waku/router' {
    interface RouteConfig {
      paths: PathsForPages<Page>;
    }
    interface CreatePagesConfig {
      pages: Page;
    }
  }
  