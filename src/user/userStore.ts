import { observable, computed } from 'mobx';
import { userModel, loadUserByToken } from './loadUserByToken';

type user = { id: number | null, name: string | null, isLoaded: boolean, company: string | null };

export const userStore = observable({
  id: null,
  name: null,
  isLoaded: false,
  company: null,
} as user);

export const isLoggedIn = computed<boolean>(() => userStore.id !== null && userStore.isLoaded === true);

export function saveUserInStore(userToStore: userModel) {
  userStore.id = userToStore.data.id;
  userStore.name = userToStore.data.first_name;
  userStore.company = userToStore.ad.company;
  userStore.isLoaded = true;
}

export function setUndefinedUser() {
  userStore.id = null;
  userStore.name = null;
  userStore.company = null;
  userStore.isLoaded = true;
}

export function logUserIn(userId: string) {
  loadUserByToken(userId)
    .then(saveUserInStore)
    .catch(setUndefinedUser);
}
