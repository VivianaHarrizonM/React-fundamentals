import ItemCounter from "./shopping-card/ItemCounter";

interface ItemInCart{
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {productName:'Nintendo Swicht 2' , quantity: 2},
  {productName:'Pro Controller' , quantity: 2},
  {productName:'Super Smash' , quantity: 3},
  {productName:'Super Mario' , quantity: 1}
]


export default function FirstStepsApp() {
  return (
    <div>
      <h1>Carrito de compras</h1>
      {
        itemsInCart.map(({productName, quantity}) => (
          <ItemCounter key={productName} name={productName} quantity={quantity}/>
        ))
      }
      {/* <ItemCounter name="Nintendo Switch 2" quantity={2}/>
      <ItemCounter name="Pro Controller" quantity={2}/>
      <ItemCounter name="Super Smash" quantity={3}/>
      <ItemCounter name="Super Mario" quantity={1}/> */}
    </div>
    
  );
  
}
