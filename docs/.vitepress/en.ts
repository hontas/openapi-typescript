import { defineConfig } from "vitepress";
import sharedConfig from "./shared";

export default defineConfig({
  description: "Consume OpenAPI 3.0 & 3.1 schemas in TypeScript",
  themeConfig: {
    nav: [
      {
        text: "Version",
        items: [
          { text: "7.x", link: "/introduction" },
          { text: "6.x", link: "/6.x/introduction" },
        ],
      },
    ],
    sidebar: {
      // 6.x docs
      "/6.x/": [
        {
          text: "openapi-typescript (6.x)",
          items: [
            { text: "Introduction", link: "/6.x/introduction" },
            { text: "CLI", link: "/6.x/cli" },
            { text: "Node.js API", link: "/6.x/node" },
            { text: "Advanced", link: "/6.x/advanced" },
            { text: "About", link: "/6.x/about" },
          ],
        },
        {
          text: "openapi-fetch",
          items: [
            { text: "Getting Started", link: "/openapi-fetch/" },
            {
              text: "Middleware & Auth",
              link: "/openapi-fetch/middleware-auth",
            },
            { text: "Testing", link: "/openapi-fetch/testing" },
            { text: "Examples", link: "/openapi-fetch/examples" },
            { text: "API", link: "/openapi-fetch/api" },
          ],
        },
      ],
      // default (7.x) docs
      "/": [
        {
          text: "openapi-typescript (7.x)",
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "CLI", link: "/cli" },
            { text: "Node.js API", link: "/node" },
            { text: "Examples", link: "/examples" },
            { text: "Migrating from 6.x", link: "/migration-guide" },
            { text: "Advanced", link: "/advanced" },
          ],
        },
        {
          text: "openapi-fetch",
          items: [
            { text: "Getting Started", link: "/openapi-fetch/" },
            {
              text: "Middleware & Auth",
              link: "/openapi-fetch/middleware-auth",
            },
            { text: "Testing", link: "/openapi-fetch/testing" },
            { text: "Examples", link: "/openapi-fetch/examples" },
            { text: "API", link: "/openapi-fetch/api" },
          ],
        },
        {
          text: "openapi-react-query",
          base: "/openapi-react-query",
          items: [
            { text: "Getting Started", link: "/" },
            { text: "useQuery", link: "/use-query" },
            { text: "useMutation", link: "/use-mutation" },
            { text: "useSuspenseQuery", link: "/use-suspense-query" },
            { text: "useInfiniteQuery", link: "/use-infinite-query" },
            { text: "queryOptions", link: "/query-options" },
          ],
        },
        {
          text: "swr-openapi",
          base: "/swr-openapi",
          items: [
            { text: "Getting Started", link: "/" },
            { text: "Hook Builders", link: "/hook-builders" },
            { text: "useQuery", link: "/use-query" },
            { text: "useImmutable", link: "/use-immutable" },
            { text: "useInfinite", link: "/use-infinite" },
            { text: "useMutate", link: "/use-mutate" },
          ],
        },
        {
          text: "openapi-metadata",
          items: [
            { text: "Getting Started", link: "/openapi-metadata" },
            { text: "Decorators", link: "/openapi-metadata/decorators" },
            { text: "Metadata", link: "/openapi-metadata/metadata" },
            { text: "Type loader", link: "/openapi-metadata/type-loader" },
            { text: "UI Integrations", link: "/openapi-metadata/ui" },
            {
              text: "Integrations",
              items: [
                {
                  text: "AdonisJS",
                  link: "https://friendsofadonis.com/docs/openapi",
                },
              ],
            },
            { text: "Examples", link: "/openapi-metadata/examples" },
          ],
        },
        { text: "About", link: "/about" },
      ],
    },
    search: {
      provider: "algolia",
      options: {
        appId: "NA92XVKBVS",
        apiKey: "4f3ce9ca7edc3b83c209e6656ab29eb8",
        indexName: "openapi-ts",
      },
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/openapi-ts/openapi-typescript",
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/openapi-ts/openapi-typescript/blob/main/packages/openapi-typescript/LICENSE">MIT License</a>. Powered by <a href="https://netlify.com">Netlify</a>.',
    },
  },
});
