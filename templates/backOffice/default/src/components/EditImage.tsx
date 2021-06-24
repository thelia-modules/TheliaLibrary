import { CURRENT_LOCAL } from "../constants";
import React from "react";
import { updateImage } from "../api";

export type EditImageProps = {
  id: number;
  onEdit: Function;
};

export default function EditImage({ id, onEdit = () => {} }: EditImageProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);

  React.useEffect(() => {
    if (isSuccess) {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [isSuccess, fileInputRef]);

  console.log("hey");

  return (
    <form
      className="TheliaLibrary-EditImage"
      onSubmit={(e) => {
        e.preventDefault();
        setIsPending(true);
        setIsSuccess(false);
        setError(false);
        const data = new FormData(e.currentTarget);
        if (!data.has("locale")) {
          data.set("locale", CURRENT_LOCAL);
        }
        updateImage(id, data)
          .then((response) => {
            setIsSuccess(true);
            onEdit(response);
          })
          .catch((e) => setError(e.message))
          .finally(() => {
            setIsPending(false);
          });
      }}
    ></form>
  );
}
