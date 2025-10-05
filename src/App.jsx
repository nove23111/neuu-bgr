import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { forceChakraDarkTheme } from './utils/utils';
import LaserFlowDemo from './demo/Animations/LaserFlowDemo';

function AppContent() {
  return (
    <>
      <LaserFlowDemo />
    </>
  );
}

export default function App() {
  useEffect(() => {
    forceChakraDarkTheme();
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
