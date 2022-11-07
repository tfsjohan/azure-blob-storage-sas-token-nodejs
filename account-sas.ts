require('dotenv').config();
import { BlobServiceClient } from '@azure/storage-blob';

async function main() {

    const SAS_URL = process.env.ACCOUNT_SAS;
    const CONTAINER = process.env.CONTAINER;

    if (!SAS_URL) {
        throw 'SAS_URL env variable not set';
    }

    if (!CONTAINER) {
        throw 'CONTAINER env variable not set';
    }

    const client = new BlobServiceClient(SAS_URL);
    const container = client.getContainerClient(CONTAINER);
    const iterator = container.listBlobsFlat();

    const blobs = [];

    let blobItem = await iterator.next();

    while (!blobItem.done) {
        blobs.push(blobItem.value.name);
        blobItem = await iterator.next();
    }

    return blobs;
}

main()
    .then(blobs => {
        console.log('Done');
        console.log(blobs);
    })
    .catch(e => console.error(e));
