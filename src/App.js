import React, { useEffect, Component } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';
import './default.scss';

//Components
import AdminToolbar from './components/AdminToolbar';

//Higher Order Components
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

//Layouts
import AdminLayout from './layout/AdminLayout';
import MainLayout from './layout/MainLayout';
import AccountLayout from './layout/AccountLayout';

//Pages
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import Cart from './pages/Cart';

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
      <div className="App">
        <AdminToolbar />
        <Switch>
          <Route exact path="/" render={() => (
            <MainLayout>
              <Homepage/>
            </MainLayout>
          )} />

          <Route exact path="/signup" render={() => (
            <AccountLayout>
              <SignUp/>
            </AccountLayout>
          )} />

          <Route exact path="/signin" render={() => (
            <AccountLayout>
              <SignIn/>
            </AccountLayout>
          )} />
          <Route exact path="/cart" render={() => (
            <MainLayout>
              <Cart/>
            </MainLayout>
          )} />

          <Route path="/admin" render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )} />
        </Switch>
      </div>
  );
} 

export default App;
