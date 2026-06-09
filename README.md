# AD312-Building-an-Application-Safety-Net-with-Error-Boundaries-in-React
Imagine you are building a social media dashboard. One of your components pulls in a live weather widget. Suddenly, the weather server goes down and sends back corrupted data, causing a JavaScript crash inside that single widget.


William Anderson

AD312


React Error Boundary Lab — Social Media Dashboard
-Project Overview

This project demonstrates how to implement a React Error Boundary to improve application stability in a social media dashboard scenario.

In a real-world dashboard, multiple widgets (Weather, News, Profile, etc.) run independently. If one widget fails due to corrupted API data or runtime errors, the entire application should NOT crash.

Instead, an Error Boundary catches the failure and displays a fallback UI, allowing the rest of the dashboard to continue functioning normally.

Key Features:
Implements React class-based Error Boundary
Prevents full app crashes when a component fails
Displays a user-friendly fallback UI
Logs errors using componentDidCatch
Demonstrates isolated widget failure handling
Fully tested using Jest + React Testing Library

Project Structure:
src/
│── App.js
│── App.test.js
│── ErrorBoundary.jsx
│── WeatherWidget.jsx
│
├── tests/
│   └── ErrorBoundary.test.jsx
│
├── index.js


How Error Boundary Works:

The Error Boundary is implemented using a React class component:

Core Lifecycle Methods:
getDerivedStateFromError() → updates UI state when error occurs
componentDidCatch() → logs error details for debugging
Behavior:
If a child component crashes → fallback UI is displayed
If no error → normal UI renders
Only the failed component is isolated (not the whole app)

Error Boundary Component:
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Widget Temporarily Unavailable</h2>;
    }

    return this.props.children;
  }
}
⚙️ How to Run the Project
1️⃣ Install dependencies
npm install
2️⃣ Start development server
npm start
3️⃣ Run tests
npm test -- --watchAll=false
🧪 Test Strategy

This project includes both normal test cases and edge test cases to validate robustness.

✅ Normal Test Cases
✔ TC1: Healthy widget renders correctly
Ensures child components render normally when no error occurs.
✔ TC2: Error Boundary catches widget crash
Simulates a failing component
Confirms fallback UI appears instead of app crash
✔ TC3: App continues rendering unaffected components
Ensures one widget failure does not break the rest of the dashboard

Edge Test Cases:
⚠️ EC1: Null/undefined runtime crash
Simulates accessing invalid object properties
Ensures Error Boundary catches unexpected runtime errors
⚠️ EC2: Nested component failure
Error thrown deep inside child components
Confirms error propagation is correctly intercepted
⚠️ EC3: Multiple Error Boundaries isolation
Tests multiple independent failures
Ensures each boundary isolates its own error state

  
Expected Behavior:
Scenario	Result
Widget loads correctly	Normal UI renders
Widget crashes	Fallback UI shown
Multiple widgets	Only failed widget affected
Nested errors	Properly caught
App stability	Never fully crashes


Tech Stack:
React
JavaScript (ES6+)
Jest
React Testing Library

Author Notes:

This project simulates a real-world dashboard system where individual widgets may fail independently, but the overall application must remain stable and user-friendly.
