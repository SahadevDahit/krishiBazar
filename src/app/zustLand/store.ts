import { create } from 'zustand'

interface BearState {
  businessId: string
}

export const useStore = create<BearState>()(
      (set) => ({
        businessId: "0jgjhg78",
      }),
)