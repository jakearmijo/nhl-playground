#!/usr/bin/env python3
import os
import aws_cdk as cdk

from infrastructure.todays_tilts_pipeline_stack import TodaysTiltsPipelineStack

app = cdk.App()
TodaysTiltsPipelineStack(app, "Todays-Tilts-Pipeline-Stack",
    description="App for Todays Tilts",
    env=cdk.Environment(account='169126338767', region='us-west-1'),
)

app.synth()
