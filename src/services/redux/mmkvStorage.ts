import {Storage} from 'redux-persist';

import {createMMKV} from 'react-native-mmkv';

export const storage = createMMKV({
  id: `user-storage`,
  encryptionKey: 'ReactMeta',
  mode: 'multi-process',
  readOnly: false,
});

export const mmkvStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value ?? null);
  },
  removeItem: key => {
    storage.remove(key);
    return Promise.resolve();
  },
};
