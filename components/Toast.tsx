type ToastProps = {
  message: string;
};

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg bg-didim-ink px-4 py-3 text-center text-sm font-bold text-white shadow-soft"
    >
      {message}
    </div>
  );
}
