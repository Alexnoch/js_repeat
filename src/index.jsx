import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./app.jsx";
import Questions from "./modules/Questions/main.jsx";

const root = createRoot(document.body);
root.render(<App />);

