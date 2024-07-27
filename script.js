function satu() {
  console.log("satu");
}

function dua() {
  console.log("lagi dikerjain");
  setTimeout(() => {
    console.log("dua");
  }, 5000);
}

function tiga() {
  console.log("tiga");
}

satu();
dua();
tiga();
