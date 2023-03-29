// import React from 'react';
// import toast, { Toaster } from 'react-hot-toast';

// const successNotify = (message) => toast.success(message);
// const errorNotify = (message) => toast(message, { icon: '😝' });

// export function useToast() {
//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={true} />
//     </>
//   );
// }

// export default useToast;

// export { successNotify, errorNotify };

import React, { useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const successNotify = (message) => toast.success(message);
export const errorNotify = (message) => toast(message, { icon: '😝' });

export function useAsyncToast() {
  const asyncToast = useCallback((resultPromise, data, messages) => {
    toast
      .promise(
        resultPromise,
        {
          loading: messages.loading,
          success: messages.success(data),
          error: (err) => messages.error(err),
        },
        {
          style: {
            marginLeft: '300px',
            minWidth: '250px',
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { asyncToast };
}

export function ToastContainer() {
  return <Toaster position="bottom-center" reverseOrder={true} />;
}
