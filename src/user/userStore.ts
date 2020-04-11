import {observable} from 'mobx';
import { userModel } from './loadUserByToken';

type user = { id: number | null, name: string | null };

export const user = observable({
  id: null,
  name: null,
} as user);

export function saveUserInStore(userToStore: userModel) {
  user.id = userToStore.id;
  user.name = userToStore.first_name;
}
