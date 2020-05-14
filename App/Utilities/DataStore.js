import AsyncStorage from '@react-native-community/async-storage';

class DataStore {
  async store(key, data) {
    return await AsyncStorage.setItem(key, data);
  }

  async get(key) {
    return await AsyncStorage.getItem(key);
  }

  async remove(key) {
    return await AsyncStorage.removeItem(key);
  }

  async clear() {
    return await AsyncStorage.clear();
  }
}

export default new DataStore();
