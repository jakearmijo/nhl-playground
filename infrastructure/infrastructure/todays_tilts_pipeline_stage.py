
from infrastructure_stack import TodaysTiltsInfrastructureStack
from constructs import Construct
from aws_cdk import Stage

class TodaysTiltsPipelineStage(Stage):

    def __init__(self, scope: Construct, id: str, **kwargs):
        super().__init__(scope, id, **kwargs)

        TodaysTiltsInfrastructureStack(self, 'Todays-Tilts-Stack')