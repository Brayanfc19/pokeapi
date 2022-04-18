import { 
    BrowserRouter, 
    Route, 
    Routes
  } from "react-router-dom"
  import Task from "./Components/Task.jsx"
  import Home from "./Components/Home.jsx"
  import UserProvider from "./Context/UserProvider.jsx";
  import ListTask from "./Components/ListTask.jsx";
  import TaskEdit from "./Components/TaskEdit.jsx";
  
  function AppProyect() {
    return (
      <div className="container my-5">
        <BrowserRouter>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="*" element={<h2>Error 404</h2> }/>
              <Route path="/task" element={<Task />}/>
              <Route path="/task/*" element={<h2>Error 404</h2>}/>
              <Route path="/list-tasks" element={<ListTask />}/>
              <Route path="/list-tasks/:id" element={<TaskEdit />}/>
            </Routes>
          </UserProvider>
        </BrowserRouter>
      </div>
    );
  }
  
  export default AppProyect;