
import ErrorBoundary from "./ErrorBoundary";
import WeatherWidget from "./WeatherWidget";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Social Media Dashboard</h1>

      <ErrorBoundary>
        <WeatherWidget shouldCrash={true} />
      </ErrorBoundary>

      <div>
        <h2>News Feed</h2>
        <p>Latest posts appear here.</p>
      </div>

      <div>
        <h2>User Profile</h2>
        <p>User information appears here.</p>
      </div>
    </div>
  );
}

export default App;
