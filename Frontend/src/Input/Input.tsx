export function Input({ ref, placeholder }: { ref?: any; placeholder: string }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 rounded border m-2"
        ref ={ref}
      ></input>
    </>
  );
}
