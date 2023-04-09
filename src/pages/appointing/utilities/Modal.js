function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen">
      <div
        className="absolute inset-0 bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg z-50">
        <div className="absolute top-0 right-0 p-2">
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.343 6.343a2 2 0 112.828 2.828L8.828 9.172l2.829 2.829a2 2 0 11-2.828 2.828L6.343 12.83l-2.829 2.829a2 2 0 11-2.828-2.828L3.515 9.172l-2.829-2.829a2 2 0 112.828-2.828L6.343 6.17l2.829-2.829z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
