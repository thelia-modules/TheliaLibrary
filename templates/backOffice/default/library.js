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

export function updateImage(id, data) {
  return axios.post(API_URL + "/" + id, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
}

// hooks
function useAllImages(offset = 1, limit) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetch = () => {
    setLoading(true);
    getAllImages({ locale: CURRENT_LOCAL, offset, limit })
      .then((response) => {
        setData(response.data);
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

function Thumbnail({ id, url, title, onDelete = () => {}, onEdit = () => {} }) {
  const [isEditing, setIsEditing] = React.useState(false);

  if (!url) return null;

  console.log(isEditing);

  if (isEditing) {
    return h(EditImage, {
      id,
      onEdit: () => {
        onEdit();
        setIsEditing(false);
      },
    });
  }

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
        className: "btn btn-info btn-responsive",
        onClick: () => {
          setIsEditing(true);
        },
      },
      [
        h("i", { className: "glyphicon glyphicon-edit" }),
        ("span", null, "modifier"),
      ]
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

function AddImage({ onAdd = () => {} }) {
  const fileInputRef = React.useRef(null);
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
              disabled: isPending,
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
function EditImage({ id, onEdit = () => {} }) {
  const fileInputRef = React.useRef(null);
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
        updateImage(id, data)
          .then((response) => {
            setIsSuccess(true);
            onEdit(response);
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
          class: "",
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
              disabled: isPending,
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
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const { data, loading, error, fetch } = useAllImages(offset, limit);

  return [
    h(AddImage, { onAdd: () => fetch() }),
    h(Grid, { data, loading, error, fetch }),
    h(
      "div",
      null,
      h(
        "button",
        {
          disabled: limit > offset,
          onClick: () => {
            setOffset(offset - limit);
          },
        },
        "Precédent"
      ),
      h(
        "button",
        {
          disabled: data?.length < limit,
          onClick: () => {
            setOffset(offset + limit);
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
