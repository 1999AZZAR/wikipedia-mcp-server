import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { EnhancedWikipediaService } from "./wikipediaService";
import { WikipediaExtendedFeatures } from "./additionalFeatures";

export function createWikipediaMcp(
  wikipediaService: EnhancedWikipediaService,
  extendedFeatures: WikipediaExtendedFeatures
): McpServer {
  const server = new McpServer({
    name: "wikipedia-mcp-server",
    version: "1.0.0",
  });

  server.registerTool(
    "search",
    {
      title: "Wikipedia Search",
      description: "Search Wikipedia for articles matching a query.",
      inputSchema: {
        query: z.string().describe("The search query."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language to search in (e.g., 'en', 'es', 'fr')."),
        limit: z
          .number()
          .optional()
          .default(10)
          .describe("The maximum number of results to return."),
        offset: z
          .number()
          .optional()
          .default(0)
          .describe("The offset of the search results."),
        includeSnippets: z
          .boolean()
          .optional()
          .default(true)
          .describe("Whether to include snippets in the search results."),
      },
    },
    async ({ query, lang, limit, offset, includeSnippets }) => {
      const results = await wikipediaService.search(query, { lang, limit, offset, includeSnippets });
      return {
        structuredContent: results?.query?.search || [],
        content: [
          {
            type: "text",
            text: `Found ${
              results?.query?.search?.length || 0
            } results for "${query}"`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "getPage",
    {
      title: "Get Wikipedia Page",
      description: "Get the content of a Wikipedia page by its exact title.",
      inputSchema: {
        title: z.string().describe("The title of the page."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language of the page (e.g., 'en', 'es', 'fr')."),
        sections: z
          .boolean()
          .optional()
          .default(true)
          .describe("Whether to include sections in the result."),
        images: z
          .boolean()
          .optional()
          .default(false)
          .describe("Whether to include images in the result."),
        links: z
          .boolean()
          .optional()
          .default(false)
          .describe("Whether to include links in the result."),
        categories: z
          .boolean()
          .optional()
          .default(false)
          .describe("Whether to include categories in the result."),
      },
    },
    async ({ title, lang, sections, images, links, categories }) => {
      const result = await wikipediaService.getPage(title, { lang, sections, images, links, categories });
      return {
        structuredContent: result?.parse || null,
        content: [
          {
            type: "text",
            text: `Content for page "${title}"`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "getPageSummary",
    {
      title: "Get Wikipedia Page Summary",
      description: "Get a brief summary of a Wikipedia page.",
      inputSchema: {
        title: z.string().describe("The title of the page."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language of the page (e.g., 'en', 'es', 'fr')."),
      },
    },
    async ({ title, lang }) => {
      const result = await wikipediaService.getPageSummary(title, lang);
      return {
        structuredContent: result,
        content: [
          {
            type: "text",
            text: `Summary for page "${title}"`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "getPageById",
    {
      title: "Get Wikipedia Page by ID",
      description: "Get the content of a Wikipedia page by its ID.",
      inputSchema: {
        id: z.number().int().positive().describe("The ID of the page."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language of the page (e.g., 'en', 'es', 'fr')."),
        sections: z
          .boolean()
          .optional()
          .default(true)
          .describe("Whether to include sections in the result."),
        images: z
          .boolean()
          .optional()
          .default(false)
          .describe("Whether to include images in the result."),
        links: z
          .boolean()
          .optional()
          .default(false)
          .describe("Whether to include links in the result."),
        categories: z
          .boolean()
          .optional()
          .default(false)
          .describe("Whether to include categories in the result."),
      },
    },
    async ({ id, lang, sections, images, links, categories }) => {
      const result = await wikipediaService.getPageById(id, { lang, sections, images, links, categories });
      return {
        structuredContent: result?.parse || null,
        content: [
          {
            type: "text",
            text: `Content for page ID "${id}"`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "random",
    {
      title: "Get Random Wikipedia Page",
      description: "Get a random Wikipedia page.",
      inputSchema: {
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language of the page (e.g., 'en', 'es', 'fr')."),
      },
    },
    async ({ lang }) => {
      const result = await wikipediaService.getRandomPage(lang);
      return {
        structuredContent: result,
        content: [
          {
            type: "text",
            text: `Random page`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "pageLanguages",
    {
      title: "Get Wikipedia Page Languages",
      description: "Get the languages a Wikipedia page is available in.",
      inputSchema: {
        title: z.string().describe("The title of the page."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language of the page (e.g., 'en', 'es', 'fr')."),
      },
    },
    async ({ title, lang }) => {
      const result = await extendedFeatures.getPageLanguages(title, lang);
      return {
        structuredContent: result,
        content: [
          {
            type: "text",
            text: `Languages for page "${title}"`,
          },
        ],
      };
    }
  );

  return server;
} 