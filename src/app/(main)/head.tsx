import riveWASMResource from '@rive-app/canvas/rive.wasm';
import BlogMeta from 'src/components/BlogMeta';
import MetaDescription from 'src/components/MetaDescription';
import * as demo from 'src/lib/demo.data';
import { getSettings } from 'src/lib/sanity.client';

export default async function PageHead() {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = await getSettings();
  const ogImageTitle = ogImage?.title || demo.ogImageTitle;

  return (
    <>
      <title>{title}</title>
      <link
        rel="preload"
        href={riveWASMResource}
        as="fetch"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/mobile.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
      <BlogMeta />
      <MetaDescription value={description} />
      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />
    </>
  );
}
