import React from 'react';
import axios from 'axios';

const CURRENT_LOCAL = "en_US";

const API_URL = "/open_api/library/image";
// API
async function getAllImages(params) {
    return axios.get(API_URL, {
        params: {
            ...params,
        },
    });
}
function createImage(data) {
    return axios.post(API_URL, data, {
        headers: {
            "content-type": "multipart/form-data",
        },
    });
}
function deleteImage(id) {
    return axios.delete(API_URL + "/" + id);
}
function updateImage(id, data) {
    return axios.post(API_URL + "/" + id, data, {
        headers: {
            "content-type": "multipart/form-data",
        },
    });
}

function AddImage({ onAdd = () => { } }) {
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
    return (React.createElement("form", { onSubmit: (e) => {
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
        } },
        React.createElement("div", { className: "form-group" },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "image", className: "control-label" }, "Ajouter une image"),
                React.createElement("input", { type: "file", name: "image", ref: fileInputRef, className: "form-control" })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "title", className: "control-label" }, "titre de l'image"),
                React.createElement("input", { type: "text", name: "title", className: "form-control" }))),
        React.createElement("button", { type: "submit", disabled: isPending, className: "form-submit-button btn btn-sm btn-success" }, "Ajouter l'image"),
        isSuccess ? React.createElement("div", null, "Ajout avec succ\u00E8s") : null,
        error ? React.createElement("div", null, error) : null));
}

function EditImage({ id, onEdit = () => { } }) {
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
    console.log("hey");
    return (React.createElement("form", { className: "TheliaLibrary-EditImage", onSubmit: (e) => {
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
        } }));
}

function Thumbnail({ id, url, title, onDelete = () => { }, onEdit = () => { }, }) {
    const [isEditing, setIsEditing] = React.useState(false);
    if (!url)
        return null;
    return (React.createElement("div", { className: "TheliaLibrary-Thumbnail" },
        isEditing ? (React.createElement(EditImage, { id: id, onEdit: () => {
                onEdit();
                setIsEditing(false);
            } })) : null,
        React.createElement("img", { src: url }),
        React.createElement("div", { className: "TheliaLibrary-Thumbnail-title" }, id + "-" + (title ? title : "")),
        React.createElement("button", { className: "btn btn-info btn-responsive", onClick: () => {
                console.log("hnkjm");
                setIsEditing(true);
            } },
            React.createElement("i", { className: "glyphicon glyphicon-edit" }),
            React.createElement("span", null, "Modifier")),
        React.createElement("button", { className: "btn btn-danger btn-responsive", onClick: () => {
                if (window.confirm("etes vous sur ?")) {
                    deleteImage(id).then(() => onDelete());
                }
            } },
            React.createElement("i", { className: "glyphicon glyphicon-edit" }),
            React.createElement("span", null, "Supprimer"))));
}

function Grid({ data, loading, error, fetch }) {
    if (error) {
        return React.createElement("div", null, error);
    }
    if (loading) {
        return React.createElement("div", null, "loading");
    }
    return (React.createElement("div", { className: "TheliaLibrary-grid" }, data?.map((item) => {
        return (React.createElement(Thumbnail, { ...item, onEdit: () => { }, onDelete: () => fetch() }));
    })));
}

// hooks
function useAllImages(offset = 1, limit) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const fetch = (offset, limit) => {
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
function App() {
    const [offset, setOffset] = React.useState(0);
    const [limit] = React.useState(10);
    const { data, loading, error, fetch } = useAllImages(offset, limit);
    return (React.createElement("div", null,
        React.createElement(AddImage, { onAdd: () => fetch() }),
        React.createElement(Grid, { fetch: fetch, data: data, loading: loading, error: error }),
        React.createElement("div", null,
            React.createElement("button", { disabled: limit > offset, onClick: () => {
                    setOffset(offset - limit);
                } }, "Prev"),
            React.createElement("button", { disabled: Array.isArray(data) && data?.length < limit, onClick: () => {
                    setOffset(offset + limit);
                } }, "Next"))));
}

export { App };
