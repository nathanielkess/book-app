import R from 'ramda';

export const createAction = (type, payload = {}) => ({ type, payload });

export const prefixActionTypes = (base, types) => R.zipObj(types, types.map(R.concat(`${base}/`)));
