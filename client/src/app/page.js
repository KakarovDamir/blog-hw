export default function Home() {
  return (
    <div className="text-center px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to our Blog</h1>
      <p className="text-lg text-gray-700 mb-4">
        Discover a world of insightful articles, written by our team of experts. 
        From technology to culture, science to business – we cover it all. 
        Join us on a journey of exploration and knowledge sharing.
      </p>
      <img
        className="mx-auto max-w-full h-auto rounded-md shadow-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1idKrWXUfj-4Iwbd6hSCBfChorrWnkMN2Q&s"
        alt="Blog"
      />
    </div>
  );
}
