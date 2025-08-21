export interface FormatOption {
  mime: string;
  label: string;
  extension: string;
  supportsQuality: boolean;
}

export const formats: Record<string, FormatOption> = makeRecord(
  { mime: 'image/png', label: 'PNG', extension: 'png', supportsQuality: false },
  { mime: 'image/jpeg', label: 'JPEG', extension: '.jpg', supportsQuality: true },
  { mime: 'image/webp', label: 'WebP', extension: '.webp', supportsQuality: true }
);

function makeRecord(...options: FormatOption[]): Record<string, FormatOption> {
  const result: Record<string, FormatOption> = {};

  for (const option of options) {
    result[option.mime] = option;
  }

  return result;
}

export type FormatsRecord = typeof formats;