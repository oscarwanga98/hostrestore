# Database File Server

A simple Node.js/Express server to host and serve database dump files (`NEONdumpfile.dump` and `NEONdumpfile.sql`).

## Features
✅ Serve both .dump and .sql files  
✅ Automatic file download with proper headers  
✅ Simple web interface with download links  
✅ Easy deployment to Render.com  

## Quick Start

1. Place your files in the project root:
   - `NEONdumpfile.dump`
   - `NEONdumpfile.sql`

2. Install dependencies:
   ```sh
   npm install express