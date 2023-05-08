import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  user__list: Array<any> = [];

  constructor() {}

  addUser(data: any): void {
    this.user__list.unshift(data);
    localStorage.setItem('userList', JSON.stringify(this.user__list));
  }

  updateUser(index: number, data: any) {
    this.user__list[index] = data;
    console.log(this.user__list, index);
    localStorage.setItem('userList', JSON.stringify(this.user__list));
  }

  deleteUser(index: number): void {
    this.user__list.splice(index, 1);
    localStorage.setItem('userList', JSON.stringify(this.user__list));
  }

  findIndex(data: any) {
    const index = this.user__list.findIndex((item) => item === data);
    return index;
  }

  getUser(index: number) {
    return this.user__list[index];
  }

  getUsers(): Array<any> {
    this.user__list = JSON.parse(localStorage.getItem('userList') || '');
    return this.user__list;
  }
}
