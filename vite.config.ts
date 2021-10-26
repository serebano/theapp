import vue from '@vitejs/plugin-vue'
import md from 'vite-plugin-md'
import ssr from 'vite-plugin-ssr/plugin'
import WindiCSS from "vite-plugin-windicss"
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    md(),
    ssr(),
    WindiCSS({
      scan: {
        // By default only `src/` is scanned
        dirs: ["pages"],
        // We only have to specify the file extensions we actually use.
        fileExtensions: ["vue", "js", "ts", "jsx", "tsx", "html", "pug"]
      }
    })
  ],
  clearScreen: false
}

export default config
