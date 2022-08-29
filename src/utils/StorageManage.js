import DefaultPreference from "react-native-default-preference";

export default class Storage {
  static TOKEN = "token";
  static EXPIRATION_DATE_TOKEN = "date";
  static USER_ID = "userId";
  static ADMIN_ID = "adminId";
  static USER_TYPE = "userType";

  // Default Preference instead Async Storage

  static set = async (key, value) => {
    try {
      await DefaultPreference.set(key, value);
    } catch (e) {}
  };

  static get = async (key) => {
    try {
      const value = await DefaultPreference.get(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {}
  };

  static setObject = async (key, object) => {
    try {
      await DefaultPreference.set(key, JSON.stringify(object));
    } catch (e) {}
  };

  static getObject = async (key) => {
    try {
      const value = await DefaultPreference.get(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {}
  };

  static deleteObject = async (key) => {
    try {
      await DefaultPreference.clear(key);
    } catch (e) {}
  };

  static clear = async () => {
    DefaultPreference.clearAll();
  };
}
