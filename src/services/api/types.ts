import {AxiosPromise} from 'axios';

export interface PageParams {
  page: number;
}

export interface ListResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface PostFavoriteResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export type APIResponse<T> = AxiosPromise<ListResponse<T>>;
