export const Sum = (a: number, b: number): number => {
  return a + b + 7;
};

export const sayAge = (age: number) => {
  if (age > 30) {
    return 'old';
  } else if (age < 10) {
    return 'young';
  } else {
    // 未能执行到的 branch
    return 'normal';
  }
  // const obj = { // 未能执行到的 line 、未能执行到的 stmts
  //     name: 'vince', // 未能执行到的 stmts
  //     age: 12 // 未能执行到的 stmts
  // }
  // console.log(obj) // 未能执行到的 line 、未能执行到的 stmts
};

// export const getPassword = () => '123456'; // 未能执行到的 func

// export const getPassword2 = () => '666666'; // 未能执行到的 func
