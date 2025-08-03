# **NEON Dump File Server**  
A simple Node.js/Express server to host and serve `NEONdumpfile.dump` for easy access.  

## **Features**  
✅ Serve `NEONdumpfile.dump` via HTTP  
✅ Lightweight Express.js server  
✅ Easy deployment to **Render.com**  
✅ Optional local testing  

---

## **🚀 Quick Start**  

### **1. Run Locally**  
#### **Prerequisites**  
- Node.js (v16+)  
- `NEONdumpfile.dump` in the project directory  

#### **Steps**  
1. Clone/download this repo.  
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Place `NEONdumpfile.dump` in the root folder.  
4. Start the server:  
   ```sh
   node server.js
   ```
5. Access the file at:  
   - **Local URL:** `http://localhost:3000/NEONdumpfile.dump`  

---

### **2. Deploy to Render.com**  
#### **Prerequisites**  
- GitHub/GitLab account  
- `NEONdumpfile.dump` in the repo  

#### **Steps**  
1. **Push code to GitHub**  
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. **Deploy on Render**  
   - Go to **[Render Dashboard](https://dashboard.render.com/)** → **New Web Service**  
   - Connect your repository  
   - Configure:  
     - **Name:** `neon-dump-server`  
     - **Runtime:** `Node`  
     - **Build Command:** `npm install`  
     - **Start Command:** `node server.js`  
   - Click **Create Web Service**  
3. **Access the File**  
   - Once deployed, visit:  
     `https://neon-dump-server.onrender.com/NEONdumpfile.dump`  

---

## **⚙️ Configuration**  
### **Environment Variables**  
| Variable | Description | Default |  
|----------|-------------|---------|  
| `PORT`   | Server port | `3000`  |  

### **Customizing the Endpoint**  
To change the download path (e.g., `/download`), modify `server.js`:  
```js
app.get('/download', (req, res) => {
    res.sendFile(path.join(__dirname, 'NEONdumpfile.dump'));
});
```

---

## **🔒 Security Considerations**  
- **Private files?** Add **Basic Auth**:  
  ```sh
  npm install express-basic-auth
  ```
  Then modify `server.js`:  
  ```js
  const basicAuth = require('express-basic-auth');
  app.use(basicAuth({ users: { 'admin': 'password123' } }));
  ```
- **Large files (>100MB)?** Consider:  
  - **Compression** (`compression` middleware)  
  - **CDN** (AWS S3 + CloudFront)  

---

## **📜 License**  
MIT  

---

## **📌 Troubleshooting**  
### **File Not Found?**  
- Ensure `NEONdumpfile.dump` is in the **same directory** as `server.js`.  

### **Render Deployment Failing?**  
- Check logs in the Render dashboard.  
- Ensure `package.json` includes `"express": "^4.18.2"`.  

---

## **📬 Contact**  
For issues/suggestions, open a **[GitHub Issue](https://github.com/your-repo/issues)**.  

---

### **Enjoy hosting your dump file! 🎉**