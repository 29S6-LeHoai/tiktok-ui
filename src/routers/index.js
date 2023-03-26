// Layouts
import { HeaderOnly } from '~/components/Layouts';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// cấu hình Router không cần login
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },

    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },

    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

// cấu hình các Router cần login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
