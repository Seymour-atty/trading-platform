import '../../styles/Controls.css';

const AssetSelector = ({ selectedAsset, onAssetChange, watchlist }) => {
  return (
    <div className="asset-selector">
      <label className="asset-label">Asset</label>
      <select
        className="asset-select"
        value={selectedAsset}
        onChange={(e) => onAssetChange(e.target.value)}
      >
        {watchlist.map((asset) => (
          <option key={asset} value={asset}>
            {asset}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AssetSelector;
