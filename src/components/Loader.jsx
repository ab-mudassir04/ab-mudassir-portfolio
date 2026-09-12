import { useEffect } from "react";

import "./Loader.css";

function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 850);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="portfolio-loader"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loader-content">
        <div className="loader-mark">
          <span>AM</span>
        </div>

        <div className="loader-name">Abdul Mudassir</div>

        <div className="loader-role">Java Full Stack Developer</div>

        <div className="loader-progress">
          <span />
        </div>
      </div>
    </div>
  );
}

export default Loader;
