export function slugToUrl(slug: string) {
  return (
    window.location.hostname +
    `${process.env.NODE_ENV === "development" && `:${window.location.port}`}/` +
    slug
  );
}
