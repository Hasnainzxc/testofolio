import Link from 'next/link';

const LoadMoreButton = () => {
  return (
    <div className="flex justify-center">
      <Link href="https://hasnainzxc.medium.com/">
      <a className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg duration-200 ease-in-out transform hover:scale-105">
          Load More
        </a>
      </Link>
    </div>
  );
}

export default LoadMoreButton;
