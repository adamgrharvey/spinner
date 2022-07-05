const spinner = function(timesToSpin) {
  // told how many times we are gonna spin, if times to spin is > 0, keep spinnin!
  const arrAnimate = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let i = 0; timesSpun = 0;
  let myInterval = setInterval(function() {
    if (timesSpun === timesToSpin) clearInterval(this);
    process.stdout.write(arrAnimate[i]);
    i++;
    if (i === 3) {
      i = 0;
      timesSpun++;
    }
  }, 200);
};

spinner(4);
console.log();