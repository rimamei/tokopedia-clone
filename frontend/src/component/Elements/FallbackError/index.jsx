function FallbackError(props) {
  return (
    <div
      role="alert"
      className="min-h-screen grid place-content-center w-full p-5"
    >
      <p>Something went wrong:</p>
      <div className="text-red-500 font-medium mt-5">
        {props.error.message || 'Please, contact the developer'}
      </div>
    </div>
  );
}

export default FallbackError;
