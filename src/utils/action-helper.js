import R from 'ramda';

export const createAction = (type, payload = {}, meta = {}) => ({ type, payload, meta });

export const prefixActionTypes = (base, types) => R.zipObj(types, types.map(R.concat(`${base}/`)));
