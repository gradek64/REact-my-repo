export const DEFAULT_SLOT_TIMES: SlotTimes[] = [
  {
    startTime: [7, 30],
    endTime: [11, 0],
  },
  {
    startTime: [10, 0],
    endTime: [14, 0],
  },
  {
    startTime: [12, 30],
    endTime: [16, 0],
  },
  {
    startTime: [14, 0],
    endTime: [18, 0],
  },
  {
    startTime: [17, 30],
    endTime: [21, 0],
  },
  {
    startTime: [7, 30],
    endTime: [18, 0],
  },
]

export type SlotTime = [number, number]

type SlotTimes = {
  startTime: SlotTime
  endTime: SlotTime
}
