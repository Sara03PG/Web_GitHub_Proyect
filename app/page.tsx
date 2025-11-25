import Image from "next/image";

async function getComments() {
  //Coso para conectar a base de datos

  // Datos demostrativos 
  return [
    { id: 1, name: "Admin_SHmoon", comment: "Hope u enjoy! :D", createdAt: new Date() },
    { id: 2, name: "Canelita_02", comment: "Wow, such good game", createdAt: new Date() },
  ];
}

async function addComment(formData: FormData) {
  'use server';
  // coso de base de datos aqui 
}

export default async function Home() {
  const comments = await getComments();

  return (
    <div className="text-center pt-12 max-w-4xl mx-auto">
      <h1 className="text-3xl capitalize font-bold mb-6">
        Latest proyect - Fair Game!
      </h1>
      
      <iframe
        className="mx-auto" 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/9ByRgq3dlNs?si=C_LOsTmxumspXTK_" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>

      <h3 className="text-[18px] mt-6 mb-8">
        How odd, the game should be here...well enjoy the story while it is fixed!
      </h3>

      <div className="mt-12 border-t border-black/15 border-b pt-8">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        
        <form action={addComment} className="mb-8">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="comment"
              placeholder="Add a comment..."
              rows={4}
              className="px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-black/15 border-b pb-4 text-left">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg">{comment.name}</h4>
                <span className="text-sm text-gray-500">
                  {comment.createdAt.toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{comment.comment}</p>
            </div>
          ))}
        </div>

        {comments.length === 0 && (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
