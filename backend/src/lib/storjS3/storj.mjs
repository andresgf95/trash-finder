import { 
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    ListObjectsCommand,
    DeleteObjectCommand
} from "@aws-sdk/client-s3"

const storejEndpoint = process.env.S3_ENDPOINT

class StoreJ {

    constructor(bucket, endpoint = storejEndpoint) {
        this.bucket = process.env.AWS_BUCKET_NAME
        this.client = new S3Client({
            region : process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            },
            endpoint : endpoint
        })
    }

    put(filename, req) {
        const command = PutObjectCommand({
            Bucket: this.bucket,
            Key: filename,
            Body: req,
            ContentType: req.headers['content-type'],
            ContentLength: req.headers['content-length']
        })
        return this.client.send(command)
    }

    
    get(filename) {
        const command = GetObjectCommand({
            Bucket: this.bucket,
            key: filename
        })
        return this.client.send(command)
    }

    list() {
        const command = ListObjectsCommand({
            Bucket: this.bucket
        })
        return this.client.send(command)
    }

    Delete(filename) {
        const command = DeleteObjectCommand({
            Bucket: this.bucket,
            Key: filename
        })
        return this.client.send(command)
    }

}

export default StoreJ