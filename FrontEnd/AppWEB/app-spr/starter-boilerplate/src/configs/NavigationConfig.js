import { 
  DashboardOutlined, UserOutlined, CalendarOutlined, NotificationOutlined, WhatsAppOutlined, LoginOutlined, SettingOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'usuarios',
    path: `${APP_PREFIX_PATH}/usuarios`,
    title: 'Usuarios',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'agenda',
    path: `${APP_PREFIX_PATH}/agenda`,
    title: 'Agenda',
    icon: CalendarOutlined ,
    breadcrumb: false,
    submenu: []
  },{
    key: 'notificaciones',
    path: `${APP_PREFIX_PATH}/notificaciones`,
    title: 'Notificaciones',
    icon: NotificationOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'whatsApp',
        path: `${APP_PREFIX_PATH}/notificaciones/whatsApp`,
        title: 'WhatsApp',
        icon: WhatsAppOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'inicio_de_sesion',
            path: `${APP_PREFIX_PATH}/notificaciones/whatsApp/inicio_de_sesion`,
            title: 'Inicio de sesion',
            icon: LoginOutlined,
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'nueva_notificacion',
            path: `${APP_PREFIX_PATH}/notificaciones/whatsApp/nueva_notificacion`,
            title: 'Nueva notificacion',
            icon: NotificationOutlined,
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'appMovil',
        path: `${APP_PREFIX_PATH}/notificaciones/appMovil`,
        title: 'App-Movil',
        icon: NotificationOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  },{
    key: 'configuraciones',
    path: `${APP_PREFIX_PATH}/configuraciones`,
    title: 'Configuraciones',
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: []
  }

]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
