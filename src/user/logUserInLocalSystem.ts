import Axios from "axios";

export function logUserInLocalSystem(userId: string) {
  return Axios('http://localhost:3030/login', {
    method: 'POST',
    data: {
      id: userId,
    }
  })
}
