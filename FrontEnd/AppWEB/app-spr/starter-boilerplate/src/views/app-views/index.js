import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/agenda`} component={lazy(() => import(`./agenda/module`))} />
        <Route path={`${APP_PREFIX_PATH}/usuarios`} component={lazy(() => import(`./usuarios/module`))}/>
        <Route path={`${APP_PREFIX_PATH}/configuraciones`} component={lazy(() => import(`./configuraciones/module`))} />
        <Route path={`${APP_PREFIX_PATH}/notificaciones/whatsApp/inicio_de_sesion`} component={lazy(() => import(`./notificaciones/whatsapp/inicio_de_sesion/module`))} />
        <Route path={`${APP_PREFIX_PATH}/notificaciones/whatsApp/nueva_notificacion`} component={lazy(() => import(`./notificaciones/whatsapp/nueva_notificacion/module`))} />
        <Route path={`${APP_PREFIX_PATH}/notificaciones/appMovil`} component={lazy(() => import(`./notificaciones/appMovil/module`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);