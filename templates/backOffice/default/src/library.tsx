import "./styles.css";

import AddImage from "./components/AddImage";
import { CURRENT_LOCAL } from "./constants";
import Grid from "./components/Grid";
import React from "react";
import ReactDOM from "react-dom";
import { getAllImages } from "./api";

// hooks
function useAllImages(offset = 1, limit: number) {
  const [data, setData] = React.useState<Record<string, any> | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetch = (offset?: number, limit?: number) => {
    setLoading(true);
    getAllImages({ locale: CURRENT_LOCAL, offset, limit })
      .then((response) => {
        setData(response.data as any);
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetch(offset, limit);
  }, [offset, limit]);

  return {
    fetch,
    data,
    loading,
    error,
  };
}

export function App() {
  const [offset, setOffset] = React.useState(0);
  const [limit] = React.useState(10);
  const { data, loading, error, fetch } = useAllImages(offset, limit);

  return (
    <div>
      <AddImage onAdd={() => fetch()} />
      <Grid fetch={fetch} data={data} loading={loading} error={error} />
      <div>
        <button
          disabled={limit > offset}
          onClick={() => {
            setOffset(offset - limit);
          }}
        >
          Prev
        </button>
        <button
          disabled={Array.isArray(data) && data?.length < limit}
          onClick={() => {
            setOffset(offset + limit);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
