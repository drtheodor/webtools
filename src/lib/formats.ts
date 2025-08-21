export interface FormatOption {
  label: string;
  supportsQuality: boolean;
}

export const formats: Record<string, FormatOption> = {
  'image/png': { label: 'PNG', supportsQuality: false },
  'image/jpeg': { label: 'JPEG', supportsQuality: true },
  'image/webp': { label: 'WebP', supportsQuality: true }
};

export type FormatsRecord = typeof formats;

export const [defaultFormat] = Object.keys(formats);