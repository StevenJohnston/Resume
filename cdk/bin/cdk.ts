#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ResumeStack } from "../lib/resume-stack";
import { GithubActionsRoleStack } from "../lib/github-stack";

const env: cdk.Environment = {
  region: process.env.CDK_DEFAULT_REGION || "us-east-1",
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

const app = new cdk.App();
new GithubActionsRoleStack(app, "GithubStack", {
  env,
  stackName: `${process.env.STACK_NAME}-GithubStack`,
});
new ResumeStack(app, "ResumeStack", {
  env,
  stackName: `${process.env.STACK_NAME}-ResumeStack`,
});
