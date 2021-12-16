export function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  if ( h===0 && m === 0 && s === 0)
    return "nothing. Game isn't running."
  else
   return hDisplay + mDisplay + sDisplay + ".";
}

export function randomBg() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function random100() {
  return Math.floor(Math.random() * 80) + 10 + "%"
}

export function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}

export function randomIncrement() {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1
}

export function randomDecrement() {
  return Math.floor(Math.random() * (2 - -2 + 1)) + -2
}

export function oneInX(x) {
  return Math.floor(Math.random() * (x - 1 + 1)) + 1
}