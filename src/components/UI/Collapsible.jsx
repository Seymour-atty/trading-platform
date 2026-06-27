import { ChevronDown } from 'lucide-react';
import '../../styles/Components.css';

const Collapsible = ({ title, children, defaultOpen = true, onToggle }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  return (
    <div className="card">
      <button
        className="card-header"
        onClick={handleToggle}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 'var(--spacing-md)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <h3 className="card-title">{title}</h3>
        <ChevronDown
          size={20}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        />
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

import { useState } from 'react';
export default Collapsible;
