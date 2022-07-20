// src/Image/index.tsx
import {
  queryClient
} from "@thelia/blocks-editor";
import { Suspense, useEffect, useState as useState2 } from "react";

// src/Image/assets/image.svg
import * as React2 from "react";
var SvgImage = (props) => /* @__PURE__ */ React2.createElement("svg", {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React2.createElement("path", {
  d: "M19.86 15.26V2.47C19.8574 1.814 19.5949 1.18577 19.1301 0.722836C18.6653 0.259906 18.036 -5.33299e-06 17.38 0H2.5C2.16847 0.00126416 1.84048 0.068193 1.53497 0.196922C1.22945 0.32565 0.952464 0.513628 0.72 0.75C0.268046 1.20961 0.0102384 1.82548 1.31138e-09 2.47V17.38C-1.06443e-05 17.7074 0.0647931 18.0315 0.190674 18.3337C0.316554 18.6359 0.50102 18.9102 0.733432 19.1407C0.965844 19.3713 1.2416 19.5535 1.5448 19.677C1.848 19.8004 2.17264 19.8626 2.5 19.86H17.38C18.0369 19.8574 18.6662 19.5952 19.1307 19.1307C19.5952 18.6662 19.8574 18.0369 19.86 17.38V15.38V15.25V15.26ZM15.61 13.04L18.7 15.52L18.79 15.6V17.38C18.7821 17.7478 18.6298 18.0978 18.3659 18.3541C18.1021 18.6105 17.7479 18.7527 17.38 18.75H2.5C2.31454 18.7508 2.13075 18.715 1.95916 18.6446C1.78756 18.5743 1.63153 18.4707 1.5 18.34C1.36742 18.2098 1.26271 18.0541 1.19222 17.8821C1.12174 17.7102 1.08696 17.5258 1.09 17.34V16.47L1.18 16.39L6.25 12.14C6.39167 12.0175 6.5727 11.95 6.76 11.95C6.95222 11.9494 7.13771 12.0208 7.28 12.15L9.8 14.75C10.1157 15.0571 10.5305 15.2414 10.97 15.27C11.4102 15.304 11.8476 15.176 12.2 14.91L14.66 13C14.7961 12.8988 14.9604 12.8428 15.13 12.84C15.2999 12.8407 15.4649 12.8969 15.6 13L15.61 13.04ZM18.78 13.67V14.19L18.38 13.86L16.26 12.18C15.9416 11.9269 15.5468 11.7891 15.14 11.7891C14.7332 11.7891 14.3384 11.9269 14.02 12.18L11.56 13.97C11.4214 14.0831 11.2489 14.1465 11.07 14.15C10.8861 14.1476 10.7091 14.0803 10.57 13.96L8.02 11.44C7.6917 11.1055 7.24813 10.9089 6.77983 10.8904C6.31152 10.8718 5.85377 11.0326 5.5 11.34L1.5 14.75L1.09 15.1V2.47C1.09 2.28531 1.12654 2.10243 1.19752 1.93192C1.2685 1.76141 1.37252 1.60663 1.50358 1.4765C1.63464 1.34636 1.79016 1.24345 1.96117 1.17368C2.13218 1.10392 2.31531 1.06868 2.5 1.07H17.38C17.5658 1.06696 17.7502 1.10174 17.9221 1.17222C18.0941 1.24271 18.2498 1.34742 18.38 1.48C18.5107 1.61153 18.6143 1.76756 18.6846 1.93916C18.755 2.11075 18.7908 2.29454 18.79 2.48L18.78 13.67Z",
  fill: "#333333"
}), /* @__PURE__ */ React2.createElement("path", {
  d: "M14.0707 4.37993C13.5919 4.18009 13.0647 4.12687 12.5557 4.22701C12.0467 4.32715 11.5788 4.57613 11.2115 4.94241C10.8441 5.30869 10.5938 5.77578 10.4922 6.28449C10.3905 6.7932 10.4422 7.32062 10.6407 7.79993C10.8466 8.2856 11.1953 8.69714 11.6407 8.97992C12.1453 9.31662 12.7511 9.46778 13.3547 9.4076C13.9584 9.34742 14.5224 9.07963 14.9507 8.64992C15.2546 8.34523 15.4788 7.97034 15.6035 7.5584C15.7281 7.14646 15.7494 6.71016 15.6654 6.28805C15.5813 5.86595 15.3946 5.47104 15.1217 5.13824C14.8488 4.80544 14.4981 4.545 14.1007 4.37993H14.0707ZM14.3507 7.65992C14.1855 7.91702 13.9443 8.11626 13.6607 8.22992C13.3763 8.34874 13.0629 8.38007 12.7607 8.31992C12.4597 8.25811 12.1824 8.11251 11.9607 7.89992C11.7994 7.73572 11.6763 7.53809 11.5999 7.32101C11.5235 7.10393 11.4958 6.87271 11.5187 6.64373C11.5416 6.41475 11.6146 6.1936 11.7324 5.99594C11.8502 5.79828 12.0101 5.62895 12.2007 5.49993C12.4548 5.32915 12.7544 5.23857 13.0607 5.23992C13.4736 5.24265 13.8687 5.40791 14.1607 5.69992C14.3062 5.84383 14.4217 6.01513 14.5007 6.20392C14.5796 6.39272 14.6204 6.59528 14.6207 6.79993C14.6216 7.10759 14.5273 7.40801 14.3507 7.65992Z",
  fill: "#333333"
}));

// src/api.ts
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetcher } from "@thelia/blocks-editor";
function useLibraryImage(options) {
  return useQuery(["LibraryImage", options], () => fetcher(`/library/image`, {
    method: "GET",
    params: {
      id: options.id || null,
      limit: options.limit || 5,
      offset: options.offset || 0,
      title: options.title || null
    }
  }), {
    keepPreviousData: true,
    onSuccess: (data) => {
    }
  });
}
function useCreateImage() {
  const queryClient2 = useQueryClient();
  return useMutation((data) => {
    return fetcher(`/library/image`, {
      method: "POST",
      headers: {
        "content-type": "multipart/form-data"
      },
      data
    });
  }, {
    onSuccess: (data) => {
      queryClient2.setQueryData(["LibraryImage"], (oldData) => {
        if (oldData && Array.isArray(oldData)) {
          return [...oldData, data];
        }
        return oldData;
      });
    }
  });
}
function useDeleteImage() {
  const queryClient2 = useQueryClient();
  return useMutation((id) => {
    return fetcher(`/library/image/${id}`, {
      method: "DELETE"
    });
  }, {
    onSuccess: (_, id) => {
      queryClient2.setQueriesData(["LibraryImage"], (oldData) => {
        if (oldData && Array.isArray(oldData)) {
          return oldData.filter((i) => i.id !== id);
        }
        return oldData;
      });
    }
  });
}

// src/Library/index.tsx
import { useState } from "react";
function Library({
  limit = 20,
  onSelect
}) {
  const [offset, setOffset] = useState(0);
  const images = useLibraryImage({ offset, limit });
  const deleteMutation = useDeleteImage();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, "Rechercher une image"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap gap-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Rechercher dans le catalogue"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "",
    id: ""
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Filtrer par cat\xE9gories"), /* @__PURE__ */ React.createElement("select", {
    name: "",
    id: ""
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "tag 1"), /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "tag 2")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, images.data?.map((image) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: image.id
    }, /* @__PURE__ */ React.createElement("img", {
      width: "300",
      height: "300",
      loading: "lazy",
      src: `/image-library/${image.id}/full/^!300,300/0/default.webp`
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        onSelect(image);
      }
    }, "Selectionner"), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      className: "",
      onClick: () => deleteMutation.mutate(image.id),
      disabled: deleteMutation.isLoading
    }, "supprimer"));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center gap-8 mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "Button",
    onClick: () => setOffset((old) => Math.max(old - limit, 0)),
    disabled: offset === 0
  }, "page pr\xE9c\xE9dente"), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 Button"
  }, offset / limit + 1), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "Button",
    onClick: () => {
      if (!images.isPreviousData && (images?.data?.length || 0) >= limit) {
        setOffset((old) => old + limit);
      }
    },
    disabled: images.isPreviousData || (images?.data?.length || 0) < limit
  }, "page suivante")));
}

// src/Image/index.tsx
import { QueryClientProvider } from "react-query";
var FromLocal = ({
  onSelect
}) => {
  const createImage = useCreateImage();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      border: "1px dashed"
    }
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e) => {
      e.preventDefault();
    }
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "T\xE9l\xE9charger une image"), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    name: "",
    id: "",
    onChange: async (e) => {
      if (e.target.files) {
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        const res = await createImage.mutateAsync(formData);
        onSelect(res);
      }
    }
  })));
};
var FromLibrary = ({
  onSelect
}) => {
  const [isOpen, setIsOpen] = useState2(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setIsOpen(true);
    }
  }, /* @__PURE__ */ React.createElement("span", null, "Selectionnez une image depuis votre m\xE9diath\xE8que")), isOpen ? /* @__PURE__ */ React.createElement(Library, {
    onSelect: (image) => {
      setIsOpen(false);
      onSelect(image);
    }
  }) : null);
};
var Preview = ({ id }) => {
  if (!id)
    return null;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: `/image-library/${id}/full/^!300,300/0/default.webp`,
    alt: ""
  }));
};
var ImageInfos = ({
  image,
  onChange
}) => {
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e) => {
      e.preventDefault();
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "titre"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    value: image.title,
    onChange: (e) => {
      onChange({
        title: e.target.value
      });
    }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "titre lien"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "linkUrl",
    value: image.link?.url || "",
    onChange: (e) => {
      onChange({
        link: {
          url: e.target.value
        }
      });
    }
  })));
};
var BlockImageComponent = (props) => {
  const { data, onUpdate } = props;
  const [image, setImage] = useState2(null);
  const [isEditMode, setEditMode] = useState2(false);
  useEffect(() => {
    if (data.id) {
      setImage(data);
      return;
    }
    setEditMode(true);
  }, [data]);
  const onSelect = (image2) => {
    onUpdate(image2);
    setEditMode(false);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, image && !isEditMode ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(Preview, {
    id: image.id
  }), /* @__PURE__ */ React.createElement(ImageInfos, {
    image,
    onChange: (values) => {
      onUpdate({ ...data, ...values });
    }
  })), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setEditMode(true);
    }
  }, "Changer")) : null, isEditMode ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(FromLocal, {
    onSelect
  }), /* @__PURE__ */ React.createElement(FromLibrary, {
    onSelect
  })), image?.id ? /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setEditMode(false);
    }
  }, "Annuler") : null) : null);
};
var WrappedComponent = (props) => {
  return /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient
  }, /* @__PURE__ */ React.createElement(Suspense, {
    fallback: "chargement"
  }, /* @__PURE__ */ React.createElement(BlockImageComponent, {
    ...props
  })));
};
var initialData = {
  url: null,
  id: null,
  title: "",
  fileName: ""
};
var moduleType = {
  id: "blockImage"
};
var blockImage = {
  type: moduleType,
  component: WrappedComponent,
  initialData,
  title: {
    default: "Image",
    fr_FR: "Image"
  },
  description: {
    default: "Display an image--",
    fr_FR: "Affiche une image"
  },
  icon: SvgImage,
  image: {
    default: ""
  }
};
var Image_default = blockImage;

// src/index.tsx
import { registerPlugin } from "@thelia/blocks-editor";
registerPlugin(Image_default);
//# sourceMappingURL=index.mjs.map