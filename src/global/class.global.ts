export interface ParamsResponse {
  keySearch: string;
  itemsPerPage: number;
  currentPage: number;
  totalPage: number;
  nextPage: number | null;
  prevPage: number | null;
  firstPage: number;
  lastPage: number;
}

export class ResponseData<D> {
  statusCode: number;
  message: string;
  params?: ParamsResponse;
  data: D;

  constructor(
    data: D,
    statusCode: number,
    message: string,
    params?: ParamsResponse,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.params = params;
    this.data = data;
    return this;
  }
}
