To set express to run as https: we need to create certificates for it.

1. `npm install -g mkcert`
2. `mkcert create-ca`
3. `mkcert create-cert --domains localhost,127.0.0.1,host.docker.internal`

In mac

mkcert -key-file ./localhost-key.pem -cert-file ./localhost.crt localhost 127.0.0.1 host.docker.internal
