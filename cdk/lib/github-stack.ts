import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export class GithubActionsRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const provider = new iam.OpenIdConnectProvider(this, "GithubProvider", {
      url: "https://token.actions.githubusercontent.com",
      clientIds: ["sts.amazonaws.com"], // Or a more specific audience
    });

    const role = new iam.Role(this, "GitHubActionsRole", {
      assumedBy: new iam.WebIdentityPrincipal(
        provider.openIdConnectProviderArn,
        {
          StringLike: {
            // Only allow specified subjects to assume this role
            [`token.actions.githubusercontent.com:sub`]:
              "repo:StevenJohnston/Resume:*",
          },
          StringEquals: {
            [`token.actions.githubusercontent.com:aud`]: "sts.amazonaws.com",
          },
        }
      ),
    });
  }
}
