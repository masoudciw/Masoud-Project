import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home';
import Error from './pages/Error';
import ContactUs from './components/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './components/ForgotPassword';
import AboutUS from './components/AboutUS/AboutUS';
import OurTeam from './components/AboutUS/OurTeam';
import FrontendDevelopers from './components/AboutUS/FrontendDevelopers';
import BackendProgrammers from './components/AboutUS/BackendProgrammers';
import Account from './pages/Account';
import Auth from './utils/auth.js';
import ChangePassword from './components/AccountComponents/ChangePassword';
import Post from './components/AccountComponents/Post';
import Profile from './components/AccountComponents/Profile';
import MakeSecretCode from './components/AccountComponents/MakeSecretCode';
import SecretCodes from './components/AccountComponents/SecretCodes';
import Users from './components/AccountComponents/Users';
import SingleUser from './components/AccountComponents/SingleUser.jsx';
import SingleSecretCode from './components/AccountComponents/SingleSecretCode.jsx';
import Posts from './components/AccountComponents/Posts';
import SinglePost from './components/AccountComponents/SinglePost.jsx';
import Products from './components/Products/index.jsx';
import SingleProduct from './components/SingleProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
      {
        path: '/signin',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/account',
        element: Auth.loggedIn() ? <Account /> : <Navigate to='/signin' />,
        children: [
          {
            path: '/account/changePassword/:userId',
            element: <ChangePassword />,
          },
          {
            path: '/account/post',
            element: Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <Post /> : <Navigate to='/' />,
          },
          {
            path: '/account/profile/:userId',
            element: <Profile />,
          },
          {
            path: '/account/makeSecretCode',
            element: Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <MakeSecretCode /> : <Navigate to='/' />,
          },
          {
            path: '/account/secretCodes',
            element: Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <SecretCodes /> : <Navigate to='/' />,
          },
          {
            path: '/account/secretCodes/:secretCodeId',
            element: Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <SingleSecretCode /> : <Navigate to='/' />,
          },
          {
            path: '/account/users',
            element: Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <Users /> : <Navigate to='/' />,
          },
          {
            path: '/account/users/:userId',
            element: Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <SingleUser /> : <Navigate to='/' />,
          },
          {
            path: '/account/posts',
            element: Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <Posts /> : <Navigate to='/' />,
          },
          {
            path: '/account/posts/:postId',
            element: Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <SinglePost /> : <Navigate to='/' />,
          },
        ],
      },
      {
        path: '/forgotpassword',
        element: <ForgotPassword />,
      },
      {
        path: '/aboutus',
        element: <AboutUS />,
        children: [
          {
            path: '/aboutus/ourteam',
            element: <OurTeam />,
          },
          {
            path: '/aboutus/frontendprogrammers',
            element: <FrontendDevelopers />,
          },
          {
            path: '/aboutus/backendprogrammers',
            element: <BackendProgrammers />,
          }
        ],
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:postId',
        element: <SingleProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
