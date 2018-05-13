import { MUser } from "./m-user";

export type MEvent = {
  name: string
  description: string
  tagline: string
  startDate: Date
  startTime: string
  endTime: string
  imageUrl: string
  location: string
  endDate?: Date
  checkedInUsers?: MUser[]
}