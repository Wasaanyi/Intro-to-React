//import logo from '../logo.svg';
import Recipe from './Recipe';
import recipes from '../fetchedData.json';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Working Fine!!!</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default function App(){
  return (
    <div className="bg-gray-200 flex w-screen  h-full flex-col items-center">
      <h1 className="text-3xl
    text-pink-500 font-bold font-pacifico text-center p-10">
      My Favourite Recipes
      </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mb-10'>
        {recipes.map( recipe => <Recipe data={recipe}  key={recipe.idMeal}/> )}
      </div>

    </div>

    )
}
