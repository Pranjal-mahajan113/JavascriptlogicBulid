const fetchingUserdetails = () => {
  return new Promise((resolve, reject) => {
    let User = Math.random() > 0.3;
    setTimeout(() => {
      if (User) resolve("Users Details Fetched ✅");
      reject("User Not found ❌");
    }, 2000);
  });
};
const fetchingUsersetting = () => {
  return new Promise((resolve, reject) => {
    let setting = Math.random > 0.3;
    setTimeout(() => {
      if (setting) resolve("User settings fetch..✅");
      reject("Failed to load setting ❌");
    }, 1000);
  });
};

const fetchpostsetting = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User posts Fetched..✅");
    }, 1500);
  });
};

const fetchusernotification = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Users notification fetched..✅");
    }, 1000);
  });
};

async function loadUserdata() {
  try {
    console.log("Fetching user details..");
    const user = await fetchingUserdetails();
    console.log(user);

    console.log("Fetching user settings...");
    const setting = await fetchingUsersetting();
    console.log(setting);

    console.log("Fetching posts & notification together..");
    const result = await Promise.all([
      fetchpostsetting(),
      fetchusernotification(),
    ]);
    console.log("All Results :- ", result);

    console.log("All data loaded together✅✅✅");
  } catch (err) {
    console.log("Error Found:-", err);
    console.log("Failed to load dashboard ❌❌❌❌");
  }
}
loadUserdata();
