export const NumberInput = ({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) => {
  return (
    <div className="w-full">
      <label
        about="custom-input-number"
        className="w-full text-sm font-semibold text-white"
      >
        {label}
      </label>
      <div className="mt-1 flex h-10 w-full flex-row justify-between rounded-lg">
        <button
          data-action="decrement"
          disabled={min !== undefined && value <= min}
          onClick={() => {
            onChange(value - 1);
          }}
          className="h-full w-10 cursor-pointer rounded-l bg-spotify-green text-white outline-none transition-colors hover:bg-spotify-header"
        >
          <span className="m-auto text-2xl font-semibold">−</span>
        </button>
        <div className="text-md flex flex-1 items-center justify-center bg-gray-50 text-center font-semibold  text-gray-700 outline-none hover:text-black  focus:text-black focus:outline-none">
          <div>{value}</div>
        </div>
        <button
          data-action="increment"
          onClick={() => {
            onChange(value + 1);
          }}
          disabled={max !== undefined && value >= max}
          className="h-full w-10 cursor-pointer rounded-r bg-spotify-green text-white transition-colors hover:bg-spotify-header "
        >
          <span className="m-auto text-center text-2xl font-semibold">+</span>
        </button>
      </div>
    </div>
  );
};
