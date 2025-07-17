import { Image } from "openai/resources.js";

export interface EventItem {
  id: number;
  name: string;
  date: string;
  startTime: string;
  endTime?: string;
  desc?: string;
  photo?: Image;
}