# charging-station

A web-based dashboard for visualizing and analyzing data related to electric vehicle charging infrastructure. It includes features for data exploration, interactive graphs, key performance indicators, and configurable variables to support informed decision-making.

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/charging-station.git
   cd charging-station/data-viz-platform
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and configure the following variables:
   ```
   REACT_APP_API_URL=<API endpoint>
   REACT_APP_AUTH_KEY=<Authentication key>
   ```

4. **Run the Application**:
   Start the development server:
   ```bash
   npm run dev
   ```

---

## Features Implemented

- **Data Visualization**: Interactive graphs and charts for analyzing charging station data.
- **Key Performance Indicators (KPIs)**: Metrics to evaluate the performance of charging infrastructure.
- **Configurable Variables**: Adjust parameters to simulate different scenarios.
- **User Authentication**: Secure login and session management.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Technical Decisions and Trade-offs

- **Framework**: Chose React 19 for its component-based architecture and performance optimizations.
- **State Management**: Used React Context API for simplicity, avoiding the overhead of Redux.
- **Build Tool**: Vite was selected for its fast build times and modern tooling.
- **Trade-offs**:
  - Opted for simplicity over scalability in state management, which may require refactoring for larger datasets.
  - Focused on frontend performance, leaving some backend optimizations for future iterations.

---

## Known Limitations

- **Data Size**: Performance may degrade with extremely large datasets.
- **Browser Compatibility**: Fully tested on modern browsers; older versions may have issues.
- **Error Handling**: Limited error messages for API failures.

---

## Time Spent

- **Planning and Design**: 2 hours
- **Development**: 5 hours
- **Testing and Debugging**: 2 hours
- **Documentation**: 1 hour

---

## Local Development Instructions

1. Follow the setup instructions above.
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Access the application at the URL provided in the terminal (e.g., `http://localhost:5173`).
4. Make changes to the code, and the application will automatically reload with Vite's hot module replacement.
