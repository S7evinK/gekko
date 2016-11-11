// what kind of exchange does Gekko support?
//
// Required parameters per exchange.
//
// name: Proper name of the exchange
// slug: slug name of the exchange (needs to match filename in `gekko/exchanges/`)
// direct: does this exchange support MKT orders?
// infinityOrder: is this an exchange that supports infinity
//    orders? (which means that it will accept orders bigger then
//    the current balance and order at the full balance instead)
// currencies: all the currencies supported by the exchange
//    implementation in gekko.
// assets: all the assets supported by the exchange implementation
//    in gekko.
// pairs: all allowed currency / asset combinations that form a market
// maxHistoryFetch: the parameter fed to the getTrades call to get the max
//    history.
// providesHistory: If the getTrades can be fed a since parameter
//    that Gekko can use to get historical data, set this to:
//
//    - 'date' // When Gekko can pass in a starting point in time
//             // to start returning data from.
//    - 'tid'  // When Gekko needs to pass in a trade id to act as
//             // a starting point in time.
//    - false  // When the exchange does not support to give back
//             // historical data at all.
// fetchTimespan: if the timespan between first and last trade per
//    fetch is fixed, set it here in minutes.
//
// monitorError: if Gekko is currently not able to monitor this exchange, please set it
//    to an URL explaining the problem.
// tradeError: If gekko is currently not able to trade at this exchange, please set it
//    to an URL explaining the problem.
var exchanges = [
  {
    name: 'BTC-e',
    slug: 'btce',
    direct: false,
    infinityOrder: false,
    currencies: ['USD', 'RUR', 'EUR', 'BTC', 'LTC'],
    assets: [
      'BTC', 'LTC', 'NMC', 'NVC', 'USD', 'EUR', 'PPC', 'DSH', 'ETH'
    ],
    markets: [
      { pair: ['USD', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
      { pair: ['RUR', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
      { pair: ['EUR', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
      { pair: ['BTC', 'LTC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['USD', 'LTC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['RUR', 'LTC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['EUR', 'LTC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['BTC', 'NMC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['USD', 'NMC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['BTC', 'NVC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['USD', 'NVC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['RUR', 'USD'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['USD', 'EUR'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['BTC', 'PPC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['USD', 'PPC'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['BTC', 'DSH'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['BTC', 'ETH'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['USD', 'ETH'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['LTC', 'ETH'], minimalOrder: { amount: 0.1, unit: 'asset' } },
      { pair: ['RUR', 'ETH'], minimalOrder: { amount: 0.1, unit: 'asset' } }
    ],
    requires: ['key', 'secret'],
    providesHistory: false,
    tid: 'tid'
  },
  {
    name: 'Bitstamp',
    slug: 'bitstamp',
    direct: false,
    infinityOrder: false,
    currencies: ['USD', 'EUR'],
    assets: ['BTC', 'EUR'],
    maxTradesAge: 60,
    maxHistoryFetch: null,
    markets: [
      { pair: ['USD', 'BTC'], minimalOrder: { amount: 1, unit: 'currency' } },
      { pair: ['EUR', 'BTC'], minimalOrder: { amount: 1, unit: 'currency' } },
      { pair: ['USD', 'EUR'], minimalOrder: { amount: 1, unit: 'currency' } }
    ],
    requires: ['key', 'secret', 'username'],
    fetchTimespan: 60,
    tid: 'tid'
  },
  {
    name: 'CEX.io',
    slug: 'cexio',
    direct: false,
    infinityOrder: false,
    currencies: ['BTC','USD','EUR','RUB'],
    assets: ['GHS','BTC','ETH','LTC'],
    markets: [
      { pair: ['BTC', 'GHS'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['BTC', 'LTC'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['EUR', 'LTC'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['USD', 'LTC'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['RUB', 'BTC'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['USD', 'BTC'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['EUR', 'BTC'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['BTC', 'ETH'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['USD', 'ETH'], minimalOrder: { amount: 0.000001, unit: 'currency' } },
      { pair: ['EUR', 'ETH'], minimalOrder: { amount: 0.000001, unit: 'currency' } }
    ],
    requires: ['key', 'secret', 'username'],
    providesHistory: false,
    tid: 'tid'
  },
  {
    name: 'Kraken',
    slug: 'kraken',
    direct: false,
    infinityOrder: false,
    currencies: ['ETH', 'XBT', 'CAD', 'EUR', 'GBP', 'JPY', 'XRP', 'XDG', 'XLM', 'USD'],
    assets: ['DAO', 'ETH', 'LTC', 'XBT'],
    markets: [
      { pair: ['ETH', 'DAO'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['XBT', 'DAO'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['CAD', 'DAO'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['EUR', 'DAO'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['GBP', 'DAO'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['JPY', 'DAO'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['USD', 'DAO'], minimalOrder: { amount: 0.01, unit: 'currency' } },

      { pair: ['XBT', 'ETH'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['CAD', 'ETH'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['EUR', 'ETH'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['GBP', 'ETH'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['JPY', 'ETH'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['USD', 'ETH'], minimalOrder: { amount: 0.01, unit: 'currency' } },

      { pair: ['CAD', 'LTC'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['EUR', 'LTC'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['USD', 'LTC'], minimalOrder: { amount: 0.01, unit: 'currency' } },

      { pair: ['LTC', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['XDG', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['XLM', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['XRP', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['CAD', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['EUR', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['GBP', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['JPY', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } },
      { pair: ['USD', 'XBT'], minimalOrder: { amount: 0.01, unit: 'currency' } }
    ],
    requires: ['key', 'secret'],
    providesHistory: false,
    tid: 'date'
  },
  {
    name: 'Poloniex',
    slug: 'poloniex',
    direct: false,
    infinityOrder: false,
    currencies: ['BTC', 'ETH', 'XMR', 'USDT'],
		assets: [
      '1CR', 'ABY', 'AC', 'ACH', 'ADN', 'AEON', 'AERO', 'AIR', 'AMP', 'APH',
      'ARCH', 'AUR', 'AXIS', 'BALLS', 'BANK', 'BBL', 'BBR', 'BCC', 'BCN',
      'BCY', 'BDC', 'BDG', 'BELA', 'BITCNY', 'BITS', 'BITUSD', 'BLK', 'BLOCK',
      'BLU', 'BNS', 'BONES', 'BOST', 'BTC', 'BTCD', 'BTCS', 'BTM', 'BTS',
      'BURN', 'BURST', 'C2', 'CACH', 'CAI', 'CC', 'CCN', 'CGA', 'CHA', 'CINNI',
      'CLAM', 'CNL', 'CNMT', 'CNOTE', 'COMM', 'CON', 'CORG', 'CRYPT', 'CURE',
      'CYC', 'DAO', 'DASH', 'DCR', 'DGB', 'DICE', 'DIEM', 'DIME', 'DIS', 'DNS',
      'DOGE', 'DRKC', 'DRM', 'DSH', 'DVK', 'EAC', 'EBT', 'ECC', 'EFL', 'EMC2',
       'EMO', 'ENC', 'ETC', 'ETH', 'eTOK', 'EXE', 'EXP', 'FAC', 'FCN', 'FCT',
       'FIBRE', 'FLAP', 'FLDC', 'FLO', 'FLT', 'FOX', 'FRAC', 'FRK', 'FRQ',
       'FVZ', 'FZ', 'FZN', 'GAME', 'GAP', 'GDN', 'GEMZ', 'GEO', 'GIAR', 'GLB',
       'GML', 'GNS', 'GOLD', 'GPC', 'GPUC', 'GRC', 'GRCX', 'GRS', 'GUE', 'H2O',
       'HIRO', 'HOT', 'HUC', 'HUGE', 'HVC', 'HYP', 'HZ', 'IFC', 'INDEX', 'IOC',
       'ITC', 'IXC', 'JLH', 'JPC', 'JUG', 'KDC', 'KEY', 'LBC', 'LC', 'LCL',
       'LEAF', 'LGC', 'LOL', 'LOVE', 'LQD', 'LSK', 'LTBC', 'LTC', 'LTCX',
       'MAID', 'MAST', 'MAX', 'MCN', 'MEC', 'METH', 'MIL', 'MIN', 'MINT', 'MMC',
       'MMNXT', 'MMXIV', 'MNTA', 'MON', 'MRC', 'MRS', 'MTS', 'MUN', 'MYR',
       'MZC', 'N5X', 'NAS', 'NAUT', 'NAV', 'NBT', 'NEOS', 'NL', 'NMC', 'NOBL',
       'NOTE', 'NOXT', 'NRS', 'NSR', 'NTX', 'NXT', 'NXTI', 'OMNI', 'OPAL',
       'PAND', 'PAWN', 'PIGGY', 'PINK', 'PLX', 'PMC', 'POT', 'PPC', 'PRC',
       'PRT', 'PTS', 'Q2C', 'QBK', 'QCN','QORA', 'QTL', 'RADS', 'RBY', 'RDD', 'REP',
       'RIC', 'RZR', 'SBD', 'SC', 'SDC', 'SHIBE', 'SHOPX', 'SILK', 'SJCX',
       'SLR', 'SMC', 'SOC', 'SPA', 'SQL', 'SRCC', 'SRG', 'SSD', 'STEEM', 'STR',
       'SUM', 'SUN', 'SWARM', 'SXC', 'SYNC', 'SYS', 'TAC', 'TOR', 'TRUST',
       'TWE', 'UIS', 'ULTC', 'UNITY', 'URO', 'USDE', 'USDT', 'UTC', 'UTIL',
       'UVC', 'VIA', 'VOOT', 'VOX', 'VRC', 'VTC', 'WC', 'WDC', 'WIKI', 'WOLF',
       'X13', 'XAI', 'XAP', 'XBC', 'XC', 'XCH', 'XCN', 'XCP', 'XCR', 'XDN',
       'XDP', 'XEM', 'XHC', 'XLB', 'XMG', 'XMR', 'XPB', 'XPM', 'XRP', 'XSI',
       'XST', 'XSV', 'XUSD', 'XVC', 'XXC', 'YACC', 'YANG', 'YC', 'YIN'
    ],
    markets: [
      // *** BTC <-> XXX
      { pair: ['BTC', '1CR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ABY'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'AC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ACH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ADN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'AEON'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'AERO'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'AIR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'AMP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'APH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ARCH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'AUR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'AXIS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BALLS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BANK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BBL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BBR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BCC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BCN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BCY'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BDC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BDG'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BELA'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BITCNY'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BITS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BITUSD'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BLK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BLOCK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BLU'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BNS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BONES'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BOST'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BTC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BTCD'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BTCS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BTM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BTS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BURN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'BURST'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'C2'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CACH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CAI'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CCN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CGA'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CHA'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CINNI'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CLAM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CNL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CNMT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CNOTE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'COMM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CON'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CORG'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CRYPT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CURE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'CYC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DAO'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DASH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DCR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DGB'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DICE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DIEM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DIME'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DIS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DNS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DOGE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DRKC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DRM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DSH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'DVK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'EAC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'EBT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ECC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'EFL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'EMC2'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'EMO'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ENC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ETC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ETH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'eTOK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'EXE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'EXP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FAC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FCN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FCT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FIBRE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FLAP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FLDC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FLO'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FLT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FOX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FRAC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FRK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FRQ'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FVZ'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FZ'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'FZN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GAME'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GAP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GDN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GEMZ'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GEO'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GIAR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GLB'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GML'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GNS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GOLD'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GPC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GPUC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GRC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GRCX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GRS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'GUE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'H2O'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'HIRO'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'HOT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'HUC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'HUGE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'HVC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'HYP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'HZ'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'IFC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'INDEX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'IOC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ITC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'IXC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'JLH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'JPC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'JUG'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'KDC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'KEY'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LBC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LCL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LEAF'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LGC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LOL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LOVE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LQD'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LSK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LTBC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LTC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'LTCX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MAID'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MAST'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MAX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MCN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MEC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'METH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MIL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MIN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MINT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MMC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MMNXT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MMXIV'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MNTA'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MON'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MRC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MRS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MTS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MUN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MYR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'MZC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'N5X'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NAS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NAUT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NAV'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NBT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NEOS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NMC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NOBL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NOTE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NOXT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NRS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NSR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NTX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NXT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'NXTI'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'OMNI'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'OPAL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PAND'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PAWN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PIGGY'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PINK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PLX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PMC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'POT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PPC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PRC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PRT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'PTS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'Q2C'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'QBK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'QCN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'QORA'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'QTL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'RADS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'RBY'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'RDD'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'REP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'RIC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'RZR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SBD'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SDC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SHIBE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SHOPX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SILK'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SJCX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SLR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SMC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SOC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SPA'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SQL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SRCC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SRG'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SSD'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'STEEM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'STR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SUM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SUN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SWARM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SXC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SYNC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'SYS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'TAC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'TOR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'TRUST'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'TWE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'UIS'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'ULTC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'UNITY'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'URO'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'USDE'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'USDT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'UTC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'UTIL'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'UVC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'VIA'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'VOOT'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'VOX'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'VRC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'VTC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'WC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'WDC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'WIKI'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'WOLF'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'X13'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XAI'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XAP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XBC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XCH'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XCN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XCP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XCR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XDN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XDP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XEM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XHC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XLB'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XMG'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XMR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XPB'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XPM'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XRP'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XSI'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XST'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XSV'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XUSD'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XVC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'XXC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'YACC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'YANG'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'YC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['BTC', 'YIN'], minimalOrder: { amount: 0.0001, unit: 'asset' } },

      // *** USDT <-> XXX
      { pair: ['USDT', 'BTC'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
      { pair: ['USDT', 'ETH'], minimalOrder: { amount: 0.0001, unit: 'asset' } }

    ],
    requires: ['key', 'secret'],
    tid: 'tid',
    providesHistory: 'date',
    providesFullHistory: true
  },
  {
    name: 'Bitfinex',
    slug: 'bitfinex',
    direct: false,
    infinityOrder: false,
    currencies: ['USD', 'BTC'],
    assets: ['BTC', 'LTC', 'ETH'],
    markets: [
        { pair: ['USD', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
        { pair: ['USD', 'LTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
        { pair: ['USD', 'ETH'], minimalOrder: { amount: 0.01, unit: 'asset' } },
        { pair: ['BTC', 'LTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
        { pair: ['BTC', 'ETH'], minimalOrder: { amount: 0.01, unit: 'asset' } },
    ],
    requires: ['key', 'secret'],
    tid: 'tid'

  },
  {
    name: 'meXBT',
    slug: 'mexbt',
    direct: false,
    infinityOrder: false,
    currencies: ['MXN'],
    assets: ['BTC'],
    markets: [
      {
        pair: ['MXN', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' }
      }
    ],
    requires: ['key', 'secret', 'username'],
    providesHistory: 'date',
    tid: 'tid'
  },
  {
    name: 'LakeBTC',
    slug: 'lakebtc',
    direct: false,
    infinityOrder: false,
    currencies: ['USD'],
    assets: ['BTC'],
    markets: [
      {
        pair: ['USD', 'BTC'], minimalOrder: { amount: 1, unit: 'currency' }
      }
    ],
    requires: ['key', 'secret'],
    providesHistory: false,
    fetchTimespan: 60,
    tid: 'tid'
  },
  {
    name: 'Zaif.jp',
    slug: 'zaif.jp',
    direct: false,
    infinityOrder: false,
    currencies: ['JPY'],
    assets: ['BTC'],
    markets: [
      {
        pair: ['JPY', 'BTC'], minimalOrder: { amount: 1, unit: 'currency' }
      }
    ],
    requires: ['key', 'secret', 'username'],
    providesHistory: false,
    fetchTimespan: 60,
    tid: 'tid'
  },
  {
    name: 'BTCC',
    slug: 'btcc',
    direct: false,
    infinityOrder: false,
    currencies: ['BTC', 'CNY'],
    assets: ['BTC', 'LTC'],
    markets: [
      { pair: ['CNY', 'BTC'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['CNY', 'LTC'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['BTC', 'LTC'], minimalOrder: { amount: 0.001, unit: 'asset' } }
    ],
    requires: ['key', 'secret'],
    tid: 'tid',
    providesFullHistory: true,
  },
  {
    name: 'OkCoin',
    slug: 'okcoin',
    direct: false,
    infinityOrder: false,
    currencies: ['BTC', 'CNY'],
    assets: ['BTC', 'LTC'],
    markets: [
      { pair: ['CNY', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
      { pair: ['CNY', 'LTC'], minimalOrder: { amount: 0.01, unit: 'asset' } }
    ],
    requires: ['key', 'secret', 'username'],
    providesHistory: false,
    fetchTimespan: 60,
    tid: 'date',
  },
  {
    name: 'BitX',
    slug: 'bitx',
    direct: false,
    infinityOrder: false,
    currencies: ['MYR', 'KES', 'NGN', 'ZAR'],
    assets: ['XBT'],
    markets: [
      { pair: ['MYR', 'XBT'], minimalOrder: { amount: 0.00001, unit: 'asset' } },
      { pair: ['XBT', 'KES'], minimalOrder: { amount: 0.00001, unit: 'asset' } },
      { pair: ['XBT', 'NGN'], minimalOrder: { amount: 0.00001, unit: 'asset' } },
      { pair: ['XBT', 'ZAR'], minimalOrder: { amount: 0.00001, unit: 'asset' } }
    ],
    requires: ['key', 'secret'],
    providesHistory: false,
    tid: 'msdate'
  },
  {
    name: 'BX.in.th',
    slug: 'bx.in.th',
    direct: false,
    infinityOrder: false,
    currencies: ['THB'],
    assets: ['BTC'],
    markets: [
      {
        pair: ['THB', 'BTC'], minimalOrder: { amount: 0.0001, unit: 'asset' },
      }
    ],
    requires: ['key', 'secret'],
    tradeError: 'NOT IMPLEMENTED YET',
    providesHistory: false
  },
  {
    name: 'BTC Markets',
    slug: 'btc-markets',
    direct: false,
    infinityOrder: false,
    currencies: ['AUD', 'BTC'],
    assets: [
      'BTC', 'LTC', 'ETH', 'ETC'
    ],
    markets: [
      { pair: ['AUD', 'BTC'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['AUD', 'LTC'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['AUD', 'ETH'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['AUD', 'LTC'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['BTC', 'BTC'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['BTC', 'LTC'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['BTC', 'ETH'], minimalOrder: { amount: 0.001, unit: 'asset' } },
      { pair: ['BTC', 'ETC'], minimalOrder: { amount: 0.001, unit: 'asset' } }
    ],
    requires: ['key', 'secret'],
    providesHistory: false,
    tid: 'tid'
  },
  // ,
  // ---- Keeping this here for historical purposes. ----
  // {
  //
  //   name: 'MtGox',
  //   slug: 'mtgox',
  //   direct: true,
  //   infinityOrder: true,
  //   currencies: [
  //     'USD', 'EUR', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY',
  //     'DKK', 'HKD', 'PLN', 'RUB', 'SGD', 'THB'
  //   ],
  //   assets: ['BTC'],
  //   markets: [
  //     { pair: ['USD', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['EUR', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['GBP', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['AUD', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['CAD', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['CHF', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['CNY', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['DKK', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['HKD', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['PLN', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['RUB', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['SGD', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } },
  //     { pair: ['THB', 'BTC'], minimalOrder: { amount: 0.01, unit: 'asset' } }
  //   ],
  //   requires: ['key', 'secret'],
  //   providesHistory: false
  // }
];

module.exports = exchanges;
