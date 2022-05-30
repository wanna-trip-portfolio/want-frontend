import axios from 'axios';
import qs from 'qs';

// 백엔드 응답 형식
export interface ResponseForm<T> {
  result: string;
  data: T;
}

axios.defaults.withCredentials = true;

//TODO : 전역 Error 처리 추가해야함
class APITemplate {
  private readonly SERVER_URL;

  constructor() {
    this.SERVER_URL = `http://localhost:8080/`;
  }

  public async get<ResT>(url: string): Promise<ResT> {
    const response = await axios.get(this.SERVER_URL + url);
    const body: ResponseForm<ResT> = response.data;
    console.log(`API 호출`);
    console.log(body.data);
    return body.data;
  }

  public async getQ<QueryT, ResT>(url: string, queryString?: QueryT): Promise<ResT> {
    const response = await axios.get(this.SERVER_URL + url, {
      params: queryString,
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    });
    const body: ResponseForm<ResT> = response.data;
    console.log(`API 호출`);
    console.log(body.data);

    return body.data;
  }

  public async post<ReqT, ResT>(url: string, payload: ReqT): Promise<ResT> {
    const response = await axios.post(this.SERVER_URL + url, payload);
    const body: ResponseForm<ResT> = response.data;
    console.log(`API 호출`);
    console.log(body.data);

    return body.data;
  }

  public async patch<ReqT, ResT>(url: string, payload?: ReqT): Promise<ResT> {
    const response = await axios.patch(this.SERVER_URL + url, payload);
    const body: ResponseForm<ResT> = response.data;
    console.log(`API 호출`);
    console.log(body.data);

    return body.data;
  }

  public async patchQ<ReqT, QueryT, ResT>(
    url: string,
    payload?: ReqT,
    queryString?: QueryT
  ): Promise<ResT> {
    const response = await axios.patch(this.SERVER_URL + url, payload, {
      params: queryString,
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    });
    const body: ResponseForm<ResT> = response.data;
    console.log(`API 호출`);
    console.log(body.data);

    return body.data;
  }

  public async delete<ResT>(url: string) {
    const response = await axios.delete(this.SERVER_URL + url);
    const body: ResponseForm<ResT> = response.data;
    console.log(`API 호출`);
    console.log(body.data);

    return body.data;
  }

  public async deleteQ<QueryT, ResT>(url: string, queryString?: QueryT) {
    const response = await axios.delete(this.SERVER_URL + url, {
      params: queryString,
      paramsSerializer: (params) => {
        // console.log('qs', qs.stringify(params));
        return qs.stringify(params);
      },
    });
    const body: ResponseForm<ResT> = response.data;

    return body.data;
  }
}

export const API = new APITemplate();
