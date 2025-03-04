import Swal from "sweetalert2";
const copytitle=(title:string)=>{
    navigator.clipboard.writeText(title);
    Swal.fire("تم نسخ النص للحافظة", "success");
  }
  export default copytitle;