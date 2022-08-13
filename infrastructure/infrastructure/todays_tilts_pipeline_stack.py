
from constructs import Construct
from aws_cdk import (
  Stack,
  pipelines,
  SecretValue,
  # aws_secretsmanager as secretsmanager,
)
from todays_tilts_pipeline_stage import TodaysTiltsPipelineStage

# insert pipeline stage
class TodaysTiltsPipelineStack(Stack):
  def __init__(self, scope: Construct, id: str, **kwargs) -> None:
    super().__init__(scope, id, **kwargs)
    # todays_tilts_github_repo_token = SecretValue.secrets_manager("todays_tilts_github_repo_token")
    # todays_tilts_github_repo_token = secretsmanager.Secret.from_secret_name_v2(self, "SecretFromName", "todays_tilts_github_repo_token")
    source = pipelines.CodePipelineSource.git_hub("jakearmijo/todays-tilts", "master",
      authentication=SecretValue.secrets_manager("todays_tilts_github_token")
    )

    pipeline = pipelines.CodePipeline(
        self, 
        "Todays-Tilts-Pipeline",
        synth=pipelines.ShellStep(
          "Synth",
            input=source,
            commands=["cd infrastructure", "npm ci", "npm run build", "pip install -r requirements.txt", "npx cdk synth"],
            primary_output_directory='infrastructure/cdk.out'
        )
    )

    deploy=TodaysTiltsPipelineStage(self, 'Deploy')
    pipeline.add_stage(deploy)

