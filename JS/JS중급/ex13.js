async function getName() {
  return Promise.resolve('Tom');
  // throw new Error('err..');
}

getName().then((name) => {
  console.log(name);
});

// getName().catch((err) => {
//   console.log(err);
// })


// await (async 함수 내부에서만 사용 가능)

function getName2(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
};

async function showName() {
  const result = await getName2('Mike');
  console.log(result);
}

console.log('시작');
showName();