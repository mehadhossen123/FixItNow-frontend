import PostCategoryForm from "@/app/(admin)/_components/PostCategoryForm";


export default function CreateCategoryPage() {
  return (
    <div className="max-w-xl mx-auto bg-base-200 p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Post New Category</h1>

      {/* 🟢 আপনার বানানো Form Component টি এখানে বসবে */}
      <PostCategoryForm></PostCategoryForm>
    </div>
  );
}
