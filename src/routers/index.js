import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layouts';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// cấu hình Router không cần login
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },

    {
        path: routesConfig.profile,
        component: Profile,
    },

    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },

    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
];

// cấu hình các Router cần login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
