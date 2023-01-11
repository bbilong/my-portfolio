import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { config } from './config';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview: any) =>
  usePreview ? previewClient : sanityClient;
