const kunci = "key";
const benar = truee;

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
  return new Promise((success, failed) => {
    if (!kunci) failed("not mathing key");
    if (kunci)
      setTimeout(() => {
        success({ status: "terbuka" });
      }, 500);
  });
};

const makan = (status) => {
  console.log("sedang mencari status...");
  return new Promise((success, failed) => {
    if (!status) failed("belum terbuka, coba lagi");
    if (status) {
      setTimeout(() => {
        success({ makan: benar });
      }, 2000);
    }
  });
};

const pemilikRumah = async () => {
  try {
    const { kunci: kunciDariRumah } = await masukRumah(kunci, "willea");
    const { status } = await buka(kunciDariRumah);
    const { makan: sudahMakan } = await makan(status);

    console.log(`
        kunci adalah ${kunciDariRumah}
        statusnya sudah ${status}
        apakah sudah makan ? ${sudahMakan}
        `);
  } catch (error) {
    console.log(error);
  }
};

pemilikRumah();
