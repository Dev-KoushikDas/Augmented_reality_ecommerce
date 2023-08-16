import { useRef, useState } from 'react'
import './Trial.css'
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import img from '../../assets/1486144528home-appliances-png-12.png'

const Trial = ({settrialModal}) => {
const [uuid , setUuid] = useState("");
const [downloadUrl, setDownloadUrl] = useState("");
const[open,setOpen]=useState(true);
const inputRef = useRef(null);

const toast = useToast();

// FUNCTION 
function setstate() {
setOpen(false);
}


const uploadFileApiCall = async(file) => {
    try{
        const formData = new FormData();
        formData.append("myfile",file);
        const res = await axios.post(`https://file-share-rest-api.vercel.app/api/files`,
        formData
        )
        console.log(res);
        return res;
    }
    catch(error){
        return error;
    }
}

const uplaoadFileHandler = async(fileUploaded) => {
    if(fileUploaded){
      console.log(fileUploaded);
        const res = await uploadFileApiCall(fileUploaded);
        console.log(res);
        setDownloadUrl(res.data.file);
        setUuid(res.data.uuid);
        if(res && res.status === 200){
          toast({
            title: 'File Uploaded Successfully',
            status: 'success',
            position: 'top',
            duration: 6000,
            isClosable: true,
          })
        }
        else{
          toast({
            title: 'Something went wrong',
            status: 'error',
            position: 'top',
            duration: 6000,
            isClosable: true,
          })
        }
    }
  }

const handleUploadFileByClick = async(e) => {
const fileUpload = e.target.files[0];
const file = await uplaoadFileHandler(fileUpload)
}


return (
<>

{open===true?(
<div className="" id="card2">
<input type='file' ref={inputRef} onChange={(e)=>handleUploadFileByClick(e)}></input>
<button onClick={setstate}>GET RESULT</button>
<button onClick={()=>settrialModal(false)}>CLOSE</button>
</div>
):(
<div id="card2">
<div className="image">
<img src={img}></img>
</div>
<button onClick={()=>setOpen(true)}>CLOSE</button>

</div>
)
}
</>
)

}

export default Trial