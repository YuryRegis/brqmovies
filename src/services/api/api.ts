import _axios from 'axios';

import {API_TOKEN} from '@env';
import {config} from './config';


_axios.defaults.headers.common.Authorization = `Bearer ${API_TOKEN}`;

export const axios = _axios.create({
  baseURL: config.baseURL.replace(/\/$/, ''),
});
