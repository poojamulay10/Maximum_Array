function findMax(arr) {
    if (!arr) {
      return;
    }
    return Math.max(...arr);
  }

  console.log("The Maximum number in array is ",findMax([144,132,164,1039,26])) 
