export const TagBox = ({ tags }: { tags: string[] }) => (
  <div className="mt-12 border-t pt-6 text-sm text-muted-foreground">
    <h4 className="font-medium mb-2">Tags</h4>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={`${tag}-${i}`}
          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
  </div>
)

export default TagBox