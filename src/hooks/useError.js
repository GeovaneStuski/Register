import { useState } from 'react';

export default function useError() {
  const [error, setError] = useState([]);

  function setErrors({ field, message }) {
    if (error.find((Error) => Error.field === field)) {
      return;
    }

    setError((PrevState) => [...PrevState, { field, message }]);
  }

  function removeErrors(fieldName) {
    setError((PrevState) => PrevState.filter((Error) => Error.field !== fieldName));
  }

  function getErrorMensageByFieldName(fieldName) {
    return error.find((Error) => Error.field === fieldName)?.message;
  }

  return {
    setErrors, removeErrors, getErrorMensageByFieldName, error,
  };
}
