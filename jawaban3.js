function lotere(num) {
  return new Promise((resolve, reject) => {
    console.log("Program lotre dimulai, tunggu 10 detik...");

    setTimeout(() => {
      let angkaBenar = Math.floor(Math.random() * 150) + 1;

      console.log(`angka undian adalah ${angkaBenar}`);

      if (angkaBenar === num) {
        resolve("Selamat anda menang");
      } else {
        reject("Maaf anda belum beruntung");
      }
    }, 10000);
  });
}

lotere(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("undian lotre telah berakhir_"));
