from constructs import Construct
from aws_cdk import (
  Stack,
  aws_codepipeline as codepipeline,
  pipelines,
  aws_secretsmanager as secretsmanager,
)
from todays_tilts_pipeline_stage import TodaysTiltsPipelineStage
# from aws_cdk.codepipeline import Action as codepipeline_actions

# insert pipeline stage
class TodaysTiltsPipelineStack(Stack):
  def __init__(self, scope: Construct, id: str, **kwargs) -> None:
    super().__init__(scope, id, **kwargs)
  
    # source_action = codepipeline_actions.GitHubSourceAction(
    #     action_name="GitHub_Source",
    #     owner="jakearmijo",
    #     repo="todays-tilts",
    #     oauth_token=secretsmanager.Secret.from_secret_name_v2(self, "todays_tilts_github_repo_token", "todays_tilts_github_repo_token"),
    #     output=source_output,
    #     branch="master"
    # )

    # pipeline=pipelines.CodePipeline(
    #         self,
    #         "CSI-Lake-House-Pipeline",
    #         synth=pipelines.ShellStep(
    #             "Synth",
    #             input=pipelines.CodePipelineSource.code_commit(repo, "master"),
    #             commands=[
    #                 "npm install -g aws-cdk",  # Installs the cdk cli on Codebuild
    #                 "pip install -r requirements.txt",  # Instructs Codebuild to install required packages
    #                 "npx cdk synth",
    #             ]
    #         ),
    #     )

    # Access the CommitId of a GitHub source in the synth
    source = pipelines.CodePipelineSource.git_hub("jakearmijo/todays-tilts", "main",
      authentication=secretsmanager.Secret.from_secret_name_v2(self, "todays_tilts_github_repo_token", "todays_tilts_github_repo_token"),
      trigger='WEBHOOK'
    )

    pipeline = pipelines.CodePipeline(scope, "Todays-Tilts-Pipeline",
        synth=pipelines.ShellStep("Synth",
            input=source,
            commands=[],
            env={
                "COMMIT_ID": source.source_attribute("CommitId")
            }
        )
    )
    deploy=TodaysTiltsPipelineStage(self, 'Deploy')
    pipeline.add_stage(deploy)

