export function cuidToSlug(cuid: string) {
  return (
    cuid.substring(1, 3) +
    cuid.substring(8, 10) +
    cuid.substring(12, 14) +
    cuid.substring(16, 17)
  );
}
