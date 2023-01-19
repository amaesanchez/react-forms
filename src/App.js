import './App.css';
import BoxList from "./BoxList"

/** Renders box form and boxes added from form
 *
 *  - Component: BoxList
 *
 * App -> BoxList -> NewBoxForm -> Box
*/
function App() {
  return (
    <div className="App">
      <BoxList />
    </div>
  );
}

export default App;
