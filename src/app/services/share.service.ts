import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  buttonColor:any;

  constructor() {
  }

  setButtonColor(buttonColor) {
    this.buttonColor = buttonColor;
  }
  getButtonColor() {
    return this.buttonColor;
  }


}
