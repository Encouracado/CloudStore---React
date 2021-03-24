import Cookie from 'js-cookie';

const storage: any = {};

// Safari in incognito has local storage, but size 0
// This system falls back to cookies in that situation
try {
  if (!window.localStorage) {
    throw Error('no local storage');
  }

  // Setup simple local storage wrapper
  storage.set = (key: any, value: any) => localStorage.setItem(key, JSON.stringify(value));
  storage.get = (key: any) => {
    const item = localStorage.getItem(key) || '{}';
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  };
  storage.remove = (key: any) => localStorage.removeItem(key);
} catch (e) {
  storage.set = Cookie.set;
  storage.get = Cookie.getJSON;
  storage.remove = Cookie.remove;
}

export default storage;