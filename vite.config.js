import { defineConfig } from 'vite'

export default defineConfig({
    publicDir: 'public',
    build: {
        assetsInclude: ['**/*.pdf'],
    }
})