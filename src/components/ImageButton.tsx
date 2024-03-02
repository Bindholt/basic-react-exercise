

export default function ImageButton({ image, onClick }: { image: string; onClick: () => void }) {
    return (
        <img src={image} alt="Button" onClick={onClick} className="imageButton" style={{ width: "50px", height: "50px", margin: "0.5vw" }} />
    );
}