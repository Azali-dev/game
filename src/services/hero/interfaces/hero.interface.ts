import { WeaponI } from "./weapon.interface";

export interface HeroI {
    name: string;
    hp: number;
    weapon: WeaponI
}