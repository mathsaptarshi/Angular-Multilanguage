import { Injectable } from '@angular/core';
import { AppConfigs } from './app.config';

@Injectable()
export class AppVariables {
  constructor(private _appConfigs: AppConfigs) { }

  monthLongArr: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthShortArr: any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  noImageUrl: string = this._appConfigs.baseUrl + 'images/noimage.jpg';
  uploadsPath: string = this._appConfigs.baseUrl + 'images/uploads/';

  someErrorOccurred: string = 'Oops! Some error occured.';

  // Profile Settings Page
  securitySettingsSubmittedSuccessfully: string = 'Your password has been updated successfully!';
  securitySettingsInvalidOldPassword: string = 'Incorrect current password!';
  // Profile Settings Page

}