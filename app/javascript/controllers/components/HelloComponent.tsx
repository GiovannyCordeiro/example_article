import React from "react";
import { createRoot, Root } from "react-dom/client";

const Hello: React.FC = () => {
  return (
    <div className="mt-8 p-8 border-2">
      <h2>Hello world</h2>
      <p>by component tsx</p>
    </div>
  );
};

export default Hello;

let root: Root | null = null;

function render(node: HTMLElement) {
  if (!node) return;
  root = createRoot(node);
  root.render(<Hello />);
}

function destroy() {
  if (root) {
    root.unmount();
    root = null;
  }
}

export { render, destroy };