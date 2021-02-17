import { useEffect } from 'react';

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `${count}:customHook`;
  }, [count]);

  return [count];
  //this hook doesnt need to return anything still needs to be in function body to work
};

export default useDocumentTitle;
