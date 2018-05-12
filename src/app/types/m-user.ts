import { UserInfo } from "firebase";

export interface MUser extends UserInfo {
  githubUsername?: string
  facebookUsername?: string
  url?: string
  phone?: string
  emailVerified?: boolean
}