/** Live jamo (Hangul letter) app attached from the home Hangeul section. */
export const JAMO_APP_ORIGIN = "https://gwanggaeto-app.vercel.app";

export const JAMO_HANGEUL_MODULES = [
  "vowels",
  "consonants",
  "syllables",
  "final-consonants",
] as const;

export type JamoHangeulModule = (typeof JAMO_HANGEUL_MODULES)[number];

export function isJamoHangeulModule(value: string): value is JamoHangeulModule {
  return (JAMO_HANGEUL_MODULES as readonly string[]).includes(value);
}
