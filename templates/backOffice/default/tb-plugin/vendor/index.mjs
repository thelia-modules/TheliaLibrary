var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/Image/index.tsx
import { useEffect, useState as useState2 } from "react";
import { IntlProvider as IntlProvider2, useIntl as useIntl2 } from "react-intl";

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

// src/Image/assets/download.svg
import * as React3 from "react";
var SvgDownload = (props) => /* @__PURE__ */ React3.createElement("svg", {
  width: 28,
  height: 26,
  viewBox: "0 0 26 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React3.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M13 25C19.9036 25 25.5 19.4036 25.5 12.5C25.5 5.59644 19.9036 0 13 0C6.09644 0 0.5 5.59644 0.5 12.5C0.5 19.4036 6.09644 25 13 25ZM17.6328 15.9581L13.5555 19.9162C13.4826 19.9868 13.396 20.0428 13.3006 20.081C13.2053 20.1193 13.1031 20.1389 12.9998 20.1389C12.8966 20.1389 12.7944 20.1191 12.6991 20.0808C12.6038 20.0426 12.5172 19.9865 12.4444 19.9158L8.36709 15.9578C8.22042 15.8153 8.13834 15.6225 8.13889 15.4216C8.13944 15.2207 8.22258 15.0282 8.37002 14.8865C8.51747 14.7449 8.71713 14.6656 8.92509 14.6661C9.13305 14.6666 9.33228 14.7469 9.47894 14.8894L12.2162 17.5465V5.61856C12.2162 5.41767 12.2988 5.22501 12.4459 5.08296C12.5929 4.94091 12.7924 4.86111 13.0003 4.86111C13.2083 4.86111 13.4077 4.94091 13.5548 5.08296C13.7018 5.22501 13.7844 5.41767 13.7844 5.61856L13.7844 17.5465L16.5209 14.8894C16.5936 14.8189 16.6799 14.7628 16.7749 14.7245C16.87 14.6862 16.9719 14.6664 17.0749 14.6662C17.1779 14.6659 17.2799 14.6853 17.3752 14.7231C17.4704 14.761 17.557 14.8166 17.63 14.8867C17.703 14.9569 17.761 15.0403 17.8007 15.1321C17.8403 15.2239 17.8609 15.3224 17.8611 15.4219C17.8614 15.5214 17.8413 15.6199 17.8022 15.7119C17.763 15.804 17.7054 15.8876 17.6328 15.9581Z",
  fill: "#222222"
}));

// src/Image/assets/mediatheque.svg
import * as React4 from "react";
var SvgMediatheque = (props) => /* @__PURE__ */ React4.createElement("svg", {
  width: 28,
  height: 26,
  viewBox: "0 0 28 26",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React4.createElement("path", {
  d: "M7.25281 20.4814C5.42678 20.4814 3.80262 19.3023 3.21296 17.5469L3.17304 17.4146C3.03389 16.9499 2.97572 16.5588 2.97572 16.1677V8.32471L0.20873 17.6401C-0.147124 19.0102 0.663812 20.4308 2.0245 20.8093L19.6609 25.5728C19.8811 25.6303 20.1012 25.6579 20.3179 25.6579C21.4539 25.6579 22.4918 24.8976 22.7826 23.7771L23.8103 20.4814H7.25281Z",
  fill: "#222222"
}), /* @__PURE__ */ React4.createElement("path", {
  d: "M10.3885 8.40309C11.6466 8.40309 12.6696 7.37124 12.6696 6.10242C12.6696 4.83361 11.6466 3.80176 10.3885 3.80176C9.1305 3.80176 8.10742 4.83361 8.10742 6.10242C8.10742 7.37124 9.1305 8.40309 10.3885 8.40309Z",
  fill: "#222222"
}), /* @__PURE__ */ React4.createElement("path", {
  d: "M24.6453 0.350098H7.53694C5.96525 0.350098 4.68555 1.64077 4.68555 3.22593V15.8796C4.68555 17.4648 5.96525 18.7554 7.53694 18.7554H24.6453C26.217 18.7554 27.4967 17.4648 27.4967 15.8796V3.22593C27.4967 1.64077 26.217 0.350098 24.6453 0.350098ZM7.53694 2.65076H24.6453C24.9601 2.65076 25.2156 2.90844 25.2156 3.22593V11.3921L21.6126 7.15202C21.2305 6.69994 20.6773 6.45837 20.0831 6.44456C19.4923 6.44801 18.938 6.71259 18.5593 7.17042L14.3233 12.2986L12.9432 10.9102C12.163 10.1233 10.8936 10.1233 10.1146 10.9102L6.96666 14.0839V3.22593C6.96666 2.90844 7.22215 2.65076 7.53694 2.65076Z",
  fill: "#222222"
}));

// src/utils/intl.ts
var getLocale = () => document.documentElement.lang || navigator.languages && navigator.languages[0] || navigator.language || "en";
var locale = getLocale();
var messages = {
  fr: {
    BlockImage__DOWNLOAD: "T\xE9l\xE9charger une image",
    BlockImage__OR_DROP: "ou glisser-d\xE9poser une image",
    BlockImage__UPLOAD: "S\xE9lectionnez une image depuis votre m\xE9diath\xE8que",
    BlockImage__TITLE: "Titre de l'image",
    BlockImage__LINK: "Lien de l'image",
    BlockImage__LINK_PLACEHOLDER: "Lien au clic sur l'image",
    BlockImage__LIBRARY_MODAL_TITLE: "Rechercher une image",
    BlockImage__LIBRARY_MODAL_SEARCH: "Rechercher dans la m\xE9diath\xE8que",
    BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtrer par tag",
    BlockImage__LIBRARY_LOADING: "Chargement de la librairie...",
    BlockImage__TOAST_WRONG_FILE_TYPE: "Votre image n'a pas pu \xEAtre t\xE9l\xE9charg\xE9e. Veuillez v\xE9rifier que votre fichier est bien une image.",
    BlockImage__TOAST_MAX_FILE: "Veuillez uploader une seule image.",
    BlockImage__DROP_TO_UPLOAD: "Relacher pour uploader votre image",
    BlockImage__LIBRARY_NO_CONTENT: "Aucune image trouv\xE9e",
    BlockImage__LIBRARY_SEARCHING: "Recherche en cours...",
    BlockImage__LIBRARY_IMAGE_TAG_CONFIG: "Configuration des tags de",
    BlockImage__LIBRARY_IMAGE_ADD_TAG: "Ajouter un ou plusieurs tag",
    BlockImage__LIBRARY_IMAGE_SELECT_TAG: "S\xE9lectionnez un ou plusieurs tag",
    REPLACE: "Remplacer",
    REPLACE_IMAGE: "Remplacer l'image",
    OPTIONAL: "Optionnel",
    CANCEL: "Annuler",
    DELETE: "Supprimer",
    SEARCH_BY: "R\xE9f\xE9rence, nom, ...",
    LOADING: "Chargement...",
    DOWNLOADING: "T\xE9l\xE9chargement...",
    ALL_TAGS: "Tous les tags",
    CHOOSE: "Choisir"
  },
  en: {
    BlockImage__DOWNLOAD: "Download an image",
    BlockImage__OR_DROP: "or drop an image",
    BlockImage__UPLOAD: "Select an image from your library",
    BlockImage__TITLE: "Image title",
    BlockImage__LINK: "Image link",
    BlockImage__LINK_PLACEHOLDER: "Link on click on image",
    BlockImage__LIBRARY_MODAL_TITLE: "Search an image",
    BlockImage__LIBRARY_MODAL_SEARCH: "Search in the library",
    BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filter by tag",
    BlockImage__LIBRARY_LOADING: "Loading library...",
    BlockImage__TOAST_WRONG_FILE_TYPE: "Your image could not be uploaded. Please check that your file is an image.",
    BlockImage__TOAST_MAX_FILE: "Please upload only one image.",
    BlockImage__DROP_TO_UPLOAD: "Release to upload your image",
    BlockImage__LIBRARY_NO_CONTENT: "No image found",
    BlockImage__LIBRARY_SEARCHING: "Searching...",
    BlockImage__LIBRARY_IMAGE_TAG_CONFIG: "Configure tags of",
    BlockImage__LIBRARY_IMAGE_ADD_TAG: "Add one or more tag",
    BlockImage__LIBRARY_IMAGE_SELECT_TAG: "Select one or more tag",
    REPLACE: "Replace",
    REPLACE_IMAGE: "Replace image",
    OPTIONAL: "Optional",
    CANCEL: "Cancel",
    DELETE: "Delete",
    SEARCH_BY: "Reference, name, ...",
    LOADING: "Loading...",
    DOWNLOADING: "Downloading...",
    ALL_TAGS: "All tags",
    CHOOSE: "Choose"
  },
  es: {
    BlockImage__DOWNLOAD: "Descargar una imagen",
    BlockImage__OR_DROP: "o arrastrar una imagen",
    BlockImage__UPLOAD: "Seleccionar una imagen de tu biblioteca",
    BlockImage__TITLE: "T\xEDtulo de la imagen",
    BlockImage__LINK: "Enlace de la imagen",
    BlockImage__LINK_PLACEHOLDER: "Enlace al hacer clic en la imagen",
    BlockImage__LIBRARY_MODAL_TITLE: "Buscar una imagen",
    BlockImage__LIBRARY_MODAL_SEARCH: "Buscar en la biblioteca",
    BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtrar por tag",
    BlockImage__LIBRARY_LOADING: "Cargando la biblioteca...",
    BlockImage__TOAST_WRONG_FILE_TYPE: "Tu imagen no pudo ser subida. Por favor verifica que tu archivo es una imagen.",
    BlockImage__TOAST_MAX_FILE: "Por favor sube solo una imagen.",
    BlockImage__DROP_TO_UPLOAD: "Suelte para subir tu imagen",
    BlockImage__LIBRARY_NO_CONTENT: "No se encontraron imagenes",
    BlockImage__LIBRARY_SEARCHING: "Buscando...",
    BlockImage__LIBRARY_IMAGE_TAG_CONFIG: "Configurar tags de",
    BlockImage__LIBRARY_IMAGE_ADD_TAG: "Agregar uno o m\xE1s tags",
    BlockImage__LIBRARY_IMAGE_SELECT_TAG: "Seleccionar uno o m\xE1s tags",
    REPLACE: "Reemplazar",
    REPLACE_IMAGE: "Reemplazar imagen",
    OPTIONAL: "Opcional",
    CANCEL: "Cancelar",
    DELETE: "Eliminar",
    SEARCH_BY: "Referencia, nombre, ...",
    LOADING: "Cargando...",
    DOWNLOADING: "Descargando...",
    ALL_TAGS: "Todos los tags",
    CHOOSE: "Elegir"
  },
  it: {
    BlockImage__DOWNLOAD: "Scarica un immagine",
    BlockImage__OR_DROP: "o trascina un immagine",
    BlockImage__UPLOAD: "Seleziona un immagine dalla tua libreria",
    BlockImage__TITLE: "Titolo dell immagine",
    BlockImage__LINK: "Link dell immagine",
    BlockImage__LINK_PLACEHOLDER: "Link al click sull immagine",
    BlockImage__LIBRARY_MODAL_TITLE: "Cerca un immagine",
    BlockImage__LIBRARY_MODAL_SEARCH: "Cerca nella libreria",
    BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtra per tag",
    BlockImage__LIBRARY_LOADING: "Caricamento della libreria...",
    BlockImage__TOAST_WRONG_FILE_TYPE: "La tua immagine non pu\xF2 essere caricata. Per favore verifica che il tuo file sia un immagine.",
    BlockImage__TOAST_MAX_FILE: "Per favore carica solo una immagine.",
    BlockImage__DROP_TO_UPLOAD: "Rilascia per caricare la tua immagine",
    BlockImage__LIBRARY_NO_CONTENT: "Nessuna immagine trovata",
    BlockImage__LIBRARY_SEARCHING: "Ricerca in corso...",
    BlockImage__LIBRARY_IMAGE_TAG_CONFIG: "Configura i tag di",
    BlockImage__LIBRARY_IMAGE_ADD_TAG: "Aggiungi uno o pi\xF9 tag",
    BlockImage__LIBRARY_IMAGE_SELECT_TAG: "Seleziona uno o pi\xF9 tag",
    REPLACE: "Sostituisci",
    REPLACE_IMAGE: "Sostituisci immagine",
    OPTIONAL: "Opzionale",
    CANCEL: "Annulla",
    DELETE: "Elimina",
    SEARCH_BY: "Riferimento, nome, ...",
    LOADING: "Caricamento...",
    DOWNLOADING: "Scaricare...",
    ALL_TAGS: "Tutti i tag",
    CHOOSE: "Scegli"
  }
};

// src/Image/index.tsx
import { useDropzone } from "react-dropzone";

// src/utils/queries.tsx
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetcher } from "@thelia/fetcher";
function useLibraryImage(options) {
  return useQuery(
    ["LibraryImage", options],
    () => fetcher(`/open_api/library/image`, {
      method: "GET",
      params: {
        id: options.id || null,
        limit: options.limit || 5,
        offset: options.offset || 0,
        title: options.title || null,
        tagId: options.tagId || null
      }
    }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
      }
    }
  );
}
function useCreateImage() {
  const queryClient3 = useQueryClient();
  return useMutation(
    (data) => {
      return fetcher(`/open_api/library/image`, {
        method: "POST",
        headers: {
          "content-type": "multipart/form-data"
        },
        data
      });
    },
    {
      onSuccess: (data) => {
        queryClient3.setQueryData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return [...oldData, data];
          }
          return oldData;
        });
      }
    }
  );
}
function useDeleteImage() {
  const queryClient3 = useQueryClient();
  return useMutation(
    (id) => {
      return fetcher(`/open_api/library/image/${id}`, {
        method: "DELETE"
      });
    },
    {
      onSuccess: (_, id) => {
        queryClient3.setQueriesData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return oldData.filter((i) => i.id !== id);
          }
          return oldData;
        });
      }
    }
  );
}
function useGetTags() {
  return useQuery(
    ["LibraryTag"],
    () => fetcher(`/open_api/library/tag`, {
      method: "GET"
    }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
      }
    }
  );
}
function useDeleteTagAssociation() {
  const queryClient3 = useQueryClient();
  return useMutation(
    (id) => {
      return fetcher(`/open_api/library/image_tag/${id}`, {
        method: "DELETE"
      });
    },
    {
      onSuccess: (data, id) => {
        queryClient3.setQueriesData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return oldData.map((image) => {
              if (image.tags && image.tags.length) {
                return {
                  ...image,
                  tags: image.tags.filter(
                    ({ imageTag }) => imageTag.id !== id
                  )
                };
              }
              return image;
            });
          }
          return oldData;
        });
      }
    }
  );
}
function useAssociateTag() {
  const queryClient3 = useQueryClient();
  return useMutation(
    (data) => {
      return fetcher(`/open_api/library/image_tag`, {
        method: "POST",
        data
      });
    },
    {
      onSuccess: (data) => {
        queryClient3.setQueriesData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return oldData.map((image) => {
              if (image.id === data.imageTag.imageId) {
                return {
                  ...image,
                  tags: [...image.tags, data]
                };
              }
              return image;
            });
          }
          return oldData;
        });
      }
    }
  );
}

// src/Library/assets/xmark.svg
import * as React5 from "react";
var SvgXmark = (props) => /* @__PURE__ */ React5.createElement("svg", {
  width: 19,
  height: 18,
  viewBox: "0 0 19 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React5.createElement("path", {
  d: "M17.5913 15.0762L10.9713 8.67623L17.6013 2.27623C17.728 2.15573 17.829 2.0107 17.898 1.84996C17.9669 1.68923 18.0025 1.51614 18.0025 1.34123C18.0025 1.16632 17.9669 0.993238 17.898 0.832502C17.829 0.671767 17.728 0.526739 17.6013 0.406233C17.3305 0.151704 16.9729 0.00999999 16.6013 0.00999999C16.2296 0.00999999 15.872 0.151704 15.6013 0.406233L9.00125 6.77623L2.40125 0.396233C2.13049 0.141704 1.77286 0 1.40125 0C1.02964 0 0.672011 0.141704 0.401251 0.396233C0.275468 0.518481 0.17531 0.664572 0.10663 0.825969C0.0379507 0.987366 0.00212641 1.16083 0.00125089 1.33623C0.000992191 1.51181 0.0363014 1.68561 0.105048 1.84717C0.173796 2.00873 0.274556 2.15468 0.401251 2.27623L7.03125 8.67623L0.401251 15.0762C0.274474 15.1967 0.173528 15.3418 0.104549 15.5025C0.0355706 15.6632 0 15.8363 0 16.0112C0 16.1861 0.0355706 16.3592 0.104549 16.52C0.173528 16.6807 0.274474 16.8257 0.401251 16.9462C0.675245 17.1943 1.03165 17.3317 1.40125 17.3317C1.77085 17.3317 2.12726 17.1943 2.40125 16.9462L9.00125 10.5762L15.6013 16.9462C15.8731 17.1986 16.2303 17.3388 16.6013 17.3388C16.9722 17.3388 17.3294 17.1986 17.6013 16.9462C17.7307 16.8273 17.834 16.6828 17.9046 16.5218C17.9753 16.3609 18.0118 16.187 18.0118 16.0112C18.0118 15.8355 17.9753 15.6616 17.9046 15.5007C17.834 15.3397 17.7307 15.1952 17.6013 15.0762H17.5913Z",
  fill: "currentcolor"
}));

// src/Library/assets/trash.svg
import * as React6 from "react";
var SvgTrash = (props) => /* @__PURE__ */ React6.createElement("svg", {
  width: 12,
  height: 12,
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React6.createElement("path", {
  d: "M3.91875 0.498484C4.04531 0.257609 4.30547 0.105469 4.58906 0.105469H7.41094C7.69453 0.105469 7.95469 0.257609 8.08125 0.498484L8.25 0.816406H10.5C10.9148 0.816406 11.25 1.13477 11.25 1.52734C11.25 1.91991 10.9148 2.23828 10.5 2.23828H1.5C1.08586 2.23828 0.75 1.91991 0.75 1.52734C0.75 1.13477 1.08586 0.816406 1.5 0.816406H3.75L3.91875 0.498484ZM1.47891 2.94922H10.5V10.0586C10.5 10.8428 9.82734 11.4805 9 11.4805H2.97891C2.17148 11.4805 1.47891 10.8428 1.47891 10.0586V2.94922ZM3.35391 4.72656V9.70312C3.35391 9.89863 3.54375 10.0586 3.72891 10.0586C3.95625 10.0586 4.10391 9.89863 4.10391 9.70312V4.72656C4.10391 4.53105 3.95625 4.37109 3.72891 4.37109C3.54375 4.37109 3.35391 4.53105 3.35391 4.72656ZM5.60391 4.72656V9.70312C5.60391 9.89863 5.79375 10.0586 5.97891 10.0586C6.20625 10.0586 6.375 9.89863 6.375 9.70312V4.72656C6.375 4.53105 6.20625 4.37109 5.97891 4.37109C5.79375 4.37109 5.60391 4.53105 5.60391 4.72656ZM7.875 4.72656V9.70312C7.875 9.89863 8.04375 10.0586 8.25 10.0586C8.45625 10.0586 8.625 9.89863 8.625 9.70312V4.72656C8.625 4.53105 8.45625 4.37109 8.25 4.37109C8.04375 4.37109 7.875 4.53105 7.875 4.72656Z",
  fill: "white"
}));

// src/Library/assets/tag-xmark.svg
import * as React7 from "react";
var SvgTagXmark = (props) => /* @__PURE__ */ React7.createElement("svg", {
  width: 8,
  height: 8,
  viewBox: "0 0 19 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React7.createElement("path", {
  d: "M17.5913 15.0762L10.9713 8.67623L17.6013 2.27623C17.728 2.15573 17.829 2.0107 17.898 1.84996C17.9669 1.68923 18.0025 1.51614 18.0025 1.34123C18.0025 1.16632 17.9669 0.993238 17.898 0.832502C17.829 0.671767 17.728 0.526739 17.6013 0.406233C17.3305 0.151704 16.9729 0.00999999 16.6013 0.00999999C16.2296 0.00999999 15.872 0.151704 15.6013 0.406233L9.00125 6.77623L2.40125 0.396233C2.13049 0.141704 1.77286 0 1.40125 0C1.02964 0 0.672011 0.141704 0.401251 0.396233C0.275468 0.518481 0.17531 0.664572 0.10663 0.825969C0.0379507 0.987366 0.00212641 1.16083 0.00125089 1.33623C0.000992191 1.51181 0.0363014 1.68561 0.105048 1.84717C0.173796 2.00873 0.274556 2.15468 0.401251 2.27623L7.03125 8.67623L0.401251 15.0762C0.274474 15.1967 0.173528 15.3418 0.104549 15.5025C0.0355706 15.6632 0 15.8363 0 16.0112C0 16.1861 0.0355706 16.3592 0.104549 16.52C0.173528 16.6807 0.274474 16.8257 0.401251 16.9462C0.675245 17.1943 1.03165 17.3317 1.40125 17.3317C1.77085 17.3317 2.12726 17.1943 2.40125 16.9462L9.00125 10.5762L15.6013 16.9462C15.8731 17.1986 16.2303 17.3388 16.6013 17.3388C16.9722 17.3388 17.3294 17.1986 17.6013 16.9462C17.7307 16.8273 17.834 16.6828 17.9046 16.5218C17.9753 16.3609 18.0118 16.187 18.0118 16.0112C18.0118 15.8355 17.9753 15.6616 17.9046 15.5007C17.834 15.3397 17.7307 15.1952 17.6013 15.0762H17.5913Z",
  fill: "currentcolor"
}));

// src/Library/index.tsx
import ReactModal from "react-modal";
import { Suspense, useState } from "react";
import { IntlProvider, useIntl } from "react-intl";

// src/Input/Input.tsx
import {
  forwardRef
} from "react";

// src/Input/InputWrapper.tsx
import Tippy from "@tippyjs/react";
var InputWrapper = ({
  children,
  label,
  error,
  info,
  id
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Input__Wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Input__Wrapper__Header"
  }, label && /* @__PURE__ */ React.createElement("label", {
    htmlFor: id
  }, label), info && /* @__PURE__ */ React.createElement(Tippy, {
    delay: [700, 0],
    content: info
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-info-circle"
  }))), children, error && /* @__PURE__ */ React.createElement("div", {
    className: "Input__Wrapper__Error"
  }, error));
};
var InputWrapper_default = InputWrapper;

// src/Input/Input.tsx
var InputIcon = ({
  icon,
  alignment = "left"
}) => {
  return /* @__PURE__ */ React.createElement("span", {
    className: `Input__Icon Input__Icon${alignment === "left" ? "--left" : "--right"}`
  }, icon);
};
var Input = forwardRef(
  ({
    value,
    onChange,
    className = "",
    emphasize,
    placeholder,
    icon,
    iconAlignment = "left",
    type = "text",
    isValid,
    label,
    id,
    info,
    error,
    ...props
  }, ref) => {
    return /* @__PURE__ */ React.createElement(InputWrapper_default, {
      id,
      label,
      error,
      info
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Input__Text__Wrapper"
    }, /* @__PURE__ */ React.createElement("input", {
      ref,
      type,
      value,
      id,
      onChange,
      className: `Input__Text ${emphasize ? "Input__Text--emphasize" : ""} ${iconAlignment === "left" && icon ? "Input__Text--withIcon" : icon && isValid ? "Input__Text--withIcons" : ""}`,
      placeholder,
      ...props
    }), icon && /* @__PURE__ */ React.createElement(InputIcon, {
      alignment: iconAlignment,
      icon
    }), icon && isValid && iconAlignment === "left" && /* @__PURE__ */ React.createElement(InputIcon, {
      alignment: iconAlignment,
      icon: /* @__PURE__ */ React.createElement("i", {
        className: "fas fa-check"
      })
    })));
  }
);
var Input_default = Input;

// src/ErrorBoundary.tsx
import { Component } from "react";
var ErrorBoundary = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      hasError: false
    });
  }
  static getDerivedStateFromError(_) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
  }
  render() {
    if (this.state.hasError) {
      console.log(this.state);
      return /* @__PURE__ */ React.createElement("span", {
        className: "block p-8 text-2xl text-center text-red"
      }, "Une erreur est survenue");
    }
    return this.props.children;
  }
};
var ErrorBoundary_default = ErrorBoundary;

// src/Library/index.tsx
import { QueryClientProvider } from "react-query";
import { queryClient } from "@thelia/fetcher";
var TagsList = ({
  currentTags,
  onUpdate
}) => {
  const { data } = useGetTags();
  const tags = data?.filter(
    (tagFromServer) => !currentTags.find(
      ({ tag }) => tag.id === tagFromServer.id
    )
  ) || [];
  return /* @__PURE__ */ React.createElement("ul", {
    className: "TagList"
  }, tags?.length > 0 ? tags.map((tag) => /* @__PURE__ */ React.createElement("li", {
    key: tag.id,
    onClick: () => {
      onUpdate(tag);
    },
    className: "TagList__Item"
  }, /* @__PURE__ */ React.createElement("span", null, tag.title))) : /* @__PURE__ */ React.createElement("li", {
    className: "TagList__Item"
  }, /* @__PURE__ */ React.createElement("span", null, "No tags available.")));
};
var TagConfigurationModal = ({
  isOpen,
  setIsOpen,
  image
}) => {
  const [showTags, setShowTags] = useState(false);
  const intl = useIntl();
  const deleteTagAssociation = useDeleteTagAssociation();
  const associateTag = useAssociateTag();
  return /* @__PURE__ */ React.createElement(ReactModal, {
    isOpen,
    onRequestClose: () => {
      setIsOpen(false);
    },
    className: "Modal-Tags",
    overlayClassName: "Overlay"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Header"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setIsOpen(false);
    },
    className: "Modal__Header__Close"
  }, /* @__PURE__ */ React.createElement(SvgXmark, null)), /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Header__Title"
  }, intl.formatMessage({ id: "BlockImage__LIBRARY_IMAGE_TAG_CONFIG" }), " ", image.title)), /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Content",
    style: { overflow: "inherit" }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, intl.formatMessage({ id: "BlockImage__LIBRARY_IMAGE_ADD_TAG" })), /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__TagSelector"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__TagSelector__Tags",
    style: { paddingLeft: image.tags.length < 1 ? "14px" : "0" }
  }, image.tags.length ? image.tags.map(({ tag, imageTag }) => /* @__PURE__ */ React.createElement("div", {
    key: tag.id,
    className: "BlockImage__TagSelector__Tag"
  }, /* @__PURE__ */ React.createElement("span", null, tag.title), /* @__PURE__ */ React.createElement("button", {
    className: "BlockImage__TagSelector__Tag__Remove",
    onClick: () => deleteTagAssociation.mutate(imageTag.id || 57)
  }, /* @__PURE__ */ React.createElement(SvgTagXmark, null)))) : !associateTag.isLoading ? intl.formatMessage({ id: "BlockImage__LIBRARY_IMAGE_SELECT_TAG" }) : null, associateTag.isLoading && /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__TagSelector__Tag"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-circle-notch fa-spin"
  })))), /* @__PURE__ */ React.createElement("button", {
    className: "BlockImage__TagSelector__Add",
    onClick: () => setShowTags(!showTags),
    disabled: associateTag.isLoading || deleteTagAssociation.isLoading
  }, /* @__PURE__ */ React.createElement("i", {
    className: "block fas fa-plus"
  })), showTags ? /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement("div", {
      className: "BlockProduct__Loader"
    }, /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-circle-notch fa-spin"
    }))
  }, /* @__PURE__ */ React.createElement(TagsList, {
    currentTags: image.tags,
    onUpdate: (selectedTag) => {
      associateTag.mutate({ imageId: image.id, tagId: selectedTag.id });
      setShowTags(false);
    }
  })) : null)))));
};
var TagFilterOptions = () => {
  const intl = useIntl();
  const { data: tags } = useGetTags();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, intl.formatMessage({ id: "ALL_TAGS" })), tags?.map((tag) => /* @__PURE__ */ React.createElement("option", {
    key: tag.id,
    value: tag.id
  }, tag.title)));
};
var TagFilter = ({ setTagId }) => {
  const intl = useIntl();
  return /* @__PURE__ */ React.createElement("div", {
    className: "Select__Wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Input__Select__Separator"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "tag-filter"
  }, intl.formatMessage({ id: "BlockImage__LIBRARY_MODAL_TAG_FILTER" })), /* @__PURE__ */ React.createElement("select", {
    className: "Input__Select",
    name: "tag-filter",
    id: "tag-filter",
    onChange: (e) => setTagId(e.target.value)
  }, /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement("option", null, intl.formatMessage({ id: "LOADING" }))
  }, /* @__PURE__ */ React.createElement(TagFilterOptions, null))));
};
var LibraryImage = ({
  image,
  onSelect
}) => {
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const intl = useIntl();
  const deleteMutation = useDeleteImage();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "Library__Image"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Library__Image__Tags"
  }, image.tags?.map(({ tag }) => /* @__PURE__ */ React.createElement("span", {
    key: tag.id,
    style: {
      border: `1px solid ${tag.colorCode}`,
      color: tag.colorCode
    },
    className: "Library__Image__Tag"
  }, tag.title))), /* @__PURE__ */ React.createElement("img", {
    width: "150",
    height: "150",
    loading: "lazy",
    src: `/image-library/${image.id}/full/^!150,150/0/default.webp`
  }), /* @__PURE__ */ React.createElement("span", {
    className: "Library__Image__Title"
  }, image.title), /* @__PURE__ */ React.createElement("div", {
    className: "Library__Image__Actions"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "Library__Image__Action__Title"
  }, image.title), /* @__PURE__ */ React.createElement("button", {
    className: "Library__Image__Select__Action",
    style: { marginTop: "12px", marginBottom: "6px" },
    onClick: () => onSelect(image)
  }, intl.formatMessage({ id: "CHOOSE" })), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "Library__Image__Tag__Action",
    onClick: () => setIsTagModalOpen(true)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-tag"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "Library__Image__Delete__Action",
    onClick: () => deleteMutation.mutate(image.id)
  }, /* @__PURE__ */ React.createElement(SvgTrash, null))))), /* @__PURE__ */ React.createElement(TagConfigurationModal, {
    image,
    isOpen: isTagModalOpen,
    setIsOpen: setIsTagModalOpen
  }));
};
var LibraryContent = ({
  limit = 20,
  onSelect
}) => {
  const [offset, setOffset] = useState(0);
  const [title, setTitle] = useState("");
  const [tagId, setTagId] = useState();
  const {
    data: images = [],
    isFetching,
    isPreviousData
  } = useLibraryImage({
    offset,
    limit,
    title,
    tagId
  });
  const intl = useIntl();
  return /* @__PURE__ */ React.createElement("div", {
    className: "Library"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Library__Filters"
  }, /* @__PURE__ */ React.createElement(Input_default, {
    placeholder: intl.formatMessage({ id: "SEARCH_BY" }),
    type: "text",
    name: "library-search",
    id: "library-search",
    value: title,
    onChange: (e) => setTitle(e.target.value),
    label: intl.formatMessage({ id: "BlockImage__LIBRARY_MODAL_SEARCH" }),
    icon: /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-search emphasize"
    }),
    iconAlignment: "right"
  }), /* @__PURE__ */ React.createElement(TagFilter, {
    setTagId
  })), /* @__PURE__ */ React.createElement("div", {
    className: "Library__Content"
  }, isFetching ? /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Content__Loader"
  }, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__LIBRARY_SEARCHING" })), /* @__PURE__ */ React.createElement("i", {
    className: "Loader fa fa-circle-notch fa-spin"
  })) : images.length > 0 ? images?.map((image) => {
    return /* @__PURE__ */ React.createElement(LibraryImage, {
      key: image.id,
      image,
      onSelect
    });
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "Library__NoContent"
  }, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__LIBRARY_NO_CONTENT" })))), /* @__PURE__ */ React.createElement("div", {
    className: "Pagination"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "Pagination__Button Pagination__Button--previous",
    onClick: () => setOffset((old) => Math.max(old - limit, 0)),
    disabled: offset === 0
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-chevron-left"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "Pagination__Button Pagination__Button--page"
  }, offset / limit + 1), /* @__PURE__ */ React.createElement("button", {
    className: "Pagination__Button Pagination__Button--next",
    onClick: () => {
      if (!isPreviousData && (images?.length || 0) >= limit) {
        setOffset((old) => old + limit);
      }
    },
    disabled: isPreviousData || (images?.length || 0) < limit
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-chevron-right"
  }))));
};
function Library({
  isOpen,
  setIsOpen,
  limit = 20,
  onSelect
}) {
  const intl = useIntl();
  return /* @__PURE__ */ React.createElement(ReactModal, {
    isOpen,
    onRequestClose: () => setIsOpen(false),
    className: "Modal-Library",
    ariaHideApp: false,
    overlayClassName: "Overlay"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Header"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "Modal__Header__Close"
  }, /* @__PURE__ */ React.createElement(SvgXmark, null)), /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Header__Title"
  }, intl.formatMessage({ id: "BlockImage__LIBRARY_MODAL_TITLE" }))), /* @__PURE__ */ React.createElement("div", {
    className: "Modal__Content"
  }, /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Content__Loader"
    }, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__LIBRARY_LOADING" })), /* @__PURE__ */ React.createElement("i", {
      className: "Loader fa fa-circle-notch fa-spin"
    }))
  }, /* @__PURE__ */ React.createElement(ErrorBoundary_default, null, /* @__PURE__ */ React.createElement(LibraryContent, {
    onSelect,
    limit
  }))))));
}
function WrappedComponent(props) {
  return /* @__PURE__ */ React.createElement(IntlProvider, {
    messages: messages[locale],
    locale
  }, /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient
  }, /* @__PURE__ */ React.createElement(Library, {
    ...props
  })));
}

// src/Image/index.tsx
import { QueryClientProvider as QueryClientProvider2 } from "react-query";
import { Toaster, toast } from "react-hot-toast";
import { queryClient as queryClient2 } from "@thelia/fetcher";
var FromLocal = ({ onSelect }) => {
  const intl = useIntl2();
  const createImage = useCreateImage();
  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    accept: {
      "image/*": ["*"]
    },
    noClick: true,
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles) {
        const formData = new FormData();
        formData.append("image", acceptedFiles[0]);
        const res = await createImage.mutateAsync(formData);
        onSelect(res);
      }
    },
    onDropRejected: (rejectedFiles) => {
      rejectedFiles.length > 1 ? toast.error(intl.formatMessage({ id: "BlockImage__TOAST_MAX_FILE" })) : toast.error(intl.formatMessage({ id: "BlockImage__TOAST_WRONG_FILE_TYPE" }));
    }
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__FromLocal",
    style: { border: isDragActive ? "2px dashed #dc3018" : "1px dashed #787878" },
    ...getRootProps()
  }, /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__FromLocal__Icon"
  }, /* @__PURE__ */ React.createElement(SvgDownload, null)), isDragActive ? intl.formatMessage({ id: "BlockImage__DROP_TO_UPLOAD" }) : !createImage.isLoading ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e) => {
      e.preventDefault();
    }
  }, /* @__PURE__ */ React.createElement("label", {
    className: "BlockImage__Button",
    htmlFor: "image"
  }, intl.formatMessage({ id: "BlockImage__DOWNLOAD" })), /* @__PURE__ */ React.createElement("input", {
    className: "BlockImage__FromLocal__FileInput",
    type: "file",
    accept: "image/*",
    name: "image",
    id: "image",
    onChange: async (e) => {
      if (e.target.files) {
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        const res = await createImage.mutateAsync(formData);
        onSelect(res);
      }
    }
  }), /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__OR_DROP" })))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "DOWNLOADING" })), /* @__PURE__ */ React.createElement("i", {
    className: "Loader fa fa-circle-notch fa-spin"
  })));
};
var FromLibrary = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState2(false);
  const intl = useIntl2();
  return /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__FromLibrary"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__FromLibrary__Icon"
  }, /* @__PURE__ */ React.createElement(SvgMediatheque, null)), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setIsOpen(true);
    }
  }, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__UPLOAD" }))), isOpen ? /* @__PURE__ */ React.createElement(WrappedComponent, {
    isOpen,
    setIsOpen,
    onSelect: (image) => {
      setIsOpen(false);
      onSelect(image);
    }
  }) : null);
};
var Preview = ({
  id,
  fileName,
  setEditMode
}) => {
  const intl = useIntl2();
  if (!id)
    return null;
  return /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__Preview"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `/image-library/${id}/full/^!220,220/0/default.webp`,
    alt: "",
    loading: "lazy",
    onError: (e) => e.target.src = `https://via.placeholder.com/220`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__Preview__Infos"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "BlockImage__Preview__FileName"
  }, fileName), /* @__PURE__ */ React.createElement("button", {
    className: "BlockImage__Button",
    onClick: () => {
      setEditMode(true);
    }
  }, intl.formatMessage({ id: "REPLACE" }))));
};
var ImageInfos = ({
  image,
  onChange
}) => {
  const intl = useIntl2();
  return /* @__PURE__ */ React.createElement("form", {
    className: "BlockImage__Infos__Form",
    onSubmit: (e) => {
      e.preventDefault();
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, intl.formatMessage({ id: "BlockImage__TITLE" })), /* @__PURE__ */ React.createElement("input", {
    className: "Input__Text",
    type: "text",
    name: "title",
    value: image.title,
    placeholder: intl.formatMessage({ id: "BlockImage__TITLE" }),
    onChange: (e) => {
      onChange({
        title: e.target.value
      });
    }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, intl.formatMessage({ id: "BlockImage__LINK" }), " (", intl.formatMessage({ id: "OPTIONAL" }), ")"), /* @__PURE__ */ React.createElement("input", {
    className: "Input__Text",
    type: "text",
    name: "linkUrl",
    value: image.link?.url || "",
    placeholder: intl.formatMessage({ id: "BlockImage__LINK_PLACEHOLDER" }),
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
  const intl = useIntl2();
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
    className: "BlockImage"
  }, image && !isEditMode ? /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__Infos"
  }, /* @__PURE__ */ React.createElement(Preview, {
    id: image.id,
    fileName: image.fileName,
    setEditMode
  }), /* @__PURE__ */ React.createElement(ImageInfos, {
    image,
    onChange: (values) => {
      onUpdate({ ...data, ...values });
    }
  })) : null, isEditMode ? /* @__PURE__ */ React.createElement(React.Fragment, null, image?.id ? /* @__PURE__ */ React.createElement("span", {
    style: {
      marginBottom: "15px",
      display: "block",
      fontWeight: 800,
      fontSize: "18px"
    }
  }, intl.formatMessage({ id: "REPLACE_IMAGE" }), ' "', image.title, '"') : null, /* @__PURE__ */ React.createElement("div", {
    className: "BlockImage__Upload__Wrapper"
  }, /* @__PURE__ */ React.createElement(FromLocal, {
    onSelect
  }), /* @__PURE__ */ React.createElement(FromLibrary, {
    onSelect
  })), image?.id ? /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setEditMode(false);
    },
    style: { marginTop: "15px" },
    className: "BlockImage__Button"
  }, intl.formatMessage({ id: "CANCEL" })) : null) : null);
};
var WrappedComponent2 = (props) => {
  return /* @__PURE__ */ React.createElement(IntlProvider2, {
    messages: messages[locale],
    locale
  }, /* @__PURE__ */ React.createElement(QueryClientProvider2, {
    client: queryClient2
  }, /* @__PURE__ */ React.createElement(Toaster, {
    toastOptions: {
      success: {
        style: {
          background: "#EAFBF5",
          border: "1px solid #005A3A"
        }
      },
      error: {
        style: {
          background: "#FFEDED",
          border: "1px solid #D21919"
        }
      }
    }
  }), /* @__PURE__ */ React.createElement(BlockImageComponent, {
    ...props
  })));
};
var initialData = {
  url: null,
  id: null,
  title: "",
  fileName: "",
  tags: []
};
var moduleType = {
  id: "blockImage"
};
var blockImage = {
  type: moduleType,
  component: WrappedComponent2,
  initialData,
  title: {
    default: "Image",
    fr: "Image",
    en: "Image",
    es: "Imagen",
    it: "Immagine"
  },
  description: {
    default: "Display an image",
    fr: "Affiche une image",
    en: "Display an image",
    es: "Mostrar una imagen",
    it: "Mostra un immagine"
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
var src_default = WrappedComponent;
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map