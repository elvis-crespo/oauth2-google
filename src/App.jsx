import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './App.css'

function App() {

  return (
    <>
      <div className="app">
        <header className="app-header">
          <img src="vite.svg" alt="" />
          <p>Google Auth2</p>
          <span>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(credentialResponse);
                console.log("decoded",decoded);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </span>
        </header>
      </div>
    </>
  );
}

export default App
