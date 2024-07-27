const kunci = "key";
const benar = true;

const masukRumah = (user, callback) => {
  console.log("sedang memvalidasi...");
  setTimeout(() => {
    callback({ kunci: kunci, user });
  }, 1000);
};

const buka = (kunci, callback) => {
  console.log("sedang mendapatkan kunci...");
  if (kunci)
    setTimeout(() => {
      callback({ status: "terbuka" });
    }, 1500);
};

const makan = (status, callback) => {
  console.log("sedang mencari status...");
  if (status)
    setTimeout(() => {
      callback({ makan: benar });
    }, 2000);
};

masukRumah("willy rumapea", (res) => {
  const { kunci } = res;
  buka(kunci, (res) => {
    const { status } = res;
    makan(status, (res) => {
      const { makan } = res;
      console.log(makan);
    });
  });
});

// const orang = masukRumah("willy");
// console.log(orang);

// const statusPintu = buka(orang.kunci);
// console.log(statusPintu);

// const dalamRumah = makan(statusPintu);
// console.log(dalamRumah);
