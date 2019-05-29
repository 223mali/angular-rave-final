/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class RaveOptions {
}
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
export class PrivateRaveOptions extends RaveOptions {
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZS1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXZlLyIsInNvdXJjZXMiOlsibGliL3JhdmUtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtDQWlGTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsTUFBTSx5QkFBMEIsU0FBUSxXQUFXO0NBZWxEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJhdmVPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBZb3VyIG1lcmNoYW50IHB1YmxpYyBrZXkgcHJvdmlkZWQgd2hlbiB5b3UgY3JlYXRlIGEgYnV0dG9uXHJcbiAgICovXHJcbiAgUEJGUHViS2V5OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRW1haWwgb2YgdGhlIGN1c3RvbWVyXHJcbiAgICovXHJcbiAgY3VzdG9tZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX2ZpcnN0bmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBmaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXHJcbiAgICovXHJcbiAgY3VzdG9tZXJfbGFzdG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgYSBzaG9ydCBtb2RhbCBkZXNjcmlwdGlvblxyXG4gICAqL1xyXG4gIGN1c3RvbV9kZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBMaW5rIHRvIHlvdXIgY3VzdG9tIGltYWdlXHJcbiAgICovXHJcbiAgY3VzdG9tX2xvZ28/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgdGhlIHRpdGxlIG9mIHRoZSBwYXltZW50IG1vZGFsXHJcbiAgICovXHJcbiAgY3VzdG9tX3RpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEFtb3VudCB0byBjaGFyZ2VcclxuICAgKi9cclxuICBhbW91bnQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBwaG9uZSBudW1iZXIgb2YgdGhlIGN1c3RvbWVyXHJcbiAgICovXHJcbiAgY3VzdG9tZXJfcGhvbmU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVVJMIHRvIHJlZGlyZWN0IHRvIHdoZW4gdHJhbnNhY3Rpb24gaXMgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIHJlZGlyZWN0X3VybD86IHN0cmluZztcclxuICAvKipcclxuICAgKiByb3V0ZSBjb3VudHJ5LiBEZWZhdWx0IE5HXHJcbiAgICovXHJcbiAgY291bnRyeT86IHN0cmluZztcclxuXHJcbiAgcGF5bWVudF9wbGFuPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGN1cnJlbmN5IHRvIGNoYXJnZSB0aGUgY2FyZCBpbi4gRGVmYXVsdCBcIk5HTlwiXHJcbiAgICovXHJcbiAgY3VycmVuY3k/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBhbGxvd3MgeW91IHNlbGVjdCB0aGUgcGF5bWVudCBvcHRpb24geW91IHdhbnQgZm9yIHlvdXIgdXNlcnMsIHBvc3NpYmxlIHZhbHVlcyBhcmUgY2FyZCwgYWNjb3VudCBvciBib3RoXHJcbiAgICovXHJcbiAgcGF5bWVudF9tZXRob2Q/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIFJhdmUgQ2hlY2tvdXQgQnV0dG9uXHJcbiAgICovXHJcbiAgcGF5X2J1dHRvbl90ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgcHJvdmlkZWQgYnkgdGhlIG1lcmNoYW50XHJcbiAgICovXHJcbiAgdHhyZWY6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGEgc2hhMjU2IGhhc2ggb2YgeW91ciBnZXRwYWlkU2V0dXAgdmFsdWVzLCBpdCBpcyB1c2VkIGZvciBwYXNzaW5nIHNlY3VyZWQgdmFsdWVzIHRvIHRoZSBwYXltZW50IGdhdGV3YXlcclxuICAgKi9cclxuICBpbnRlZ3JpdHlfaGFzaD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGZvciB0aGlzIGlzIDEuIFRoaXMgaXMgdXNlZnVsIHdoZW4gY3VzdG9tZXIgaXMgdXNpbmcgYW4gb3BlcmEgYnJvd3NlciwgaXRcclxuICAgKiB3b3VsZCBsb2FkIHRoZSBwYXltZW50IG1vZGFsIG9uIGEgbmV3IHBhZ2UuXHJcbiAgICovXHJcbiAgaG9zdGVkX3BheW1lbnQ/OiAxO1xyXG4gIC8qKlxyXG4gICAqIEFueSBvdGhlciBjdXN0b20gZGF0YSB5b3Ugd2lzaCB0byBwYXNzLlxyXG4gICAqL1xyXG4gIG1ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogU3ViYWNjb3VudHMgdG8gc3BsaXQgcGF5bWVudCB3aXRoXHJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIuZmx1dHRlcndhdmUuY29tL3YyLjAvZG9jcy9zcGxpdC1wYXltZW50XHJcbiAgICovXHJcbiAgc3ViYWNjb3VudD86IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlUmF2ZU9wdGlvbnMgZXh0ZW5kcyBSYXZlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzc2Z1bCBjYXJkIGNoYXJnZS4gVXNlcuKAmXMgY2FuIGFsd2F5cyBiZSByZWRpcmVjdGVkIHRvIGEgc3VjY2Vzc2Z1bCBvclxyXG4gICAqIGZhaWxlZCBwYWdlIHN1cHBsaWVkIGJ5IHRoZSBtZXJjaGFudCBoZXJlIGJhc2VkIG9uIHJlc3BvbnNlXHJcbiAgICogQHBhcmFtIHJlc3BvbnNlPzogVGhlIHNlcnZlciByZXNwb25zZVxyXG4gICAqL1xyXG4gIGNhbGxiYWNrOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgcGF5IG1vZGFsIGlzIGNsb3NlZC5cclxuICAgKi9cclxuICBvbmNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gcGF5bWVudCBpcyBhYm91dCB0byBiZWdpblxyXG4gICAqL1xyXG4gIGluaXQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuIl19