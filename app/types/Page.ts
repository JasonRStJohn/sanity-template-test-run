import type { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Page {
  _id: string;
  _type: "page";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
