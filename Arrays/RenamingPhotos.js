//Take the string of all the photos and rename the files by the place they were taking with a number 
//coinciding with the date it was taken from earliest to latest. Removing the timestamp and date
// Input: photo.jpg, Warsaw, 2013-09-05 14:08:15  Output: Warsaw01.jpg

const input = `photo.jpg, Warsaw, 2013-09-05 14:08:15
john.png, London, 2015-06-20 15:13:22
myFriends.png, Warsaw, 2013-09-05 14:07:13
Eiffel.jpg, Paris, 2015-07-23 08:03:05
pisatower.jpg, Paris, 2015-07-22 23:59:59
BOB.jpg, London, 2015-08-05 00:02:03
notredame.png, Paris, 2015-09-01 12:00:00
me.jpg, Warsaw, 2013-09-06 15:40:22
a.png, Warsaw, 2016-02-13 13:33:50
b.png, Warsaw, 2016-01-02 15:12:22
c.png, Warsaw, 2016-01-02 14:34:30
d.png, Warsaw, 2016-01-02 15:15:01
e.png, Warsaw, 2016-01-02 09:49:09
f.png, Warsaw, 2016-01-02 10:55:32
g.png, Warsaw, 2016-02-29 22:13:11`

function solution(str) {
  const files = str.split('\n');
  console.log(files)
  const obj = {};

  for (let i=0; i<files.length; i++) {
    const photo = files[i].split(', ')
    const city = photo[1];
    const date = photo[2];
    // john.mypic.jpg
    const fileName = photo[0].split('.')
    const ext = fileName[fileName.length - 1];
    if (obj[city]) {
      obj[city].push({ext, date, index: i})
    } else {
      obj[city] = [{ext, date, index: i}]
    }
  }
  for (let city in obj) {
    const arr = obj[city]
    const sorted = arr.sort((a, b) => {
      const d1 = new Date(a.date).getTime()
      const d2 = new Date(b.date).getTime()
      return d1 - d2})
    obj[city] = sorted
  }
  // console.log(obj)
  const renameFile = (city, object, total, currentIndex, output) => {
    // total = 130 (length) => 3
    const digits = String(total).length;
    const num = currentIndex + 1;
    const indexDigits = String(num).length;
    const numOfZero = digits - indexDigits;
    let zeros = ''
    for (let i=0; i<numOfZero; i++) {
      zeros += '0';
    }
    output[object.index] = city + zeros + num + '.' + object.ext
  }

  const outputArr = []
  for (let city in obj) {
    const cityPhotos = obj[city] // arr of obj
    for (let i=0; i<cityPhotos.length; i++) {
      renameFile(city, cityPhotos[i], cityPhotos.length, i, outputArr)
    }
  }
  // console.log('Files: ', outputArr)
  return outputArr.join('\n')
  
}

console.log(solution(input))