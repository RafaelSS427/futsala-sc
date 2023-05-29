## Futsala SC
### Steps for the app to run
- Config the environment variables
  - Rename the file called __.env.template__ to .__env__ or create a new file called __.env__ with the information wich is in __.env.template__
  - Add the corresponding values
    ```
    NEXTAUTH_SECRET=<your-password>
    NEXTAUTH_URL=<your-url>
    ```
    
- Rebuild the node modules
```
    pnpm install
```
- Run the app
```
    pnpm dev
```