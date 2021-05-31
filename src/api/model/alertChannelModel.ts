export interface AlertChannelBase {
  name: string;
  addresses: string[];
  isDefault?: Boolean;
  sendReminder?: Boolean;
  disableResolveMessage?: Boolean;
  uploadImage?: Boolean;
}

export type AlertChannelInCreat = AlertChannelBase;

export interface AlertChannelInUpdate {
  name?: string;
  addresses: string[];
  isDefault?: Boolean;
  sendReminder?: Boolean;
  disableResolveMessage?: Boolean;
  uploadImage?: Boolean;
}

export interface AlertChannelInResponse extends AlertChannelBase {
  uid: string;
}

export interface ManyAlertChannelInResponse {
  alert_channel: AlertChannelInResponse[];
}
