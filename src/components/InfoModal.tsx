interface ModalProps {
    open: boolean;
    setOpen: (o: boolean) => void;
    children: React.ReactNode;
  }
  
  export default function InfoModal({ open, setOpen, children }: ModalProps) {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-lg shadow-xl relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-black"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    );
  }
  