# Directus Deployment + Custom Extension (hook)

## Using Extension
1. Run docker compose
```bash
docker compose up -d
```
2. After successfully run, there is a directory called `extensions` automatically created by volumes setting in docker compose file.
Copy directory `directus-extension-seru-custom` to directory `extensions`
```bash
cp -r directus-extension-seru-custom extensions
```
3. Open Directus web app and install the extension ✨
```bash
open http://localhost:8055
```

# Test
1. Hit the following APIs:
    * http://localhost:8055/items/tasks
    * http://localhost:8055/items/users