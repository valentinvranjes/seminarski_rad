import { Component } from "react";
import "./App.css";
import Chat from "./components/Chat";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleLogin = (username) => {
    this.setState({ username });
  };
  toggleSidebar = () => {
    this.sidebar.ToggleSidebar();
  };
  handleLogout = () => {
    this.setState({ username: "" });
  };
  render() {
    return (
      <div className="App">
        <Header
          username={this.state.username}
          toggleSidebar={this.toggleSidebar}
          handleLogout={this.handleLogout}
        />
        <Sidebar
          ref={(sidebar) => (this.sidebar = sidebar)}
          toggleSidebar={this.toggleSidebar}
          username={this.props.username}
        />
        <Routes>
          <Route
            path="/"
            element={this.state.username ? <Chat username={this.state.username} /> : <Navigate to="/login" />}/>
          <Route path="/login" element={<Login onLogin={this.handleLogin} handleLogout={this.handleLogout}/>} />
          <Route path="/about" element={this.state.username ? <About /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    );
  }
}

export default App;