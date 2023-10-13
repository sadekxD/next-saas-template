export default function SubscribeForm() {
  return (
    <form className="flex gap-2">
      <input
        type="text"
        placeholder="Enter your email"
        className="h-12 border-[#2f2b431a] shadow rounded-xl border px-4 flex items-center focus:ring-2"
      />
      <button
        type="submit"
        className="px-4 py-3 rounded-xl bg-primary text-white"
      >
        Subscribe
      </button>
    </form>
  );
}
