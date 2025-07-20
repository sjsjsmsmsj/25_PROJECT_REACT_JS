// import { use, useState, useEffect } from "react"
// import { BsArrowLeftCircleFill } from 'react-icons/bs'


// export default function ImageSlider({ url, limit = 5, page = 1 }) {
//     const [images, setImages] = useState([]);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [errorMsg, setErrorMgs] = useState(null);
//     const [loading, setLoanding] = useState(false);


//     async function fetchImages(getUrl) {
//         try {
//             setLoanding(true);
//             const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//             const data = await response.json();
//             if (data) {
//                 setImages(data);
//                 setLoanding(false);
//             }

//         } catch (error) {
//             setErrorMgs(error.message)
//             setLoanding(false);
//         }
//     }

//     useEffect(() => {
//         if (url !== "") {
//             fetchImages(url)
//         }
//     }, [url]
//     )
//     if (loading) {
//         return (
//             <div>
//                 Loading data ! Please wait
//             </div>
//         )
//     }
//     if (errorMsg != null) {
//         return (
//             <div>
//                 {errorMsg}
//             </div>
//         )
//     }

//     return (
//         <div className="container">
//             <BsArrowLeftCircleFill className="arrow arrow-left" />
//             {
//                 img && images.length ?
//                     images.map(imageItem => (
//                         <img
//                             key={imageItem.id}
//                             src={imageItem.download_url}
//                             alt={imageItem.author}
//                             className="curent-image"
//                         />
//                     )) : null
//             }
//         </div>
//     )
// }