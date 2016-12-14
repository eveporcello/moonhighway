import app from './app'

// TODO: Add HTTPS Certificute

// TODO: Allow for HTTP and HTTPS

app.set('port', process.env.PORT || 3000)
    .listen(
        app.get('port'),
        () => console.log(`Moon Highway website running on port ':${app.get('port')}'`)
    )
