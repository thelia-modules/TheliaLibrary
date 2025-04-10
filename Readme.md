# Thelia Library

Add a media library on Thelia.

### Composer

Add it in your main thelia composer.json file

```
composer require thelia/thelia-library-module:~1.0.0
```

## Usage

For now this module doesn't have an interface, only an api documented on {your_website_url}/open_api/doc


## **Using Plugins**

You can use the `getImages` and `getImagesData`  plugins. Both of them are available with Smarty and Twig. Use this plugins instead the traditional loop (in case you have to deal with smarty).

- `getImagesData` return an array of processed images, depends of your liip_imagine configuration.
- `getImages` use the same service that `getImagesData`  and render image(s) in a html tag

Here’s the params :

| Param | Required | Description | Exemple |
| --- | --- | --- | --- |
| img_id | false | if you have the id of the current image, you can use this param with `source_type` | / |
| source_type | true | source  | content, product etc. |
| source_id | false | The identifier of the object provided in the "source" parameter | / |
| *filters* | true | the liip_imagine filter’ identifier you want to use on the image  | could be a simple value like `product_filter`  or a array, if you want to render several images in a picture html tag `*filters=*['1440px' =>'hero_large_desktop', 'default' => 'hero_default'` |
| img_attrs | false | / | `img_attrs=['width' => '768px','height' => '660px','class' => "test-class-img"]` |
| alt | false | string to render as alt an title attribute. If you have a alt entry in your `img_attrs` this one will be overrided. | / |
| wrapper | false | An html wrapper tag for the rendered image. If filters|count > 1, image will be wrapped by a picture html tag. | “picture” or “figure” or “div” ex. |
| wrapper_attrs | false | html attributes for wrapper | `wrapper_attrs=['class' => "test-class-picture"]` |
| img_style | false | css propreties rended in the image style attribute | `img_style=['display' => 'block','margin' => '10px']` |
| placeholder | false | fallback image to return. if no set, plugin will return `null`  | `{encore_manifest_file *file=*"dist/images/placeholder.webp"}` |
| position | false | position of the image | 1 |
| limit | false | limited number of result | 1 |
| offset | false | / | 1 |
| container | An html wrapper tag for wrappe the list of rendered images | / | ul, div, section |
| container_attrs | same as wrapper_attrs | / | `container_attrs=['class' => "test-class-container"]` |


Here’s the exemple :

```php
{getImage
  source_type="content"
  source_id=2
  filters=[
    '1440px' => 'hero_large_desktop',
    '1280px' => 'hero_small_desktop',
    '1024px' => 'hero_tablette',
    '768px' => 'hero_mobile',
    'default' => 'hero_default'
  ]
  img_attrs=[
    'width' => '768px',
    'height' => '660px',
    'class' => "test-class-img"
  ]
  wrapper="picture"
  wrapper_attrs=[
    'class' => "test-class-picture"
  ]
  img_style=[
    'display' => 'block'
  ]
  placeholder={encore_manifest_file file="dist/images/placeholder.webp"}
}
```