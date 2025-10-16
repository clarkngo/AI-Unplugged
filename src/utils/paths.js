// Utility to resolve public asset paths correctly in dev and production
// Example: asset('images/picture.svg') => '/images/picture.svg' in dev, '/AI-Unplugged/images/picture.svg' in prod
export const BASE_URL = import.meta.env.BASE_URL || '/'

export function asset(path) {
  if (!path) return BASE_URL
  // Ensure no leading slash on path to avoid double slashes
  const cleaned = path.startsWith('/') ? path.slice(1) : path
  return `${BASE_URL}${cleaned}`
}
