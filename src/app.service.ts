import { Injectable } from '@nestjs/common';
import * as usersData from '../data.json'

@Injectable()
export class AppService {
  private users = usersData

  getUserData(userId: string) {
    return userId
  }
}
