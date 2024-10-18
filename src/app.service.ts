import { Injectable, NotFoundException } from '@nestjs/common';
import * as usersData from '../data.json'
import { User } from './utils/types';

@Injectable()
export class AppService {
  private users = usersData

  getUserData(userId: string): User {
    const user = this.users.find((user) => user.id === userId);
    
    if (!user) {
      throw new NotFoundException('Oops! That User was not found')
    }
    return user;
  }

  getNextDelivery(userId: string) {
    const user = this.getUserData(userId);

    const catNames = user.cats.filter((cat) => cat.subscriptionActive).map((cat) => cat.name)
    const catNamesFormatted =
      catNames.length > 1
        ? `${catNames.slice(0, -1).join(', ')} and ${catNames.slice(-1)}`
        : catNames[0];

    return {
      title: `Your next delivery for ${catNamesFormatted}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${catNamesFormatted}'s fresh food.`,
      totalPrice: 0,
      freeGift: false,
    };
  }
}
