import type { ReactElement } from "react";

export interface PhotoGalleryProps {
  /** Image URLs. Up to 11 are shown in the grid; the rest open in the "More" modal. */
  photos: string[];
  /** Used in alt text and the "all photos" modal header. Default: "Gallery". */
  title?: string;
}

declare function PhotoGallery(props: PhotoGalleryProps): ReactElement | null;

export default PhotoGallery;
