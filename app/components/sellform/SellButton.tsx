import { useFormStatus } from "react-dom";
import "./sellForm.scss";

export default function SellButton() {
  const { pending } = useFormStatus();
  return (
    // user feeback on pending status
    <button className="sellFormbutton" type="submit">
      {pending ? "Uploading Item" : "Sell Item"}
    </button>
  );
}
