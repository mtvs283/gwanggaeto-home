export const JAMO_HANGEUL_MODULES = [
  "vowels",
  "consonants",
  "syllables",
  "final-consonants",
] as const;

export type JamoHangeulModule = (typeof JAMO_HANGEUL_MODULES)[number];

/** Live jamo apps attached from the home Hangeul section. */
export const JAMO_HANGEUL_APPS: Record<
  JamoHangeulModule,
  { url: string; title: string }
> = {
  vowels: {
    url: "https://gwanggaeto-app.vercel.app",
    title: "한글 모음 획순 학습",
  },
  consonants: {
    url: "https://gwanggaeto-app-4csu.vercel.app",
    title: "한글 자음 획순 학습",
  },
  syllables: {
    url: "https://gwanggaeto-app-xdu8.vercel.app",
    title: "한글 음절 조합 학습",
  },
  "final-consonants": {
    url: "https://gwanggaeto-app-di8f.vercel.app",
    title: "한글 받침 조합 학습",
  },
};

export function isJamoHangeulModule(value: string): value is JamoHangeulModule {
  return (JAMO_HANGEUL_MODULES as readonly string[]).includes(value);
}
