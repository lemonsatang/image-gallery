import { useEffect, useState } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]); // 이미지 배열 (서버에서 받아옴)
  const [isLoading, setIsLoding] = useState(true); // 로딩 상태
  const [term, setTerm] = useState("sky"); // 검색어

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_PIXABAY_KEY
      }&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits))
      .catch((err) => console.log(err));
  }, [term]); // term이 변경될 때마다 실행
  return (
    <div className="container mx-auto my-7">
      <ImageSearch setTerm={setTerm} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
