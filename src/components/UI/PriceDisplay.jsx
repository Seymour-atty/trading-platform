import { X } from 'lucide-react';
import '../../styles/Components.css';

const PriceDisplay = ({ asset, price, change, changePercent }) => {
  const isPositive = change >= 0;

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">{asset}</div>
          <div className="card-subtitle">Current Price</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '1.875rem', fontWeight: '700', color: 'var(--text-primary)' }}>
          ${price.toFixed(2)}
        </div>
        <div style={{
          fontSize: '0.875rem',
          color: isPositive ? 'var(--success)' : 'var(--danger)',
          fontWeight: '600'
        }}>
          {isPositive ? '+' : ''}{change.toFixed(4)} ({changePercent.toFixed(2)}%)
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;
