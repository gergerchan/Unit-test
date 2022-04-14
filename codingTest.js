// 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping,
// dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash"
// dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut,
// cetak menggunakan console log atau sejenisnya.

// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar
// dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan
// string yang diinputkan maka return true jika tidak return false

//iterate from 1 to given number
const fishBashIterate = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fish bash");
    } else if (i % 3 == 0) {
      console.log("fish");
    } else if (i % 5 == 0) {
      console.log("bash");
    } else {
      console.log(i);
    }
  }
};
// fishBashConsole(20);

const fishBash = (i) => {
  if (i % 3 == 0 && i % 5 == 0) {
    return "fishbash";
  } else if (i % 3 == 0) {
    return "fish";
  } else if (i % 5 == 0) {
    return "bash";
  } else {
    return i;
  }
};
// fishBash(20);

const sort = (data, asc) => {
  // const data = [6, 3, 4, 1, 5, 2];

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (asc ? data[i] > data[j] : data[i] < data[j]) {
        temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }
  return data;
};
// console.log(sort([6, 3, 4, 1, 5, 2], true));

const reverseString = (str) => {
  for (let i = 1; i <= str.length; i++) {
    let awal = i;
    let akhir = str.length - i - 1;
    if (str[awal] !== str[akhir]) {
      return false;
    }
  }
  return true;
};
// console.log(reverseString("ab"));

module.exports = { fishBash, sort, reverseString };
