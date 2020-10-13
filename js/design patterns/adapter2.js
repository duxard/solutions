class Iphone {
  iphoneCharge() {
    console.log('Iphone is charging...');
  }
}

class Android {
  androidCharge() {
    console.log('Android is charging...');
  }
}

class AndroidChargerForIphoneAdapter {
  constructor(iphone) {
    this.iphone = iphone;
  }
  androidCharge() {
    console.log('Using Android charger for Iphone');
    this.iphone.iphoneCharge();
  }
}

new Iphone().iphoneCharge();
new Android().androidCharge();

const androidChargerForIphoneAdapter = new AndroidChargerForIphoneAdapter( new Iphone() );
androidChargerForIphoneAdapter.androidCharge();
