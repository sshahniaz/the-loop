import { useFormStatus } from "react-dom";

export default function SellButton() {
  const { pending } = useFormStatus();
  return (
    // user feeback on pending status
    <button type="submit">{pending ? "Uploading Item" : "Sell Item"}</button>
  );
}
