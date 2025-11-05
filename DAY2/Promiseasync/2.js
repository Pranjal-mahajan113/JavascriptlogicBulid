const fetchingUserdetails = () => {
  return new Promise((resolve, reject) => {
    let User = true;

    setTimeout(() => {
      if (User) resolve("Fetching user details..");
      else reject("User not found");
    }, 2000);
  });
};

fetchingUserdetails()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

const fetchinguserpost = () => {
  return new Promise((resolve, reject) => {
    let post = true;
    setTimeout(() => {
      if (post) resolve("Fetching User post");
    }, 1500);
  });
};

fetchinguserpost()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });



  const fetchingUsercommenst = () => {
  return new Promise((resolve, reject) => {
    let comments = true;

    setTimeout(() => {
      if (comments) resolve("Fetching user comments..");
      else reject("User not found");
    }, 1000);
  });
};

fetchingUsercommenst()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

