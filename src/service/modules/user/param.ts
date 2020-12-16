import { User } from "."

export type LoginParam = Pick<User, "name" | "password">
