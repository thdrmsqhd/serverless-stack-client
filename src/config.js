export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51Grj1EB61F6pAjim6EqRViVJUkGzexYN0caatt1DjlqdrDLXyal2X3DZOeticUQbKifLBq0GFNq7zs2OOUg27DAU00DpdFuLb6Y",
    s3: {
      REGION: "ap-northeast-2",
      BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-122nhwscklttf"
    },
    apiGateway: {
      REGION: "ap-northeast-2",
      URL: "https://qk0iprpehb.execute-api.ap-northeast-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-northeast-2",
      USER_POOL_ID: "ap-northeast-2_AcE3wIbOC",
      APP_CLIENT_ID: "44thnog6o7evqi8nrt1bitoadu",
      IDENTITY_POOL_ID: "ap-northeast-2:81fa1af2-3414-4e5e-a87e-07905ebb5d34"
    }
  };