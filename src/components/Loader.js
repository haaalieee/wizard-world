import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  /*-- Loader view on component initialization--*/
  const { progress } = useProgress();
  return (
    <Html className="loader" center transform={true}>
      <div className="loader-content">
        <div className="container">
          <h2>{Math.floor(progress)} % loaded</h2>
          <div className="progressbar-container">
            <div
              className="progressbar-complete"
              style={{ width: `${progress}%` }}
            >
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress">{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>
    </Html>
  );
}
