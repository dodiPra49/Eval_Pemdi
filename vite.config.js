import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'netlify-functions-dev-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const host = req.headers.host || 'localhost:3000';
          const url = new URL(req.url, `http://${host}`);
          
          if (url.pathname === '/api/evidence' || url.pathname === '/.netlify/functions/evidence') {
            try {
              const { handler } = await import('./netlify/functions/evidence.js');
              
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                const queryParams = Object.fromEntries(url.searchParams.entries());
                const event = {
                  httpMethod: req.method,
                  queryStringParameters: queryParams,
                  headers: req.headers,
                  body: body || null
                };

                const result = await handler(event);
                res.statusCode = result.statusCode;
                if (result.headers) {
                  for (const [key, val] of Object.entries(result.headers)) {
                    res.setHeader(key, val);
                  }
                }
                res.end(result.body);
              });
              return;
            } catch (err) {
              console.error('API Dev Middleware Error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
              return;
            }
          }
          next();
        });
      }
    }
  ],
  base: './',
  server: {
    port: 3000,
    open: false
  }
})
