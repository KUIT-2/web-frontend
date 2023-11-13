import { useRouteError } from 'react-router-dom';

type RouteError = {
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as RouteError).statusText || (error as RouteError).message}
        </i>
      </p>
    </div>
  );
}
