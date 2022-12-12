import Avatar from 'components/AuthorAvatar';
import MainImage from 'components/MainImage';
import Date from 'components/PostDate';
import PostTitle from 'components/PostTitle';
import type { Post } from 'lib/sanity.queries';

export default function PostHeader(
  props: Pick<Post, 'title' | 'mainImage' | 'date' | 'author' | 'slug'>,
) {
  const { title, mainImage, date, author, slug } = props;
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <MainImage title={title} image={mainImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
