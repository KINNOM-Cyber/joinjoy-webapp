import { useDropzone, type Accept } from "react-dropzone";
import UploadIcon from "~/assets/icons/upload";
import { cn } from "~/utils/tw-merge";

type FileUploadDropzoneProps = {
  onDrop?: (files: File[]) => void;
  accept?: Accept;
  maxFiles?: number;
  inputName?: string;
};

export default function FileUploadDropzone({
  onDrop,
  accept,
  maxFiles = 1,
  inputName
  
}: FileUploadDropzoneProps) {
  const { getInputProps, getRootProps, isDragActive, isDragReject } =
    useDropzone({
      accept,
      onDrop,
      maxFiles,
    });
  return (
    <div
      className={cn(
        "h-37.5 flex flex-col items-center justify-center text-center border rounded-md border-dashed border-[#D5D5D5] cursor-pointer",
        isDragActive ? "border-emerald-500" : "",
        isDragReject ? "border-red-500" : ""
      )}
      {...getRootProps()}
    >
      <input name={inputName} {...getInputProps()} />
      <UploadIcon />
      <p className="leading-10 text-sm font-light">
        Click or drag file to this area to upload
      </p>
    </div>
  );
}
