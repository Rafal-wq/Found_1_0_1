export default {
    server: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.pdf')) {
                        return '[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
}