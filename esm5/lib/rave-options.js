/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
var RaveOptions = /** @class */ (function () {
    function RaveOptions() {
    }
    return RaveOptions;
}());
export { RaveOptions };
function RaveOptions_tsickle_Closure_declarations() {
    /**
     * Your merchant public key provided when you create a button
     * @type {?}
     */
    RaveOptions.prototype.PBFPubKey;
    /**
     * Email of the customer
     * @type {?}
     */
    RaveOptions.prototype.customer_email;
    /**
     * Firstname of the customer
     * @type {?}
     */
    RaveOptions.prototype.customer_firstname;
    /**
     * firstname of the customer
     * @type {?}
     */
    RaveOptions.prototype.customer_lastname;
    /**
     * Text to be displayed as a short modal description
     * @type {?}
     */
    RaveOptions.prototype.custom_description;
    /**
     * Link to your custom image
     * @type {?}
     */
    RaveOptions.prototype.custom_logo;
    /**
     * Text to be displayed as the title of the payment modal
     * @type {?}
     */
    RaveOptions.prototype.custom_title;
    /**
     * Amount to charge
     * @type {?}
     */
    RaveOptions.prototype.amount;
    /**
     * phone number of the customer
     * @type {?}
     */
    RaveOptions.prototype.customer_phone;
    /**
     * URL to redirect to when transaction is completed.
     * @type {?}
     */
    RaveOptions.prototype.redirect_url;
    /**
     * route country. Default NG
     * @type {?}
     */
    RaveOptions.prototype.country;
    /** @type {?} */
    RaveOptions.prototype.payment_plan;
    /**
     * currency to charge the card in. Default "NGN"
     * @type {?}
     */
    RaveOptions.prototype.currency;
    /**
     * This allows you select the payment option you want for your users, possible values are card, account or both
     * @type {?}
     */
    RaveOptions.prototype.payment_method;
    /**
     * Text to be displayed on the Rave Checkout Button
     * @type {?}
     */
    RaveOptions.prototype.pay_button_text;
    /**
     * Unique transaction reference provided by the merchant
     * @type {?}
     */
    RaveOptions.prototype.txref;
    /**
     * This is a sha256 hash of your getpaidSetup values, it is used for passing secured values to the payment gateway
     * @type {?}
     */
    RaveOptions.prototype.integrity_hash;
    /**
     * The value to be passed for this is 1. This is useful when customer is using an opera browser, it
     * would load the payment modal on a new page.
     * @type {?}
     */
    RaveOptions.prototype.hosted_payment;
    /**
     * Any other custom data you wish to pass.
     * @type {?}
     */
    RaveOptions.prototype.meta;
    /**
     * Subaccounts to split payment with
     * https://developer.flutterwave.com/v2.0/docs/split-payment
     * @type {?}
     */
    RaveOptions.prototype.subaccount;
}
var PrivateRaveOptions = /** @class */ (function (_super) {
    tslib_1.__extends(PrivateRaveOptions, _super);
    function PrivateRaveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrivateRaveOptions;
}(RaveOptions));
export { PrivateRaveOptions };
function PrivateRaveOptions_tsickle_Closure_declarations() {
    /**
     * A function to be called on successful card charge. User’s can always be redirected to a successful or
     * failed page supplied by the merchant here based on response
     * \@param response?: The server response
     * @type {?}
     */
    PrivateRaveOptions.prototype.callback;
    /**
     * A function to be called when the pay modal is closed.
     * @type {?}
     */
    PrivateRaveOptions.prototype.onclose;
    /**
     * A function to be called when payment is about to begin
     * @type {?}
     */
    PrivateRaveOptions.prototype.init;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZS1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXZlLyIsInNvdXJjZXMiOlsibGliL3JhdmUtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUE7OztzQkFBQTtJQWlGQyxDQUFBO0FBakZELHVCQWlGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsSUFBQTtJQUF3Qyw4Q0FBVzs7Ozs2QkFuRm5EO0VBbUZ3QyxXQUFXLEVBZWxELENBQUE7QUFmRCw4QkFlQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSYXZlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogWW91ciBtZXJjaGFudCBwdWJsaWMga2V5IHByb3ZpZGVkIHdoZW4geW91IGNyZWF0ZSBhIGJ1dHRvblxyXG4gICAqL1xyXG4gIFBCRlB1YktleTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEVtYWlsIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcclxuICAgKi9cclxuICBjdXN0b21lcl9maXJzdG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogZmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX2xhc3RuYW1lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIGEgc2hvcnQgbW9kYWwgZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBjdXN0b21fZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTGluayB0byB5b3VyIGN1c3RvbSBpbWFnZVxyXG4gICAqL1xyXG4gIGN1c3RvbV9sb2dvPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSB0aXRsZSBvZiB0aGUgcGF5bWVudCBtb2RhbFxyXG4gICAqL1xyXG4gIGN1c3RvbV90aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBBbW91bnQgdG8gY2hhcmdlXHJcbiAgICovXHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogcGhvbmUgbnVtYmVyIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX3Bob25lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVSTCB0byByZWRpcmVjdCB0byB3aGVuIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICByZWRpcmVjdF91cmw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogcm91dGUgY291bnRyeS4gRGVmYXVsdCBOR1xyXG4gICAqL1xyXG4gIGNvdW50cnk/OiBzdHJpbmc7XHJcblxyXG4gIHBheW1lbnRfcGxhbj86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBjdXJyZW5jeSB0byBjaGFyZ2UgdGhlIGNhcmQgaW4uIERlZmF1bHQgXCJOR05cIlxyXG4gICAqL1xyXG4gIGN1cnJlbmN5Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgYWxsb3dzIHlvdSBzZWxlY3QgdGhlIHBheW1lbnQgb3B0aW9uIHlvdSB3YW50IGZvciB5b3VyIHVzZXJzLCBwb3NzaWJsZSB2YWx1ZXMgYXJlIGNhcmQsIGFjY291bnQgb3IgYm90aFxyXG4gICAqL1xyXG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBSYXZlIENoZWNrb3V0IEJ1dHRvblxyXG4gICAqL1xyXG4gIHBheV9idXR0b25fdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBVbmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIHByb3ZpZGVkIGJ5IHRoZSBtZXJjaGFudFxyXG4gICAqL1xyXG4gIHR4cmVmOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIHNoYTI1NiBoYXNoIG9mIHlvdXIgZ2V0cGFpZFNldHVwIHZhbHVlcywgaXQgaXMgdXNlZCBmb3IgcGFzc2luZyBzZWN1cmVkIHZhbHVlcyB0byB0aGUgcGF5bWVudCBnYXRld2F5XHJcbiAgICovXHJcbiAgaW50ZWdyaXR5X2hhc2g/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbHVlIHRvIGJlIHBhc3NlZCBmb3IgdGhpcyBpcyAxLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGN1c3RvbWVyIGlzIHVzaW5nIGFuIG9wZXJhIGJyb3dzZXIsIGl0XHJcbiAgICogd291bGQgbG9hZCB0aGUgcGF5bWVudCBtb2RhbCBvbiBhIG5ldyBwYWdlLlxyXG4gICAqL1xyXG4gIGhvc3RlZF9wYXltZW50PzogMTtcclxuICAvKipcclxuICAgKiBBbnkgb3RoZXIgY3VzdG9tIGRhdGEgeW91IHdpc2ggdG8gcGFzcy5cclxuICAgKi9cclxuICBtZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIFN1YmFjY291bnRzIHRvIHNwbGl0IHBheW1lbnQgd2l0aFxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLmZsdXR0ZXJ3YXZlLmNvbS92Mi4wL2RvY3Mvc3BsaXQtcGF5bWVudFxyXG4gICAqL1xyXG4gIHN1YmFjY291bnQ/OiB7IGlkOiBzdHJpbmcsIHRyYW5zYWN0aW9uX3NwbGl0X3JhdGlvOiBzdHJpbmcgfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZVJhdmVPcHRpb25zIGV4dGVuZHMgUmF2ZU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLigJlzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3JcclxuICAgKiBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxyXG4gICAqIEBwYXJhbSByZXNwb25zZT86IFRoZSBzZXJ2ZXIgcmVzcG9uc2VcclxuICAgKi9cclxuICBjYWxsYmFjazogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBheSBtb2RhbCBpcyBjbG9zZWQuXHJcbiAgICovXHJcbiAgb25jbG9zZTogKCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHBheW1lbnQgaXMgYWJvdXQgdG8gYmVnaW5cclxuICAgKi9cclxuICBpbml0OiAoKSA9PiB2b2lkO1xyXG59XHJcbiJdfQ==