import './App.css';

import Draggable from './components/Draggable';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Draggable>
      </header>
    </div>
  );
}

export default App;
