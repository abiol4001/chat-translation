import { Subscription } from "../types/Subscription"
import {create} from "zustand"

export type LanguageSupported = 
| "en"
| "yo"
| "de"
| "fr"
| "es"
| "ru"
| "ar"
| "hi"
| "zh"
| "pt"
| "it"

export const LanguagesSupportedMap: Record<LanguageSupported, string> = {
    en: "English",
    yo: "Yoruba",
    de: "German",
    fr: "French",
    es: "Spanish",
    ru: "Russian",
    ar: "Arabic",
    hi: "Hindi",
    zh: "Mandarin",
    pt: "Portugese",
    it: "Italian",
}

interface SubscriptionState {
    subscription: Subscription | null | undefined
    setSubscription: (subscription: Subscription | null) => void
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({subscription})
}))