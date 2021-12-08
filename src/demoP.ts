function promiseTimeout(ms){
   return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
   });
}

promiseTimeout(2000)
   .then(() => {
      console.log("Done!!");
      return promiseTimeout(1000);
   }).then(() => {
      console.log("Also Done!");
      return Promise.resolve(50);
   }).then((result) => {
      console.log(result);
      return Promise.resolve("There is no rejection.");
   }).then((output) => {
      console.log(output);
   }).catch(() => {
      console.log("Error");
   })