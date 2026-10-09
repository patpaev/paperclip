import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * "Open raw" and "Download" icon links for a file served by a same-origin
 * content route; the route saves the file when `?download=1` is appended.
 */
export function FileActionLinks({ title, contentPath }: { title: string; contentPath: string }) {
  return (
    <>
      <Button asChild variant="ghost" size="icon-sm" className="text-muted-foreground">
        <a href={contentPath} target="_blank" rel="noreferrer" aria-label={`Open raw ${title}`} title="Open raw">
          <ExternalLink aria-hidden />
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon-sm" className="text-muted-foreground">
        <a href={`${contentPath}?download=1`} download aria-label={`Download ${title}`} title="Download">
          <Download aria-hidden />
        </a>
      </Button>
    </>
  );
}
