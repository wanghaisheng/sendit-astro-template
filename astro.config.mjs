import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import bookshop from '@bookshop/astro-bookshop';

import NetlifyCMS from 'astro-netlify-cms';



// https://astro.build/config
export default defineConfig({
  site: "https://top-quail.cloudvent.net/",
  integrations: [bookshop(), react(),    
    sitemap({  
    i18n: {
      defaultLocale: 'en',   // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        en: 'en-US',         // The `defaultLocale` value must present in `locales` keys
        es: 'es-ES',
        fr: 'fr-CA',
        zh: 'zh-CN',

      },
    },
  }),
  NetlifyCMS({
    config: {
      // Use Netlify’s “Git Gateway” authentication and target our default branch
      backend: {
        name: 'git-gateway',
        branch: 'main',
      },
      collections: [
        // Define a blog post collection
        {
          name: 'posts',
          label: 'Blog Posts',
          folder: 'src/pages/posts',
          create: true,
          delete: true,
          fields: [
            { name: 'title', widget: 'string', label: 'Post Title' },
            { name: 'body', widget: 'markdown', label: 'Post Body' },
          ],
        },
      ],
    },
  }),
  
  ]
});