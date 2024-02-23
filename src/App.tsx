import './App.css';
import DeepScroll from './Component/DeepScroll';

function App() {
  const data = ["Pandas", "Grizzlies", "Rabbit", "Autruche", "Kangourou"];

  return (
    <DeepScroll data={data} />
  );
}

export default App;
