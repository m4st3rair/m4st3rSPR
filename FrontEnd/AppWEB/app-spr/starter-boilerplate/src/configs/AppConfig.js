import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant';
import { env } from './EnvironmentConfig'

export const APP_NAME = 'Barber Admin';
export const API_BASE_URL = env.API_ENDPOINT_URL
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';
export const ESTATUS_FOMR ={
	new:"NEW",
	edit:"EDIT",
	view:"VIEW"
}



export const THEME_CONFIG = {
		"navType": "SIDE",
		"sideNavTheme": "SIDE_NAV_LIGHT",
		"navCollapsed": false,
		"topNavColor": "#3e82f7",
		"headerNavColor": "#ffffffff",
		"locale": "en",
		"currentTheme": "light",
		"direction": "ltr"
  };