import { type User, type InsertUser, type Wish, type InsertWish } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getWishes(): Promise<Wish[]>;
  createWish(wish: InsertWish): Promise<Wish>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private wishes: Map<string, Wish>;

  constructor() {
    this.users = new Map();
    this.wishes = new Map();
    
    // Add some sample wishes
    this.createWish({
      name: "Amit",
      message: "Happy Birthday Annu! May your year be filled with love, laughter, and amazing adventures! 🎉"
    });
    
    this.createWish({
      name: "Priya",
      message: "Wishing you the happiest birthday! You deserve all the beautiful things life has to offer! 💝"
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getWishes(): Promise<Wish[]> {
    return Array.from(this.wishes.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createWish(insertWish: InsertWish): Promise<Wish> {
    const id = randomUUID();
    const wish: Wish = {
      ...insertWish,
      id,
      createdAt: new Date(),
    };
    this.wishes.set(id, wish);
    return wish;
  }
}

export const storage = new MemStorage();
