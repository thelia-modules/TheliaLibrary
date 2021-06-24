import EditImage from "./EditImage";
import React from "react";
import { deleteImage } from "../api";

export type ThumbnailProps = {
  id: number;
  url: string;
  title: string;
  onDelete: Function;
  onEdit: Function;
};
export default function Thumbnail({
  id,
  url,
  title,
  onDelete = () => {},
  onEdit = () => {},
}: ThumbnailProps) {
  const [isEditing, setIsEditing] = React.useState(false);

  if (!url) return null;

  return (
    <div className="TheliaLibrary-Thumbnail">
      {isEditing ? (
        <EditImage
          id={id}
          onEdit={() => {
            onEdit();
            setIsEditing(false);
          }}
        />
      ) : null}
      <img src={url} />
      <div className="TheliaLibrary-Thumbnail-title">
        {id + "-" + (title ? title : "")}
      </div>
      <button
        className="btn btn-info btn-responsive"
        onClick={() => {
          console.log("hnkjm");
          setIsEditing(true);
        }}
      >
        <i className="glyphicon glyphicon-edit"></i>
        <span>Modifier</span>
      </button>
      <button
        className="btn btn-danger btn-responsive"
        onClick={() => {
          if (window.confirm("etes vous sur ?")) {
            deleteImage(id).then(() => onDelete());
          }
        }}
      >
        <i className="glyphicon glyphicon-edit"></i>
        <span>Supprimer</span>
      </button>
    </div>
  );
}
