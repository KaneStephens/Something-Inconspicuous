import { Injectable, NotFoundException } from '@nestjs/common';
import * as usersData from '../data.json'
import { pouchPrices } from './utils/prices';
import { formatCatNames, calculateTotalPrice } from './utils/helpers';
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
    const catNamesFormatted = formatCatNames(user.cats);
    const totalPrice = calculateTotalPrice(user.cats, pouchPrices);

    return {
      title: `Your next delivery for ${catNamesFormatted}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${catNamesFormatted}'s fresh food.`,
      totalPrice: totalPrice.toFixed(2),
      freeGift: false,
    };
  }
}
