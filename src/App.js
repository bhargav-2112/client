import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Tutorial from './components/Tutorial';
import TutorialList from './components/TutorialList';
import AddTutorial from './components/AddTutorial';
import {Navbar, Nav, Container} from "react-bootstrap";

function App() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tutorials</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Tutorial List</Nav.Link>
            <Nav.Link href="/add">Add Tutorial</Nav.Link>
            <Nav.Link href="/tutorials/:id">Tutorial</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path="/" element={<TutorialList/>}/>
          </Routes>
          <Routes>
            <Route exact path="/tutorials" element={<TutorialList/>}/>
          </Routes>
          <Routes>
            <Route exact path="/add" element={<AddTutorial/>}/>
          </Routes>
          <Routes>
            <Route exact path="/tutorials/:id" element={<Tutorial/>}/>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
