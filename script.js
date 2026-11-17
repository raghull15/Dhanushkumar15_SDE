    try {
        if (typeof emailjs === 'undefined') throw new Error('EmailJS not loaded');
        if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID') {
            throw new Error('EmailJS service ID is not configured. Copy config.js.example to config.js and set your service ID.');
        }
        emailjs.init(EJS.key);
        await emailjs.sendForm(EJS.svc, EJS.tpl, f);
        t.className = 'toast ok'; t.textContent = '> Request transmitted successfully.'; f.reset();
    } catch (err) {
        console.error(err);
        t.className = 'toast err'; t.textContent = '> Failed. Email me directly at dhanushkumarr1508@gmail.com';
    } finally { btn.disabled = false; btn.textContent = '[ Send request ]'; }
});
