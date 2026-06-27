import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        // Theme
        theme: localStorage.getItem('theme') || 'dark',
        setTheme: (theme) => set({ theme }),

        // Market Data
        currentPrice: 0,
        priceHistory: [],
        setCurrentPrice: (price) => set({ currentPrice: price }),
        addPriceToHistory: (price) => {
          const history = get().priceHistory;
          set({ priceHistory: [...history, price].slice(-1000) });
        },

        // Candles
        candles: {},
        setCandles: (timeframe, candles) => {
          const current = get().candles;
          set({ candles: { ...current, [timeframe]: candles } });
        },
        updateLatestCandle: (timeframe, candle) => {
          const candles = get().candles[timeframe] || [];
          const updated = [...candles];
          if (updated.length > 0) {
            updated[updated.length - 1] = candle;
          }
          get().setCandles(timeframe, updated);
        },

        // Selected Asset
        selectedAsset: 'BTC/USD',
        setSelectedAsset: (asset) => set({ selectedAsset: asset }),

        // Timeframe
        selectedTimeframe: '1h',
        setSelectedTimeframe: (tf) => set({ selectedTimeframe: tf }),

        // Indicators
        indicators: {
          ema: { enabled: true, period: 20 },
          rsi: { enabled: true, period: 14 },
          macd: { enabled: true },
          bollinger: { enabled: true, period: 20, stdDev: 2 }
        },
        updateIndicator: (name, config) => {
          const indicators = get().indicators;
          set({ indicators: { ...indicators, [name]: config } });
        },

        // Trading Signals
        signals: [],
        addSignal: (signal) => {
          const signals = get().signals;
          set({ signals: [signal, ...signals].slice(0, 50) });
        },
        clearSignals: () => set({ signals: [] }),

        // Watchlist
        watchlist: ['BTC/USD', 'ETH/USD', 'XRP/USD', 'ADA/USD'],
        addToWatchlist: (asset) => {
          const watchlist = get().watchlist;
          if (!watchlist.includes(asset)) {
            set({ watchlist: [...watchlist, asset] });
          }
        },
        removeFromWatchlist: (asset) => {
          const watchlist = get().watchlist;
          set({ watchlist: watchlist.filter(a => a !== asset) });
        },

        // UI State
        showIndicatorPanel: true,
        setShowIndicatorPanel: (show) => set({ showIndicatorPanel: show }),
        showSignalPanel: true,
        setShowSignalPanel: (show) => set({ showSignalPanel: show }),

        // AI Analysis State
        aiAnalysis: null,
        setAiAnalysis: (analysis) => set({ aiAnalysis: analysis }),
        isAnalyzing: false,
        setIsAnalyzing: (analyzing) => set({ isAnalyzing: analyzing }),

        // Connection Status
        isConnected: false,
        setIsConnected: (connected) => set({ isConnected: connected }),
      }),
      {
        name: 'trading-platform-store',
        partialize: (state) => ({
          theme: state.theme,
          watchlist: state.watchlist,
          indicators: state.indicators,
          selectedTimeframe: state.selectedTimeframe,
          selectedAsset: state.selectedAsset
        })
      }
    )
  )
);

export default useStore;
