const kunci = "key";
const benar = true;

const masukRumah = (kunci, user) => {
  console.log("sedang memvalidasi...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if ((!kunci || kunci !== "key") && (!user || user !== "willea"));
      failed("data yang anda masukkan salah atau tidak sesuai");
      success({ kunci });
    }, 1000);
  });
};

const buka = (kunci) => {
  console.log("sedang mendapatkan kunci...");
  return new Promise((succes, failed) => {
    if (!kunci) failed("not mathing key");
    if (kunci)
      setTimeout(() => {
        succes({ status: "terbuka" });
      }, 1500);
  });
};

const makan = (status, callback) => {
  console.log("sedang mencari status...");
  if (status)
    setTimeout(() => {
      callback({ makan: benar });
    }, 2000);
};

const user = masukRumah("willea");
user.then((res) => {
  const { kunci } = res;
  buka(kunci)
    .then((res) => {
      const { status } = res;
      console.log(status);
    })
    .catch((err) => console.log(err));
});

// masukRumah("willy rumapea", (res) => {
//   const { kunci } = res;
//   buka(kunci, (res) => {
//     const { status } = res;
//     makan(status, (res) => {
//       const { makan } = res;
//       console.log(makan);
//     });
//   });
// });
