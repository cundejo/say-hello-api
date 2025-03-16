A simple API that says hello to a name. Made with [Fastify](https://fastify.dev/) and deployed on Google Cloud Run.

Please check the Blog Post [here](https://cundejo.notion.site/Deploying-to-Google-Cloud-Run-from-GitHub-Actions-f777e0a94f104e41841d972259594812) for more details.

## Development

Install dependencies:

```bash
pnpm i
```

Run the development server:

```bash
pnpm dev
```

Visit [http://localhost:8080?name=Oliver](http://localhost:8080?name=Oliver), the API should respond.

## Testing Docker Image

```bash
# Build image with some flags for debugging, just to know if something is wrong
docker build -t say-hello-api --progress=plain --no-cache -f Dockerfile .

# Build image normally
docker build -t say-hello-api -f Dockerfile .

# Running the container based on the image say-hello-api
docker run -dp 8080:8080 say-hello-api
```

## Deploy on CloudRun

Deploy to Google Cloud run will happen automatically when you push to the main branch. Check the `.github/workflows/deploy-to-cloud-run.yml` for more details.
