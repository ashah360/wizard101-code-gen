import request from 'request-promise';
import querystring from 'querystring';
import { validate } from '../util/validate';
import { globalForm, URI } from './constants/const';

export const generate = async (score = 1e6) => {
  try {
    let response = await request({
      method: 'POST',
      uri: Buffer.from(URI, 'base64').toString(),
      form: { ...globalForm, ...validate(score) },
    });
    response = querystring.parse(response);
    return JSON.parse(response.hasHighScore)
      ? Promise.resolve(response.code)
      : Promise.reject();
  } catch (error) {
    console.error(error);
    return Promise.reject();
  }
};
