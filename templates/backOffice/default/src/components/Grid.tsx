import React from "react";
import Thumbnail from "./Thumbnail";
// Components
export type GridProps = {
  data: any;
  loading: boolean;
  error: string | null;
  fetch: Function;
};

export default function Grid({ data, loading, error, fetch }: GridProps) {
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="TheliaLibrary-grid">
      {data?.map((item: { id: number; url: string; title: string }) => {
        return (
          <Thumbnail {...item} onEdit={() => {}} onDelete={() => fetch()} />
        );
      })}
    </div>
  );
}
