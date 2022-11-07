export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined' && window.localStorage.getItem(key)) {
    let item: string | null | boolean = window.localStorage.getItem(key);
    if (item === null) return;
    if (JSON.parse(item) === 'true') return true;
    if (JSON.parse(item) === 'false') return false;
    return JSON.parse(item);
  }
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};
