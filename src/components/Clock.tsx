import { useState } from "react";
import InfoModal from "./InfoModal";

export default function Clock() {
  const [hour, setHour] = useState(12);
  const [min, setMin] = useState(0);
  const [open, setOpen] = useState(false);

  const incrementHour = () => setHour((h) => (h + 1) % 24);
  const decrementHour = () => setHour((h) => (h === 0 ? 23 : h - 1));

  const incrementMin = () =>
    setMin((m) => (m + 1) % 60);

  const decrementMin = () =>
    setMin((m) => (m === 0 ? 59 : m - 1));

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Clock Updater</h2>
        <button
          onClick={() => setOpen(true)}
          className="ml-3 text-brand hover:text-brandDark"
        >
          ⓘ
        </button>
      </div>

      <div className="text-5xl font-mono mb-6">
        {String(hour).padStart(2, "0")}:{String(min).padStart(2, "0")}
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={incrementHour} className="px-4 py-2 bg-brand text-white rounded-md">Hour +</button>
        <button onClick={decrementHour} className="px-4 py-2 bg-brand text-white rounded-md">Hour -</button>
        <button onClick={incrementMin} className="px-4 py-2 bg-brand text-white rounded-md">Min +</button>
        <button onClick={decrementMin} className="px-4 py-2 bg-brand text-white rounded-md">Min -</button>
      </div>

      <InfoModal open={open} setOpen={setOpen}>
        <h3 className="text-lg font-semibold mb-2">How this works</h3>
        <p className="mb-2">
          This demo simulates a common frontend interview challenge:
          implement a time updater with rollover logic.
        </p>
        <p className="bg-gray-100 p-3 rounded text-sm font-mono">
          Hours roll 23 → 00<br/>
          Minutes roll 59 → 00<br/>
          Both adjust independently using modular arithmetic.
        </p>
      </InfoModal>
    </div>
  );
}
