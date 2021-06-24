import { CURRENT_LOCAL } from "../constants";
import React from "react";
import { createImage } from "../api";

export type AddImageProps = {
  onAdd: (response: any) => any;
};

export default function AddImage({ onAdd = () => {} }: AddImageProps) {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsPending(true);
        setIsSuccess(false);
        setError(false);
        const data = new FormData(e.currentTarget);
        if (!data.has("locale")) {
          data.set("locale", CURRENT_LOCAL);
        }
        createImage(data)
          .then((response) => {
            setIsSuccess(true);
            onAdd(response);
          })
          .catch((e) => setError(e.message))
          .finally(() => {
            setIsPending(false);
          });
      }}
    >
      <div className="form-group">
        <div>
          <label htmlFor="image" className="control-label">
            Ajouter une image
          </label>
          <input
            type="file"
            name="image"
            ref={fileInputRef}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="title" className="control-label">
            titre de l'image
          </label>
          <input type="text" name="title" className="form-control" />
        </div>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="form-submit-button btn btn-sm btn-success"
      >
        Ajouter l'image
      </button>
      {isSuccess ? <div>Ajout avec succès</div> : null}
      {error ? <div>{error}</div> : null}
    </form>
  );
}
