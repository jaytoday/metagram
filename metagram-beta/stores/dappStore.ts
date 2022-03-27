import create from "zustand";

const dappStore = create((set) => ({
    provider: null,
    setProvider: (provider) => set((state) => ({ provider })),

    signer: null,
    setSigner: (signer) => set((state) => ({ signer })),

    address: null,
    setAddress: (address) => set((state) => ({ address })),

    isConnected: false,
    setIsConnected: (isConnected) => set((state) => ({ isConnected })),

    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated) => set((state) => ({ isAuthenticated })),

    profile: null,
    setProfile: (profile) => set((state) => ({ profile })),
    removeProfile: () => set((state) => ({ profile: null })),

    publications: null,
    setPublications: (publications) => set((state) => ({ publications })),
    removePublications: () => set((state) => ({ publications: null })),
}));

export default dappStore 