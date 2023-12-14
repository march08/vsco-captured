// Converts the responsive_url to URL that points directly to the asset in S3.
export function vscoImageResponsiveUrltoS3Path(url: string) {
  console.log("vscoImageResponsiveUrltoS3Path", url);
  const segments = new URL(url).pathname.split("/");
  const partialUrl = segments.slice(2).join("/");

  return `https://image-${segments[1]}.vsco.co/${partialUrl}`;
}

// fetches the specified media object in order to access its responsive_url property
async function fetchMedia(mediaID: string) {
  try {
    const resp = await fetch(`https://vsco.co/api/2.0/medias/${mediaID}`, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        authorization: "Bearer 7356455548d0a1d886db010883388d08be84d0c9",
      },
    });

    const result = await resp.json();
    return result.media;
  } catch (err) {
    console.error("[fetchMedia] err: ", err);
  }
}

export async function getMediaS3ImageUrl(mediaID: string) {
  const media = await fetchMedia(mediaID);

  console.log("media", media);
  if (!media) {
    return;
  }

  const s3Path = vscoImageResponsiveUrltoS3Path(media.responsive_url);

  return s3Path;
}

// fetches the specified media object in order to access its responsive_url property
async function fetchSiteImage(siteId: string) {
  try {
    const resp = await fetch(`https://vsco.co/api/2.0/sites/${siteId}`, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        authorization: "Bearer 7356455548d0a1d886db010883388d08be84d0c9",
      },
    });

    const result = await resp.json();
    return result.site;
  } catch (err) {
    console.error("[fetchMedia] err: ", err);
  }
}

export async function getSiteS3ImageUrl(siteId: string) {
  const site = await fetchSiteImage(siteId);
  if (!site) {
    return;
  }

  const s3Path = vscoImageResponsiveUrltoS3Path(site.responsive_url);
  return s3Path;
}

snapshot23_media_responsive_url: "https://im.vsco.co/aws-us-west-2/7eb273/119110438/642833f3dfa40b0b23386e7f/vsco_040123.jpg";
("im.vsco.co/aws-us-west-2/7eb273/119110438/642833f3dfa40b0b23386e7f/vsco_040123.jpg");
