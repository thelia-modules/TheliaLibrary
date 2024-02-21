import { BlockPluginDefinition } from '@thelia/blocks-editor';

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
    fileName: string;
    title: string;
    tags: ImageTag[];
    width: string;
    height: string;
    link?: {
        url: string;
        target?: string;
    };
};

declare const UploadImage: ({ onSelect, compact, uploadModes, }: {
    onSelect: (image: LibraryImage) => void;
    compact?: boolean | undefined;
    uploadModes?: ("local" | "library")[] | undefined;
}) => JSX.Element;
declare const initialData: LibraryImage;
declare const blockImage: BlockPluginDefinition<LibraryImage>;

declare function WrappedComponent(props: {
    isOpen: boolean;
    setIsOpen: Function;
    limit?: number;
    onSelect: (image: LibraryImage) => void;
}): JSX.Element;

export { blockImage as BlockImage, initialData as BlockImageInitialData, LibraryImage, UploadImage, WrappedComponent as default };
