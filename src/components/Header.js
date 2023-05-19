const Header = (props) => {
    const isLoggedIn = !!props.username;
    return (

      <>
       {/* Prazan react fragmet, služi istu svrhu kao i dvi, ali manje opterećuje DOM */}
        {isLoggedIn && (
          <div className="App-header">
            <button onClick={props.toggleSidebar} className="sidebar-btn">
              Sidebar
            </button>
            <h1>{props.username}'s Chat App</h1>
            {/* Kada više nije div već button*/}
            <button onClick={props.handleLogout}>LogOut</button>
          </div>
        )}
        {!isLoggedIn && (
          <div className="App-header">
            <div></div>
            <h1>Chat Application</h1>
            {/* Prazan div služi za flex pozicioniranje elemenata*/}
            <div></div>
          </div>
        )}
      </>
    )
  }
  
  export default Header;