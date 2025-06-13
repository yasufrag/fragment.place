import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type FragmentMeta = {
  title: string;
  date: string;
  tags?: string[];
  slug: string;
};

const fragmentsDir = path.join(process.cwd(), 'src/data/fragments');

export function getAllFragments(): FragmentMeta[] {
  const fileNames = fs.readdirSync(fragmentsDir);

  return fileNames
    .filter((file) => file.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(fragmentsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title || 'Untitled',
        date: data.date || '',
        tags: data.tags || [],
        slug: fileName.replace(/\.mdx$/, ''),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // 新しい順に並べる
}