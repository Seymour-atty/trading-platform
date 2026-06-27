import { Trash2 } from 'lucide-react';
import useStore from '../../store';
import '../../styles/Components.css';

const Watchlist = ({ watchlist, onRemove, onSelect }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Watchlist</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {watchlist.map((asset) => (
          <div
            key={asset}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem',
              background: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            onClick={() => onSelect?.(asset)}
          >
            <span style={{ fontWeight: '600' }}>{asset}</span>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--danger)',
                cursor: 'pointer',
                padding: '4px'
              }}
              onClick={(e) => {
                e.stopPropagation();
                onRemove?.(asset);
              }}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
