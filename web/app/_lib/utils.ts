export function durationString(fromDate: string, toDate?: string): string {
  if (!toDate) toDate = "Current";
  return `${fromDate} - ${toDate}`;
}
