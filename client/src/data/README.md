# Customizing Gallery Images

To customize the images in the memories gallery:

1. Open `gallery-images.ts` file
2. Replace the image URLs with your own image URLs
3. Adjust the captions to match your memories
4. Add or remove images as needed

## Image Requirements

For best results:
- Use images with similar aspect ratios (4:3 works well)
- Provide both thumbnail (400x300) and full size (800x600) versions
- Use high-quality images that are meaningful to your memories

## Example

To use your own images, replace the URLs like this:

```typescript
{
  id: 1,
  src: "path/to/your/thumbnail-image1.jpg",
  fullSrc: "path/to/your/full-image1.jpg",
  caption: "Your personal memory caption"
}
```

## Using Local Images

If you want to use local images, place them in the `public` folder and reference them like:

```typescript
{
  id: 1,
  src: "/images/your-image-thumbnail.jpg",
  fullSrc: "/images/your-image-full.jpg",
  caption: "Your personal memory caption"
}
