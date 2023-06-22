import { 
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    ListObjectsCommand,
    DeleteObjectCommand
} from "@aws-sdk/client-s3"

const storejEndpoint = "https://gateway.storjshare.io"

class StoreJ {

    constructor(bucket, endpoint = storejEndpoint) {
        this.bucket = bucket
        this.client = new S3Client({
            region : "eu-south-2",
            endpoint : endpoint
        })
    }

    put(filename, req) {
        const command = Put
    }

}