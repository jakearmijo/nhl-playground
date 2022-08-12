from constructs import Construct
from aws_cdk import (
    Stack,
    aws_s3 as s3,
    aws_iam as iam,
)
from aws_cdk.aws_iam import PolicyStatement


class TodaysTiltsInfrastructureStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # The code that defines your stack goes here
        # creating s3 bucket to upload files into
        todays_tilts_bucket = s3.Bucket(self, "todays-tilts-app-bucket",
            bucket_name='todays-tilts-app-bucket',
            public_read_access=True,
            versioned=True,
            object_ownership=s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
            website_index_document='/public/index.html',
            block_public_access=s3.BlockPublicAccess(restrict_public_buckets=False)
        )
        # create bucket policy 
        # add new iam Any Principal
        # assign actions to get the website index.html
        # assign the bucket arn of bucket created above to the resources
        # 👇 create A principal representing all identities in all accounts.
        new_any_principal = iam.AnyPrincipal()
        todays_tilts_bucket_policy = iam.PolicyStatement(
            principals=[new_any_principal], 
            actions=['s3:GetObject'], 
            resources=[f'{todays_tilts_bucket.bucket_arn}',f'{todays_tilts_bucket.bucket_arn}/*'],
        )
        # assign the bucket todays_tilts_bucket_policy to the todays_tilts_bucket
        todays_tilts_bucket.add_to_resource_policy(todays_tilts_bucket_policy)

        
