import '../../styles/Controls.css';

const TIMEFRAMES = ['1m', '5m', '15m', '1h', '4h', '1d'];

const TimeframeControls = ({ selectedTimeframe, onTimeframeChange }) => {
  return (
    <div className="timeframe-controls">
      {TIMEFRAMES.map((tf) => (
        <button
          key={tf}
          className={`timeframe-button ${selectedTimeframe === tf ? 'active' : ''}`}
          onClick={() => onTimeframeChange(tf)}
        >
          {tf}
        </button>
      ))}
    </div>
  );
};

export default TimeframeControls;
