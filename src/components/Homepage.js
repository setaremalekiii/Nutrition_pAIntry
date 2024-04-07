import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Link to="/detect"><button>Go to Detection</button></Link>
    </div>
  );
}

export default Homepage;