const Input = ({ className, label, error, inputProps, password,required, ...rest }) => {

  return (
    <div {...rest} className={`group ${className}`}>
      <label className={`flex  ${error ? "text-mainRed" : "text-mainGray2"}`}>
        {label} <span className={`${required ? "block text-mainRed pl-2":"hidden"}`}>*</span>
      </label>

      <div className="relative pt-2">
        <div className="flex justify-between">
          <input
            type={"text"}
            {...inputProps}
            className={`w-full px-4 py-3 mt-1 border-2 outline-none border-gray-300 rounded-md focus:border-primary focus:ring-0 focus:ring-indigo-200 ${
              error
                ? "text-mainRed caret-mainRed border-mainRed"
                : "text-gray-300 caret-gray-300"
            } `}
          />
        
        </div>

      </div>

      {error ? (
        <p className="capitalize text-mainRed text-sm font-medium">{error}</p>
      ) : (
        <p>&nbsp;</p>
      )}
    </div>
  );
};

export default Input;
