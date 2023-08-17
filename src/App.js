import './App.css';
import { Link } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/authors" element={<DashboardPage />} />
        <Route path="/authors/new" element={<CreatePage />} />
        <Route path="/authors/:id" element={<DetailsPage />} />
        <Route path="/authors/:id/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
