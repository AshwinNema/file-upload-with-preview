"use client"
import Image from "next/image";
import { FileUploadWithPreview } from 'file-upload-with-preview';
import 'file-upload-with-preview/dist/style.css';
import { useEffect, useRef } from "react";
import { Events, ImageAddedEvent } from 'file-upload-with-preview';
export default function Home() {
  const isLoaded = useRef(false)
  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true
      const upload = new FileUploadWithPreview('my-unique-id');
      console.log(ImageAddedEvent, "this is image", Events)
    }
    
  }, [])
  return (
    <main className="">
      <div className="custom-file-container" data-upload-id="my-unique-id"></div>
    </main>
  );
}
