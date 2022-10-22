## Serverless API for RazorPay Integration using Serverless Framework

### RazorPay

- Dashboard: https://dashboard.razorpay.com/
- Documentation (Build): https://razorpay.com/docs/payments/server-integration/nodejs/payment-gateway/build-integration
- Documentation (Test): https://razorpay.com/docs/payments/server-integration/nodejs/payment-gateway/test-integration

### Environment Variables

- **RAZORPAY_API_KEY** : RazorPay Client Id
- **RAZORPAY_API_SECRET**: RazorPay Client Secret
- **REDIRECT_URL**: Frontend Redirection URL on Payment Verification.

You can replace the values in the `serverless.yml` file. In our example, we are referencing AWS Secrets Manager.

### Deploy to Cloud

`sls deploy`

### Test Locally

`sls offline start`
