export type AmplifyDependentResourcesAttributes = {
    "function": {
        "greetingfunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "greetings2": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "nodeapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "nodeapi2": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "auth": {
        "erexcodes": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3erexcodesstorage98b04928": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}