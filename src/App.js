import "./App.css";
import { UserProvider, useUser } from "./User.Context";

const LoggedInUser = () => {
  const {user} = useUser() ;
  return (
    <p>
    
      Hello <span className="Username">{user.name}</span>
      </p>
     
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser/>
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>What is love</h2>
      <p>
      Baby dont hurt me , dont hurt me , no more  Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more Baby dont hurt me , dont hurt me , no more
      </p>
      <p>
        Written by {user.name}
      </p>
    </div>
    
  );
};

function App (){
  return (
    <div className="App">
    <Header/>
    <Page/>
    </div>
  );
};


function Root (){
  return (
  <UserProvider>
    <App/>
    </UserProvider>
  );

};

export default Root;
