const logError = (error, additionalMessage) => {
  console.error(error.message, '\n', additionalMessage);
  console.groupCollapsed('실제 오류');
  console.error(error.stack);
  console.groupEnd();
};

export default logError;
