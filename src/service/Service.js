import Storage from "../utils/StorageManage";
import { Endpoints } from "./Endpoints";

export const loginApiCall = async (payload, successCallback, errorCallback) => {
  try {
    const response = await fetch(Endpoints.LOGIN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        dataType: "json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    successCallback(json);
  } catch (error) {
    errorCallback(error);
    console.error(error);
  }
};

export const registrationApiCall = async (
  payload,
  successCallback,
  errorCallback
) => {
  try {
    const response = await fetch(Endpoints.REGISTRATION, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        dataType: "json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    successCallback(json);
  } catch (error) {
    errorCallback(error);
    console.error(error);
  }
};

export const getDishes = async (id, successCallback, errorCallback) => {
  const token = await Storage.get(Storage.TOKEN);
  const expirationDate = await Storage.get(Storage.EXPIRATION_DATE_TOKEN);

  try {
    const response = await fetch(Endpoints.GET_DISHES, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        dataType: "json",
        token: token,
        expirationDate: expirationDate,
        id: id,
      },
    });
    const json = await response.json();
    successCallback(json);
  } catch (error) {
    errorCallback(error);
    console.error(error);
  }
};

export const getUser = async (id, typeUser, successCallback, errorCallback) => {
  const token = await Storage.get(Storage.TOKEN);
  const expirationDate = await Storage.get(Storage.EXPIRATION_DATE_TOKEN);

  try {
    const response = await fetch(Endpoints.GET_USER, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        dataType: "json",
        token: token,
        expirationDate: expirationDate,
        id: id,
        typeUser: typeUser,
      },
    });
    const json = await response.json();
    successCallback(json);
  } catch (error) {
    errorCallback(error);
    console.error(error);
  }
};

export const changeEmailApicall = async (
  payload,
  successCallback,
  errorCallback
) => {
  const token = await Storage.get(Storage.TOKEN);
  const expirationDate = await Storage.get(Storage.EXPIRATION_DATE_TOKEN);
  const adminId = await Storage.get(Storage.ADMIN_ID);
  const userId = await Storage.get(Storage.USER_ID);
  const userType = await Storage.get(Storage.USER_TYPE);
  const id = userType == "client" ? userId : adminId;
  try {
    const response = await fetch(Endpoints.UPDATE_EMAIL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        dataType: "json",
        token: token,
        id: id,
        expirationDate: expirationDate,
        typeUser: userType,
      },
      body: payload,
    });
    const json = await response.json();
    successCallback(json);
  } catch (error) {
    errorCallback(error);
    console.error(error);
  }
};
export const changePasswordApicall = async (
  payload,
  successCallback,
  errorCallback
) => {
  const token = await Storage.get(Storage.TOKEN);
  const expirationDate = await Storage.get(Storage.EXPIRATION_DATE_TOKEN);
  const adminId = await Storage.get(Storage.ADMIN_ID);
  const userId = await Storage.get(Storage.USER_ID);
  const userType = await Storage.get(Storage.USER_TYPE);
  const id = userType == "client" ? userId : adminId;
  try {
    const response = await fetch(Endpoints.UPDATE_PASSWORD, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        dataType: "json",
        token: token,
        id: id,
        expirationDate: expirationDate,
        typeUser: "client",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    successCallback(json);
  } catch (error) {
    errorCallback(error);
    console.error(error);
  }
};

export const listDishesApicall = async (
  status,
  payload,
  successCallback,
  errorCallback
) => {
  const token = await Storage.get(Storage.TOKEN);
  const expirationDate = await Storage.get(Storage.EXPIRATION_DATE_TOKEN);
  const adminId = await Storage.get(Storage.ADMIN_ID);
  const userId = await Storage.get(Storage.USER_ID);
  const userType = await Storage.get(Storage.USER_TYPE);

  try {
    const response = await fetch(Endpoints.LIST_DISHES, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        dataType: "json",
        token: token,
        idadmin: adminId,
        idclient: userId,
        expirationDate: expirationDate,
        typeUser: "client",
        status: status,
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    successCallback(json);
  } catch (error) {
    errorCallback(error);
    console.error(error);
  }
};
