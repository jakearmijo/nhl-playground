from constructs import Construct
from aws_cdk import (
    Stack,
    aws_s3 as s3,
    aws_iam as iam,
    aws_lambda as _lambda,
    aws_cloudfront as cloudfront,
    aws_cloudfront_origins as origins,
    RemovalPolicy
)

class TodaysTiltsInfrastructureStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # The code that defines your stack goes here
        # creating s3 bucket to upload files into
        todays_tilts_bucket = s3.Bucket(self, "todaystilts",
            bucket_name='todaystilts',
            public_read_access=True,
            versioned=True,
            website_index_document='index.html',
            removal_policy=RemovalPolicy.DESTROY
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

        origin_access_identity = cloudfront.OriginAccessIdentity(self, "TodaysTiltsOriginAccessIdentity",
            comment="comment for todays tilts TodaysTiltsOriginAccessIdentity"
        )

        todays_tilts_bucket.grant_read(origin_access_identity)

        cloudfront.Distribution(self, "Todays-Tilts-Distribution",
            default_behavior=cloudfront.BehaviorOptions(origin=origins.S3Origin(todays_tilts_bucket))
        )

        ## Lambdas
        get_all_nhl_games_lambda = _lambda.Function(
            self,
            'Get All NHL games',
            runtime=_lambda.Runtime.PYTHON_3_7,
            code=_lambda.Code.from_asset('lambda'),
            handler='get_all_nhl_games.handler'
        )

