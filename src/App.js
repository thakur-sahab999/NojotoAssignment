import { useState, useEffect } from 'react'
import SocialCard from './components/SocialCard.jsx'
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        userData.forEach((a) => {
        a.image =`https://avatars.dicebear.com/v2/avataaars/${a.username}.svg?options[mood][]=happy`
      })

        setUsers(userData);
        console.log(userData)
      } catch (error) {
        console.log(error);
      }

    })();

  }, []);
  return (
    <div className="App">
        <div className="card-container">
        {users.map((user, index) => (
          < SocialCard userData={user} key={index} />
        ))}
       </div>
    </div>
  );
}

export default App;

