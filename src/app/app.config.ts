import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigs {
  //  Local Dev Server
  apiBaseUrl: string = 'https://localhost:8443/site-api/';
  baseUrl: string = 'https://localhost:8443/';
  vendorProfileBaseUrl: string = 'https://localhost:5002/#/';
  
  // // Local Dev Server
  // apiBaseUrl: string = 'https://192.168.5.37:8443/site-api/';
  // baseUrl: string = 'https://192.168.5.37:8443/';
  // vendorProfileBaseUrl: string = 'https://192.168.5.37:5002/#/';
  
  // // AWS Dev Server
  // apiBaseUrl: string = 'http://wgi-aws-php-1241812835.ap-south-1.elb.amazonaws.com:5000/site-api/';
  // baseUrl: string = 'http://wgi-aws-php-1241812835.ap-south-1.elb.amazonaws.com:5000/';
  // vendorProfileBaseUrl: string = 'http://wgi-aws-php-1241812835.ap-south-1.elb.amazonaws.com/abhishek-gym/vendor-portal/#/'

  // AWS Beta Server
  // apiBaseUrl: string = 'https://www.athlexa.in:5000/site-api/';
  // baseUrl: string = 'https://www.athlexa.in:5000/';
  // vendorProfileBaseUrl: string = 'https://www.athlexa.in/beta/vendor-portal/#/';
  // sitePortalBaseUrl: string = 'https://www.athlexa.in/beta/site-portal/';

}