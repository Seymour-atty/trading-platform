import '../../styles/Components.css';

const LoadingSpinner = ({ size = 'md' }) => {
  const sizeMap = {
    sm: '20px',
    md: '40px',
    lg: '60px'
  };

  return (
    <div
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        border: '3px solid var(--border)',
        borderTop: '3px solid var(--primary-light)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }}
    />
  );
};

export default LoadingSpinner;
