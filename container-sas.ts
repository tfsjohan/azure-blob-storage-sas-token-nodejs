require('dotenv').config();
import { ContainerClient } from '@azure/storage-blob';

async function main() {

    const SAS_URL = process.env.CONTAINER_SAS;

    if (!SAS_URL) {
        throw 'SAS_URL env variable not set';
    }


    const container = new ContainerClient(SAS_URL)
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
