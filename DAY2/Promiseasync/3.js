const fetchingUserdetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User details fetched ✅");
    }, 2000);
  });
};

const fetchingUserpost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User posts fetched ✅");
    }, 1500);
  });
};

const fetchingUsercomments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User comments fetched ✅");
    }, 1000);
  });
};

// 🧠 Now handle all sequentially
async function loadAllData() {
  try {
    console.log("Fetching user details...");
    const user = await fetchingUserdetails();
    console.log(user);

    console.log("Fetching user posts...");
    const posts = await fetchingUserpost();
    console.log(posts);

    console.log("Fetching user comments...");
    const comments = await fetchingUsercomments();
    console.log(comments);

    console.log("All data loaded ✅");
  } catch (error) {
    console.log("Error:", error);
  }
}

loadAllData();
