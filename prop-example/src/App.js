import './App.css';
import User from '../../prop-example/src/components/User';
import Header from '../../prop-example/src/components/Header';
const friends = [{
  id: 1,
  name: "Elif",
},
{
  id: 2,
  name: "Toygar",
},
{
  id: 3,
  name: "Semih",
},
{
  id: 4,
  name: "Pelin",
},
{
  id: 5,
  name: "Oğuzcan",
},
]

function App() {
  return (
    <>
      <Header/>
      <User
        name="Ömer"
        surname="Kor"
        isLoggedIn={
          true
        }
        age={
          29
        }
        friends={
          friends
        }
        address={
          {
            title: "Bornova/İzmir",
            detail: "Manavkuyu mahallesi, Sakarya Cd. No:28-1",
            zip: 35140,
          }
        }
      />
    </>
  );
}

export default App;