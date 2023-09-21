import "./App.css";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";

/**
 * This component renders under "/analyze" route to match the Metric target URL
 */
function Analyze() {
  const { analyzeFancyMissingData } = useFlags();
  const client = useLDClient();
  console.log(
    "analyzeFancyMissingData FF evaluates to: ",
    analyzeFancyMissingData
  );

  // custom events works fine, the event is sent to LD.
  const trackEvent = () => {
    console.log("track event clicked: ", client);
    client?.track("fancy-zones");
    client?.flush();
  };

  return (
    <div className="App">
      {/* When I click this button, an event should be sent to LD, but nothing happening, no event is sent */}
      <button
        id="missingData-uploadData-button" // this ID matches the click target defined in the Click Metric
        onClick={() => console.log("button click, a event should be fired")}
      >
        <b>Flag: {String(analyzeFancyMissingData)} - Fire a click Event</b>
      </button>
      <br />
      {analyzeFancyMissingData ? (
        <a
          onClick={trackEvent}
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fire a custom event
        </a>
      ) : (
        <a
          onClick={trackEvent}
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fire a custom event
        </a>
      )}
    </div>
  );
}

export default Analyze;
