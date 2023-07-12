import { 
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    ListObjectsCommand,
    DeleteObjectCommand
} from "@aws-sdk/client-s3"

import fs from "fs"

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
        const fileStream = fs.createReadStream(req.file.path)
        const command = PutObjectCommand({
            Bucket: this.bucket,
            Key: filename,
            Body: fileStream,
            ContentType: req.file.mimetype,
            ContentLength: req.file.size
        })
        return this.client.send(command)
    }

    
    async get(filename) {
        const command = new GetObjectCommand({
          Bucket: this.bucket,
          Key: filename,
        });
        const response = await this.client.send(command);
        return response.Body;
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