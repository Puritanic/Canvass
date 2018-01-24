const sendgrid = require('sendgrid');

const helper = sendgrid.mail;

// helpers.Mail is a object that takes a lot of configuration and spits out mails
class Mailer extends helper.Mail {
  /**
   *
   * Sandgrid emailer setup
   * confusing as fuck >_< nasty stuff
   * * NOTE: take a look at alternative mailers like Mail Chimp
   *
   */

  constructor({ subject, recipients }, content) {
    super();
    // API object
    this.sgAPI = sendgrid(process.env.SEND_GRID_KEY);

    this.from_email = new helper.Email('no-reply@canvass.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = Mailer.formatAddresses(recipients);
    // addContent is a helper fn from base helper.Email class
    this.addContent(this.body);
    // custom methods
    this.addClickTracking();
    this.addRecipients();
  }

  static formatAddresses(recipients) {
    return recipients.map(({ email }) => new helper.Email(email));
  }

  addClickTracking() {
    // mind-fuck, tnx sandgrid docs
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    // base class method
    this.addPersonalization(personalize);
  }

  async send() {
    const req = this.sgAPI.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });
    // Call API function, sends request to Send Grid
    const response = await this.sgAPI.API(req);

    return response;
  }
}

module.exports = Mailer;
