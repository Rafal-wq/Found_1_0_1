export default {
    server: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Disposition': 'attachment',
            'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        },
    },
    assetsInclude: ['**/*.docx'],
}