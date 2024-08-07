import { useDropzone } from "react-dropzone";

export const Dropzone = ({ onDropzone, img }) => {
  const onDrop = (acceptedFiles) => {
    convertBase64(acceptedFiles);
  };
  const { getRootProps, getInputProps, isDragAccept, open } = useDropzone({ onDrop, noClick: true });

  const convertBase64 = (document) => {
    let reader = new FileReader();
    let file = document[0];

    reader.addEventListener("load", () => {
      onDropzone(reader.result);
    });

    reader.readAsDataURL(file);
  };
  //Verificar el borde
  return (
    <div className="flex items-center justify-center w-full relative ">
      <label
        htmlFor="dropzone-file"
        {...getRootProps({
          className: `flex flex-col items-center justify-center w-full h-36 border-2  ${
            isDragAccept
              ? "border-indigo-900 "
              : "border-gray-300 dark:border-white"
          } transition-all duration-300    rounded-lg  cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100  bg-cover bg-no-repeat bg-center opacity-40 absolute`,
        })}
        onClick={open} 
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></label>
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <span className="icon-[clarity--upload-cloud-line] w-8 h-8 mb-4 text-gray-950 dark:text-gray-400"></span>
        <p className="mb-2 text-sm text-gray-950 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-950 dark:text-gray-400">
          Image Recommend (1200*628)
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        {...getInputProps()}
      />
    </div>
  );
};
