import { startLoginWatchers } from './containers/login/login.saga';

export function * helloSaga() {
  yield 'hello saga';
}

export default function * rootSaga() {
  yield [
    helloSaga(),
    startLoginWatchers(),
  ];
}
