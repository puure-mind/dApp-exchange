export function* rootSaga() {
  yield setTimeout(() => {
    console.log("after 5 sec");
  }, 5000);
}
