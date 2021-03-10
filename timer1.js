/* NOTES
process.stdout.write('\x07'); Code for system beep


*/

// IMPLEMENTATION

const args = process.argv.slice(2);

const timer1 = function(userAlarms) {
  if (userAlarms.length === 0) {
    return;
  }
  userAlarms = userAlarms.map(item => Number(item));
  userAlarms.sort((a, b) => a - b);
  for (let i = 0; i < userAlarms.length; i++) {
    if (isNaN((userAlarms[i])) || !(userAlarms[i] < 0)) { 
      setTimeout(() => {
        process.stdout.write('\x07');
      }, userAlarms[i] * 1000);
    }
  }
  console.log(userAlarms);
};

timer1(args);