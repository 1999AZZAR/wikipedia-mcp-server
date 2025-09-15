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
      const searchResults = results?.query?.search || [];
      return {
        content: [
          {
            type: "text",
            text: `Found ${searchResults.length} results for "${query}":\n\n${searchResults.map((result: any) => `- ${result.title}: ${result.snippet || 'No snippet available'}`).join('\n')}`,
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
      const pageData = result?.parse;
      if (!pageData) {
        return {
          content: [
            {
              type: "text",
              text: `Page "${title}" not found.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Page: ${pageData.title}\nText: ${pageData.text?.['*']?.substring(0, 1000) || 'No text available'}...`,
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
      if (!result) {
        return {
          content: [
            {
              type: "text",
              text: `Summary for page "${title}" not found.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Summary for "${title}":\n\n${result.extract || 'No summary available'}`,
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
      const pageData = result?.parse;
      if (!pageData) {
        return {
          content: [
            {
              type: "text",
              text: `Page with ID "${id}" not found.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Page ID: ${id}\nTitle: ${pageData.title}\nText: ${pageData.text?.['*']?.substring(0, 1000) || 'No text available'}...`,
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
      const randomPage = result?.query?.random?.[0];
      if (!randomPage) {
        return {
          content: [
            {
              type: "text",
              text: `No random page found.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Random page: ${randomPage.title} (ID: ${randomPage.id})`,
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
      const pageData = result?.query?.pages;
      if (!pageData) {
        return {
          content: [
            {
              type: "text",
              text: `No language information found for page "${title}".`,
            },
          ],
        };
      }
      const languages = (Object.values(pageData)[0] as any)?.langlinks || [];
      return {
        content: [
          {
            type: "text",
            text: `Languages available for "${title}":\n\n${languages.map((lang: any) => `- ${lang.lang}: ${lang['*'] || lang.title || 'Unknown'}`).join('\n')}`,
          },
        ],
      };
    }
  );

  // Batch Operations Tools
  server.registerTool(
    "batchSearch",
    {
      title: "Batch Wikipedia Search",
      description: "Search multiple queries at once for efficiency.",
      inputSchema: {
        queries: z.array(z.string()).min(1).max(10).describe("Array of search queries (max 10)."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language to search in (e.g., 'en', 'es', 'fr')."),
        limit: z
          .number()
          .int()
          .positive()
          .max(20)
          .optional()
          .default(5)
          .describe("Maximum number of results per query."),
        concurrency: z
          .number()
          .int()
          .positive()
          .max(10)
          .optional()
          .default(5)
          .describe("Number of concurrent requests (max 10)."),
      },
    },
    async ({ queries, lang, limit, concurrency }) => {
      const results = await extendedFeatures.batchSearch(queries, { lang, limit, concurrency });
      return {
        content: [
          {
            type: "text",
            text: `Batch search results for ${queries.length} queries:\n\n${Object.entries(results).map(([query, result]: [string, any]) => {
              if (result.error) {
                return `❌ "${query}": ${result.error}`;
              }
              const searchResults = result?.query?.search || [];
              return `✅ "${query}": ${searchResults.length} results\n${searchResults.map((r: any) => `  - ${r.title}`).join('\n')}`;
            }).join('\n\n')}`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "batchGetPages",
    {
      title: "Batch Get Wikipedia Pages",
      description: "Get multiple Wikipedia pages at once for efficiency.",
      inputSchema: {
        titles: z.array(z.string()).min(1).max(10).describe("Array of page titles (max 10)."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language of the pages (e.g., 'en', 'es', 'fr')."),
        sections: z
          .boolean()
          .optional()
          .default(true)
          .describe("Whether to include sections in the results."),
        concurrency: z
          .number()
          .int()
          .positive()
          .max(10)
          .optional()
          .default(5)
          .describe("Number of concurrent requests (max 10)."),
      },
    },
    async ({ titles, lang, sections, concurrency }) => {
      const results = await extendedFeatures.batchGetPages(titles, { lang, sections, concurrency });
      return {
        content: [
          {
            type: "text",
            text: `Batch page results for ${titles.length} pages:\n\n${Object.entries(results).map(([title, result]: [string, any]) => {
              if (result.error) {
                return `❌ "${title}": ${result.error}`;
              }
              const pageData = result?.parse;
              if (!pageData) {
                return `❌ "${title}": Page not found`;
              }
              const textPreview = pageData.text?.['*']?.substring(0, 200) || 'No text available';
              return `✅ "${title}": ${pageData.title}\nPreview: ${textPreview}...`;
            }).join('\n\n')}`,
          },
        ],
      };
    }
  );

  // Geographic Search Tool
  server.registerTool(
    "searchNearby",
    {
      title: "Search Wikipedia Articles Near Location",
      description: "Find Wikipedia articles near specific coordinates.",
      inputSchema: {
        lat: z.number().min(-90).max(90).describe("Latitude coordinate (-90 to 90)."),
        lon: z.number().min(-180).max(180).describe("Longitude coordinate (-180 to 180)."),
        radius: z
          .number()
          .int()
          .positive()
          .max(10000)
          .optional()
          .default(1000)
          .describe("Search radius in meters (max 10000)."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language to search in (e.g., 'en', 'es', 'fr')."),
        limit: z
          .number()
          .int()
          .positive()
          .max(50)
          .optional()
          .default(10)
          .describe("Maximum number of results to return."),
      },
    },
    async ({ lat, lon, radius, lang, limit }) => {
      const result = await extendedFeatures.searchNearby({ lat, lon, radius, lang, limit });
      const places = result?.query?.geosearch || [];
      if (places.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No Wikipedia articles found near coordinates (${lat}, ${lon}) within ${radius}m radius.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Found ${places.length} Wikipedia articles near (${lat}, ${lon}) within ${radius}m:\n\n${places.map((place: any) => 
              `📍 ${place.title}\n   Distance: ${place.dist}m\n   Coordinates: ${place.lat}, ${place.lon}`
            ).join('\n\n')}`,
          },
        ],
      };
    }
  );

  // Category Exploration Tool
  server.registerTool(
    "getPagesInCategory",
    {
      title: "Get Pages in Wikipedia Category",
      description: "Browse pages within a specific Wikipedia category.",
      inputSchema: {
        category: z.string().describe("The category name (with or without 'Category:' prefix)."),
        lang: z
          .string()
          .optional()
          .default("en")
          .describe("The language of the category (e.g., 'en', 'es', 'fr')."),
        limit: z
          .number()
          .int()
          .positive()
          .max(100)
          .optional()
          .default(20)
          .describe("Maximum number of pages to return."),
        type: z
          .enum(['page', 'subcat', 'file'])
          .optional()
          .default('page')
          .describe("Type of category members to return."),
      },
    },
    async ({ category, lang, limit, type }) => {
      const result = await extendedFeatures.getPagesInCategory(category, { lang, limit, type });
      const members = result?.query?.categorymembers || [];
      if (members.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No pages found in category "${category}".`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Found ${members.length} ${type}s in category "${category}":\n\n${members.map((member: any) => 
              `📄 ${member.title} (ID: ${member.pageid})`
            ).join('\n')}`,
          },
        ],
      };
    }
  );

  // The MCP SDK automatically handles tools/list requests
  // No need to manually set a handler

  return server;
} 