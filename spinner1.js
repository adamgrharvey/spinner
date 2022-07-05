const spinner = function(timesToSpin) {
  // told how many times we are gonna spin, if times to spin is > 0, keep spinnin!
  if (timesToSpin > 0) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, 100);
    
    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, 300);
    
    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, 500);
    
    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\r\\   ');
    }, 700);

    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, 900);
    
    setTimeout(()=>{
      // spin again, but count down to 0
      spinner(timesToSpin - 1);
    }, 900);
  }
  
};

spinner(2);
console.log();