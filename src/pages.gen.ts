// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Root_getConfig } from './pages/_root';
// prettier-ignore
import type { getConfig as About_getConfig } from './pages/about';
// prettier-ignore
import type { getConfig as CodeOfConduct_getConfig } from './pages/code-of-conduct';
// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as Members_getConfig } from './pages/members';
// prettier-ignore
import type { getConfig as Sponsors_getConfig } from './pages/sponsors';

// prettier-ignore
type Page =
| ({ path: '/_root' } & GetConfigResponse<typeof Root_getConfig>)
| ({ path: '/about' } & GetConfigResponse<typeof About_getConfig>)
| ({ path: '/code-of-conduct' } & GetConfigResponse<typeof CodeOfConduct_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/members' } & GetConfigResponse<typeof Members_getConfig>)
| ({ path: '/sponsors' } & GetConfigResponse<typeof Sponsors_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  