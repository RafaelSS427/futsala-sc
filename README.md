## Futsala SC
### Steps for the app to run
- Config the environment variables
  - Rename the file called __.env.template__ to .__env__ or create a new file called __.env__ with the information wich is in __.env.template__
  - Add the corresponding values
    ```
    NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
    ```
    
- Rebuild the node modules
```
    pnpm install
```
- Run the app
```
    pnpm dev
```