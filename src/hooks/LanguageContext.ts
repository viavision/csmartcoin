import React, { createContext } from 'react'

export interface LanguageObject {
  code: string
  language: string
}
interface LanguageState {
  selectedLanguage: LanguageObject
  setSelectedLanguage: (langObject) => void
  translatedLanguage: LanguageObject
  setTranslatedLanguage: React.Dispatch<React.SetStateAction<LanguageObject>>
}

const defaultLanguageState: LanguageState = {
  selectedLanguage: { code: '', language: '' },
  setSelectedLanguage: (): void => undefined,
  translatedLanguage: { code: '', language: '' },
  setTranslatedLanguage: (): void => undefined,
};

export const LanguageContext = createContext(defaultLanguageState as LanguageState);
