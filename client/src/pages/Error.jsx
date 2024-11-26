import { useRouteError } from 'react-router-dom';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import errorPage from '../assets/error-page.jpg';
import './error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className='errorPage'>
        <h3>Oops!</h3>
        <p>Sorry, an unexpected error has occurred.</p>
        <img src={errorPage} alt='Error Page Icon' />
        <span>{error.statusText || error.message}</span>
      </div>
      <div>

        {loadDevMessages()}
        {loadErrorMessages()}

      </div>
    </>
  );
}