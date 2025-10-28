import { useParams } from "react-router-dom";
import SongEditForm from "../Components/SongEditForm";

export default function Edit() {
  let { id, album_id } = useParams();
  console.log(id, album_id);
  return (
    <div className="Edit">
      <SongEditForm />
    </div>
  );
}
