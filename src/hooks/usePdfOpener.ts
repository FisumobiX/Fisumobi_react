import { useState, useCallback } from "react";
import { Capacitor } from "@capacitor/core";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { FileViewer } from "@capacitor/file-viewer";

export const usePdfOpener = () => {
  const [loading, setLoading] = useState(false);

  const openPdf = useCallback(async (fileName: string) => {
    const pdfUrl = `/pdfs/${fileName}`;

    // ✔️ WEB fallback
    if (Capacitor.getPlatform() === "web") {
      window.open(pdfUrl, "_blank");
      return;
    }

    // ✔️ NATIVE (Android/iOS)
    try {
      setLoading(true);

      // 1. Lataa PDF public-kansiosta
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      // 2. Muunna base64:ksi
      const base64 = await blobToBase64(blob);

      // 3. Tallenna Filesystemiin
      await Filesystem.writeFile({
        path: fileName,
        data: base64,
        directory: Directory.Documents
      });

      // 4. Hae laitteen URI
      const uri = await Filesystem.getUri({
        path: fileName,
        directory: Directory.Documents
      });

      // 5. Avaa FileViewerillä
      await FileViewer.openDocumentFromLocalPath({
        path: uri.uri
      });

    } catch (err) {
      console.error("PDF open error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { openPdf, loading };
};

// Apufunktio
const blobToBase64 = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
