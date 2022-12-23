export default class Workspace {
  code: string;
  capacity: number;
  openHour: number;
  closeHour: number;
  occupiedRooms: number;
  
  constructor(code: string, capacity: number, openHour: number, closeHour: number, occupiedRooms: number) {
    this.code = code;
    this.capacity = capacity;
    this.openHour = openHour;
    this.closeHour = closeHour;
    this.occupiedRooms = occupiedRooms;
  }

  isOpen(date: Date) {
    const entryTime = date.getHours();
    
    return (entryTime >= this.openHour && entryTime <= this.closeHour);
  }

  isFull() {
    return this.occupiedRooms === this.capacity;
  }
}