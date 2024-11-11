import { useRouteError } from 'react-router-dom';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div>

          // Adds messages only in a dev environment
        {loadDevMessages()}
        {loadErrorMessages()}

      </div>
    </>
  );
}