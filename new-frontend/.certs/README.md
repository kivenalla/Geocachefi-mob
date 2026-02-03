To set express to run as https: we need to create certificates for it.

1. `npm install -g mkcert`
2. `mkcert create-ca`
3. `mkcert create-cert --domains localhost,127.0.0.1,host.docker.internal`

In mac

mkcert -key-file ./host.docker.internal.key -cert-file ./host.docker.internal.crt localhost 127.0.0.1 host.docker.internal



Installing the certs.

🧩 Step 1. Identify the Certificate

You should have one of these:

A self-signed cert (.crt, .pem, or .cer)

A CA certificate that you used to issue local certs (preferred)

If you’re developing locally (say with mkcert or OpenSSL), you’ll want to install the root CA certificate, not each individual site certificate.

🪟 Windows

Open “Manage computer certificates”

Press Win + R, type certmgr.msc, hit Enter.

(Alternatively: Control Panel → Internet Options → Content → Certificates → Trusted Root Certification Authorities.)

Import your certificate

In the left panel, expand Trusted Root Certification Authorities → Certificates

Right-click → All Tasks → Import

Choose your .crt / .cer file → click Next → Finish

Restart Chrome

Close all Chrome windows completely and reopen.

Chrome inherits trust from the Windows certificate store.

✅ You can test by visiting your local site. The padlock should be valid (no “Not secure” warning).

🍏 macOS

Open Keychain Access

Finder → Applications → Utilities → Keychain Access

Import the certificate

Go to System or System Roots keychain (not “Login”)

Drag your .crt / .pem file into it.

Trust the certificate

Double-click the certificate

Expand Trust, and set When using this certificate → Always Trust

Close the window (enter your password if prompted)

Restart Chrome

Chrome on macOS uses the system keychain, so this will make it trusted.