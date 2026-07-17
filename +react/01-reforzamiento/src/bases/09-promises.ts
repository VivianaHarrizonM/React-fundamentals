const myPrimise = new Promise( (resolve) => {
  setTimeout(() => {
    //! Yo quiero mi dinero
    resolve(100);
  }, 2000); // 2 segundos
});

myPrimise.then((myMoney) => {
  console.log(`Tengo mi dinero son $${myMoney}.00 dolares`);
});