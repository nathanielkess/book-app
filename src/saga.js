export function * helloSaga() {
  yield 'hello saga';
}

export default function * rootSaga() {
  yield [
    helloSaga(),
  ];
}
