const CURRENT_LOCAL = "en_US";

const h = React.createElement;

const API_URL = "/open_api/library/image";

// API
export async function getAllImages(params) {
  return axios.get(API_URL, {
    params: {
      ...params,
    },
  });
}
export function createImage(data) {
  return axios.post(API_URL, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
}
export function deleteImage(id) {
  return axios.delete(API_URL + "/" + id);
}
export function getImage(id) {}

export function updateImage(id, data) {}

// hooks
function useAllImages(page = 1, limit) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetch = () => {
    setLoading(true);
    getAllImages({ locale: CURRENT_LOCAL, page, limit })
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetch(page, limit);
  }, [page, limit]);

  return {
    fetch,
    data,
    loading,
    error,
  };
}

// Components
function Grid({ data, loading, error, fetch }) {
  if (error) {
    return h("div", null, error);
  }
  if (loading) {
    return h("div", null, "loading");
  }
  return h(
    "div",
    { className: "TheliaLibrary-grid" },
    data?.map((item) =>
      h(Thumbnail, { ...item, onDelete: () => fetch() }, null)
    )
  );
}

function Thumbnail({ id, url, title, onDelete }) {
  if (!url) return null;

  return h("div", { className: "TheliaLibrary-Thumbnail" }, [
    h("img", { src: url }),
    h(
      "div",
      { className: "TheliaLibrary-Thumbnail-title" },
      id + "-" + (title ? title : "")
    ),
    h(
      "button",
      {
        className: "btn btn-danger btn-responsive",
        onClick: () => {
          if (window.confirm("etes vous sur ?")) {
            deleteImage(id).then(() => onDelete());
          }
        },
      },
      [
        h("i", { className: "glyphicon glyphicon-trash" }),
        ("span", null, "supprimer"),
      ]
    ),
  ]);
}

function AddImage({ onAdd }) {
  const fileInputRef = React.useRef(null);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);

  React.useEffect(() => {
    if (isSuccess) {
      console.log(fileInputRef);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [isSuccess, fileInputRef]);

  return h(
    "form",
    {
      className: "",
      onSubmit: (e) => {
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
      },
    },
    h(
      "div",
      {
        class: "form-group ",
      },
      h(
        "label",
        {
          for: "file",
          class: "control-label",
        },
        "Ajouter une image"
      ),
      h(
        "div",
        {
          class: "input-group",
        },
        h("input", {
          type: "file",
          id: "image",
          required: "required",
          name: "image",
          class: "form-control",
          ref: fileInputRef,
        }),
        h("input", {
          type: "type",
          id: "title",
          required: "required",
          name: "title",
          placeholder: "Titre de l'image",
          class: "form-control",
        }),
        h(
          "span",
          {
            class: "input-group-btn",
          },
          h(
            "button",
            {
              type: "submit",
              class: "form-submit-button btn btn-sm btn-success",
            },
            "Ajouter l'image"
          )
        )
      )
    ),
    isSuccess ? h("div", null, "Ajout avec succès") : null,
    error ? h("div", null, error) : null
  );
}

function App() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);
  const { data, loading, error, fetch } = useAllImages(page, limit);

  return [
    h(AddImage, { onAdd: () => fetch() }),
    h(Grid, { data, loading, error, fetch }),
    h(
      "div",
      null,
      h(
        "button",
        {
          disabled: page <= 1,
          onClick: () => {
            setPage(page - 1);
          },
        },
        "Precédent"
      ),
      h(
        "button",
        {
          disabled: data?.length < limit,
          onClick: () => {
            setPage(page + 1);
          },
        },
        "Suivant"
      )
    ),
  ];
}

export function displayMainInterface(container) {
  ReactDOM.render(h(App), container);
}
