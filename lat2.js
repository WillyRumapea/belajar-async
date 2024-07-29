const kunci = "key";
const benar = true;

const masukRumah = (kunci, user) => {
  console.log("sedang memvalidasi...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      // if setelah nya ada failed jangan gunakan tanda (;)
      if (!kunci || kunci !== "key" || !user || user !== "willea") {
        failed("data yang anda masukkan salah atau tidak sesuai");
        return;
      }
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
      }, 500);
  });
};

const makan = (status) => {
  console.log("sedang mencari status...");
  return new Promise((succes, failed) => {
    if (!status) failed("belum terbuka, coba lagi");
    if (status) {
      setTimeout(() => {
        succes({ makan: benar });
      }, 2000);
    }
  });
};

const user = masukRumah(kunci, "willea");
user
  .then((res) => {
    const { kunci } = res;
    buka(kunci).then((res) => {
      const { status } = res;
      makan(status);
      console.log(res);
    });
  })
  .catch((err) => {
    console.log(err);
  });
