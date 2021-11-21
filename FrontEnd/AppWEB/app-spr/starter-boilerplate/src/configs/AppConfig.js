import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant';
import { env } from './EnvironmentConfig'

export const APP_NAME = 'Emilus';
export const API_BASE_URL = env.API_ENDPOINT_URL
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';

export const THEME_CONFIG = {
	"navType": "SIDE",
	"sideNavTheme": "SIDE_NAV_DARK",
	"navCollapsed": false,
	"topNavColor": "#3e82f7",
	"headerNavColor": "#ce0000ff",
	"locale": "en",
	"currentTheme": "light",
	"direction": "ltr"
  };