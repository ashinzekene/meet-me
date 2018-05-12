import { User } from "firebase";

export interface MUser extends User {
  githubUsername?: string
  facebookUsername?: string
  url?: string
  phone?: string
}