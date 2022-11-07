# List blogs in Azure Container blob storage container

Example of how to list files in a storage container using a SAS token.

## Create a account SAS token
1. Open [Azure Portal](https://portal.azure.com/)
2. Navigate to your storage account (or create a new one)
3. Navigate to Security + networking, Shared access signature
4. Under Allow services, select only Blob
5. Under Allowed resource types, select Container
6. Under Allowed permissions, select Read and List
7. Set a far future expiry date
8. Press Generate SAS and connection string
9. Copy the Blob service SAS URL (you won't see this again)

## Create a .env file
1. In the root of this project, create new file called .env
2. Add a line with the following content:

````
ACCOUNT_SAS=<paste your sas url>
````

## Create a container
You can skip this if you already have a container. Add the name of the container to the .env file:

````
CONTAINER=<name of your container, case sensitive>
````

Save the .env file. 

## Running the script
Make sure you have installed all dependencies by running:

````
npm install
````

Start the script by running:

````
npm run account
````

## Creating a container SAS token
1. Navigate to the container you created earlier
2. Under Settings, open Shared access tokens
3. Select Read and List permissions 
4. Press Generate SAS token and URL
5. Copy the Blob SAS URL
6. In you .env file, add the following line

````
CONTAINER_SAS=<paste your sas url>
````

Start the script by running:

````
npm run container
````

