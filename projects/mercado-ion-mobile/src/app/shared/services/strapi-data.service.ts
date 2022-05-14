/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { environment } from 'projects/mercado-frontend/src/environments/environment';
const openCapacitorSite = async () => {
  await Browser.open({ url: 'http://capacitorjs.com/' });
};
const logDeviceInfo = async () => {
  const info = await Device.getInfo();
  console.log(info);
};
const logBatteryInfo = async () => {
  const info = await Device.getBatteryInfo();
  console.log(info);
};

@Injectable({
  providedIn: 'root'
})
export class StrapiDataService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  batteryIndo;
  constructor(
    private httpClient: HttpClient,
    private platform: Platform
  ) { }
  getUser() {
    return this.httpClient.get(environment.API_BASE_PATH + '/users/me?populate=*');
  }
  SS_GetProductPaymentDetails(checkoutSessionId) {
    const retrieveCheckoutSessionUrl = environment.BASE_PATH + '/strapi-stripe/retrieveCheckoutSession/' + checkoutSessionId;
    return this.httpClient.get(retrieveCheckoutSessionUrl, { headers: this.headers }).subscribe((response: any) => {
      if (response.payment_status === 'paid') {
        const stripePaymentUrl = environment.BASE_PATH + '/strapi-stripe/stripePayment';
        const data = {
          data: {
            txnDate: new Date(),
            transactionId: response.id,
            isTxnSuccessful: true,
            txnMessage: response.customer_details.name,
            txnAmount: response.amount_total / 100,
            customerName: response.customer_details.name,
            customerEmail: response.customer_details.email,
            stripeProduct: response.metadata.productId,
          }
        };
        this.httpClient.post(stripePaymentUrl, data.data, { headers: this.headers }).subscribe((res: any) => {
          console.log(res);
        });
      }
    });
  }
  async SS_ProductCheckout(productId) {
    const getProductApi = environment.BASE_PATH + '/strapi-stripe/getProduct/' + productId;
    const checkoutSessionUrl = environment.BASE_PATH + '/strapi-stripe/createCheckoutSession/';
    return this.httpClient.get(getProductApi, { headers: this.headers }).subscribe((response: any) => {
      const data = {
        data: {
          stripePriceId: response.stripePriceId,
          productId: response.id,
          productName: response.title,
          productQuantity: 53
        }
      };
      this.httpClient.post(checkoutSessionUrl, JSON.stringify(data.data), { headers: this.headers }
      ).subscribe(async (res: any) => {
        if (res.id) {
          const info = await Device.getInfo();
          if (info.platform === 'web') {
            window.location.replace(res.url);
          }
          if (info.platform === 'ios' || info.platform === 'android') {
            await Browser.open({ url: res.url });
          }
        }
      });

    });
  }
  retrieveCheckoutSession(sessionId) {
    const params = new URLSearchParams(document.location.search);
    return this.httpClient.get(`http://localhost:1337/strapi-stripe/retrieveCheckoutSession/${sessionId}`);
  }
  getStrapiProducts() {

  }
  getStripeProducts() {
    // "/getProduct/:offset/:limit/:sort/:order",
    const sort = 15;
    const order = 5;
    const offset = 0;
    const limit = 10;
    return this.httpClient.get(environment.BASE_PATH + `/strapi-stripe/getProduct/${offset}/${limit}/${sort}/${order}`, { headers: this.headers });
  }
  getPayments(id) {
    const sort = 0;
    const order = 0;
    const offset = 0;
    const limit = 1;
    return this.httpClient.get(environment.BASE_PATH + `/strapi-stripe/getPayments/${id}/${sort}/${order}/${offset}/${limit}`);
  }
}
