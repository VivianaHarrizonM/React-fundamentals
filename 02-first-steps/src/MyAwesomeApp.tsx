import { CSSProperties } from "react";

const firstName = 'Viviana';
const lastName = 'Harrizon';

const favoriteGames = ['Elden Ring', 'smah', 'Metal Gear'];
const isActive = false;
const address = {
  zipCode:'ABC-123',
  country: 'Canadá',
}
const myStyles: CSSProperties={
        backgroundColor:'#fafa',
        borderRadius: 10,
        padding: 10,
        marginTop:30,
};
const MyAwesomeApp = () => {
  return (
    <div>
      <>-------------------.....----------------------</>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(',  ')}</p>
      <p>{2 + 2}</p>
      <h1>{isActive ? 'Activo' : 'No activo'}</h1>  

      <p style={myStyles}>
        {JSON.stringify (address)}</p>
    </div>
  )
}

export default MyAwesomeApp
