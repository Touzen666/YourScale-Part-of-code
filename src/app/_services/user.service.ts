import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../_models";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`/v1/login`);
  }

  register(user: User) {
    return this.http.post(`/v1/account/register`, user);
  }

  // getAll() {
  //   return this.http.get<User[]>(`/users`);
  // }

  // register(user: User) {
  //   return this.http.post(`/users/register`, user);
  // }

  delete(id: number) {
    return this.http.delete(`/users/${id}`);
  }
}
