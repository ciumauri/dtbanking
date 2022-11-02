import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/bets", () => {
      return [
        {
          id: 1,
          league: "Campeonato Brasileiro",
          market: "Back Favorito",
          stake: 75,
          odd: 1.5,
          type: "green",
          profit: 37.5,
          createdAt: new Date(),
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
