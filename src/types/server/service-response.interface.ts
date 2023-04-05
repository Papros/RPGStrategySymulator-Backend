interface ServiceAPIResponse<T> {
  body: T;
  statusCode: number;
  headers?: Object;
  errorMsg?: string;
}

export { ServiceAPIResponse };
