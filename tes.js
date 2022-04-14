//soal tes vonix
//sort array of number ascending using buble sort
const sort = (data) => {
  const data = [6, 3, 4, 1, 5, 2];
  let temp = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = data.length - 1; j >= 0; j--) {
      if (data[i] > data[j] && j > i) {
        temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }
  return data;
};

sort();
//Remove duplicates from a string and arrange its letters in order.
//“mississippi” -> “imps”
//“ventura koin nusantara” -> “ aeiknorstuv”

const sort = (data) => {
  // const data = [6,3,4,1,5,2];
  let temp = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = data.length - 1; j >= 0; j--) {
      if (data[i] > data[j] && j > i) {
        temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }
  return data;
};

// sort();

const removeDuplicates = (text) => {
  let newText = text.split(" ").join("");
  let arr = [];
  let exist = false;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < newText.length; i++) {
    for (let j = arr.length; j >= 0; j--) {
      if (alphabet.indexOf(newText[i]) === arr[j]) {
        exist = true;
      }
    }
    if (!exist) {
      arr.push(alphabet.indexOf(newText[i]));
    }
    exist = false;
  }
  let newString = "";
  const sortedArr = sort(arr);
  for (let i = 0; i < sortedArr.length; i++) {
    newString += alphabet[sortedArr[i]];
  }
  return newString;
};

console.log(removeDuplicates("mississippi"));
console.log(removeDuplicates("ventura koin nusantara"));
