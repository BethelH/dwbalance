const isNxxStatus = (statusCode, n) => Math.floor(statusCode / 100) === n;

export { isNxxStatus }