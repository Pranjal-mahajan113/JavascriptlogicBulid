const downloadfile = () => {
  return new Promise((resolve, reject) => {
    let sucess = Math.random() > 0.5;

    setTimeout(() => {
      if (sucess) resolve("file download");
      else reject("Download failed");
    }, 1000);
  });
};

//downloadfile();
//   .then((result) => {
//console.log(result);
//   })
//   .catch((err) => {
// console.log(err);
//   });

async function startDownload(params) {
  console.log("Download starting........");
  try {
    const res = await downloadfile();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
startDownload();
