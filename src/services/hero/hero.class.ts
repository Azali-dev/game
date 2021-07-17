import { heros } from '../../database/datas';
import { HeroI } from './interfaces';

export class Hero {

  constructor () {}
  
  async get(name: string): Promise<HeroI> {
    const hero = heros.find((hero) => hero.name === name);
    if (!!hero) {
      return hero;
    } else {
      throw new Error('Hero not found !');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  /*async create (data: HeroI, params?: Params): Promise<HeroI> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update (id: NullableId, data: HeroI, params?: Params): Promise<HeroI> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch (id: NullableId, data: HeroI, params?: Params): Promise<HeroI> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove (id: NullableId, params?: Params): Promise<HeroI> {
    throw new Error();
  }*/
}
