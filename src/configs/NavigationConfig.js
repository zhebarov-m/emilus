import {
    DashboardOutlined,
    AppstoreOutlined,
    PieChartOutlined,
    EnvironmentOutlined,
    AntDesignOutlined,
    SafetyOutlined,
    StopOutlined,
    DotChartOutlined,
    MailOutlined,
    MessageOutlined,
    CalendarOutlined,
    BulbOutlined,
    InfoCircleOutlined,
    CompassOutlined,
    LayoutOutlined,
    DesktopOutlined,
    FileDoneOutlined,
    CommentOutlined,
    RobotOutlined,
    PlusCircleOutlined,
    FundOutlined,
    UserOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,
    PictureOutlined,
    GiftOutlined,
    ShopOutlined,
    UsergroupAddOutlined,
    SettingOutlined,
    MobileOutlined,
    FileTextOutlined,
    BookOutlined,
    FileUnknownOutlined,
    ProfileOutlined
} from '@ant-design/icons';

import {APP_PREFIX_PATH} from 'configs/AppConfig'

const mainNavTree = [{
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
        {
            key: 'main-dashboards',
            path: `${APP_PREFIX_PATH}/main/dashboard`,
            title: 'sidenav.main.dashboard',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-catalog',
            path: `${APP_PREFIX_PATH}/main/catalog`,
            title: 'sidenav.main.catalog',
            icon: ShoppingCartOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'main-catalog-products',
                    path: `${APP_PREFIX_PATH}/main/catalog/product`,
                    title: 'sidenav.main.catalog.products',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'main-catalog-categories',
                    path: `${APP_PREFIX_PATH}/main/catalog/add-categories`,
                    title: 'sidenav.main.catalog.categories',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalog-collections',
                    path: `${APP_PREFIX_PATH}/main/catalog/collections`,
                    title: 'sidenav.main.catalog.collections',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalog-combo',
                    path: `${APP_PREFIX_PATH}/main/catalog/combo`,
                    title: 'sidenav.main.catalog.combo',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                }
            ]
        },
        {
            key: 'main-orders',
            path: `${APP_PREFIX_PATH}/main/orders`,
            title: 'sidenav.main.orders',
            icon: ShoppingOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-clients',
            path: `${APP_PREFIX_PATH}/main/clients`,
            title: 'sidenav.main.clients',
            icon: UserOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'main-clients-clients-list',
                    path: `${APP_PREFIX_PATH}/user-list`,
                    title: 'sidenav.main.clients.clients-list',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'main-clients-clients-groups',
                    path: `${APP_PREFIX_PATH}/main/clients/clients-groups`,
                    title: 'sidenav.main.clients.clients-groups',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-banners',
            path: `${APP_PREFIX_PATH}/main/banners`,
            title: 'sidenav.main.banners',
            icon: PictureOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-promo-codes',
            path: `${APP_PREFIX_PATH}/main/promo-codes`,
            title: 'sidenav.main.promo-codes',
            icon: GiftOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-offline-places',
            path: `${APP_PREFIX_PATH}/main/offline-places`,
            title: 'sidenav.main.offline-places',
            icon: ShopOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'main-offline-places-addresses',
                    path: `${APP_PREFIX_PATH}/main/offline-places/addresses`,
                    title: 'sidenav.main.offline-places.addresses',
                    icon: UserOutlined,
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'main-offline-places-geofence',
                    path: `${APP_PREFIX_PATH}/main/offline-places/geofence`,
                    title: 'sidenav.main.offline-places.geofence',
                    icon: UserOutlined,
                    breadcrumb: true,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-staff',
            path: `${APP_PREFIX_PATH}/main/staff`,
            title: 'sidenav.main.staff',
            icon: UsergroupAddOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-mailing-list',
            path: `${APP_PREFIX_PATH}/main/mailing-list`,
            title: 'sidenav.main.mailing-list',
            icon: MailOutlined,
            breadcrumb: true,
            submenu: []
        }
    ]
}
]

const systemsNavTree = [{
    key: 'systems',
    path: `${APP_PREFIX_PATH}/systems`,
    title: 'sidenav.systems',
    icon: AppstoreOutlined,
    breadcrumb: false,
    submenu: [
        {
            key: 'systems-settings',
            path: `${APP_PREFIX_PATH}/systems/settings`,
            title: 'sidenav.systems.settings',
            icon: SettingOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'systems-mobile-app',
            path: `${APP_PREFIX_PATH}/systems/mobile-app`,
            title: 'sidenav.systems.mobile-app',
            icon: MobileOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'systems-logs',
            path: `${APP_PREFIX_PATH}/systems/logs`,
            title: 'sidenav.systems.logs',
            icon: FileTextOutlined,
            breadcrumb: true,
            submenu: []
        },
    ]
}]

const navigationConfig = [
    ...mainNavTree,
    ...systemsNavTree
]

export default navigationConfig;
