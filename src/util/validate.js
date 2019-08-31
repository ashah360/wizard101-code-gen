import crypto from 'crypto';
import { GAME_NAME } from '../actions/constants/const';

const md5 = input =>
  crypto
    .createHash('md5')
    .update(input)
    .digest('hex');

export const validate = score => {
  score = score.toString();

  const gameCheck = md5(`${GAME_NAME}${score}`);
  const cipher = `${md5(`${score}${Date.now()}`)}${'0'.repeat(68)}`;

  let seed = score;
  let ref = score;
  let index = 0;

  for (let i = score.length - 1; i >= 0; i -= 1) {
    index = parseInt(ref[i]);
    seed += cipher[index];
  }

  let hash = md5(seed);

  return { hash, cipher, gameCheck, score };
};

