const FetchMyData = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({some:'data'});
    }, 1000);
  });
}

const FetchPlans = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({plans: [1,2,3,4]});
    }, 1000);
  });
}

export {FetchMyData, FetchPlans};
