import Link from "next/link";

const BlogTitle = ({ data, source }) => {
  const link = `/${source}/${data.slug}`;

  return (
    <Link
      className="flex flex-col items-start w-full gap-1 md:flex-row md:items-center md:justify-between group"
      href={link}
    >
      <div className="flex flex-row items-center gap-1 w-full md:max-w-[80%] text-dark-mirage dark:text-white dark:hover:text-dark-blue group-hover:text-light-blue text-[19px] leading-[33px]">
        {data.title}
      </div>

      <p className="md:px-0 italic text-neutral-nickel lg:text-[15px] lg:leading-[22px] md:text-[13px] md:leading-[19px] text-[12px] leading-[17px]">
        {data.createdAt}
      </p>
    </Link>
  );
};

export default BlogTitle;
