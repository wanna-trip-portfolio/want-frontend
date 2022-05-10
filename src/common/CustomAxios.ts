import axios from 'axios';
import qs from 'qs';

// 백엔드 응답 형식
export interface CommonResponse<T> {
    result: string;
    data: T;
}

//TODO : 전역 Error 처리 어떻게 할 것인가
//TODO : 블로그 포스팅
class APITemplate {
    private readonly PREFIX: string;

    constructor(prefix: string) {
        this.PREFIX = prefix;
    }

    public async get<ResT>(url: string): Promise<ResT> {
        const response = await axios.get(this.PREFIX + url);
        const body: CommonResponse<ResT> = response.data;
        console.log(`API 호출`);
        console.log(body.result);
        console.log(body.data);

        return body.data;
    }

    public async getQ<QueryT, ResT>(
        url: string,
        queryString?: QueryT,
    ): Promise<ResT> {
        const response = await axios.get(this.PREFIX + url, {
            params: queryString,
            paramsSerializer: params => {
                return qs.stringify(params);
            },
        });
        const body: CommonResponse<ResT> = response.data;
        console.log(`API 호출`);
        console.log(body.result);
        console.log(body.data);

        return body.data;
    }

    public async post<ReqT, ResT>(url: string, payload: ReqT): Promise<ResT> {
        const response = await axios.post(this.PREFIX + url, payload);
        const body: CommonResponse<ResT> = response.data;
        console.log(`API 호출`);
        console.log(body.result);
        console.log(body.data);

        return body.data;
    }

    public async patch<ReqT, ResT>(url: string, payload?: ReqT): Promise<ResT> {
        const response = await axios.patch(this.PREFIX + url, payload);
        const body: CommonResponse<ResT> = response.data;
        console.log(`API 호출`);
        console.log(body.result);
        console.log(body.data);

        return body.data;
    }

    public async patchQ<ReqT, QueryT, ResT>(
        url: string,
        payload?: ReqT,
        queryString?: QueryT,
    ): Promise<ResT> {
        const response = await axios.patch(this.PREFIX + url, payload, {
            params: queryString,
            paramsSerializer: params => {
                return qs.stringify(params);
            },
        });
        const body: CommonResponse<ResT> = response.data;
        console.log(`API 호출`);
        console.log(body.result);
        console.log(body.data);

        return body.data;
    }

    public async delete<ResT>(url: string) {
        const response = await axios.delete(this.PREFIX + url);
        const body: CommonResponse<ResT> = response.data;
        console.log(`API 호출`);
        console.log(body.result);
        console.log(body.data);

        return body.data;
    }

    public async deleteQ<QueryT, ResT>(url: string, queryString?: QueryT) {
        const response = await axios.delete(this.PREFIX + url, {
            params: queryString,
            paramsSerializer: params => {
                // console.log('qs', qs.stringify(params));
                return qs.stringify(params);
            },
        });
        const body: CommonResponse<ResT> = response.data;
        console.log(`API 호출`);
        console.log(body.result);
        console.log(body.data);

        return body.data;
    }
}

export const API = new APITemplate('http://localhost:8081/');
