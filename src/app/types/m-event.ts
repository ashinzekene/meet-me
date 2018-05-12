import { MUser } from "./m-user";

export type MEvent = {
  name: string
  description: string
  tagline: string
  startDate: Date
  endDate: Date
  location: string
  checkInUsers: MUser[]
}