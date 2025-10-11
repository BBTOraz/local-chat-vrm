const normalizeBase = (value: string) => {
  if (!value) {
    return "";
  }
  return value.endsWith("/") ? value.slice(0, -1) : value;
};

export const API_BASE_URL = normalizeBase(
  import.meta.env.VITE_API_BASE ?? "http://localhost:8181"
);

export const buildApiUrl = (path: string) => {
  if (!path.startsWith("/")) {
    return `${API_BASE_URL}/${path}`;
  }
  return `${API_BASE_URL}${path}`;
};
