import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const successNotify = (message) => toast.success(message);
const errorNotify = (message) => toast(message, { icon: '😝' });

export function useToast() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default useToast;

export { successNotify, errorNotify };
