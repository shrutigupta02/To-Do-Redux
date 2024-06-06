import "./App.css";
import Todo from './Todo.jsx';
import { Provider } from "react-redux";
import {store} from './app/store.js';

function App(){
  return(
    <div>
      <Provider store={store}>
        <Todo/>
      </Provider>
    </div>
  );
}

export default App;