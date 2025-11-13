const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
    </div>
  );
};

export default LoadingSpinner;
