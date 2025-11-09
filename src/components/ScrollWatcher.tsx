import { useEffect, useState, useCallback } from "react";
import InfoModal from "./InfoModal";

export default function ScrollWatcher() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    setProgress(percent);
    document.documentElement.style.setProperty(
      "--scroll-progress",
      `${percent}%`
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
      {/* Info Title */}
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Scroll Progress Indicator</h2>
        <button
          onClick={() => setOpen(true)}
          className="ml-2 text-brand hover:text-brandDark"
        >
          ⓘ
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-300 z-50">
        <div
          className="h-full bg-brand transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Article Content */}
      <div className="max-w-2xl mx-auto mt-10 space-y-6 text-[18px] leading-[1.7]">
        <p>
          This demonstrates a common pattern used in blogs, long tutorials, and
          documentation pages: a scroll progress bar that tracks your reading
          position.
        </p>

        {[...Array(25)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum porta lacus nec accumsan
            elementum. Integer luctus, nulla eget aliquet elementum, lectus elit
            semper felis, vitae ullamcorper nulla leo at turpis.
          </p>
        ))}
      </div>

      <InfoModal open={open} setOpen={setOpen}>
        <h3 className="text-lg font-semibold mb-2">How this works</h3>
        <p className="mb-3">
          The scroll watcher calculates the user's reading progress using:
        </p>

        <pre className="bg-gray-100 rounded p-3 text-sm overflow-x-auto">
{`(scrollTop / (documentHeight - windowHeight)) * 100`}
        </pre>

        <p className="mt-3">
          This produces a smooth, performant way to give user feedback during
          long-form reading.
        </p>
      </InfoModal>
    </div>
  );
}
