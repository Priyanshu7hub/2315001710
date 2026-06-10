export const logger = (action, data = {}) => {
  const log = {
    timestamp: new Date().toISOString(),
    action,
    data,
  };

  console.log(log);
};