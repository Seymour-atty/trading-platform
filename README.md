# Trading Platform 📈

A modern OTC live trading web platform with AI-powered trading assistant, real-time candlestick charts, and advanced technical analysis.

## Features

### 🎯 Core Features
- **Real-time Candlestick Charts**: Interactive charts with multiple timeframes (1m, 5m, 15m, 1h, 4h, 1d)
- **Live Price Updates**: WebSocket-powered real-time market data
- **AI Trading Assistant**: Intelligent market analysis with automated signals
- **Technical Indicators**: EMA, RSI, MACD, Bollinger Bands
- **Signal Generation**: Buy/Sell/Hold signals with confidence levels
- **Trading Dashboard**: Comprehensive trading interface
- **Watchlist Management**: Track multiple assets
- **Signal History**: Review past trading signals and analysis
- **Dark/Light Mode**: Customizable interface theme
- **Responsive Design**: Works on desktop, tablet, and mobile

### 🤖 AI Trading Assistant
- Market structure analysis
- Support and resistance identification
- Trend direction detection
- Candlestick pattern recognition
- Volatility analysis
- Technical indicator synthesis
- Real-time signal generation with:
  - Buy/Sell/Hold recommendations
  - Confidence percentages (0-100%)
  - Entry price suggestions
  - Stop loss levels
  - Take profit targets
  - Detailed analysis explanations

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Seymour-atty/trading-platform.git
cd trading-platform

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Development

```bash
# Start development server with frontend and backend
npm start

# Or run separately:
# Terminal 1
npm run server

# Terminal 2
npm run dev
```

Visit http://localhost:5173 to view the application.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Chart/
│   │   ├── Indicators/
│   │   ├── Dashboard/
│   │   ├── Signals/
│   │   └── UI/
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API and WebSocket services
│   ├── store/               # Zustand state management
│   ├── utils/               # Utility functions
│   ├── styles/              # CSS styles
│   ├── App.jsx
│   └── main.jsx
├── server/                  # Backend server
│   ├── server.js
│   ├── routes/
│   ├── services/
│   └── data/
├── public/                  # Static assets
├── vite.config.js
├── index.html
├── package.json
└── .env.example
```

## Technology Stack

- **Frontend**: React 18, Vite
- **State Management**: Zustand
- **Charting**: Lightweight Charts
- **UI Components**: Lucide React Icons
- **Backend**: Express.js
- **Real-time**: WebSocket
- **Styling**: CSS3 with Tailwind CSS

## API Integration

The platform supports integration with:
- Binance API
- Kraken API
- Custom data sources

## AI Analysis

The AI trading assistant uses:
- Technical indicator calculations
- Pattern recognition algorithms
- Market structure analysis
- Confidence scoring system

## Configuration

Edit `.env` to configure:
- API endpoints
- Exchange credentials
- AI service endpoints
- WebSocket URLs

## Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Push to the branch
4. Create a Pull Request

## License

MIT

## Support

For issues and questions, please open a GitHub issue.
