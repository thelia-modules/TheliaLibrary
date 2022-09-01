declare type ImageTag = {
    imageTag: {
        id: number;
        imageId: number;
        tagId: number;
    };
    tag: {
        id: number;
        title: string;
        colorCode: string;
    };
};
declare type LibraryImage = {
    id: number | null;
    url: string | null;
    fileName: string;
    title: string;
    tags: ImageTag[];
    link?: {
        url: string;
        target?: string;
    };
};

declare function WrappedComponent(props: {
    isOpen: boolean;
    setIsOpen: Function;
    limit?: number;
    onSelect: (image: LibraryImage) => void;
}): JSX.Element;

export { LibraryImage, WrappedComponent as default };
