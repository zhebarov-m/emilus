import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const Home = lazy(() => import(`./pages/home`));
const UserList = lazy(() => import(`./pages/user-list`));
const EditProfile = lazy(() => import(`./pages/user-list/edit-profile`));

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
          <Route path={`${APP_PREFIX_PATH}/home`} component={Home} />
          <Route path={`${APP_PREFIX_PATH}/user-list`} component={UserList} />
          <Route path={`${APP_PREFIX_PATH}/edit-profile/:userId`} component={EditProfile} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);