export type StellarNetwork = 'testnet' | 'mainnet' | 'local';

export interface StellarNetworkConfig {
  horizonUrl: string;
  /** Stellar network passphrase used to sign transactions on this network. */
  passphrase: string;
  /**
   * Backwards-compat alias for {@link passphrase}; retained because earlier
   * call-sites referenced `networkPassphrase` directly.
   */
  networkPassphrase: string;
  /** Default streaming-contract deployment address for the network. */
  streamingContractAddress: string;
}

export const STELLAR_NETWORKS: Record<StellarNetwork, StellarNetworkConfig> = {
  testnet: {
    horizonUrl: 'https://horizon-testnet.stellar.org',
    passphrase: 'Test SDF Network ; September 2015',
    networkPassphrase: 'Test SDF Network ; September 2015',
    streamingContractAddress: 'CTESTNETPLACEHOLDER0000000000000000000000000000000000000',
  },
  mainnet: {
    horizonUrl: 'https://horizon.stellar.org',
    passphrase: 'Public Global Stellar Network ; September 2015',
    networkPassphrase: 'Public Global Stellar Network ; September 2015',
    streamingContractAddress: 'CMAINNETPLACEHOLDER0000000000000000000000000000000000000',
  },
  local: {
    horizonUrl: 'http://localhost:8000',
    passphrase: 'Standalone Network ; February 2017',
    networkPassphrase: 'Standalone Network ; February 2017',
    streamingContractAddress: 'CLOCALPLACEHOLDER000000000000000000000000000000000000000',
  },
};

export interface ContractAddresses {
  streaming?: string;
  [key: string]: string | undefined;
}
