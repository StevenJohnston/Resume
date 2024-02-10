import { Stack, StackProps, Duration, CfnOutput } from "aws-cdk-lib";
import {
  PublicHostedZone,
  ARecord,
  RecordTarget,
} from "aws-cdk-lib/aws-route53";
import { Bucket, BlockPublicAccess } from "aws-cdk-lib/aws-s3";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { Nextjs } from "cdk-nextjs-standalone";

import { Construct } from "constructs";
import { createSubdomin } from "./hosted-zone";
import { CfnDBCluster } from "aws-cdk-lib/aws-rds";

const rootDomain = "stevenjohnston.ca";
const subDomain = "resume";

export class ResumeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const { zone, certificate } = createSubdomin({
      scope: this,
      rootDomain,
      subDomain,
    });

    const nextApp = new Nextjs(this, "NextApp", {
      nextjsPath: "../web/",

      domainProps: {
        domainName: `${subDomain}.${rootDomain}`,
        certificate,
        hostedZone: zone,
      },
      overrides: {
        nextjsDistribution: {
          imageCachePolicyProps: {
            cachePolicyName: `${props!
              .stackName!}NextAppDistributionImageCachePolicy`,
          },
          serverCachePolicyProps: {
            cachePolicyName: `${props!
              .stackName!}NextAppDistributionServerCachePolicy`,
          },
        },
        nextjsServer: {
          functionProps: {
            timeout: Duration.seconds(30),
          },
        },
      },
    });

    // new CfnOutput(this, "AppUrl", { value: nextApp.url });
  }
}
