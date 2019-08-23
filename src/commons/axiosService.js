import axios from "axios";
class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }
  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url) {
    return this.instance.get(url, {
      headers: {
        Authorization:
          "Kmin eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI2NDYyODY2MDgsImlkIjoxLCJvcmlnX2lhdCI6MTU2NjI4NjYwOCwicm9sZSI6ImFkbWluaXN0cmF0b3IifQ.Gy4QtSx97hdOvG-wo8oGjiR8zZm08b7_MQVoe8GYvmo"
      }
    });
  }
}

export default new AxiosService();
