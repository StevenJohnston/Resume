import * as certificatemanager from "aws-cdk-lib/aws-certificatemanager";
import { Construct } from "constructs";

import { PublicHostedZone } from "aws-cdk-lib/aws-route53";

interface HostedZoneProps {
  scope: Construct;
  rootDomain: string;
  subDomain: string;
}

export const createSubdomin = ({
  scope,
  rootDomain,
  subDomain,
}: HostedZoneProps) => {
  const zone = new PublicHostedZone(scope, "HostedZone", {
    zoneName: rootDomain,
  });

  const certificate = new certificatemanager.Certificate(
    scope,
    "ResumeDomainCert",
    {
      domainName: `${subDomain}.${rootDomain}`,
      validation: certificatemanager.CertificateValidation.fromDns(zone),
    }
  );

  return {
    zone,
    certificate,
  };
};
