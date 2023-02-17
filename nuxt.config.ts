// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: [{
        path: "~/components"
    }],
    app: {
        head: {
            htmlAttrs: {
              lang: "en"
            },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0",
            title: "Headcrab",
            meta: [
                { name: "description", content: "Headcrab Portfolio" },
                { "http-equiv": "Permissions-Policy", content: "interest-cohort=()" }
            ],
            link: [
                { href: "https://fonts.googleapis.com", rel: "preconnect" },
                { href: "https://fonts.gstatic.com", rel: "preconnect", crossorigin: "" },
                { href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap", rel: "stylesheet" }
            ],
            script: [
                {
                    src: "https://www.googletagmanager.com/gtag/js?id=G-3E4LV68GJN",
                    async: true
                },
                {
                    src: "ga.js"
                }
            ]
        }
    }
});
