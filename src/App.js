import './App.scss';
import {Home, AddNote, EditNote, Notes, SingleNote} from "./pages/index";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/reduxnoteapp'>
        <Routes>
          <Route path = "/" element = {<Home />}>
            <Route path = "/" element = {<Notes />} />
            <Route path = "/add" element = {<AddNote />} />
            <Route path = "/edit/:id" element = {<EditNote />} />
            <Route path = "/note/:id" element = {<SingleNote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;