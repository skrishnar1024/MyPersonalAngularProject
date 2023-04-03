export class CreateRoomDto {
    roomNumber: string;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;

constructor() {
    this.roomNumber = '';
    this.roomType = '';
    this.amenities = '';
    this.price = 0;
    this.photos = '';
    this.checkinTime = new Date();
    this.checkoutTime = new Date();
    this.rating = 0;
  }
}