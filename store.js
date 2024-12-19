import { create } from "zustand";

const initialState = {
  profile_information: {},
  address: {},
  contact: {},
  bank_details: {},
  brand: {},
  legal_and_finance: {},
  products: {},
  product: {},
};

export const useVendorStore = create((set, get) => ({
  ...initialState,
  resetStore: () =>
    set((state) => ({
      ...initialState,
    })),

  setProfile: (payload) =>
    set((state) => ({
      profile_information: {
        ...state.profile_information,
        ...payload,
      },
    })),

  setAddress: (payload) =>
    set((state) => ({
      address: {
        ...state.address,
        ...payload,
      },
    })),

  setBrand: (payload) =>
    set((state) => ({
      brand: {
        ...state.brand,
        ...payload,
      },
    })),

  setBankDetails: (payload) =>
    set((state) => ({
      bank_details: {
        ...state.bank_details,
        ...payload,
      },
    })),

  setContact: (payload) =>
    set((state) => ({
      contact: {
        ...state.contact,
        ...payload,
      },
    })),

  setLegalFinance: (payload) =>
    set((state) => ({
      legal_and_finance: {
        ...state.legal_and_finance,
        ...payload,
      },
    })),
  setProduct: (payload) =>
    set((state) => ({
      product: {
        ...state.product,
        ...payload,
      },
    })),
}));
