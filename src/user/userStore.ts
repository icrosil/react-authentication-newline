import { observable } from 'mobx';
import { userModel, loadUserByToken } from './loadUserByToken';

type user = { id: number | null, name: string | null, isLoaded: boolean };

export const userStore = observable({
  id: null,
  name: null,
  isLoaded: false,
} as user);

export function saveUserInStore(userToStore: userModel) {
  userStore.id = userToStore.id;
  userStore.name = userToStore.first_name;
  userStore.isLoaded = true;
}

export function setUndefinedUser() {
  userStore.id = null;
  userStore.name = null;
  userStore.isLoaded = true;
}

export function logUserIn(userId: string) {
  loadUserByToken(userId)
    .then(saveUserInStore)
    .catch(setUndefinedUser);
}
