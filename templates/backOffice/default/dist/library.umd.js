(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('axios')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'axios'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TheliaLibrary = {}, global.React, global.axios));
}(this, (function (exports, React, axios) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

    const CURRENT_LOCAL = "en_US";

    const API_URL = "/open_api/library/image";
    // API
    async function getAllImages(params) {
        return axios__default['default'].get(API_URL, {
            params: {
                ...params,
            },
        });
    }
    function createImage(data) {
        return axios__default['default'].post(API_URL, data, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
    }
    function deleteImage(id) {
        return axios__default['default'].delete(API_URL + "/" + id);
    }
    function updateImage(id, data) {
        return axios__default['default'].post(API_URL + "/" + id, data, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
    }

    function AddImage({ onAdd = () => { } }) {
        const fileInputRef = React__default['default'].useRef(null);
        const [isSuccess, setIsSuccess] = React__default['default'].useState(false);
        const [error, setError] = React__default['default'].useState(false);
        const [isPending, setIsPending] = React__default['default'].useState(false);
        React__default['default'].useEffect(() => {
            if (isSuccess) {
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }
        }, [isSuccess, fileInputRef]);
        return (React__default['default'].createElement("form", { onSubmit: (e) => {
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
            React__default['default'].createElement("div", { className: "form-group" },
                React__default['default'].createElement("div", null,
                    React__default['default'].createElement("label", { htmlFor: "image", className: "control-label" }, "Ajouter une image"),
                    React__default['default'].createElement("input", { type: "file", name: "image", ref: fileInputRef, className: "form-control" })),
                React__default['default'].createElement("div", null,
                    React__default['default'].createElement("label", { htmlFor: "title", className: "control-label" }, "titre de l'image"),
                    React__default['default'].createElement("input", { type: "text", name: "title", className: "form-control" }))),
            React__default['default'].createElement("button", { type: "submit", disabled: isPending, className: "form-submit-button btn btn-sm btn-success" }, "Ajouter l'image"),
            isSuccess ? React__default['default'].createElement("div", null, "Ajout avec succ\u00E8s") : null,
            error ? React__default['default'].createElement("div", null, error) : null));
    }

    function EditImage({ id, onEdit = () => { } }) {
        const fileInputRef = React__default['default'].useRef(null);
        const [isSuccess, setIsSuccess] = React__default['default'].useState(false);
        const [error, setError] = React__default['default'].useState(false);
        const [isPending, setIsPending] = React__default['default'].useState(false);
        React__default['default'].useEffect(() => {
            if (isSuccess) {
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }
        }, [isSuccess, fileInputRef]);
        console.log("hey");
        return (React__default['default'].createElement("form", { className: "TheliaLibrary-EditImage", onSubmit: (e) => {
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
        const [isEditing, setIsEditing] = React__default['default'].useState(false);
        if (!url)
            return null;
        return (React__default['default'].createElement("div", { className: "TheliaLibrary-Thumbnail" },
            isEditing ? (React__default['default'].createElement(EditImage, { id: id, onEdit: () => {
                    onEdit();
                    setIsEditing(false);
                } })) : null,
            React__default['default'].createElement("img", { src: url }),
            React__default['default'].createElement("div", { className: "TheliaLibrary-Thumbnail-title" }, id + "-" + (title ? title : "")),
            React__default['default'].createElement("button", { className: "btn btn-info btn-responsive", onClick: () => {
                    console.log("hnkjm");
                    setIsEditing(true);
                } },
                React__default['default'].createElement("i", { className: "glyphicon glyphicon-edit" }),
                React__default['default'].createElement("span", null, "Modifier")),
            React__default['default'].createElement("button", { className: "btn btn-danger btn-responsive", onClick: () => {
                    if (window.confirm("etes vous sur ?")) {
                        deleteImage(id).then(() => onDelete());
                    }
                } },
                React__default['default'].createElement("i", { className: "glyphicon glyphicon-edit" }),
                React__default['default'].createElement("span", null, "Supprimer"))));
    }

    function Grid({ data, loading, error, fetch }) {
        if (error) {
            return React__default['default'].createElement("div", null, error);
        }
        if (loading) {
            return React__default['default'].createElement("div", null, "loading");
        }
        return (React__default['default'].createElement("div", { className: "TheliaLibrary-grid" }, data?.map((item) => {
            return (React__default['default'].createElement(Thumbnail, { ...item, onEdit: () => { }, onDelete: () => fetch() }));
        })));
    }

    // hooks
    function useAllImages(offset = 1, limit) {
        const [data, setData] = React__default['default'].useState(null);
        const [loading, setLoading] = React__default['default'].useState(false);
        const [error, setError] = React__default['default'].useState(null);
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
        React__default['default'].useEffect(() => {
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
        const [offset, setOffset] = React__default['default'].useState(0);
        const [limit] = React__default['default'].useState(10);
        const { data, loading, error, fetch } = useAllImages(offset, limit);
        return (React__default['default'].createElement("div", null,
            React__default['default'].createElement(AddImage, { onAdd: () => fetch() }),
            React__default['default'].createElement(Grid, { fetch: fetch, data: data, loading: loading, error: error }),
            React__default['default'].createElement("div", null,
                React__default['default'].createElement("button", { disabled: limit > offset, onClick: () => {
                        setOffset(offset - limit);
                    } }, "Prev"),
                React__default['default'].createElement("button", { disabled: Array.isArray(data) && data?.length < limit, onClick: () => {
                        setOffset(offset + limit);
                    } }, "Next"))));
    }

    exports.App = App;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
