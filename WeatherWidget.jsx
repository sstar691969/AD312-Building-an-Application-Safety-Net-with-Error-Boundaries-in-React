
function WeatherWidget({ shouldCrash }) {
    if (shouldCrash) {
      throw new Error("Weather service unavailable");
    }
  
    return (
      <div>
        <h3>🌤 Weather Widget</h3>
        <p>72°F Sunny</p>
      </div>
    );
  }
  
  export default WeatherWidget;