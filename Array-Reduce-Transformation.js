var reduce = function (nums, fn, init) {
    let res = init;
  
    for (const i of nums) {
      res = fn(res, i);
    }
    
    return res;
  };