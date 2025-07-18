import Image from "next/image";

export interface EventItem {
  id: number;
  name: string;
  date: string;
  startTime: string;
  endTime?: string;
  desc?: string;
  photo?: string;
}