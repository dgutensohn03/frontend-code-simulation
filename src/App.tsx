import { useState } from "react";
import Tabs from "./components/Tabs";
import Clock from "./components/Clock";
import Transactions from "./components/Transactions";
import ScrollWatcher from "./components/ScrollWatcher";

export default function App() {
  const [active, setActive] = useState("Clock");

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-brand">
        Frontend Challenge Simulation
      </h1>

      <Tabs active={active} setActive={setActive} />

      {active === "Clock" && <Clock />}
      {active === "Transactions" && <Transactions />}
      {active === "Scroll Watcher" && <ScrollWatcher />}
    </div>
  );
}
