import { resolve } from "path"
import { defineConfig } from "vite"

const rootPath = "src";

export default defineConfig(({ command }) => {
  const config = defineConfig({
    root: resolve(__dirname, rootPath),
    plugins: [
      {
        name: "configure-server",
        configureServer(server) {
          return () => {
            server.middlewares.use(async (req, res, next) => {
              for (const appName in server.config.build.rollupOptions.input) {
                if (req.originalUrl.startsWith(`/${appName}`)) {
                  req.url = `/${appName}/index.html`;
                  break;
                }
              }
              next();
            });
          };
        }
      }
    ],
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, rootPath, 'index.html'),
          comic: resolve(__dirname, rootPath, 'comic/index.html'),
        },
      },
    },
  });

  // Deploying to GitHub Pages
  if (command === "build")
    config.base = "/inno-fwd-2024/";

  return config;
})
